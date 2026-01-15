import Booking from "../models/Booking.js";
import User from "../models/User.js";
import Destination from "../models/Destination.js";
import mongoose from "mongoose";
export const createBooking = async (req, res) => {
    try {
        const userId = req.user._id;
        const {destinationId, travelDate, travelers } = req.body;
        const user = await User.findById(userId);
        const destination = await Destination.findById(destinationId);
        if (!user || !destination) {
            return res.status(404).json({ message: "User or destination not found" });
        }
        const newBooking = await Booking.create({
            user: userId,
            destination: destinationId,
            travelDate,
            travelers
        });
        res.status(201).json({ message: "Booking created successfully", booking: newBooking });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getUserBookings = async (req, res) => {
    try {
        const userId = req.user._id;
        const bookings = await Booking.find({ user: userId }).populate("destination");
        res.status(200).json({ bookings });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const cancelBooking = async (req, res) => {
    try {
        const userId = req.user._id;
        const { bookingId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(bookingId)) {
            return res.status(400).json({ message: "Invalid booking ID" });
        }
        const booking = await Booking.findOneAndDelete({ _id: bookingId });
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json({ message: "Booking canceled successfully", booking });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};