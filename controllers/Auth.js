import { SendVerfionCode, welcomeEmail } from "../middleware/Email.js"
import Usermodel from "../models/User.js"
import bcryptjs from "bcryptjs"
const register= async(req,res)=>{
    try {
       const{email,password,name}=req.body
        if(!email || !password || !name){
            return res.status(400).json({success:false,message:"All fields are requires"})
        }
        const ExistsUser =await Usermodel.findOne({email})
        if(ExistsUser){
            return res.status(400).json({success:false,message:"User Already Exists please Login"})
        }
        const hasPassword = await bcryptjs.hashSync(password,10)
        const verficationCode = Math.floor(100000 + Math.random() * 900000).toString()
        const user = new Usermodel({
            name,
            email,
            password:hasPassword,
            verficationCode
        })
        await user.save()
        SendVerfionCode(user.email,verficationCode,user.name)
        return res.status(200).json({success:true,message:"User Register Successfully",user})
    } catch (error) {
        return res.status(500).json({success:false,message:"intenral server error"})
    }
}

const VerfiyEmail = async (req, res)=>{
    try {
        const {code} =req.body
        const user = await Usermodel.findOne({
            verficationCode:code
        })
        if(!user){
        return res.ststus(400).json({success:false, message:"inavlid or Expired Code"})
        }
        user.isVerified=true,
        user.verficationCode=undefined
        await user.save()
        await welcomeEmail(user.email,user.name)
        return res.status(200).json({success:true,message:"User Verfiy Email Successfully",})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"intenral server error"})

    }
}
export{register,VerfiyEmail }