import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Bot, RefreshCw, X } from "lucide-react";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Chat from "~/components/Chat";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

interface MobileChatOverlayProps {
  isVisible: boolean;
  isDarkTheme: boolean;
  messages: Message[];
  message: string;
  loading: boolean;
  resetChat: () => void;
  toggleMobileChat: (value?: boolean) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendMessage: (customMessage?: string) => Promise<void>;
  sampleQuestions: string[];
  handleSampleQuestion: (question: string) => void;
}

export function MobileChatOverlay({
  isVisible,
  isDarkTheme,
  messages,
  message,
  loading,
  resetChat,
  toggleMobileChat,
  handleKeyPress,
  handleInputChange,
  handleSendMessage,
  sampleQuestions,
  handleSampleQuestion,
}: MobileChatOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
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
            {/* Chat Header */}
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

            {/* Chat Content */}
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

              {/* Input Area */}
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
                    onChange={handleInputChange}
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
  );
}
