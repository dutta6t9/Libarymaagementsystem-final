import AppError from "../utils/Error.util.js"
import bookModel from "../models/addBookModel.js"
import issueBookModel from "../models/issueBookModel.js"

const addBooks = async(req,res,next) => {
    try{
        const{type,name,author,dateOfProcurement,quantity} = req.body
        if(!type || !name || !author || !dateOfProcurement || !quantity){
            return next(new AppError("All field are require...",401))
        }

        const newBookdata = new bookModel({
            type: type,
            name: name,
            author: author,
            dateOfProcurement: dateOfProcurement,
            quantity: quantity
        }) 

        await newBookdata.save()
        res.status(201).json({
            success: true,
            message: "Book/Movie added successfully",
            data: newBookdata
        })
    }catch(err){
        
        return next(new AppError(err.message,404))
    }
}
const bookIssue = async(req,res,next) => {
    try{
        const {name,author,issuedate,returnDate,remarks} = req.body

        if(!name || !author || !issuedate || !returnDate){
            return next(new AppError("All field are require...",401))
        }

        const book = await bookModel.findOne({name:name,author:author})

        if(!book){
            return next(new AppError("Book not found",400))
        }

        if(book.quantity <= 0){
            return next(new AppError("No copies available",400))
        }

        const bookIssue = new issueBookModel({
            name: name,
            author: author,
            issuedate: issuedate,
            returnDate: returnDate,
            remarks: remarks
        })

        await bookIssue.save()

        book.quantity -= 1
        await book.save()

        res.status(201).json({
             success: true,
             message: 'Book issued successfully', 
             bookIssue 
        });
    }catch(err){
        return next(new AppError(err.message,404))
    }
}

export {
    addBooks,
    bookIssue
}