import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is running" });
});

export default app;
