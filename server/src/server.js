
require("dotenv").config({ quiet: true });

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Forklog API is running!",
  });
});

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Forklog server running on port ${PORT}`);
  });
}

startServer();

