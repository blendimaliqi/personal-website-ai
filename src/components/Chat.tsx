import React, { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

interface ChatProps {
  messages: Message[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages array changes (new message added)
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages.length]);

  // Scroll while streaming content
  useEffect(() => {
    if (messages.length > 0 && lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages[messages.length - 1]?.content]);

  return (
    <div ref={chatContainerRef} className="flex flex-col space-y-4">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <div
            key={index}
            ref={index === messages.length - 1 ? lastMessageRef : undefined}
            className={`space-y-1 rounded-lg p-4 ${
              msg.role === "user" ? "bg-muted/50" : ""
            }`}
          >
            <strong className="text-gray-600 dark:text-gray-400">
              {msg.role === "user" ? "You" : "Assistant"}:
            </strong>
            <ReactMarkdown className="prose max-w-none dark:prose-invert">
              {msg.content}
            </ReactMarkdown>
          </div>
        ))
      ) : (
        <div className="flex h-[calc(100vh-300px)] flex-col justify-between">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full">
              <Image
                fill
                src="/blendi.jpg"
                alt="Blendi"
                className="object-cover"
                style={{ objectPosition: "15% center" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
              />
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg pt-3">
              <p className="text-center text-2xl font-medium">Blendi Maliqi</p>
              <p className="text-center text-muted-foreground">
                Software developer
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="mr-2 text-muted-foreground" size={24} />
              <a
                href="mailto:blendi.maliqi93@gmail.com"
                className="text-muted-foreground transition-colors hover:text-blue-600"
              >
                blendi.maliqi93@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
