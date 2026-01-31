// controllers/bookingController.js
import Booking from "../models/Booking.js";
import User from "../models/User.js";
import Destination from "../models/Destination.js";
import mongoose from "mongoose";
import { parseRequestBody, sendJSON } from "../utils/helpers.js"; // ✅ import helpers

// Create booking
export const createBooking = async (req, res, currentUser) => {
  try {
    const userId = currentUser._id;
    const { fullName, email, transport, destinationId, travelDate, travelers } = await parseRequestBody(req);

    const user = await User.findById(userId);
    const destination = await Destination.findById(destinationId);

    if (!user || !destination) {
      return sendJSON(res, 404, { message: "User or destination not found" });
    }

    const newBooking = await Booking.create({
      user: userId,
      fullName,
      email,
      transport,
      destination: destinationId,
      travelDate,
      travelers,
    });

    sendJSON(res, 201, { message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    sendJSON(res, 500, { message: error.message });
  }
};

// Get user bookings
export const getUserBookings = async (req, res, currentUser) => {
  try {
    const userId = currentUser._id;
    const bookings = await Booking.find({ user: userId }).populate("destination");
    sendJSON(res, 200, { bookings });
  } catch (error) {
    sendJSON(res, 500, { message: error.message });
  }
};

// Cancel booking
export const cancelBooking = async (req, res, currentUser) => {
  try {
    const parts = req.url.split("/");
    const bookingId = parts[parts.length - 1];

    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
      return sendJSON(res, 400, { message: "Invalid booking ID" });
    }

    const booking = await Booking.findOneAndDelete({ _id: bookingId, user: currentUser._id });

    if (!booking) {
      return sendJSON(res, 404, { message: "Booking not found" });
    }

    sendJSON(res, 200, { message: "Booking canceled successfully", booking });
  } catch (error) {
    sendJSON(res, 500, { message: error.message });
  }
};
