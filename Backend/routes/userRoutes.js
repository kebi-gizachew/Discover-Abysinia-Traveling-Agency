import {authAdmin} from "../middleware/authAdmin.js";
import express from "express";
import { registerUser, loginUser, logoutUser, getUsers} from "../controllers/userController.js";
const router = express.Router();

// User registration
router.post("/register", registerUser);
// User login
router.post("/login", loginUser);
// User logout
router.post("/logout", logoutUser);
// Get all users (admin only)
router.get("/", authAdmin, getUsers);
export default router;