import mongoose from "mongoose";

const connectDB=async()=>{
    try{

    const conn = await mongoose.connect('mongodb+srv://paridabiswa2k:ishita123@cluster0.g8dhaeg.mongodb.net/')
    console.log(`mongodb database is connected to :${conn.connection.host}`)
    }catch(error){
        console.log(error)


    }
}
export default connectDB