import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import routes from "./routes/routes";

const app=express();

app.use('/server',routes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/beautify");

app.listen(8082,function(){
    console.log("server started")
})

