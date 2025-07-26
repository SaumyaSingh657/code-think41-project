import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export function ChatContextProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const sendMessage = async (text) => {
    const newMsg = { sender: "user", text };
    setMessages((prev) => [...prev, newMsg]);
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text: `AI Response to: ${text}` }]);
      setLoading(false);
    }, 1000);
  };

  const loadConversation = (index) => {
    setMessages(history[index] || []);
  };

  React.useEffect(() => {
    if (!loading) setHistory((prev) => [...prev, [...messages]]);
  }, [loading]);

  return (
    <ChatContext.Provider value={{ messages, loading, sendMessage, history, loadConversation }}>
      {children}
    </ChatContext.Provider>
  );
}