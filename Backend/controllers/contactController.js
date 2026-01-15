import Contact from "../models/Contact.js";

// Handle contact form submission
export const ContactForm = async (req, res) => {
  try {
    const { name, email, phone, country, travelDate, destination, message } = req.body;
    const newContactMessage = await Contact.create({
      name,
      email,
        phone,
        country,
        travelDate,
        destination,
      message
    });
    res.status(201).json({ message: "Contact message submitted successfully", contactMessage: newContactMessage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const getAllContactMessages = async (req, res) => {
    try {
        const contactMessages = await Contact.find();
        res.status(200).json({ contactMessages });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const deleteContactMessage=async(req,res)=>{
    try {
        const { id } = req.params;
        const deletedContactMessage = await Contact.findByIdAndDelete(id);
        if (!deletedContactMessage) {
            return res.status(404).json({ message: "Contact message not found" });
        }
        res.status(200).json({ message: "Contact message deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};