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

import { registerUser, loginUser, logoutUser, getUsers } from "./controllers/userController.js";
import { authUser } from "./middleware/authUser.js";
import { parseRequestBody, sendJSON } from "./utils/helpers.js";

dotenv.config();
connectDB();

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  try {
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
