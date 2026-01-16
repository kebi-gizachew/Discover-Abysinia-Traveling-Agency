import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Admin from "../models/Admin.js";

dotenv.config();
export const authAdmin = async (req, res, next) => {
    const token = req.cookies.admin;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized access" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_Admin);
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized access" });
        }
        req.admin = await Admin.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};