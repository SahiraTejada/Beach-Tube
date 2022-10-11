import React,{useEffect,useState} from 'react';
import axios from 'axios';



const New = () => { 
    
    useEffect(()=>{
        getComments();
    },[]);
    const [comments, setComments] = useState([]);
    const [loading,setLoading] = useState(false);
    

    const getComments = async() =>{
        try{
            const res = await axios.get('/comments/632e55cd3279dd8de3c3ca39');
            setComments(res.data);
            setLoading(true);
        }
        catch(err){
            alert(err.message)
        }
    }
    
  return (
    <div>
    
        <h2>
            
        </h2>
    </div>
  )
}

export default New