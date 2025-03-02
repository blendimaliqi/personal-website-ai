"use client";
import React, { useState, useEffect, useCallback } from "react";
import HeroSection from "~/components/home/HeroSection";
import SkillsSection from "~/components/home/SkillsSection";
import FeaturedProjectsSection from "~/components/home/FeaturedProjectsSection";
import { Message, sendChatMessage, processStreamResponse } from "~/lib/chat";

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedChat, setExpandedChat] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileChat, setShowMobileChat] = useState(false);

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

      // Expand the chat when a message is sent
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

  // Listen for suggestion clicks from the Chat component
  useEffect(() => {
    const handleSuggestionClick = (
      event: CustomEvent<{ suggestion: string }>,
    ) => {
      setMessage(event.detail.suggestion);
      // Optional: Auto-send the suggestion
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

  // Function to handle section hover
  const handleSectionHover = (section: string | null) => {
    setActiveSection(section);
  };

  // Function to toggle mobile chat visibility
  const toggleMobileChat = (isVisible: boolean) => {
    setShowMobileChat(isVisible);
  };

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section with Integrated AI */}
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

      {/* Skills Section */}
      <SkillsSection
        activeSection={activeSection}
        handleSectionHover={handleSectionHover}
        expandedChat={expandedChat}
        isMobile={isMobile && showMobileChat}
      />

      {/* Featured Projects */}
      <FeaturedProjectsSection
        activeSection={activeSection}
        handleSectionHover={handleSectionHover}
        expandedChat={expandedChat}
        isMobile={isMobile && showMobileChat}
      />
    </div>
  );
}
