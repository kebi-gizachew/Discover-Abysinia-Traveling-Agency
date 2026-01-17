import {ContactForm, getAllContactMessages, deleteContactMessage} from "../controllers/contactController.js";
import {authAdmin} from "../middleware/authAdmin.js";
import express from "express";
const router=express.Router();
// Submit contact form
router.post('/contact',ContactForm);
// Get all contact messages (admin only)
router.get('/contact-messages',authAdmin, getAllContactMessages);
// Delete a contact message (admin only)
router.delete('/contact-messages/:id', authAdmin, deleteContactMessage);
export default router;