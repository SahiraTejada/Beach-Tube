import express from 'express';
import mongoose from 'mongoose';
import dotnev from 'dotenv';
import userRoutes from './routes/users.js';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comments.js';
import authRoutes from './routes/auth.js';
import cokkieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotnev.config();

const connect = () =>{
  mongoose.connect(process.env.MONGO)
  .then(()=>{
    console.log('Connect to DB');
  })
  .catch((err)=>{
    throw err;
  })
}

app.use(cors());
app.use(cokkieParser())
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})
app.use('/api/users',userRoutes);
app.use('/api/videos',videoRoutes);
app.use('/api/comments',commentRoutes);
app.use('/api/auth',authRoutes);
//Manejar los errores
app.use((err,req,res,next)=>{
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success:false,
    status,
    message
  })
});
const PORT = 8800;
app.listen(PORT,()=>{
    connect()
    console.log("server......")
})