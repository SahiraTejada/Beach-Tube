import { createError } from '../error.js';
import Comment from '../models/Comment.js';
import Video from '../models/Video.js';
import jwt from "jsonwebtoken";

export const addComment = async (req,res,next)=>{
    const newComment = new Comment({videoId:req.body.videoId, desc: req.body.desc,userId:req.body.userId})
    try{
      const saveComment = await newComment.save()
        res.status(200).send(saveComment)
    }catch(err){
        next(err)
    }
}

export const deleteComment = async (req,res,next)=>{
    try{
        const comment = await Comment.findById(res.params.id)
        const video = await Video.findById(res.params.id)
        //Solo la persona que commento o el dueno del video puede borrar
        if(req.user.id === comment.userId || req.user.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json('Comment deleted')
        }else{
            return next(createError(403,'Only deleted your comment'))
        }

    }catch(err){
        next(err)
    }
}


export const getComment = async (req,res,next)=>{
    try{
        const comments = await Comment.find({videoId:req.params.videoId});
        res.status(200).json(comments);

    }catch(err){
        next(err)
    }
}