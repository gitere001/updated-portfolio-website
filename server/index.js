// server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cacheControlStatic from "./middlewares/cacheHeaders.js";
import preventApiCache from "./middlewares/preventApiCache.js";
import emailRoutes from "./routes/emailRoutes.js";
import path from "path";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files with cache headers
app.use(cacheControlStatic);

// Prevent API response caching
app.use(preventApiCache);

// Routes
app.use("/api/v1/contact-form", emailRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
