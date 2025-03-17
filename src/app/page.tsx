"use client";
import React, { useState, useEffect, useCallback } from "react";
import HeroSection from "./home/HeroSection";
import SkillsSection from "./home/SkillsSection";
import FeaturedProjectsSection from "./home/FeaturedProjectsSection";
import { Message, sendChatMessage, processStreamResponse } from "~/lib/chat";

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedChat, setExpandedChat] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileChat, setShowMobileChat] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      if (!isMobile) {
        setShowMobileChat(false);
      }
    };
  }, [isMobile]);

  const handleSendMessage = useCallback(
    async (customMessage?: string) => {
      const messageToSend = customMessage || message;
      if (!messageToSend.trim() || loading) return;

      setMessages((prev) => [
        ...prev,
        { role: "user", content: messageToSend },
      ]);
      setLoading(true);

      if (!isMobile) {
        setExpandedChat(true);
      }

      try {
        const response = await sendChatMessage(messageToSend);
        await processStreamResponse(response, setMessages);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
        setMessage("");
      }
    },
    [loading, message, isMobile],
  );

  useEffect(() => {
    const handleSuggestionClick = (
      event: CustomEvent<{ suggestion: string }>,
    ) => {
      setMessage(event.detail.suggestion);
      handleSendMessage(event.detail.suggestion);
    };

    document.addEventListener(
      "suggestionClick",
      handleSuggestionClick as EventListener,
    );

    return () => {
      document.removeEventListener(
        "suggestionClick",
        handleSuggestionClick as EventListener,
      );
    };
  }, [handleSendMessage]);

  const handleSectionHover = (section: string | null) => {
    setActiveSection(section);
  };

  const toggleMobileChat = (isVisible: boolean) => {
    setShowMobileChat(isVisible);
  };

  return (
    <div className="flex flex-col gap-24 pt-8 md:pt-12">
      <HeroSection
        messages={messages}
        setMessages={setMessages}
        loading={loading}
        setLoading={setLoading}
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
        showMobileChat={showMobileChat}
        setShowMobileChat={toggleMobileChat}
      />

      <SkillsSection
        activeSection={activeSection}
        handleSectionHover={handleSectionHover}
        expandedChat={expandedChat}
        isMobile={isMobile && showMobileChat}
      />

      <FeaturedProjectsSection
        activeSection={activeSection}
        handleSectionHover={handleSectionHover}
        expandedChat={expandedChat}
        isMobile={isMobile && showMobileChat}
      />
    </div>
  );
}
