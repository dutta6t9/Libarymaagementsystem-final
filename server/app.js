import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import bookRoutes from "./routes/bookRoutes.js"
import errorMiddleware from "./middleware/error.middleware.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*',  // Allow all origins for testing
    credentials: true
}));
app.use(morgan("dev"))

app.use("/hi",(req,res) => {
    res.send("hello")
})

app.use("/books",bookRoutes)

app.all("*",(req,res) => {
    res.status(404).send("OOPS!! 404 page not found") 
})

app.use(errorMiddleware)

export default app