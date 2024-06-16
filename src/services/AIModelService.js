import data from "../utils/data.js";

const AIModelService = {
  getAIResponse: async (message) => {
    // Simulate a delay for a more realistic experience
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data[message] || "I'm sorry, I don't understand.";
  },
};

export default AIModelService;
