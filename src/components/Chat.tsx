import React, { useEffect, useRef } from "react";

// Message interface definition
interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

// ChatProps interface definition
interface ChatProps {
  messages: Message[];
}

// Function to decode escaped newline characters and quotes
const decodeSpecialChars = (text: string): string => {
  return text
    .replace(/\\"/g, '"') // Replace escaped quotes with plain quotes
    .replace(/\\n/g, "\n") // Replace escaped newlines with actual newlines
    .replace(/\\r\\n/g, "\n"); // Handle carriage returns if necessary
};

const Chat: React.FC<ChatProps> = ({ messages }) => {
  // Filter out messages with role "system"
  const filteredMessages = messages.filter((msg) => msg.role !== "system");

  // Reference to the chat container
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      className="flex h-96 w-2/3 flex-col space-y-4 overflow-auto border-2 p-4"
    >
      {filteredMessages.length > 0 ? (
        filteredMessages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.role} space-x-1`}>
            <strong>
              {msg.role === "user" ? "You" : msg.role.toUpperCase()}:
            </strong>
            {/* Decode escaped special characters */}
            <p style={{ whiteSpace: "pre-line" }}>
              {decodeSpecialChars(msg.content)}
            </p>
          </div>
        ))
      ) : (
        <p className="flex flex-grow items-center justify-center text-xl text-muted-foreground">
          {
            "I am Blendi's personal AI assistant.\n I know everything there is to know about his skills, past projects, work experience, education and personal traits.\n\n Feel free to ask :)"
          }
        </p>
      )}
    </div>
  );
};

export default Chat;
