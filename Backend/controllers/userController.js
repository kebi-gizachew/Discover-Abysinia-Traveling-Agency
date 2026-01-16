import bcrypt from "bcrypt";
import User from "../models/User.js";
import generateCookie from "../utils/generateCookie.js";

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, country } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      country
    });

    const cookie = generateCookie(newUser);
    res.cookie(cookie.name, cookie.value, cookie.options);
    res.status(201).json({ message: "User registered successfully", cookie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getUsers=async(req,res)=>{
  try {
    const users=await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }   
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const cookie = generateCookie(user);
    res.cookie(cookie.name, cookie.value, cookie.options);
    res.status(200).json({ message: "Login successful", cookie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Logout user
export const logoutUser = (req, res) => {
  res.clearCookie("user", {
    httpOnly: true,
    secure: false,
    sameSite: "lax"
  });
  res.status(200).json({ message: "Logout successful" });
};
