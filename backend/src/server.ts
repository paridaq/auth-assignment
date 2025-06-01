import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db";
import authRoute from "./routes/authRoute"

dotenv.config()
// when we write dotenv
connectDB()




const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use('/api/auth',authRoute)

const port =8080;

app.listen(port,()=>{
    console.log("server is running on port 8080")
})