import bcrypt from "bcrypt"
import Admin from "../models/Admin.js"
import generateAdmin from "../utils/generateAdmin.js"
import {sendJSON } from "../utils/helpers.js"
import {setCookie } from "../utils/setCookie.js"
export const registerAdmin=async (req, res, body)=>{
  try {
  const {email,password} = body || {}
    if (!email||!password) {
      return sendJSON(res,400,{
        message: "Email and password required",
      })
    }
    const existingAdmin=await Admin.findOne({email })
    if (existingAdmin) {
      return sendJSON(res, 400, {
        message: "Admin already exists",
      })
    }

    const hashedPassword=await bcrypt.hash(password, 10)

    const newAdmin=await Admin.create({
      email,
      password: hashedPassword,
    })

    const adminCookie=generateAdmin(newAdmin);
    setCookie(res,adminCookie.name,adminCookie.value,adminCookie.options
    )
    return sendJSON(res,201,{
      message: "Admin registered successfully",
    })

  }catch (error) {
    return sendJSON(res, 500,{message: error.message || "Server error",});
  }
}
export const loginAdmin=async (req, res, body)=>{
  try {
    const {email,password}=body || {};
    if (!email || !password) {
      return sendJSON(res,400,{message: "Email and password required",});
    }
    const admin=await Admin.findOne({ email });
    if (!admin) {
      return sendJSON(res, 400, {message: "Invalid email or password",});
    }
    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return sendJSON(res, 400, {
        message: "Invalid email or password",
      });
    }

    const adminCookie = generateAdmin(admin);
    setCookie(res,adminCookie.name,adminCookie.value,adminCookie.options
    );
    return sendJSON(res, 200, {message: "Login successful",});
  }catch (error) {
    return sendJSON(res, 500,{
      message: error.message || "Server error",
    });
  }
};
