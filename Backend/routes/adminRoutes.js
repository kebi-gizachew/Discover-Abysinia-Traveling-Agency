import {registerAdmin,loginAdmin} from "../controllers/adminController.js";
import express from "express";
const router=express.Router();
// Admin registration
router.post('/register',registerAdmin);
// Admin login
router.post('/login',loginAdmin);
export default router;