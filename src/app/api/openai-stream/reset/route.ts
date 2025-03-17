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

    // store the new thread id somewhere so i can use it later
    // maybe put it in a database or just have the frontend send it back each time
    // for now let's just return it and deal with it later
    return NextResponse.json({ threadId: thread.id });
  } catch (error) {
    console.error("Error in reset handler:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
