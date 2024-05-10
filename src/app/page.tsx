"use client";
import React, { useState } from "react";
import { ButtonLoading } from "~/components/ButtonLoading";
import Chat from "~/components/Chat";
import { ModeToggle } from "~/components/DropMenu";
import { NavigationMenuDemo } from "~/components/NavMenu";
import RightSidePage from "~/components/RightSidePage";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

// Define the Role and Message types
type Role = "system" | "user" | "assistant";

interface Message {
  role: Role;
  content: string;
}

export default function HomePage() {
  // Define initial messages with the appropriate roles
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content:
        'You are a helpful assistant representing the software developer Blendi Maliqi. Follow the "Blendi_cover_letter.pdf" on how to respond.',
    },
  ]);

  const [loading, setLoading] = useState<boolean>(false);

  const [message, setMessage] = useState("");

  // Function to handle streaming chat
  async function fetchChatStream() {
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setLoading(true);
    try {
      const response = await fetch("/api/openai-stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok || !response.body) {
        console.error("Server error:", response.statusText);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");

      // Add an empty assistant message to accumulate the response
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      let accumulatedBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        accumulatedBuffer += chunk;

        // Extract all JSON objects using regex
        const regex = /{"role":"assistant","content":"(.*?)"}/g;
        let match;
        let latestContent = "";

        while ((match = regex.exec(accumulatedBuffer)) !== null) {
          // Remove any citation markers using regex
          latestContent = match[1]?.replace(/【\d+:\d+†.*?】/g, "") ?? "";
        }

        // Update the last assistant message with the cumulative content
        setMessages((prev) => {
          const updatedMessages = [...prev];
          const lastAssistantMessage =
            updatedMessages[updatedMessages.length - 1];
          if (lastAssistantMessage) {
            updatedMessages[updatedMessages.length - 1] = {
              ...lastAssistantMessage,
              content: latestContent,
            };
          }
          return updatedMessages;
        });
      }
      setLoading(false);

      // Clear the input field
      setMessage("");
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  }

  // Event handlers
  function handleClick() {
    //TODO:Remeber to add check not to fetch if user has not written anything
    fetchChatStream();
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      fetchChatStream();
    }
  }

  return (
    <div className="flex h-screen flex-col">
      <div className=" flex items-center justify-between pl-8 pr-8 pt-4">
        <h1 className="text-2xl font-bold">BLENDI MALIQI</h1>
        <NavigationMenuDemo />
        <ModeToggle />
      </div>

      <div className="flex w-screen flex-row overflow-hidden">
        <main
          style={{ whiteSpace: "pre-line" }}
          className="min-w-1/3 ml-8 mt-24 flex w-1/3 flex-col"
        >
          <Chat messages={messages} />
          <div className="m-auto mt-10 flex w-full items-center space-x-4">
            <Input
              disabled={loading}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              type="text"
              value={message}
              placeholder='E.g. "Tell me about Blendi"'
            />
            <Button disabled={loading} onClick={() => setMessages([])}>
              Clear
            </Button>
            {!loading ? (
              <Button type="submit" className="w-1/4" onClick={handleClick}>
                Send
              </Button>
            ) : (
              <ButtonLoading />
            )}
          </div>
        </main>
        <div className=" w-3/4 overflow-y-auto pl-8 pr-8">
          <RightSidePage />
        </div>
      </div>
    </div>
  );
}
