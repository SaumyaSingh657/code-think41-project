import React from "react";
import Message from "./Message";

export default function MessageList({ messages, loading }) {
  return (
    <div className="h-96 overflow-y-auto mb-4 border p-2">
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}
      {loading && <div className="text-center text-sm text-gray-500">Loading...</div>}
    </div>
  );
}