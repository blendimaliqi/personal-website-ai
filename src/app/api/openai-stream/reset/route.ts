import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_APIKEY,
});

export async function POST() {
  try {
    const modelId = process.env.ASSISTANT_MODEL_ID;
    if (!modelId) {
      throw new Error("ASSISTANT_MODEL_ID is not set in environment variables");
    }

    // Create a new thread
    const thread = await openai.beta.threads.create();

    // Store the new thread ID in a way that persists between requests
    // This could be in a database, or you might need to modify your frontend to send this ID with each request
    // For now, we'll just return it to the client
    return NextResponse.json({ threadId: thread.id });
  } catch (error) {
    console.error("Error in reset handler:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
