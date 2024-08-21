"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content:
        'You are a helpful assistant representing the software developer Blendi Maliqi. Follow the "Blendi_cover_letter.pdf" on how to respond.',
    },
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const [isRightSideOpen, setIsRightSideOpen] = useState(false);

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
  function handleClick() {
    fetchChatStream();
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      fetchChatStream();
    }
  }
  return (
    <div className="flex h-[calc(100vh-90px)] flex-col">
      <div className="relative flex flex-grow justify-center overflow-hidden">
        <main className="flex w-full max-w-4xl flex-col">
          <div className="flex-grow overflow-y-auto p-8">
            <Chat messages={messages} />
          </div>
          <div className="flex items-center space-x-4 p-4">
            <div className="relative flex-grow">
              <Input
                disabled={loading}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                type="text"
                value={message}
                placeholder='E.g. "Tell me about Blendi"'
                className="pr-24"
              />
              <div className="absolute bottom-0 right-0 top-0 flex items-center">
                <Button
                  disabled={loading}
                  onClick={() => setMessages([])}
                  variant="ghost"
                  size="sm"
                  className="h-full"
                >
                  Clear
                </Button>
                {!loading ? (
                  <Button
                    type="submit"
                    onClick={handleClick}
                    size="sm"
                    className="h-full"
                  >
                    Send
                  </Button>
                ) : (
                  <ButtonLoading />
                )}
              </div>
            </div>
          </div>
        </main>

        <div
          className={`absolute right-0 top-0 h-full w-3/4 transform overflow-y-auto bg-background transition-transform duration-500 ease-in-out ${
            isRightSideOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <RightSidePage />
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-l-md bg-primary p-2 text-primary-foreground"
          onClick={() => setIsRightSideOpen(!isRightSideOpen)}
        >
          {isRightSideOpen ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>
    </div>
  );
}
