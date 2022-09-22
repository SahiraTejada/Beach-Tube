export const addVideo = async (req,res,next) =>{
 const newVideo = new VideoColorSpace({userId:req.user.id,...req.body});
 try{
    const savedVideo = await newVideo.save()
    res.status(200).json(savedVideo)
 }catch(err){next(err)}
}

export const updateVideo = async (req,res,next) =>{
     try{

 }catch(err){next(err)}
}

export const deleteVideo = async (req,res,next) =>{
     try{

 }catch(err){next(err)}
}

export const getVideo = async (req,res,next) =>{
    try{

 }catch(err){next(err)}
}