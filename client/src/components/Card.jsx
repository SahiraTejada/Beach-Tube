import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {timeago} from './timeage_es';

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "240px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  margin: ${(props) => props.type === "sm" ? "0px":"15px"};
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
 height: ${(props) => props.type === "sm" ? "110px":"155px"};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top:${(props) => props.type !== "sm" && "10px"};
float: ${(props) => props.type === "sm" && "right"};
  gap: 12px;
  flex: 1;
 
`;

const ChannelImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`
`;

const Title = styled.h1`
  font-size: 15px;
  font-weight: 500;
  color: white;
  margin-bottom:5px;
  display: inline-block;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2; // max nb lines to show
-webkit-box-orient: vertical;
    
`;

const ChannelName = styled.p`
  font-size: 14px;
  color: #aaaaaa ;
  margin:7px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color:  #aaaaaa;
`;

const Card = ({ type, video }) => {
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
          <div>
          <ChannelImage
            type={type}
            src={channel.img}
          /></div>
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{video.views} vistas • {timeago(video.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
