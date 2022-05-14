import user from "../model/user";
import seller from "../model/seller";
import express from "express";
import mongoose from "mongoose";

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("upasana")
})

export default router;

// export const getPosts = async (req, res) => { 
//     try {
//         const postMessages = await PostMessage.find();
                
//         res.status(200).json(postMessages);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }