import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Try () {
    const [post ,setPost] = useState({})
    const [id,setId] = useState('632e55203279dd8de3c3ca36')
    useEffect(()=>{
        axios.get(`http://localhost:8800/api/videos/find/${id}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        }).catch(err =>{
            
        })
    },[])
  return (
    <div>
        <input type='text' value={id} onChange={(e) => setPost(e.target.value)}/>
        <div>{post.title}</div>
       {/* <ul>
            {
                Array.from(posts).map(post => (<li >{post.updatedAt
}</li>))
            }
        </ul>*/}
    </div>
  )
}

export default Try