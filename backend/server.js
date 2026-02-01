import express, { json } from 'express'
import cor from 'cors'
import 'dotenv/config'
import connectDB from'./config/db.js' 
import connectCloudinary from './config/Cloudinary.js'
import userRoute from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'






// App Config 

const app = express();
const PORT = process.env.PORT
connectDB();
connectCloudinary();



// Middleware

app.use(express.json());
app.use(cor());

// Middleware to parse urlencoded form-data
app.use(express.urlencoded({ extended: true }));

// End Point 

app.use('/api/user',userRoute)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

 



app.get('/',(req,res)=>{
    res.send("API WORKING")
})




app.listen(PORT,console.log("Server Running On",+PORT))








