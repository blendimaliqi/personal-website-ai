import React from "react";
import { ArrowUp, Bot, RefreshCw, Maximize2, Minimize2 } from "lucide-react";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Chat from "~/components/Chat";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

interface DesktopChatProps {
  isDarkTheme: boolean;
  expandedChat: boolean;
  hasAnimated: boolean;
  messages: Message[];
  message: string;
  loading: boolean;
  resetChat: () => void;
  toggleChatSize: () => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendMessage: (customMessage?: string) => Promise<void>;
  sampleQuestions: string[];
  handleSampleQuestion: (question: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export function DesktopChat({
  isDarkTheme,
  expandedChat,
  hasAnimated,
  messages,
  message,
  loading,
  resetChat,
  toggleChatSize,
  handleKeyPress,
  handleInputChange,
  handleSendMessage,
  sampleQuestions,
  handleSampleQuestion,
  inputRef,
}: DesktopChatProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`w-full max-w-full rounded-xl border ${
          isDarkTheme
            ? "border-white/10 bg-white/5"
            : "border-slate-300/70 bg-white/80"
        } p-1 backdrop-blur-sm transition-all duration-500`}
        style={{
          zIndex: expandedChat ? 10 : 1,
        }}
      >
        <div
          className={`rounded-lg ${isDarkTheme ? "bg-slate-800/80" : "bg-slate-100"} shadow-lg`}
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
                aria-label={expandedChat ? "Minimize chat" : "Expand chat"}
              >
                {expandedChat ? (
                  <Minimize2 className="h-3.5 w-3.5" />
                ) : (
                  <Maximize2 className="h-3.5 w-3.5" />
                )}
              </button>
              {/* Commented out for now
              <div className="flex space-x-1">
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
              </div>
              */}
            </div>
          </div>

          <div
            className="overflow-hidden p-4"
            style={{
              height: expandedChat ? "500px" : "380px",
              transition: hasAnimated ? "height 0.5s ease-in-out" : "none",
            }}
          >
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
                    isDarkTheme ? "text-white" : "font-medium text-slate-900"
                  }
                >
                  Hello there
                </p>
                <div
                  className={`mt-6 w-full border-t ${isDarkTheme ? "border-white/10" : "border-slate-300/50"} pt-6`}
                >
                  <p
                    className={`text-center text-sm ${isDarkTheme ? "text-slate-300" : "font-medium text-slate-700"}`}
                  >
                    I'm Blendi's AI assistant. Ask me anything about his skills,
                    experience, projects, or background.
                  </p>
                </div>
              </div>
            )}
            <Chat messages={messages} embedded={true} />
          </div>
          <div
            className={`border-t ${isDarkTheme ? "border-white/10" : "border-slate-300/50"} p-3`}
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
                        : "border-slate-400/50 bg-slate-200/80 text-slate-700 hover:bg-slate-300 hover:text-slate-900"
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
                className={`h-12 w-full rounded-full py-3 ${
                  isDarkTheme
                    ? "border-white/10 bg-white/5 text-white placeholder:text-white/50"
                    : "border-slate-400/50 bg-white text-slate-900 placeholder:text-slate-500"
                } pr-12 text-base`}
                ref={inputRef}
              />
              <Button
                onClick={() => {
                  handleSendMessage().then(() => {
                    setTimeout(() => {
                      inputRef.current?.focus();
                    }, 0);
                  });
                }}
                size="icon"
                className="absolute right-1.5 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                disabled={loading || message.trim() === ""}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
