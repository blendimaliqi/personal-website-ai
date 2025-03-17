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
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileChat, setShowMobileChat] = useState(false);

  useEffect(() => {
    function checkIfMobile() {
      setIsMobile(window.innerWidth < 768);
    }

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
    function handleSuggestionClick(event: CustomEvent<{ suggestion: string }>) {
      setMessage(event.detail.suggestion);
      handleSendMessage(event.detail.suggestion);
    }

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

  function handleSectionHover(section: string | null) {
    setActiveSection(section);
  }

  function toggleMobileChat(isVisible: boolean) {
    setShowMobileChat(isVisible);
  }

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
        isMobile={isMobile && showMobileChat}
      />

      <FeaturedProjectsSection
        activeSection={activeSection}
        handleSectionHover={handleSectionHover}
        isMobile={isMobile && showMobileChat}
      />
    </div>
  );
}
