import mongoose from "mongoose";

const dbConnect = async() => {
    try{
        const cnn = await mongoose.connect(process.env.DB_URL)
        console.log(`db connect at ${cnn.connection.host}`)
    }catch(e){
        console.log(e)
        process.exit(1)
    }
}

export default dbConnect