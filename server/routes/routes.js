import express from "express"

import { getServices } from "../controller/controllerFunc.js"

const route = express.Router()

route.get('/', getServices)
// route.post('/', createSeller)

export default route