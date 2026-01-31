// controllers/contactController.js
import Contact from "../models/Contact.js";
import { parseRequestBody, sendJSON } from "../utils/helpers.js";

// ---------------- SUBMIT CONTACT FORM ----------------
export const ContactForm = async (req, res) => {
  try {
    const { name, email, phone, country, travelDate, destination, message } =
      await parseRequestBody(req);

    const newContactMessage = await Contact.create({
      name,
      email,
      phone,
      country,
      travelDate,
      destination,
      message,
    });

    sendJSON(res, 201, {
      message: "Contact message submitted successfully",
      contactMessage: newContactMessage,
    });
  } catch (error) {
    sendJSON(res, 500, { message: error.message });
  }
};

// ---------------- GET ALL CONTACT MESSAGES (ADMIN) ----------------
export const getAllContactMessages = async (req, res) => {
  try {

    const contactMessages = await Contact.find();
    sendJSON(res, 200, { contactMessages });
  } catch (error) {
    sendJSON(res, 500, { message: error.message });
  }
};

// ---------------- DELETE CONTACT MESSAGE (ADMIN) ----------------
export const deleteContactMessage = async (req, res, currentAdmin) => {
  try {
    

    const parts = req.url.split("/");
    const id = parts[parts.length - 1];

    const deletedContactMessage = await Contact.findByIdAndDelete(id);

    if (!deletedContactMessage) {
      return sendJSON(res, 404, { message: "Contact message not found" });
    }

    sendJSON(res, 200, {
      message: "Contact message deleted successfully",
      contactMessage: deletedContactMessage,
    });
  } catch (error) {
    sendJSON(res, 500, { message: error.message });
  }
};
