import express from 'express'
import CustomerController from "../controllers/customer";

// Declare routes and call needed controllers
const router = express.Router();
router.get("/customer", CustomerController.getCustomersLocatedWithinRadius);
export default router;