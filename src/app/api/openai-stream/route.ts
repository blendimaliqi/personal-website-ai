import { OpenAI } from "openai";
import { NextRequest, NextResponse } from "next/server";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

const systemMessage: Message = {
  role: "system",
  content:
    'You are a helpful assistant representing the software developer Blendi Maliqi. Follow the "blendiai.pdf" on how to respond.',
};

let conversationHistory: Message[] = [systemMessage];

const openai = new OpenAI({
  apiKey: process.env.OPENAI_APIKEY,
});

export async function POST(req: NextRequest) {
  try {
    console.log("Received request");
    const { message, threadId } = await req.json();
    console.log("Parsed request body:", { message, threadId });

    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json(
        { error: "Invalid input: message must be a non-empty string." },
        { status: 400 },
      );
    }

    conversationHistory.push({ role: "user", content: message });
    const modelId = process.env.ASSISTANT_MODEL_ID;
    if (!modelId) {
      throw new Error("ASSISTANT_MODEL_ID is not set in environment variables");
    }
    const assistant = await openai.beta.assistants.retrieve(modelId);

    // Use the provided threadId or create a new one
    const thread = threadId
      ? await openai.beta.threads.retrieve(threadId)
      : await openai.beta.threads.create();

    // Add the new message to the thread
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    // Add all messages from conversationHistory to the thread
    for (const historyMessage of conversationHistory) {
      if (historyMessage.role !== "system") {
        await openai.beta.threads.messages.create(thread.id, {
          role: historyMessage.role as "user" | "assistant",
          content: historyMessage.content,
        });
      }
    }

    const headers = new Headers({
      "Content-Type": "application/json",
      "Transfer-Encoding": "chunked",
      "Cache-Control": "no-cache", // Add this line
    });

    const readableStream = new ReadableStream({
      start(controller) {
        console.log("Starting stream");
        const stream = openai.beta.threads.runs.stream(thread.id, {
          assistant_id: assistant.id,
          instructions: systemMessage.content,
        });

        let accumulatedResponse = "";

        stream
          .on(
            "textDelta",
            (
              delta: import("openai/resources/beta/threads/messages").TextDelta,
            ) => {
              const newContent = delta.value ?? "";
              console.log("Received text delta:", newContent);

              accumulatedResponse += newContent;

              controller.enqueue(
                JSON.stringify({
                  role: "assistant",
                  content: accumulatedResponse,
                }) + "\n",
              );
            },
          )
          .on("end", () => {
            console.log("Stream ended");
            conversationHistory.push({
              role: "assistant",
              content: accumulatedResponse,
            });
            controller.close();
          })
          .on("error", (err) => {
            console.error("Streaming error:", err);
            controller.error(err);
          });
      },
    });

    return new Response(readableStream, { headers });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
