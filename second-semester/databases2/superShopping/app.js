import express from "express";
import cors from "cors";
import { basketRouter } from "./basketRouter.js";

const port = process.env.PORT || 3000;

// Initialize app
const app = express();

// Middleware
app.use(express.json()); // parse incomming JSON
app.use(cors());

// Entry point
app.get(`/api/`, (req, res) => {
  res.json({ message: "Super shopping API" });
});

// Routes
app.use(`/api/basket`, basketRouter);

app.listen(port, (req, res) => {
  console.log(`The server is running on "http://localhost:${port}/api/"`);
});
