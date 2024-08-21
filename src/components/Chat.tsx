import React, { useEffect, useRef } from "react";

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
        <div className="flex h-full items-center justify-center">
          <p className="text-center  text-muted-foreground">
            {
              "I am Blendi's personal AI assistant.\nI know everything there is to know about his skills, past projects, work experience, education, hobbies and personal traits.\n\nFeel free to ask :)"
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Chat;
