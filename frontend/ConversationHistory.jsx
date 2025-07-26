import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export default function ConversationHistory() {
  const { history, loadConversation } = useContext(ChatContext);

  return (
    <div className="flex gap-2 overflow-x-auto mb-2">
      {history.map((item, index) => (
        <button
          key={index}
          className="px-2 py-1 border text-xs rounded bg-gray-200"
          onClick={() => loadConversation(index)}
        >
          Session {index + 1}
        </button>
      ))}
    </div>
  );
}