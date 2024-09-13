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

const decodeSpecialChars = (text: string): string => {
  return text
    .replace(/\\"/g, '"')
    .replace(/\\n/g, "\n")
    .replace(/\\r\\n/g, "\n");
};

const Chat: React.FC<ChatProps> = ({ messages }) => {
  const filteredMessages = messages.filter((msg) => msg.role !== "system");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const markdownComponents: Record<string, React.FC<any>> = {
    p: ({ children }) => <p className="mb-4">{children}</p>,
    ul: ({ children }) => <ul className="mb-4 list-disc pl-6">{children}</ul>,
    ol: ({ children }) => (
      <ol className="mb-4 list-decimal pl-6">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-1">{children}</li>,
    h1: ({ children }) => (
      <h1 className="mb-4 text-2xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 text-xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 text-lg font-bold">{children}</h3>
    ),
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      return inline ? (
        <code className="rounded bg-gray-100 px-1 dark:bg-gray-800" {...props}>
          {children}
        </code>
      ) : (
        <pre className="mb-4 rounded bg-gray-100 p-2 dark:bg-gray-800">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      );
    },
  };

  return (
    <div
      ref={chatContainerRef}
      className="scrollbar-hide flex h-full flex-col space-y-4 overflow-y-auto"
    >
      {filteredMessages.length > 0 ? (
        filteredMessages.map((msg, index) => (
          <div key={index} className={`space-y-1 rounded-lg p-4`}>
            <strong className="text-gray-600 dark:text-gray-400">
              {msg.role === "user" ? "You" : "Assistant"}:
            </strong>
            <ReactMarkdown
              className="markdown-content prose max-w-none dark:prose-invert"
              components={markdownComponents}
            >
              {decodeSpecialChars(msg.content)}
            </ReactMarkdown>
          </div>
        ))
      ) : (
        <div className="flex h-full flex-col justify-between">
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
              <p className="text-center text-muted-foreground">Web developer</p>
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
          <p className="text-center text-muted-foreground ">
            {`I have trained an AI model with information about my skills, past projects, work experience, education or hobbies.`}
            {` Feel free to ask :)`}
          </p>
        </div>
      )}
    </div>
  );
};

export default Chat;
