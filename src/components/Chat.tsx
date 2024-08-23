import React, { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Mail } from "lucide-react";
import Image from "next/image";

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

  return (
    <div
      ref={chatContainerRef}
      className="scrollbar-hide flex h-full flex-col space-y-4 overflow-y-auto"
    >
      {filteredMessages.length > 0 ? (
        filteredMessages.map((msg, index) => (
          <div key={index} className={`space-y-1 rounded-lg p-4`}>
            <strong className=" text-gray-600 dark:text-gray-400">
              {msg.role === "user" ? "You" : "Assistant"}:
            </strong>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {decodeSpecialChars(msg.content)}
            </p>
          </div>
        ))
      ) : (
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-1 flex-col items-center justify-center">
            <Avatar className="mb-4 h-40 w-40">
              <Image
                width={160}
                height={160}
                priority
                src="/blendi.jpg"
                alt="Blendi"
                className="object-cover object-[15%_50%]"
              />
            </Avatar>
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
          <p className="text-center text-muted-foreground">
            {`I have trained an AI model with information about my skills, past projects, work experience, education or hobbies.`}

            {` Feel free to ask :)`}
          </p>
        </div>
      )}
    </div>
  );
};

export default Chat;
