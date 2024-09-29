import mongoose from "mongoose";

const issuebookSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Book/Movie name is required..."],
        lowrcase: true
    },
    author:{
        type: String,
        required:[true,"Author name is required..."],
        lowrcase: true
    },
    issuedate:{
        type: Date,
        required:[true,"Issue date is required..."],
    },
    returnDate: { 
        type: Date, 
        required: [true,"Return date is required..."]
    },
    remarks: {
         type: String 
    }
})

export default mongoose.model("issue",issuebookSchema)