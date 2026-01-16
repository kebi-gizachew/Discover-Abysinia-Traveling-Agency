import bcrypt from "bcrypt";
import Admin from "../models/Admin.js";
import generateAdmin from "../utils/generateAdmin.js";

// Register a new admin
export const registerAdmin = async (req, res) => {
  try {
    const {email, password} = req.body;
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = await Admin.create({
      email,
      password: hashedPassword,
    });

    const admin = generateAdmin(newAdmin);
    res.cookie(admin.name, admin.value, admin.options);
    res.status(201).json({ message: "Admin registered successfully", admin });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const loginAdmin=async(req,res)=>{
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const adminCookie = generateAdmin(admin);
    res.cookie(adminCookie.name, adminCookie.value, adminCookie.options);
    res.status(200).json({ message: "Login successful", adminCookie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};