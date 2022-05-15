import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import route from "./Routes/routes.js";

const app = express()

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use('/routes', route)

mongoose.connect("mongodb://localhost:27017/beautifyDB", {useNewUrlParser: true})
    .then(() => app.listen(8000, () => console.log(`Server is up running on port 8000`)))
    .catch((error) => console.log(`${error} did not connect`))