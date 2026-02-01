import jwt from "jsonwebtoken"
import Admin from "../models/Admin.js"
import {parseCookies } from "../utils/parseCookies.js"
import {sendJSON } from "../utils/sendJSON.js"
export const authAdmin = async (req, res) => {
  try {
    const cookies = parseCookies(req)
    const token=cookies.admin
    if (!token){
      sendJSON(res,401,{message:"Unauthorized access" })
      return null
    }
    const decoded = jwt.verify(token, process.env.JWT_Admin)
    if (!decoded){
      sendJSON(res,401,{message:"Invalid token" })
      return null
    }

    const admin = await Admin.findById(decoded.id).select("-password")
    if (!admin) {
      sendJSON(res, 401, { message: "Admin not found" })
      return null;
    }

    return admin; 

  } catch (error) {
    sendJSON(res, 401, { message: "Invalid token" });
    return null;
  }
};
