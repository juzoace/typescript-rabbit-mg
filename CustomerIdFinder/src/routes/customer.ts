import express from 'express'
import CustomerController from "../controllers/customer";
const router = express.Router();

router.get("/customer", CustomerController.getCustomersLocatedWithinRadius);
export default router;