import React, { useState, useEffect } from "react";
import FeedbackPanel from "./components/FeedbackPanel";
import ConversationList from "./components/ConversationList";
import AIModelService from "./services/AIModelService";
import "./styles/global.css";
import ChatBubble from "./components/ChatBubble";

function App() {
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState({
    messages: [],
    feedback: [],
  });
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "") {
      handleSendMessage(newMessage);
      setNewMessage("");
    }
  };

  useEffect(() => {
    // Load initial conversations from local storage or an API
    const storedConversations = localStorage.getItem("conversations");
    if (storedConversations) {
      setConversations(JSON.parse(storedConversations));
    }
  }, []);

  const handleNewConversation = () => {
    setCurrentConversation({
      messages: [],
      feedback: [],
    });
  };

  const handleConversationSelect = (conversation) => {
    setCurrentConversation(conversation);
  };

  const handleSendMessage = async (message) => {
    if (currentConversation) {
      const response = await AIModelService.getAIResponse(message); // Mock or use API
      setCurrentConversation((prevConversation) => ({
        ...prevConversation,
        messages: [
          ...prevConversation.messages,
          { type: "user", content: message },
          { type: "ai", content: response },
        ],
      }));
    }
  };

  const handleConversationSave = () => {
    if (currentConversation) {
      setConversations([...conversations, currentConversation]);
      localStorage.setItem("conversations", JSON.stringify(conversations));
      // setCurrentConversation(null);
    }
  };

  return (
    <div className="app-container">
      <div>
        <button className="newChatButton" onClick={handleNewConversation}>
          New Chat
        </button>
        <ConversationList
          conversations={conversations}
          onSelectConversation={handleConversationSelect}
        />
      </div>
      <div className="container">
        <div className="header">
          <h2>Bot AI</h2>
        </div>

        <div className="">
          {currentConversation.messages.length > 0 ? (
            <div className="chat-messages">
              {currentConversation.messages.map((message, index) => (
                <ChatBubble key={index} message={message} />
              ))}
            </div>
          ) : (
            <>
              <h2 className="mainHeading">How Can I Help You Today?</h2>
              <div className="options">
                <div className="option">
                  <h3>Hi, what is the weather</h3>
                  <p>Get immediate Al generated response</p>
                </div>
                <div className="option">
                  <h3>Hi, what is my location</h3>
                  <p>Get immediate Al generated response</p>
                </div>
                <div className="option">
                  <h3>Hi, what is the temperature</h3>
                  <p>Get immediate Al generated response</p>
                </div>
                <div className="option">
                  <h3>Hi, how are you</h3>
                  <p>Get immediate Al generated response</p>
                </div>
              </div>
            </>
          )}
          <form className="input-area" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask me anything..."
              value={newMessage}
              onChange={handleInputChange}
            />
            <button type="submit">Ask</button>
            <button onClick={handleConversationSave}>Save</button>
          </form>
        </div>
      </div>

      {/* <FeedbackPanel conversations={conversations} /> */}
    </div>
  );
}

export default App;
