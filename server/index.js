import express from 'express';
import mongoose from 'mongoose';
import dotnev from 'dotenv';

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

const PORT = 8800;
app.listen(PORT,()=>{
    connect()
    console.log("server......")
})