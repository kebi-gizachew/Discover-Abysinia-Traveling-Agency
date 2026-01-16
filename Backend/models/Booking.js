// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  destination: { type: mongoose.Schema.Types.ObjectId, ref: "Destination", required: true },
  travelDate: { type: Date, required: true },
  travelers: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", bookingSchema);
