import React, { createContext, useState, useContext } from "react";
import sampleData from "../utils/sampleData.json";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState([]);

  const addMessageToConversation = (message) => {
    setCurrentConversation([...currentConversation, message]);
  };

  const saveConversation = (feedback) => {
    const conversation = {
      messages: currentConversation,
      feedback,
    };
    setConversations([...conversations, conversation]);
    setCurrentConversation([]);
  };

  return (
    <ChatContext.Provider
      value={{
        sampleData,
        conversations,
        currentConversation,
        addMessageToConversation,
        saveConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
