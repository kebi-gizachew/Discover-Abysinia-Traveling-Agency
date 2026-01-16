import Destination from "../models/Destination.js";
export const getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json({ destinations });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const createDestination=async(req,res)=>{
    try {
        const { image, highlight, price, category, location, title, description, aria, data, duration } = req.body;
        const newDestination = await Destination.create({
            image,
            highlight,
            price,
            category,
            location,
            title,
            description,
            aria,
            data,
            duration
        });
        res.status(201).json({ message: "Destination created successfully", destination: newDestination });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getDestinationById=async(req,res)=>{
    try {
        const { id } = req.params;
        const destination = await Destination.findById(id);
        if (!destination) {
            return res.status(404).json({ message: "Destination not found" });
        }
        res.status(200).json(destination);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteDestination=async(req,res)=>{
    try {
        const { id } = req.params;  
        const deletedDestination = await Destination.findByIdAndDelete(id);
        if (!deletedDestination) {
            return res.status(404).json({ message: "Destination not found" });
        }
        res.status(200).json({ message: "Destination deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

