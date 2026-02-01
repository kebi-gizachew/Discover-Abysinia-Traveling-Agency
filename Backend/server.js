import http from "http";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import { registerAdmin, loginAdmin } from "./controllers/adminController.js";
import { authAdmin } from "./middleware/authAdmin.js";

import {
  createBooking,
  getUserBookings,
  cancelBooking,
} from "./controllers/bookingController.js";

import {
  getAllDestinations,
  createDestination,
  getDestinationById,
  deleteDestination,
} from "./controllers/destinationController.js";
import { ContactForm, getAllContactMessages, deleteContactMessage } from "./controllers/contactController.js";

import { registerUser, loginUser, logoutUser, getUsers } from "./controllers/userController.js";
import { authUser } from "./middleware/authUser.js";
import { parseRequestBody, sendJSON } from "./utils/helpers.js";

dotenv.config();
connectDB();

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5175");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  try {
    // Get all destinations (public)
if (req.method === "GET" && req.url === "/api/destinations") {
  return getAllDestinations(req, res);
}

// Create destination (admin only)
if (req.method === "POST" && req.url === "/api/destinations") {
  const admin = await authAdmin(req, res);
  if (!admin) return;
  return createDestination(req, res, admin);
}

// Get destination by ID (user only)
if (
  req.method === "GET" &&
  req.url.startsWith("/api/destinations/")
) {
  const currentUser = await authUser(req, res);
  if (!currentUser) return;
  return getDestinationById(req, res);
}

// Delete destination by ID (admin only)
if (
  req.method === "DELETE" &&
  req.url.startsWith("/api/destinations/")
) {
  const admin = await authAdmin(req, res);
  if (!admin) return;
  return deleteDestination(req, res);
}

    // ================= CONTACT ROUTES =================

// Submit contact form (public)
if (req.method === "POST" && req.url === "/api/contacts") {
  return ContactForm(req, res);
}

// Get all contact messages (admin only)
if (req.method === "GET" && req.url === "/api/contacts/contact-messages") {
  const admin = await authAdmin(req, res);
  if (!admin) return;
  return getAllContactMessages(req, res);
}

// Delete contact message (admin only)
if (
  req.method === "DELETE" &&
  req.url.startsWith("/api/contacts/contact-messages/")
) {
  const admin = await authAdmin(req, res);
  if (!admin) return;

  const parts = req.url.split("/");
  req.params = { id: parts[parts.length - 1] };

  return deleteContactMessage(req, res);
}

    if (req.method === "POST" && req.url === "/api/admin/register") {
      const body = await parseRequestBody(req);
      return registerAdmin(req, res, body);
    }

    if (req.method === "POST" && req.url === "/api/admin/login") {
      const body = await parseRequestBody(req);
      return loginAdmin(req, res, body);
    }

    if (req.method === "GET" && req.url === "/api/admin/profile") {
      const admin = await authAdmin(req, res);
      if (!admin) return;
      return sendJSON(res, 200, { admin });
    }

    if (req.method === "POST" && req.url === "/api/users/register") {
      const body = await parseRequestBody(req); 
      return registerUser(req, res, body);
    }

    if (req.method === "POST" && req.url === "/api/users/login") {
      const body = await parseRequestBody(req); 
      return loginUser(req, res, body);
    }

    if (req.method === "POST" && req.url === "/api/users/logout") {
        return logoutUser(req, res);
      }
      

    if (req.method === "GET" && req.url === "/api/users") {
      const admin = await authAdmin(req, res); 
      if (!admin) return;
      return getUsers(req, res);
    }
    if (req.url.startsWith("/api/bookings")) {
      const currentUser = await authUser(req, res);
      if (!currentUser) return;

      if (req.method === "POST" && req.url === "/api/bookings") {
        const body = await parseRequestBody(req);
        return createBooking(req, res, currentUser, body);
      }

      if (req.method === "GET" && req.url === "/api/bookings") {
        return getUserBookings(req, res, currentUser);
      }

      if (req.method === "DELETE" && req.url.startsWith("/api/bookings/")) {
        return cancelBooking(req, res, currentUser);
      }
    }

    if (req.url.startsWith("/api/destinations")) {
      if (req.method === "GET" && req.url === "/api/destinations") {
        return getAllDestinations(req, res);
      }

      if (req.method === "GET" && req.url.startsWith("/api/destinations/")) {
        return getDestinationById(req, res);
      }

      if (req.method === "POST" && req.url === "/api/destinations") {
        const admin = await authAdmin(req, res);
        if (!admin) return;
        return createDestination(req, res, admin);
      }

      if (req.method === "DELETE" && req.url.startsWith("/api/destinations/")) {
        const admin = await authAdmin(req, res);
        if (!admin) return;
        return deleteDestination(req, res, admin);
      }
    }

    if (req.url.startsWith("/api/contacts") || req.url === "/api/contact") {
      // Frontend posts to /api/contacts; some routes may use /api/contact
      if (req.method === "POST" && (req.url === "/api/contacts" || req.url === "/api/contact")) {
        const body = await parseRequestBody(req);
        // ContactForm expects req and res and reads body via parseRequestBody internally,
        // but passing body is harmless; call ContactForm to create message
        return ContactForm(req, res);
      }

      if (req.method === "GET" && req.url === "/api/contact-messages") {
        const admin = await authAdmin(req, res);
        if (!admin) return;
        return getAllContactMessages(req, res);
      }

      if (req.method === "DELETE" && req.url.startsWith("/api/contact-messages/")) {
        const admin = await authAdmin(req, res);
        if (!admin) return;
        return deleteContactMessage(req, res, admin);
      }
    }

    return sendJSON(res, 404, { message: "Route not found" });

  } catch (error) {
    console.error("SERVER ERROR:", error);
    return sendJSON(res, 500, { message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
