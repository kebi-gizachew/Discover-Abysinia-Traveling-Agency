import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { parseCookies } from "../utils/parseCookies.js";
import { sendJSON } from "../utils/sendJSON.js";

export const authUser = async (req, res) => {
  try {
    const cookies = parseCookies(req);
    const token = cookies.user;

    if (!token) {
      sendJSON(res, 401, { message: "Unauthorized access" });
      return null;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      sendJSON(res, 401, { message: "Invalid token" });
      return null;
    }

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      sendJSON(res, 401, { message: "User not found" });
      return null;
    }

    return user;

  } catch (error) {
    sendJSON(res, 401, { message: "Invalid token" });
    return null;
  }
};
