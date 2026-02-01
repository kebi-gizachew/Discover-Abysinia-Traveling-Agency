// controllers/userController.js
import bcrypt from "bcrypt"
import User from "../models/User.js"
import generateCookie from "../utils/generateCookie.js"
import {sendJSON} from "../utils/sendJSON.js"

export const registerUser = async (req, res, body) => {
  try {
    const {name,email,password,phone,country}=body||{};
    if (!name||!email||!password||!phone||!country) {
      return sendJSON(res,400,{message:"All fields are required" });
    }
    const existingUser = await User.findOne({email });
    if (existingUser){
      return sendJSON(res, 400, { message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      country,
    });

    const cookie = generateCookie(newUser);
    res.setHeader(
      "Set-Cookie",
      `${cookie.name}=${cookie.value}; HttpOnly; Path=/; SameSite=Lax`
    );

    return sendJSON(res, 201, {
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("REGISTER USER ERROR:", error);
    return sendJSON(res, 500, { message: "Failed to register user" });
  }
};
export const loginUser = async (req, res, body) => {
  try {
    const { email, password } = body || {};

    if (!email || !password) {
      return sendJSON(res, 400, { message: "Email and password required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return sendJSON(res, 400, { message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return sendJSON(res, 400, { message: "Invalid email or password" });
    }

    const cookie = generateCookie(user);
    res.setHeader(
      "Set-Cookie",
      `${cookie.name}=${cookie.value}; HttpOnly; Path=/; SameSite=Lax`
    );

    return sendJSON(res, 200, {
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("LOGIN USER ERROR:", error);
    return sendJSON(res, 500, { message: "Failed to login user" });
  }
};
export const logoutUser = (req, res) => {
 
  res.setHeader("Set-Cookie", `user=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`);
  return sendJSON(res, 200, { message: "Logout successful" });
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    return sendJSON(res, 200, { users });
  } catch (error) {
    console.error("GET USERS ERROR:", error);
    return sendJSON(res, 500, { message: "Failed to fetch users" });
  }
};
