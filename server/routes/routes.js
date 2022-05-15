import express from "express"

import { getServices, createSeller, getService, getSeller } from "../controller/controllerFunc.js"

const route = express.Router()

route.get('/', getServices)
route.post('/', getService)
route.get('/:services', getSeller)
route.get('/dashboard', createSeller)

export default route