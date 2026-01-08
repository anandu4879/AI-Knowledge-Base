import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { logger } from "./middleware/logger.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(logger);

// Test route
app.use("/api", router);

export default app;
