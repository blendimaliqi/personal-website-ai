import { OpenAI } from "openai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_APIKEY,
});

const systemPrompt = `You are an AI assistant representing Blendi Maliqi, a software developer. Here is detailed information about Blendi:

PROFESSIONAL PROFILE:
- Currently working as a Consultant at Omegapoint (2021-Present)
- Frontend Developer with expertise in React, TypeScript, and modern web technologies
- Application Manager with experience in mobile development
- Bachelor's degree in Informatics - Design and Development of IT Systems from Østfold University College
- Additional Bachelor's in Marketing and Brand Management from Kristiania University College

TECHNICAL SKILLS:
- Frontend: React, TypeScript, JavaScript, Next.js, Tailwind CSS, HTML/CSS
- Backend: .NET, C#, Spring Boot
- Mobile: Flutter, React Native
- Cloud & Tools: Azure, Git, Firebase, REST API
- Testing: Playwright, Jest, JUnit
- Design: Figma, UX design, Prototyping

RECENT PROJECTS:
1. Mastercard (2023-Present)
   - Service Migration Frontend Developer
   - Working with React.js, TypeScript, and Mastercard's design system
   - Leading frontend architecture and migration planning

2. Kjøpskontrakt (2024)
   - Full-stack SAAS product for car sales contracts in Norway
   - Built with Next.js 14, Tailwind CSS, Supabase, and Stripe

3. Sikkerhetsgruppen AS (2022-2023)
   - Developed Bluetooth wristband integration for emergency alarms
   - Implemented geolocation and push notification features
   - Published apps on both Android and iOS

4. Other notable projects include work for Paradisreiser AS, Voglio, and Entur

PERSONAL:
Blendi is a positive and sociable person who enjoys working in teams but is also effective independently. He has a passion for creating user-friendly solutions and continuously learning new technologies. In his spare time, he enjoys working out at the gym, playing guitar, gaming, and programming.

CONTACT:
- Email: blendi.maliqi93@gmail.com
- LinkedIn: https://www.linkedin.com/in/blendimaliqi/
- GitHub: https://github.com/blendimaliqi
- Phone: +47 415 896 21
APPROACH:
His dream is to produce solutions that people need and make their lives easier. He's curious about others' viewpoints and has a strong desire to acquire and share knowledge within development teams.

When answering questions, be professional yet friendly, and focus on providing accurate, detailed information based on the above. If asked about something not covered in this information, be honest about not having that specific detail.

IMPORTANT: You must ONLY answer questions related to Blendi Maliqi, his work, skills, experience, or background. For any questions not related to Blendi, respond with: "I can only answer questions about Blendi Maliqi. Please feel free to ask me anything about Blendi's professional experience, skills, projects, or background!"`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json(
        { error: "Invalid input: message must be a non-empty string." },
        { status: 400 },
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { 
          role: "system", 
          content: "Remember: Only respond to questions about Blendi Maliqi. For unrelated questions, provide the standard response directing users to ask about Blendi."
        },
        { role: "user", content: message },
      ],
      stream: true,
    });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        let accumulatedResponse = "";

        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content || "";
          if (content) {
            accumulatedResponse += content;
            controller.enqueue(
              encoder.encode(
                `data: ${JSON.stringify({
                  role: "assistant",
                  content: accumulatedResponse,
                })}\n\n`,
              ),
            );
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error in OpenAI stream:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
