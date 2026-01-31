// controllers/destinationController.js
import Destination from "../models/Destination.js";
import { parseRequestBody, sendJSON } from "../utils/helpers.js";

// ---------------- GET ALL DESTINATIONS (PUBLIC) ----------------
export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    sendJSON(res, 200, { destinations });
  } catch (error) {
    sendJSON(res, 500, { message: error.message });
  }
};

// ---------------- CREATE DESTINATION (ADMIN) ----------------
export const createDestination = async (req, res, currentAdmin) => {
  try {
    if (!currentAdmin) return; // Auth guard

    const {
      image,
      highlight,
      price,
      category,
      location,
      title,
      description,
      aria,
      data,
      duration,
    } = await parseRequestBody(req);

    const newDestination = await Destination.create({
      image,
      highlight,
      price,
      category,
      location,
      title,
      description,
      aria,
      data,
      duration,
    });

    sendJSON(res, 201, {
      message: "Destination created successfully",
      destination: newDestination,
    });
  } catch (error) {
    sendJSON(res, 500, { message: error.message });
  }
};

// ---------------- GET DESTINATION BY ID (USER) ----------------
export const getDestinationById = async (req, res) => {
  try {
    console.log("hi") // Auth guard
    console.log("hello")

    const parts = req.url.split("/");
    const id = parts[parts.length - 1];

    const destination = await Destination.findById(id);
    if (!destination) {
      return sendJSON(res, 404, { message: "Destination not found" });
    }
    sendJSON(res, 200, { destination });
  } catch (error) {
    sendJSON(res, 500, { message: error.message });
  }
};

// ---------------- DELETE DESTINATION (ADMIN) ----------------
export const deleteDestination = async (req, res, currentAdmin) => {
  try {
    if (!currentAdmin) return; // Auth guard

    const parts = req.url.split("/");
    const id = parts[parts.length - 1];

    const deletedDestination = await Destination.findByIdAndDelete(id);

    if (!deletedDestination) {
      return sendJSON(res, 404, { message: "Destination not found" });
    }

    sendJSON(res, 200, {
      message: "Destination deleted successfully",
      destination: deletedDestination,
    });
  } catch (error) {
    sendJSON(res, 500, { message: error.message });
  }
};
