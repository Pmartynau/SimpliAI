// ConversationSidebar.tsx

import React from "react";
import { Button } from "@/components/ui/button";

interface ConversationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onStartNewChat: () => void;
}

const ConversationSidebar: React.FC<ConversationSidebarProps> = ({ isOpen, onClose, onStartNewChat }) => {
  return (
    <div className={`fixed top-0 right-0 h-full bg-white shadow-md transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-4">
        <Button onClick={onClose} className="bg-gray-200 text-gray-800">
          Close
        </Button>
        <Button onClick={onStartNewChat} className="mt-2 bg-blue-500 text-white">
          Start New Chat
        </Button>
      </div>
    </div>
  );
};

export default ConversationSidebar;
