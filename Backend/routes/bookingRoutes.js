import {createBooking, getUserBookings, cancelBooking} from "../controllers/bookingController.js";
import {authAdmin} from "../middleware/authAdmin.js";
import {authUser} from "../middleware/authUser.js";
import express from "express";
const router=express.Router();
// Create a new booking
router.post('/', authUser, createBooking);
// Get user bookings
router.get('/', authUser, getUserBookings);
// Cancel a booking
router.delete('/:bookingId', authUser, cancelBooking);
export default router;
