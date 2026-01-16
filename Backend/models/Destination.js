// models/Destination.js
import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  image: { type: String },
     highlight: { type: String },
     price: { type: Number },
     category: { type: String },
     location: { type: String },
     title: { type: String },
     description: { type: String },
     aria: { type: String },
     data: { type: String },
    duration: { type: String }
});

export default mongoose.model("Destination", destinationSchema);
