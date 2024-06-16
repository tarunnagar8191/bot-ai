import React from "react";

function ConversationList({ conversations, onSelectConversation }) {
  return (
    <div className="conversation-list">
      <h4 className="newChatButton">Past Conversation</h4>
      <ul>
        {conversations.map((conversation, index) => (
          <li key={index} onClick={() => onSelectConversation(conversation)}>
            Conversation {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConversationList;
