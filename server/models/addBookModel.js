import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    type: {
        type: String,
        enum:['Book', 'Movie'],
        required:[true]
    },
    name:{
        type: String,
        required:[true,"Book/Movie name is required..."],
        lowercase: true
    },
    author:{
        type: String,
        required:[true,"Author name is required..."],
        lowercase: true
    },
    dateOfProcurement:{
        type: Date,
        required:[true,"Date is required..."],
    },
    quantity:{
        type: Number,
        required:[true,"Quantity is required..."],
        min: 1
    }
})

export default mongoose.model("book",bookSchema)