import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import {Card,CardComponet} from '../components';
import axios from 'axios';
import CardComponent from "../components/CardComponent";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
  overflow-x: hidden;
`;

const Home = ({type}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video}/>
      ))}
    </Container>
  );
};

export default Home
