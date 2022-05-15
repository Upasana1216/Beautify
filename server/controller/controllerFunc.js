import mongoose from "mongoose"
import user from "../models/user.js"
import seller from "../models/seller.js"
import services from "../models/services.js"

export const getServices = async (req, res) => { 
    try {
        const getServices = await services.find();
                
        res.status(200).json(getServices);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getSellers = async (req, res) => { 
    const { services } = req.params;

    try {
        const seller = await seller.findById(services);
        
        res.status(200).json(seller);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSeller = async (req, res) => { 
    const { id } = req.params;

    try {
        const seller = await seller.findById(id);
        
        res.status(200).json(seller);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSeller = async (req, res) => {
    const { name, salonName, contactNumber, address, city, services, certifications, salonImages, availableSeats,availableTime,Reviews,RatingCount } = req.body;

    const newSeller = new seller({ name, salonName, contactNumber, address, city, services, certifications, salonImages, availableSeats,availableTime,Reviews,RatingCount })

    try {
        await newSeller.save();

        res.status(201).json(newSeller);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const { name, contactNumber, email } = req.body;

    const newUser = new user({ name, contactNumber, email })

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}