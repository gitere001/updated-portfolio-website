import express from "express";
import { handleContactForm } from "../controllers/emailController.js";

const router = express.Router();

// Single endpoint for contact form handling
router.post("/contact", handleContactForm);

export default router;