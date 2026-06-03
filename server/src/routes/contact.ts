import { Router } from "express";
import { submitContact } from "../controllers/contactController";
import rateLimit from "express-rate-limit";

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: "Too many requests from this IP, please try again after an hour"
});

router.post("/", contactLimiter, submitContact);

export default router;
