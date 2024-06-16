import React from "react";
import {
  Typography,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const FeedbackAnalysis = () => {
  // Mock data for feedback analysis (to be replaced with actual data)
  const feedbackData = [
    { id: 1, rating: 4, comment: "Great experience!" },
    { id: 2, rating: 2, comment: "Needs improvement in response time." },
    // Add more feedback data as needed
  ];

  return (
    <Paper style={{ padding: "20px", marginBottom: "20px" }}>
      <Typography variant="h5">Feedback Analysis</Typography>
      <TableContainer style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Feedback ID</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Comment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedbackData.map((feedback) => (
              <TableRow key={feedback.id}>
                <TableCell>{feedback.id}</TableCell>
                <TableCell>{feedback.rating}</TableCell>
                <TableCell>{feedback.comment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default FeedbackAnalysis;
