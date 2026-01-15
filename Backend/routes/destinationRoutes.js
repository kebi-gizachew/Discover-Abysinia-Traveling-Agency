import express from 'express';
import { getAllDestinations, createDestination,getDestinationById,deleteDestination } from '../controllers/destinationController.js';
import { authAdmin } from '../middleware/authAdmin.js';
import {authUser} from "../middleware/authUser.js";
const router = express.Router();
// Get all destinations
router.get('/', getAllDestinations);    
// Create a new destination (admin only)
router.post('/', authAdmin, createDestination);
// Get destination by ID
router.get('/destinations/:id', authUser, getDestinationById);
// Delete destination by ID (admin only)
router.delete('/destinations/:id', authAdmin, deleteDestination);
export default router;