import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";
import {timeago} from '../timeage_es';
import UserDefault from '../imgs/user.png'

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "240px"};
  margin-bottom: ${(props) => (props.type !== "sm" && "45px")};
  cursor: pointer;
  margin: ${(props) => props.type === "sm" ? "0px":"15px"};
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
  padding-bottom: ${(props) => props.type === "sm" && "15px"};
`;

const Image = styled.img`
  width: ${(props) => props.type === "sm" ? "200px":" 100%"};
 height: ${(props) => props.type === "sm" ? "110px":"155px"};
  background-color: #A39980;
  flex: 1;
  box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
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
  background-color:white;
  display: ${(props) => props.type === "sm" && "none"};
  
`;

const Texts = styled.div`
`;

const Title = styled.h1`
  font-size: 15px;
  font-weight: 500;
  color: black;
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
  color: #444444 ;
  margin:7px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color:  #444444;
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
      <Container type={type}  title = {video.title}>
          <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
          <Image
          type={type}
          src={video.imgUrl}
          />
          <Details type={type}>
          
          <div>
            <ChannelImage
              type={type}
              src={channel.img ? (channel.img): (UserDefault)}
              style={{position:'static'}}
            />
            </div>
          <Texts>
            <Title >{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{video.views} vistas • {timeago(video.createdAt)}</Info>
          </Texts>
        </Details>
        </Link>
      </Container>

  );
};

export default Card;
