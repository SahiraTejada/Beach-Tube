import jwt from 'jsonwebtoken';
import { createError } from "./error.js"

export  const verifyToken = (req,res,next) =>{
    const token = req.cookies.access_token
    if(!token) return next(createError(401,'you are not authenticated'));

    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(createError(403,'Token not valid!'));
        req.user = user;
        //Despues de hacer la verificacion va a continuar donde se quedo ya sea en borrar usuario, actualizar.....
        next();
    });
}

