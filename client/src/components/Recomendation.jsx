import axios from 'axios'
import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
flex:2;
margin-left:30px;
`
const Recomendation = ({type}) => {
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        const fetchVideos = async () =>{
            const res = await axios.get(`/videos/${type}`)
            setVideos(res.data)
        }
        fetchVideos()
    },[type])
  return (
    <Container>
        {videos.map((video) => (
            <Card type='sm' key={video._id} video={video}/>
        ))}
    </Container>
  )
}

export default Recomendation