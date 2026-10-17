
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health-check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Forklog API is running!",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Forklog server running on port ${PORT}`);
});
