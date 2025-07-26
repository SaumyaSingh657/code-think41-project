import React, { useState, useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export default function UserInput() {
  const [input, setInput] = useState("");
  const { sendMessage } = useContext(ChatContext);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="flex gap-2">
      <input
        className="flex-grow p-2 border rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type a message..."
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSend}>
        Send
      </button>
    </div>
  );
}