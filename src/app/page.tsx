"use client";
import { ArrowUp, X } from "lucide-react";
import React, { useState } from "react";
import Chat from "~/components/Chat";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState("");

  async function handleSendMessage() {
    if (!message.trim() || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setLoading(true);

    try {
      const response = await fetch("/api/openai-stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Server error: " + response.statusText);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

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
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = parsedData;
                return newMessages;
              });
            } catch (error) {
              console.error("Error parsing JSON:", error);
            }
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setMessage("");
    }
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  }

  return (
    <div className="flex h-[calc(100vh-200px)] flex-col">
      <main className="relative mx-auto flex h-full w-full max-w-4xl flex-col">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="min-h-full p-8 pb-24">
            <Chat messages={messages} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 ">
          <div className="mx-auto flex max-w-4xl flex-row space-x-4">
            <div className="relative flex-grow">
              <Input
                disabled={loading}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                value={message}
                placeholder="Ask me anything about my background..."
                className="h-14 rounded-3xl pr-16"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full"
                disabled={loading || message.trim() === ""}
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div>
            {messages.length > 0 && !loading && (
              <Button
                onClick={() => setMessages([])}
                size="icon"
                className="h-14 w-14 rounded-full"
                variant="outline"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
