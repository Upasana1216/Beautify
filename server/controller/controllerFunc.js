import mongoose from "mongoose"
import user from "../models/user.js"
import seller from "../models/seller.js"
import services from "../models/services.js"

export const getServices = async (req, res) => { 
    try {
        const getServices = await services.find();
                
        res.status(200).json(services);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSeller = async (req, res) => {
    const { name, salonName, contactNumber, address, services, certifications, salonImages, availableSeats,availableTime,Reviews,RatingCount } = req.body;

    const newSeller = new seller({ name, salonName, contactNumber, address, services, certifications, salonImages, availableSeats,availableTime,Reviews,RatingCount })

    try {
        await newSeller.save();

        res.status(201).json(newSeller );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// export const createSeller = (req, res) => {
//     res.send("seller Created")
// }