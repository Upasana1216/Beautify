import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name: String,
    contactNumber:Number,
    email:String,
    password:String

});

var user = mongoose.model('user', userSchema);

export default user;