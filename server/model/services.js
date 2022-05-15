import mongoose from "mongoose";
const serviceSchema=mongoose.Schema({
    name: String,
    image: String
});

var services = mongoose.model('services', serviceSchema);

export default services