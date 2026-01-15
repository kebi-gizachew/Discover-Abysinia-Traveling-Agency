// models/Contact.js
import mongoose from "mongoose";

const contactMessage = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  country: { type: String },
  travelDate: { type: String },
  destination: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("ContactMessage", contactMessage);