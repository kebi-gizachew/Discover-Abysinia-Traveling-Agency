// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    fullName: {type: String, required: true },
    email: {type: String, required: true },
    transport: { type: String },
  destination: {type: mongoose.Schema.Types.ObjectId, ref: "Destination", required: true },
  travelDate: { type: String, required: true },
  travelers: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("Booking", bookingSchema);
