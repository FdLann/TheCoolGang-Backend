import express from "express";
import { getCustomer, createCustomer, deleteCustomer } from "../controllers/CustomerController.js";

const router = express.Router();

router.get("/api/customers", getCustomer);
router.post("/api/customers", createCustomer);
router.delete("/api/customers/:id", deleteCustomer);

export default router;
