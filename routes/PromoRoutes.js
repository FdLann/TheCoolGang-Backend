// routes/PromoRoute.js
import express from "express";
import { getPromos, getPromoById, createPromo, deletePromo } from "../controllers/PromoController.js";

const router = express.Router();

router.get("/promos", getPromos);
router.get("/promos/:id", getPromoById);
router.post("/promos", createPromo);
router.delete("/promos/:id", deletePromo);

export default router;
