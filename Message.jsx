import React from "react";

export default function Message({ sender, text }) {
  const isUser = sender === "user";
  return (
    <div
      className={`p-2 my-1 rounded-md w-fit max-w-xs ${
        isUser ? "ml-auto bg-blue-100" : "mr-auto bg-green-100"
      }`}
    >
      <span className="text-sm">{text}</span>
    </div>
  );
}