import React from "react";
import { Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import { useChat } from "../context/ChatContext";

const History = () => {
  const { conversation } = useChat();

  return (
    <Paper style={{ padding: "20px", marginBottom: "20px" }}>
      <Typography variant="h5">Past Conversation</Typography>
      <List style={{ marginTop: "20px" }}>
        {conversation.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={msg.text}
              style={{ textAlign: msg.type === "question" ? "right" : "left" }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default History;
