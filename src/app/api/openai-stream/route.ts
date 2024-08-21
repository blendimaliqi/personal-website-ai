import { OpenAI } from "openai";
import { NextRequest, NextResponse } from "next/server";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

const conversationHistory: Message[] = [
  {
    role: "system",
    content:
      'You are a helpful assistant representing the software developer Blendi Maliqi. Follow the "Blendi_cover_letter.pdf" on how to respond.',
  },
];

const openai = new OpenAI({
  apiKey: process.env.OPENAI_APIKEY,
});

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message || typeof message !== "string" || message.trim() === "") {
    return NextResponse.json(
      { error: "Invalid input: message must be a non-empty string." },
      { status: 400 },
    );
  }

  conversationHistory.push({ role: "user", content: message });
  const modelId = process.env.ASSISTANT_MODEL_ID;
  const assistant = await openai.beta.assistants.retrieve(modelId ?? "");
  const thread = await openai.beta.threads.create();

  await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: message,
  });

  const headers = new Headers({
    "Content-Type": "application/json",
    "Transfer-Encoding": "chunked",
  });

  const readableStream = new ReadableStream({
    start(controller) {
      const stream = openai.beta.threads.runs.stream(thread.id, {
        assistant_id: assistant.id,
      });

      let accumulatedResponse = "";

      stream
        .on(
          "textDelta",
          (
            delta: import("openai/resources/beta/threads/messages").TextDelta,
          ) => {
            const newContent = delta.value ?? "";

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
          controller.close();
        })
        .on("error", (err) => {
          console.error("Streaming error:", err);
          controller.close();
        });
    },
  });

  return new Response(readableStream, { headers });
}
