import userModel from '../models/userModel.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// Route for user Login 

const userLogin = async (req, res) => {
    try {
        const {email,password}=req.body;
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({ success: false, message: "User does not exist " })
        }

        const matchUser = await bcrypt.compare(password,user.password);

        if(matchUser){
            const token = createToken(user._id)
            return res.json({ success: true, token })
        }
        else{
            return res.json({ success: false, message: "Password or email inccorrect " })
        }

    } catch (error) {
        return res.json({ success: false, message: message.error })
    }

}




// Route for user register 

const userRegister = async (req, res) => {
    try {

        let { name, email, password } = req.body;

        // Check User Exist 
        const existUser = await userModel.findOne({ email });
        if (existUser) {
            return res.json({ success: false, message: "User already created " })
        }

        // Email & Password Validation 
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter correct email format " })
        }
        if (password.length > 8) {
            return res.json({ success: false, message: "Enter strong password " })
        }


        // Hash the password 

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt)

        const user = await userModel.create({name,email,password:hashPassword})
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
console.log(error)
res.json({success:false,message:error.message})
    }
} 




// Route for admin login 

const adminLogin = async (req, res) => {

    try {

        const {email,password}= req.body;

        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        }
        else{
            res.json({success:false, message:"Invaild Email or Password"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }

}

export {
    userLogin, userRegister, adminLogin
}