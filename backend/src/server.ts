import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('whatsapp')
})

const port =8080;

app.listen(port,()=>{
    console.log("server is running on port 8080")
})