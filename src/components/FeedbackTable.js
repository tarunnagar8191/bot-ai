import React from "react";

function FeedbackTable({ conversations }) {
  return (
    <div className="feedback-table">
      <h3>Feedback Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Conversation</th>
            <th>Rating</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {conversations.map((conversation, index) => (
            <tr key={index}>
              <td>Conversation {index + 1}</td>
              <td>{conversation.feedback.rating}</td>
              <td>{conversation.feedback.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeedbackTable;
