import React, { useContext } from "react";
import MessageList from "./MessageList";
import UserInput from "./UserInput";
import ConversationHistory from "./ConversationHistory";
import { ChatContextProvider, ChatContext } from "../context/ChatContext";

function ChatUI() {
  const { messages, loading } = useContext(ChatContext);
  return (
    <div className="w-full max-w-3xl p-4 bg-white rounded shadow-md">
      <ConversationHistory />
      <MessageList messages={messages} loading={loading} />
      <UserInput />
    </div>
  );
}

export default function ChatWindow() {
  return (
    <ChatContextProvider>
      <ChatUI />
    </ChatContextProvider>
  );
}