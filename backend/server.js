import express, { json } from 'express'
import cor from 'cors'
import 'dotenv/config'
import connectDB from'./config/db.js' 
import connectCloudinary from './config/Cloudinary.js'






// App Config 

const app = express();
const PORT = process.env.PORT
connectDB();
connectCloudinary();



// Middleware

app.use(express.json())
app.use(cor())


// End Point 
app.get('/',(req,res)=>{
    res.send("API WORKING")
})




app.listen(PORT,console.log("Server Running On",+PORT))








