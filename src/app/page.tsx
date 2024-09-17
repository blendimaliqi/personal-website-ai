"use client";
import { ArrowUp, ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useState, useCallback } from "react";
import Chat from "~/components/Chat";
import RightSidePage from "~/components/RIghtSideCardPage";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

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
        'You are a helpful assistant representing the software developer Blendi Maliqi. Follow the "blendiai.pdf" on how to respond.',
    },
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const [isRightSideOpen, setIsRightSideOpen] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);

  // Function to handle streaming chat
  async function fetchChatStream() {
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setLoading(true);
    try {
      const response = await fetch("/api/openai-stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, threadId }),
      });

      if (!response.ok || !response.body) {
        console.error("Server error:", response.statusText);
        setLoading(false);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const jsonData = line.slice(6);
            try {
              const parsedData = JSON.parse(jsonData);
              setMessages((prev) => {
                const updatedMessages = [...prev];
                updatedMessages[updatedMessages.length - 1] = parsedData;
                return updatedMessages;
              });
            } catch (error) {
              console.error("Error parsing JSON:", error);
            }
          }
        }
      }
      setLoading(false);
      setMessage("");
    } catch (error) {
      console.error("Fetch Error:", error);
      setLoading(false);
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

  // Function to check if there are any assistant messages
  const hasAssistantResponded = messages.some(
    (msg) => msg.role === "assistant",
  );

  // Add this new function to reset the conversation
  const resetConversation = useCallback(async () => {
    setMessages([
      {
        role: "system",
        content:
          'You are a helpful assistant representing the software developer Blendi Maliqi. Follow the "blendiai.pdf" on how to respond.',
      },
    ]);
    setMessage("");
    setThreadId(null); // Reset threadId

    try {
      await fetch("/api/openai-stream/reset", { method: "POST" });
    } catch (error) {
      console.error("Error resetting conversation:", error);
    }
  }, []);

  return (
    <div className="flex h-[calc(100vh-150px)] flex-col">
      <div className="relative flex flex-grow justify-center overflow-hidden">
        <main className="flex w-full max-w-4xl flex-col">
          <div className="flex-grow overflow-y-auto p-8">
            <Chat messages={messages} />
          </div>
          <div className="flex flex-row space-x-4 p-4">
            {/* <div className="relative flex-grow">
              <Input
                disabled={loading}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                type="text"
                value={message}
                placeholder='"Question here"'
                className="h-14 rounded-3xl pr-16"
                style={{
                  outline: "none",
                  boxShadow: "none",
                  borderColor: "inherit",
                }}
              />
              <Button
                type="submit"
                onClick={handleClick}
                size="icon"
                className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full"
                disabled={loading || message.trim() === ""}
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div> */}
            {hasAssistantResponded && !loading && (
              <Button
                onClick={resetConversation}
                size="icon"
                className="h-14 w-14 rounded-full"
                variant="outline"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
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
