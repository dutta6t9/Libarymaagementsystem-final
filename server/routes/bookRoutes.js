import express from "express"
import { addBooks, bookIssue } from "../controller/bookController.js"

const bookRoutes = express.Router()

bookRoutes.post("/addbooks",addBooks)
bookRoutes.post("/issuebook",bookIssue)

export default bookRoutes