import Booking from "../models/Booking.js"
import User from "../models/User.js"
import Destination from "../models/Destination.js"
import mongoose from "mongoose"
import {sendJSON} from "../utils/helpers.js"
export const createBooking=async (req, res, currentUser, body)=>{
  try{
    if (!currentUser){
      return sendJSON(res, 401,{message:"Unauthorized"})
    }
    const{fullName,email,transport,destinationId,travelDate,travelers,}=body||{}
    if (!fullName ||!email ||!transport ||!destinationId ||!travelDate ||!travelers){
      return sendJSON(res, 400,{message: "All booking fields are required",})
    }
    if(!mongoose.Types.ObjectId.isValid(destinationId)){
      return sendJSON(res,400,{message:"Invalid destination ID" })
    }
    const user=await User.findById(currentUser._id)
    if (!user){
      return sendJSON(res,404,{message:"User not found"})
    }
    const destination=await Destination.findById(destinationId)
    if (!destination){
      return sendJSON(res,404,{message:"Destination not found"})
    }
    const booking=await Booking.create({user: currentUser._id,fullName,email,transport,destination: destinationId,travelDate,travelers,})
    return sendJSON(res,201,{message:"Booking created successfully",booking,
    })
  }catch(error){
    console.error("CREATE BOOKING ERROR:",error)
    return sendJSON(res,500,{message:"Failed to create booking",})
  }
}

export const getUserBookings=async (req, res, currentUser)=>{
  try {
    if (!currentUser) {
      return sendJSON(res, 401, {message:"Unauthorized" })
    }
    const bookings = await Booking.find({
      user: currentUser._id,
    }).populate("destination")

    return sendJSON(res, 200, { bookings })

  } catch (error) {
    console.error("GET BOOKINGS ERROR:", error)
    return sendJSON(res, 500, {
      message: "Failed to fetch bookings",
    });
  }
};

export const cancelBooking=async(req,res,currentUser)=>{
  try {
    if (!currentUser){
      return sendJSON(res,401,{message:"Unauthorized"})
    }

    const bookingId = req.url.split("/").pop()

    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
      return sendJSON(res, 400, { message: "Invalid booking ID" });
    }

    const booking = await Booking.findOneAndDelete({
      _id: bookingId,
      user: currentUser._id,
    });

    if (!booking) {
      return sendJSON(res, 404, {
        message: "Booking not found",
      });
    }

    return sendJSON(res, 200, {
      message: "Booking canceled successfully",
      booking,
    });

  } catch (error) {
    console.error("CANCEL BOOKING ERROR:", error);
    return sendJSON(res, 500, {
      message: "Failed to cancel booking",
    });
  }
};
