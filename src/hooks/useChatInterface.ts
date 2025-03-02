import { useState, useEffect } from "react";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

interface UseChatInterfaceProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: (customMessage?: string) => Promise<void>;
  showMobileChat?: boolean;
  setShowMobileChat?: (isVisible: boolean) => void;
}

export function useChatInterface({
  messages,
  setMessages,
  message,
  setMessage,
  handleSendMessage,
  showMobileChat = false,
  setShowMobileChat,
}: UseChatInterfaceProps) {
  const [expandedChat, setExpandedChat] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [localShowMobileChat, setLocalShowMobileChat] =
    useState(showMobileChat);

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

  // Auto-expand chat when a message is sent
  useEffect(() => {
    if (messages.length > 0 && !expandedChat && !isMobile) {
      setExpandedChat(true);
      setHasAnimated(true);
    }
  }, [messages.length, expandedChat, isMobile]);

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

  const handleSampleQuestion = (question: string) => {
    setMessage(question);
    if (!isMobile) {
      setExpandedChat(true);
      setHasAnimated(true);
    }
    handleSendMessage(question);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return {
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
  };
}
