import React from "react";
import { MessageSquare } from "lucide-react";

interface MobileChatButtonProps {
  toggleMobileChat: (value?: boolean) => void;
}

export function MobileChatButton({ toggleMobileChat }: MobileChatButtonProps) {
  return (
    <button
      onClick={() => toggleMobileChat()}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      aria-label="Open chat"
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  );
}
