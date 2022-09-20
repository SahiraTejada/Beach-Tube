import express from 'express';
import mongoose from 'mongoose';
import dotnev from 'dotenv';
import userRoutes from './routes/users.js';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comments.js';
import authRoutes from './routes/auth.js';

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

app.use('/api/users',userRoutes);
app.use('/api/video',videoRoutes);
app.use('/api/comment',commentRoutes);
app.use('/api/auth',authRoutes);

const PORT = 8800;
app.listen(PORT,()=>{
    connect()
    console.log("server......")
})