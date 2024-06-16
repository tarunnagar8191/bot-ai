import React, { useState } from "react";
import { Button, Typography, TextField, Paper, Rating } from "@mui/material";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    // Handle submitting feedback
    console.log("Submitted Feedback:", { rating, comment });
  };

  return (
    <Paper style={{ padding: "20px", marginBottom: "20px" }}>
      <Typography variant="h5">Feedback</Typography>
      <Typography variant="body1">Rate your experience:</Typography>
      <Rating
        name="rating"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
      <Typography variant="body1" style={{ marginTop: "20px" }}>
        Additional Comments:
      </Typography>
      <TextField
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ marginTop: "10px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: "20px" }}
      >
        Submit Feedback
      </Button>
    </Paper>
  );
};

export default Feedback;
