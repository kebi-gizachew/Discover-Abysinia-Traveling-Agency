import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoutes.js"; 
import adminRoute from"./routes/adminRoutes.js";
import destinationRoute from "./routes/destinationRoutes.js";
import contactRoute from "./routes/contactRoutes.js";
import bookingRoute from "./routes/bookingRoutes.js";
const PORT = process.env.PORT ||5000
dotenv.config()
const app = express()

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

connectDB();
app.use('/api/users',userRoute)
app.use('/api/admins',adminRoute)
app.use('/api/destinations',destinationRoute)
app.use('/api/contacts',contactRoute)
app.use('/api/bookings',bookingRoute)
app.listen(PORT,()=>console.log(`Server is running on https://localhost:${PORT}`))