import React, { useState } from "react";
import RatingInput from "./RatingInput";
import FeedbackTable from "./FeedbackTable";

function FeedbackPanel({ conversations }) {
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <div className="feedback-panel">
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation, index) => (
          <li
            key={index}
            onClick={() => handleConversationSelect(conversation)}
          >
            Conversation {index + 1}
          </li>
        ))}
      </ul>
      {selectedConversation && (
        <div>
          <h3>
            Feedback for Conversation {selectedConversation.messages.length}
          </h3>
          <RatingInput conversation={selectedConversation} />
          <FeedbackTable conversations={conversations} />
        </div>
      )}
    </div>
  );
}

export default FeedbackPanel;
