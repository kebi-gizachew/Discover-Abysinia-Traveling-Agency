import mongoose from "mongoose";
const connectDB=async()=>{
    try{
        console.log("Going to be connected");
    const connect=mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
}catch(err){
    console.log(err)
    process.exit(1)

}
}
export default connectDB;