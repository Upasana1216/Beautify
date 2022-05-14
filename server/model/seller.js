import mongoose from "mongoose";
const sellerSchema=mongoose.Schema({
    name: String,
    salonName: String,
    contactNumber:Number,
    address:String,
    certification:[String],
    salongImages:[String],
    availableSeats:Number,
    availableTime:String,
    Reviews:{type:String,default:''},
    RatingCount:{type:Number,default:0}

});

var seller = mongoose.model('seller', sellerSchema);

export default seller;
