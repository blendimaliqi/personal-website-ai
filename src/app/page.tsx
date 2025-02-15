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
    <div className="flex flex-col gap-3 pb-6">
      <main className="relative mx-auto w-full max-w-4xl">
        <h1 className="sr-only">Chat with Blendi's AI Assistant</h1>
        <section
          className="flex flex-col space-y-3"
          aria-label="Chat Interface"
        >
          <article className="chat-messages" role="log" aria-live="polite">
            <Chat messages={messages} />
          </article>

          <div className="flex w-full flex-row space-x-4">
            <div className="relative flex-grow">
              <Input
                disabled={loading}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                value={message}
                placeholder="Ask me anything about my background..."
                className="h-14 w-full rounded-3xl pr-16 sm:w-auto"
                aria-label="Chat message input"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full sm:h-12 sm:w-12"
                disabled={loading || message.trim() === ""}
                aria-label="Send message"
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
                aria-label="Clear chat history"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
