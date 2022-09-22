import { createError } from "../error.js"
import User from "../models/User.js"

export const update = async (req,res,next) =>{
   if(req.params.id === req.user.id){
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        }
        ,{new : true} //Retornar la version mas nueva
        )
        res.status(200).json(updatedUser)
        
    }catch(err){
        next(err)
    }

   }else{
    return next(createError(403,'Only update your account'))
   }
}

export const deleteUser = async (req,res,next) =>{
   if(req.params.id === req.user.id){
    try{
         await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted")
        
    }catch(err){
        next(err)
    }

   }else{
    return next(createError(403,'Only delete your account'))
   }
}

export const getUser =(req,res,next) =>{
   
}

export const subscribe =(req,res,next) =>{
   
}
export const unsubscribe =(req,res,next) =>{
   
}    

export const like =(req,res,next) =>{
   
}
export const dislike =(req,res,next) =>{
   
}
