import {Request,Response} from 'express'
import userModel from '../models/userModel';

export const registerController=async(req:Request,res:Response):Promise<any>=>{

const {name,email,password} = req.body;
try{



if(!name){
    return res.send({
        message:'name is required'
    })
}
if(!email){
    return res.send({
        message:'email is required'
    })
}
if(!password){
    return res.send({
        message:"password is required"
    })
}

const existingUser = await userModel.findOne({email})
if(existingUser){
    return res.send({
        message:"this email is alredy exist"
    })
}
const newuser = new userModel({name,email,password})
await newuser.save();
res.status(200).send({
    success:true,
    message:'user registered succesfully',
    newuser
})
}catch(error){
    console.log(error)
    res.send({
        success:false,
        message:'server issue',
        error
    })
}

}

export const loginController = async(req:Request,res:Response):Promise<any>=>{
    const {email,password} = req.body;
    try {
        if(!email){
            return res.send({
                message:"email is required to login"
            })
        }
        if(!password){
            return res.send({
                message:"password is  required"
    })
}
        
       const user = await userModel.findOne({email})
       if(user?.password!=password){
        return res.send({
            message:'signup before signin'
        })
       }
       res.send({
        success:true,
        message:'signin successfully',
        user
       })
    } catch (error) {
        console.log(error)
        return res.send({
            success:false,
            message:"server error",
            error
        })
        
    }
}