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
  MessageSquare,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Chat from "~/components/Chat";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useTheme } from "next-themes";

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
  showMobileChat?: boolean;
  setShowMobileChat?: (isVisible: boolean) => void;
}

export default function HeroSection({
  messages,
  setMessages,
  loading,
  setLoading,
  message,
  setMessage,
  handleSendMessage,
  showMobileChat = false,
  setShowMobileChat,
}: HeroSectionProps) {
  const [expandedChat, setExpandedChat] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [localShowMobileChat, setLocalShowMobileChat] =
    useState(showMobileChat);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only consider theme after component has mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a safe default (dark) for server-side rendering, then use the actual theme after mounting
  const isDarkTheme = !mounted ? true : resolvedTheme === "dark";

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
    return () => {
      window.removeEventListener("resize", checkIfMobile);
      // Reset mobile chat when switching from mobile to desktop
      if (!isMobile) {
        toggleMobileChat(false);
      }
    };
  }, [isMobile]);

  // Sync local state with props
  useEffect(() => {
    if (showMobileChat !== undefined) {
      setLocalShowMobileChat(showMobileChat);
    }
  }, [showMobileChat]);

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  }

  const toggleChatSize = () => {
    setExpandedChat((prev) => !prev);
    setHasAnimated(true);
  };

  const toggleMobileChat = (value?: boolean) => {
    const newValue = value !== undefined ? value : !localShowMobileChat;
    setLocalShowMobileChat(newValue);
    if (setShowMobileChat) {
      setShowMobileChat(newValue);
    }
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
    <section
      className={`relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl ${
        isDarkTheme
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200"
      } px-4 py-12 shadow-xl sm:px-6 md:py-16 lg:px-8`}
    >
      {/* Mobile Chat Button - Fixed at bottom right on mobile */}
      {isMobile && !localShowMobileChat && (
        <button
          onClick={() => toggleMobileChat()}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          aria-label="Open chat"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* Mobile Chat Overlay */}
      <AnimatePresence>
        {isMobile && localShowMobileChat && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className={`relative h-[85vh] w-full max-w-md rounded-xl ${
                isDarkTheme ? "bg-slate-800" : "bg-slate-200"
              } shadow-2xl`}
            >
              <div className="flex items-center justify-between rounded-t-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-3">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={resetChat}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                    aria-label="Reset chat"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleMobileChat(false)}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                    aria-label="Close chat"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex h-[calc(85vh-120px)] flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto p-4">
                  {messages.length === 0 && (
                    <div className="flex flex-col items-center">
                      <div className="group relative mb-5 h-24 w-24 overflow-hidden rounded-full border-4 border-blue-500/40 shadow-xl">
                        <Image
                          fill
                          src="/blendi.jpg"
                          alt="Blendi"
                          className="object-cover"
                          style={{ objectPosition: "15% center" }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          priority={true}
                        />
                      </div>
                      <p
                        className={`text-center ${isDarkTheme ? "text-white" : "text-slate-900"}`}
                      >
                        Hello there
                      </p>
                      <div
                        className={`mt-4 w-full border-t ${isDarkTheme ? "border-white/10" : "border-slate-300/30"} pt-4`}
                      >
                        <p
                          className={`text-center text-sm ${isDarkTheme ? "text-slate-300" : "text-slate-600"}`}
                        >
                          I'm Blendi's AI assistant. Ask me anything about his
                          skills, experience, projects, or background.
                        </p>
                      </div>
                    </div>
                  )}
                  <Chat messages={messages} embedded={true} />
                </div>
                <div
                  className={`border-t ${isDarkTheme ? "border-white/10" : "border-slate-300/30"} p-3`}
                >
                  {messages.length === 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {sampleQuestions.map((question) => (
                        <button
                          key={question}
                          onClick={() => handleSampleQuestion(question)}
                          className={`rounded-full border ${
                            isDarkTheme
                              ? "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                              : "border-slate-300/30 bg-slate-200/50 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                          } px-3 py-1 text-xs transition-colors`}
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
                      className={`h-10 w-full rounded-full ${
                        isDarkTheme
                          ? "border-white/10 bg-white/5 text-white placeholder:text-white/50"
                          : "border-slate-300/30 bg-slate-200/50 text-slate-900 placeholder:text-slate-500"
                      } pr-10`}
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
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`relative z-10 grid gap-8 ${
          isMobile
            ? "grid-cols-1"
            : expandedChat
              ? "md:grid-cols-[40%_60%]"
              : "md:grid-cols-2"
        }`}
      >
        {/* Left column - Intro */}
        <div className="flex flex-col justify-center">
          <div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              <span
                className={`block ${isDarkTheme ? "text-white" : "text-slate-900"}`}
              >
                Blendi Maliqi
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Software Developer
              </span>
            </h1>
            <p
              className={`mb-6 text-lg ${isDarkTheme ? "text-slate-300" : "text-slate-700"}`}
            >
              Building modern web applications with React, Next.js, and .NET.
              Passionate about creating intuitive user experiences and scalable
              solutions.
            </p>
            <div className="mb-6">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-400">
                Contact Me
              </p>
              <div className="flex flex-col space-y-3 sm:flex-row sm:items-stretch sm:gap-2 sm:space-y-0">
                <a
                  href="mailto:blendi.maliqi93@gmail.com"
                  className={`flex flex-1 items-center rounded-md border ${
                    isDarkTheme
                      ? "border-blue-500/30 bg-slate-800/70 text-slate-200 hover:border-blue-500/50 hover:bg-slate-700/70 hover:text-blue-400"
                      : "border-blue-500/30 bg-slate-200/70 text-slate-700 hover:border-blue-500/50 hover:bg-slate-300/70 hover:text-blue-600"
                  } px-4 py-3 text-base shadow-sm transition-all sm:text-lg`}
                  aria-label="Email Blendi"
                >
                  <Mail className="mr-3 h-5 w-5 text-blue-400" />
                  <span className="truncate">blendi.maliqi93@gmail.com</span>
                </a>
                <button
                  onClick={copyEmailToClipboard}
                  className={`group relative flex w-full items-center justify-center rounded-md border ${
                    isDarkTheme
                      ? "border-blue-500/30 bg-slate-800/70 hover:border-blue-500/50 hover:bg-slate-700/70"
                      : "border-blue-500/30 bg-slate-200/70 hover:border-blue-500/50 hover:bg-slate-300/70"
                  } px-4 py-2 shadow-sm transition-all hover:shadow-md sm:w-14`}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-400 sm:mr-0" />
                      <span className="text-green-400 sm:hidden">Copied!</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Copy className="mr-2 h-5 w-5 text-blue-400 sm:mr-0" />
                      <span className="text-blue-400 sm:hidden">
                        Copy email
                      </span>
                    </div>
                  )}
                  <span
                    className={`absolute -bottom-10 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded ${
                      isDarkTheme ? "bg-slate-900" : "bg-slate-700"
                    } px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block`}
                  >
                    {copied ? "Copied!" : "Copy email"}
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <Link href="/works">
                <Button
                  className={
                    isDarkTheme
                      ? "bg-white text-slate-900 hover:bg-white/90"
                      : "bg-slate-800 text-white hover:bg-slate-700"
                  }
                >
                  View My Work
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right column - Embedded Chat (only visible on desktop) */}
        {!isMobile && (
          <div className="flex items-center justify-center">
            <div
              className={`w-full max-w-full rounded-xl border ${
                isDarkTheme
                  ? "border-white/10 bg-white/5"
                  : "border-slate-300/30 bg-slate-200/5"
              } p-1 backdrop-blur-sm transition-all duration-500`}
              style={{
                zIndex: expandedChat ? 10 : 1,
              }}
            >
              <div
                className={`rounded-lg ${isDarkTheme ? "bg-slate-800/80" : "bg-slate-200/80"} shadow-lg`}
              >
                <div className="flex items-center justify-between rounded-t-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-3">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-white" />
                    <span className="text-sm font-medium text-white"></span>
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
                      aria-label={
                        expandedChat ? "Minimize chat" : "Expand chat"
                      }
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
                <div
                  className="overflow-hidden p-4"
                  style={{
                    height: expandedChat ? "500px" : "380px",
                    transition: hasAnimated
                      ? "height 0.5s ease-in-out"
                      : "none",
                  }}
                >
                  {/* Profile info at the top of chat */}
                  {messages.length === 0 && (
                    <div className="flex flex-col items-center">
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
                      <p
                        className={
                          isDarkTheme ? "text-white" : "text-slate-900"
                        }
                      >
                        Hello there
                      </p>
                      <div
                        className={`mt-6 w-full border-t ${isDarkTheme ? "border-white/10" : "border-slate-300/30"} pt-6`}
                      >
                        <p
                          className={`text-center text-sm ${isDarkTheme ? "text-slate-300" : "text-slate-600"}`}
                        >
                          I'm Blendi's AI assistant. Ask me anything about his
                          skills, experience, projects, or background.
                        </p>
                      </div>
                    </div>
                  )}
                  <Chat messages={messages} embedded={true} />
                </div>
                <div
                  className={`border-t ${isDarkTheme ? "border-white/10" : "border-slate-300/30"} p-3`}
                >
                  {messages.length === 0 && (
                    <div className="mb-5 flex flex-wrap gap-2">
                      {sampleQuestions.map((question) => (
                        <button
                          key={question}
                          onClick={() => handleSampleQuestion(question)}
                          className={`rounded-full border ${
                            isDarkTheme
                              ? "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                              : "border-slate-300/30 bg-slate-200/50 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                          } px-3 py-1 text-xs transition-colors`}
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
                      className={`h-10 w-full rounded-full ${
                        isDarkTheme
                          ? "border-white/10 bg-white/5 text-white placeholder:text-white/50"
                          : "border-slate-300/30 bg-slate-200/50 text-slate-900 placeholder:text-slate-500"
                      } pr-10`}
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
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
