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

  useEffect(() => {
    function checkIfMobile() {
      setIsMobile(window.innerWidth < 768);
    }

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return function () {
      window.removeEventListener("resize", checkIfMobile);
      if (!isMobile) {
        toggleMobileChat(false);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (showMobileChat !== undefined) {
      setLocalShowMobileChat(showMobileChat);
    }
  }, [showMobileChat]);

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

  function toggleChatSize() {
    setExpandedChat((prev) => !prev);
    setHasAnimated(true);
  }

  function toggleMobileChat(value?: boolean) {
    const newValue = value !== undefined ? value : !localShowMobileChat;
    setLocalShowMobileChat(newValue);
    if (setShowMobileChat) {
      setShowMobileChat(newValue);
    }
  }

  function resetChat() {
    setMessages([]);
    setExpandedChat(false);
    setMessage("");
  }

  function handleSampleQuestion(question: string) {
    setMessage(question);
    if (!isMobile) {
      setExpandedChat(true);
      setHasAnimated(true);
    }
    handleSendMessage(question);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

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
