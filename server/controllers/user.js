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

export const getUser = async(req,res,next) =>{
   
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
        
    }catch(err){
        next(err)
    }

}

export const subscribe = async (req,res,next) =>{
   
    try{
        //Id del usuario
         await User.findById(req.params.id,{
            //Id del canal de los otros usuarios
            $push:{subscribedUsers:req.params.id}
         })
         //Incrementar el numero de subscriptores
         await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:1},
         });
          res.status(200).json("Plus One subcriber")
    }catch(err){
        next(err)
    }   
}
export const unsubscribe = async(req,res,next) =>{
    try{
        //Id del usuario
         await User.findById(req.params.id,{
            //Id del canal de los otros usuarios
            //Borrar el Id del array del los subcriptores
            $pull:{subscribedUsers:req.params.id}
         })
         //Disminuir el numero de subscriptores
         await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:-1},
         });
          res.status(200).json("Menus One subcriber")
    }catch(err){
        next(err)
    }   
}    

export const like = async (req,res,next) =>{
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
export const dislike =  async(req,res,next) =>{
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
