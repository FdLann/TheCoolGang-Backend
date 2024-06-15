// routes/ReviewRoute.js
import express from "express";
import { getReviews, createReview, deleteReview } from "../controllers/ReviewController.js";

const router = express.Router();

router.get("/reviews", getReviews);
router.post("/reviews", createReview);
router.delete("/reviews/:id", deleteReview);

export default router;
