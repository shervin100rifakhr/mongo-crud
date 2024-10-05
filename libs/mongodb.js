import mongoose from "mongoose";


const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connceted");
    }catch(error){
        console.log(error.message);
        console.log(process.env.MONGODB_URI);
        
    }
}


export default connectMongoDB