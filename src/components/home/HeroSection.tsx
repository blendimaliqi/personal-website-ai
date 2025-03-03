"use client";
import React from "react";
import { useChatInterface } from "~/hooks/useChatInterface";
import { useThemeDetection } from "~/hooks/useThemeDetection";
import { DesktopChat } from "./chat/DesktopChat";
import { MobileChatButton } from "./chat/MobileChatButton";
import { MobileChatOverlay } from "./chat/MobileChatOverlay";
import { ProfileSection } from "./ProfileSection";

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
  // Custom hooks
  const { isDarkTheme } = useThemeDetection();
  const {
    isMobile,
    expandedChat,
    hasAnimated,
    localShowMobileChat,
    handleKeyPress,
    toggleChatSize,
    toggleMobileChat,
    resetChat,
    handleSampleQuestion,
    handleInputChange,
  } = useChatInterface({
    messages,
    setMessages,
    message,
    setMessage,
    handleSendMessage,
    showMobileChat,
    setShowMobileChat,
  });

  // Sample questions
  const sampleQuestions = [
    "Tell me about Blendi's experience",
    "What technologies does Blendi use?",
  ];

  return (
    <section
      className={`relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl ${
        isDarkTheme
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200"
      } px-4 py-8 shadow-xl sm:px-6 md:py-12 lg:px-8`}
    >
      {/* Mobile Chat Button removed as requested */}
      {/* But we still need the floating button to appear if we open chat from the "Chat with AI" button */}
      {isMobile && localShowMobileChat && (
        <MobileChatButton toggleMobileChat={toggleMobileChat} />
      )}

      {/* Mobile Chat Overlay */}
      {isMobile && (
        <MobileChatOverlay
          isVisible={localShowMobileChat}
          isDarkTheme={isDarkTheme}
          messages={messages}
          message={message}
          loading={loading}
          resetChat={resetChat}
          toggleMobileChat={toggleMobileChat}
          handleKeyPress={handleKeyPress}
          handleInputChange={handleInputChange}
          handleSendMessage={handleSendMessage}
          sampleQuestions={sampleQuestions}
          handleSampleQuestion={handleSampleQuestion}
        />
      )}

      <div
        className={`relative z-10 grid gap-8 ${
          isMobile
            ? "grid-cols-1"
            : expandedChat
              ? "md:grid-cols-[40%_60%]"
              : "md:grid-cols-2"
        }`}
      >
        {/* Left column - Profile Section */}
        <ProfileSection
          isDarkTheme={isDarkTheme}
          toggleMobileChat={toggleMobileChat}
          isMobile={isMobile}
          handleSendMessage={handleSendMessage}
        />

        {/* Right column - Desktop Chat (only visible on desktop) */}
        {!isMobile && (
          <DesktopChat
            isDarkTheme={isDarkTheme}
            expandedChat={expandedChat}
            hasAnimated={hasAnimated}
            messages={messages}
            message={message}
            loading={loading}
            resetChat={resetChat}
            toggleChatSize={toggleChatSize}
            handleKeyPress={handleKeyPress}
            handleInputChange={handleInputChange}
            handleSendMessage={handleSendMessage}
            sampleQuestions={sampleQuestions}
            handleSampleQuestion={handleSampleQuestion}
          />
        )}
      </div>
    </section>
  );
}
