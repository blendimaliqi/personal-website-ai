import React, { useEffect, useRef, useState } from "react";
import { Mail, ArrowDown, Bot, User } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

interface ChatProps {
  messages: Message[];
  embedded?: boolean;
}

// Typing indicator component
const TypingIndicator = () => (
  <div className="flex space-x-1">
    <motion.div
      className="h-2 w-2 rounded-full bg-blue-500"
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
        delay: 0,
      }}
    />
    <motion.div
      className="h-2 w-2 rounded-full bg-blue-500"
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
        delay: 0.2,
      }}
    />
    <motion.div
      className="h-2 w-2 rounded-full bg-blue-500"
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
        delay: 0.4,
      }}
    />
  </div>
);

const Chat: React.FC<ChatProps> = ({ messages, embedded = false }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only consider theme after component has mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkTheme = !mounted ? true : resolvedTheme === "dark";

  // detect when assistant is typing
  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (
        lastMessage &&
        lastMessage.role === "assistant" &&
        lastMessage.content === ""
      ) {
        setIsTyping(true);
      } else {
        setIsTyping(false);
      }
    }
  }, [messages]);

  // scroll to bottom when messages array changes (new message added)
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
      setShowScrollButton(isScrolledUp && messages.length > 0);
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

  // Ensure scroll to bottom when container size changes
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (chatContainerRef.current && messages.length > 0) {
        scrollToBottom();
      }
    });

    if (chatContainerRef.current) {
      resizeObserver.observe(chatContainerRef.current);
    }

    return () => {
      if (chatContainerRef.current) {
        resizeObserver.unobserve(chatContainerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`relative ${embedded ? "h-full" : "h-[calc(100vh-400px)] md:h-[500px]"}`}
    >
      <div
        ref={chatContainerRef}
        className={`flex h-full flex-col ${embedded ? "space-y-3" : "space-y-4"} overflow-y-auto pr-4 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-gray-700 dark:hover:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2`}
        onScroll={handleScroll}
      >
        {messages.length > 0 ? (
          <>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                ref={index === messages.length - 1 ? lastMessageRef : undefined}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`relative max-w-[85%] space-y-1 rounded-2xl p-4 ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                      : embedded
                        ? isDarkTheme
                          ? "bg-slate-700"
                          : "border border-slate-300 bg-white"
                        : isDarkTheme
                          ? "bg-slate-800"
                          : "border border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-2 pb-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      {msg.role === "user" ? (
                        <User className="h-3.5 w-3.5 text-white" />
                      ) : (
                        <Bot className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                      )}
                    </div>
                    <strong
                      className={`text-sm ${
                        msg.role === "user"
                          ? "text-white/90"
                          : embedded
                            ? isDarkTheme
                              ? "text-gray-300"
                              : "text-gray-800"
                            : isDarkTheme
                              ? "text-gray-300"
                              : "text-gray-800"
                      }`}
                    >
                      {msg.role === "user" ? "You" : "Blendi's Assistant"}
                    </strong>
                  </div>
                  {msg.content ? (
                    <ReactMarkdown
                      className={`prose max-w-none text-sm ${
                        msg.role === "user"
                          ? "prose-invert"
                          : embedded
                            ? isDarkTheme
                              ? "prose-invert"
                              : "prose-slate"
                            : isDarkTheme
                              ? "prose-invert"
                              : "prose-slate"
                      }`}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  ) : (
                    msg.role === "assistant" && <TypingIndicator />
                  )}
                </div>
              </motion.div>
            ))}

            {/* Typing indicator when a new message is being generated */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div
                  className={`relative max-w-[85%] space-y-1 rounded-2xl p-4 ${
                    embedded
                      ? isDarkTheme
                        ? "bg-slate-700"
                        : "border border-slate-300 bg-white"
                      : isDarkTheme
                        ? "bg-slate-800"
                        : "border border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-2 pb-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <Bot className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                    </div>
                    <strong
                      className={`text-sm ${
                        embedded
                          ? isDarkTheme
                            ? "text-gray-300"
                            : "text-gray-800"
                          : isDarkTheme
                            ? "text-gray-300"
                            : "text-gray-800"
                      }`}
                    >
                      Blendi's Assistant
                    </strong>
                  </div>
                  <TypingIndicator />
                </div>
              </motion.div>
            )}
          </>
        ) : (
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-1 flex-col items-center justify-center">
              {!embedded && (
                <div className="relative mb-3 h-32 w-32 overflow-hidden rounded-full border-4 border-blue-600 shadow-lg">
                  <Image
                    src="/blendi.jpg"
                    alt="Blendi"
                    fill
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: "1% center" }}
                    priority
                  />
                </div>
              )}
              <div
                className={`flex flex-col items-center justify-center rounded-lg ${embedded ? "" : "pt-2"}`}
              >
                {!embedded && (
                  <>
                    <p
                      className={`text-center text-2xl font-medium ${isDarkTheme ? "text-white" : "text-slate-900"}`}
                    >
                      Blendi Maliqi
                    </p>
                    <p
                      className={`text-center ${isDarkTheme ? "text-slate-300" : "text-slate-600"}`}
                    >
                      Software developer
                    </p>
                  </>
                )}
              </div>
              {!embedded && (
                <div className="mt-2 flex items-center justify-center">
                  <Mail
                    className={`mr-2 ${isDarkTheme ? "text-slate-400" : "text-slate-500"}`}
                    size={20}
                  />
                  <a
                    href="mailto:blendi.maliqi93@gmail.com"
                    className={`${isDarkTheme ? "text-slate-400 hover:text-blue-400" : "text-slate-500 hover:text-blue-600"} transition-colors`}
                  >
                    blendi.maliqi93@gmail.com
                  </a>
                </div>
              )}
              <div className={`${embedded ? "" : "mt-6"} max-w-md text-center`}>
                {!embedded && (
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {[
                      "Tell me about Blendi's skills",
                      "What projects has Blendi worked on?",
                      "What's Blendi's background?",
                    ].map((suggestion) => (
                      <button
                        key={suggestion}
                        className={`rounded-full ${
                          isDarkTheme
                            ? "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-blue-400"
                            : "bg-slate-200 text-slate-600 hover:bg-blue-100 hover:text-blue-700"
                        } px-3 py-1 text-sm transition-colors`}
                        onClick={() => {
                          // This will be handled by the parent component
                          const event = new CustomEvent("suggestionClick", {
                            detail: { suggestion },
                          });
                          document.dispatchEvent(event);
                        }}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {showScrollButton && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          aria-label="Scroll to bottom"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Chat;
