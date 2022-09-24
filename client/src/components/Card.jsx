import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import {format} from "timeago.js";
import {timeago} from './timeage_es.js';

const Container= styled.div`
width:${(props) => props.type === "sm" ? "370px":"230px"};
padding-bottom:${(props) => props.type === "sm" ? "10px":"0px"};
margin: ${(props) => props.type === "sm" ? "0px":"20px"};
display: ${(props) => props.type === "sm" && "flex"};


`;

const Image = styled.img`
height: ${(props) => props.type === "sm" ? "110px":"155px"};
width:${(props) => props.type === "sm" ? "180px":"245px"};
`;

const Details = styled.div`
display: flex;
margin-top:${(props) => props.type !== "sm" && "10px"};
float: ${(props) => props.type === "sm" && "right"};
`;

const ChannelImage = styled.img`
border-radius: 50%;
background-color: #999;
width:35px;
height:35px;
display:${(props) => props.type === "sm" && "none"};

`;

const Texts = styled.div`
padding-left:10px;
over-flow-hidden;
text-overflow: ellipsis; 
flex-wrap:wrap;

`;

const Title = styled.h1`
font-size:${(props) => props.type === "sm" ? "14px":"0.9rem;"};
margin-right:0;
over-flow-hidden;
text-overflow: ellipsis; 
white-space:wrap;
font-weight: 500;
letter-spacing:0.1px;
color:white;
margin-bottom:5px;
`;

const ChannelName = styled.p`
font-size: "14px";
color: #aaaaaa !important;
line-height: ${(props) => props.type === "sm" && "20px"};
`;


const Info = styled.p`
font-size: 14px;
color: #aaaaaa !important;

`;

const Card = ({type,video}) => {

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src={video.imgUrl}
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src={channel.img}
          />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{video.views} views • {timeago(video.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card
