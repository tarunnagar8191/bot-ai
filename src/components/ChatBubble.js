import React from "react";

function ChatBubble({ message }) {
  return <div className={`chat-bubble ${message.type}`}>{message.content}</div>;
}

export default ChatBubble;
