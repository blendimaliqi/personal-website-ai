"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  ArrowUp,
  Bot,
  Mail,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  RefreshCw,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Chat from "~/components/Chat";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

interface HeroSectionProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: (customMessage?: string) => Promise<void>;
}

export default function HeroSection({
  messages,
  setMessages,
  loading,
  setLoading,
  message,
  setMessage,
  handleSendMessage,
}: HeroSectionProps) {
  const [expandedChat, setExpandedChat] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  }

  const toggleChatSize = () => {
    setExpandedChat((prev) => !prev);
  };

  const resetChat = () => {
    setMessages([]);
    setExpandedChat(false);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("blendi.maliqi93@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Sample questions for the embedded chat
  const sampleQuestions = [
    "Tell me about Blendi's experience",
    "What technologies does Blendi use?",
  ];

  const handleSampleQuestion = (question: string) => {
    setMessage(question);
    handleSendMessage(question);
  };

  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-12 shadow-xl sm:px-6 md:py-16 lg:px-8">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div
        className={`relative z-10 grid gap-8 ${
          expandedChat && !isMobile
            ? "md:grid-cols-[40%_60%]"
            : expandedChat && isMobile
              ? "grid-cols-1"
              : "md:grid-cols-2"
        }`}
      >
        {/* Left column - Intro */}
        <div
          className={`flex flex-col justify-center ${expandedChat && isMobile ? "hidden" : ""}`}
        >
          <div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              <span className="block">Blendi Maliqi</span>
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Software Developer
              </span>
            </h1>
            <p className="mb-6 text-lg text-slate-300">
              Building modern web applications with React, Next.js, and .NET.
              Passionate about creating intuitive user experiences and scalable
              solutions.
            </p>
            <div className="mb-6">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-400">
                Contact Me
              </p>
              <div className="flex items-stretch gap-2">
                <a
                  href="mailto:blendi.maliqi93@gmail.com"
                  className="flex flex-1 items-center rounded-md border border-blue-500/30 bg-slate-800/70 px-4 py-3 text-lg text-slate-200 shadow-sm transition-all hover:border-blue-500/50 hover:bg-slate-700/70 hover:text-blue-400 hover:shadow-md"
                  aria-label="Email Blendi"
                >
                  <Mail className="mr-3 h-5 w-5 text-blue-400" />
                  blendi.maliqi93@gmail.com
                </a>
                <button
                  onClick={copyEmailToClipboard}
                  className="group relative flex w-14 items-center justify-center rounded-md border border-blue-500/30 bg-slate-800/70 px-4 shadow-sm transition-all hover:border-blue-500/50 hover:bg-slate-700/70 hover:shadow-md"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="h-5 w-5 text-green-400" />
                  ) : (
                    <Copy className="h-5 w-5 text-blue-400" />
                  )}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {copied ? "Copied!" : "Copy email"}
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/works">
                <Button className="bg-white text-slate-900 hover:bg-white/90">
                  View My Work
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right column - Embedded Chat */}
        <div
          className={`flex items-center justify-center ${expandedChat && isMobile ? "col-span-1" : ""}`}
        >
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0 }}
            className="w-full max-w-full rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm transition-all duration-500"
            style={{
              zIndex: expandedChat ? 10 : 1,
            }}
          >
            <div className="rounded-lg bg-slate-800/80 shadow-lg">
              <div className="flex items-center justify-between rounded-t-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-3">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={resetChat}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                    aria-label="Reset chat"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={toggleChatSize}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                    aria-label={expandedChat ? "Minimize chat" : "Expand chat"}
                  >
                    {expandedChat ? (
                      <Minimize2 className="h-3.5 w-3.5" />
                    ) : (
                      <Maximize2 className="h-3.5 w-3.5" />
                    )}
                  </button>
                  <div className="flex space-x-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
                  </div>
                </div>
              </div>
              <motion.div
                className="overflow-hidden p-4"
                animate={{
                  height: expandedChat
                    ? isMobile
                      ? "60vh"
                      : "500px"
                    : "380px",
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                {/* Profile info at the top of chat */}
                {messages.length === 0 && (
                  <div className="mb-6 flex flex-col items-center">
                    <div className="group relative mb-5 h-40 w-40 overflow-hidden rounded-full border-4 border-blue-500/40 shadow-xl transition-all duration-300 hover:scale-105">
                      <Image
                        fill
                        src="/blendi.jpg"
                        alt="Blendi"
                        className="object-cover transition-all duration-300 group-hover:brightness-110"
                        style={{ objectPosition: "15% center" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                      />
                    </div>
                    <p>Hello there</p>
                    <div className="mt-6 w-full border-t border-white/10 pt-6">
                      <p className="text-center text-sm text-slate-300">
                        I'm Blendi's AI assistant. Ask me anything about his
                        skills, experience, projects, or background.
                      </p>
                    </div>
                  </div>
                )}
                <Chat messages={messages} embedded={true} />
              </motion.div>
              <div className="border-t border-white/10 p-3">
                {messages.length === 0 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {sampleQuestions.map((question) => (
                      <button
                        key={question}
                        onClick={() => handleSampleQuestion(question)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}
                <div className="relative">
                  <Input
                    disabled={loading}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    value={message}
                    placeholder="Ask me anything..."
                    className="h-10 w-full rounded-full border-white/10 bg-white/5 pr-10 text-white placeholder:text-white/50"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    size="icon"
                    className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                    disabled={loading || message.trim() === ""}
                  >
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
