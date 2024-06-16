import React, { useState } from "react";
import ChatBubble from "./ChatBubble";

function ChatBox({ conversation, sendMessage, onSaveConversation }) {
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "") {
      sendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {conversation.messages.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      <button onClick={onSaveConversation}>Save Conversation</button>
    </div>
  );
}

export default ChatBox;
