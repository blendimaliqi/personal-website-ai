import React, { useEffect, useRef, useState } from "react";
import { Mail, ArrowDown } from "lucide-react";
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
  const [showScrollButton, setShowScrollButton] = useState(false);

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

  // Handle scroll events to show/hide scroll button
  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      const isScrolledUp = scrollHeight - scrollTop - clientHeight > 100;
      setShowScrollButton(isScrolledUp);
    }
  };

  // Scroll to bottom function
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative h-[calc(100vh-450px)]">
      <div
        ref={chatContainerRef}
        className="flex h-full flex-col space-y-3 overflow-y-auto pr-4 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-gray-700 dark:hover:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2"
        onScroll={handleScroll}
      >
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              ref={index === messages.length - 1 ? lastMessageRef : undefined}
              className={`space-y-1 rounded-lg p-3 ${
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
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-1 flex-col items-center justify-center">
              <div className="relative mb-3 h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src="/blendi.jpg"
                  alt="Blendi"
                  fill
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "1% center" }}
                  priority
                />
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg pt-2">
                <p className="text-center text-2xl font-medium">
                  Blendi Maliqi
                </p>
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
      {showScrollButton && messages.length > 0 && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-8 right-8 rounded-full bg-primary p-2 text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
          aria-label="Scroll to bottom"
        >
          <ArrowDown size={24} />
        </button>
      )}
    </div>
  );
};

export default Chat;
