import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyIcon from '@mui/icons-material/Reply';
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Comments from "../components/Comments";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { dislike, fetchSuccess, like } from "../features/videoSlice";
import { subscription } from "../features/userSlice";
import {timeago} from '../timeage_es';
import Recomendation from "../components/Recomendation";

import UserDefault from '../imgs/user.png'

const Container = styled.div`
margin: 20px 50px;
display:flex;

`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color:white;

`;

const Content = styled.div`
margin-left:20px;
 flex: 3.2;
`;


const VideoWrapper = styled.div`

`;
const Title = styled.h1`
font-weight:400;
margin-top:10px;
font-size:18px;
color: black;
`;
const Details = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
color: black;
`;
const Info = styled.span`
font-weight:500;
color: black; !important;
`;
const Button = styled.div`
display:flex;
align-items:center;
padding-bottom:7px;
gap:5px;
cursor:pointer;

`;
const Buttons = styled.div`
display:flex; 
gap:20px;
`;


const Hr = styled.hr`
border : 1px solid #383838;
margin:16px 0px;
`;

const Channel = styled.div`
display:flex;
justify-content:space-between;

`;

const ChannelInfo = styled.div`
display:flex;
gap:20px;
color: black;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;
const Subscribe = styled.button`
background-color:#54BAB9;
color: black;
font-family: GothicA1-Bold;
 text-transform:uppercase;
 border:none;
 border-radius:2px;
 height:max-content;
 padding:10px 16px;
 cursor:pointer;
 font-weight:500;
 letter-spacing: 0.5px;

`;
const ChannelName = styled.span`
font-weight:500;
font-family: GothicA1-Bold;
`;
const ChannelCounter = styled.span`
margin-top:5px;
margin-bottom:20px;
font-size:12px;
color: black;

`;
const Description = styled.p`
font-size:14px;
color: black;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;

`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };

  return (
    <Container>
     <Content>
      
        <VideoWrapper>
          <VideoFrame src={currentVideo.videoUrl} controls />
        </VideoWrapper>
        <Title >{currentVideo.title}</Title>
        <Details>
         {/*<Try/>*/} 
          <Info>{currentVideo.views} vistas • {timeago(currentVideo.createdAt)}</Info>
          <Buttons>
            
             <Button onClick={handleLike}>
              {currentVideo.likes?.includes(currentUser?._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )}{" "}
              {currentVideo.likes?.length}
            </Button>
            <Button style={{marginRight:'7px'}} onClick={handleDislike}>
              {currentVideo.dislikes?.includes(currentUser?._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownOffAltOutlinedIcon />
              )}{" "}
              No me gusta
            </Button>
          
    
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
						<Avatar src={channel.img ? (channel.img): (UserDefault)}/>
					
					<ChannelDetail>
						<ChannelName>{channel.name}</ChannelName>
						<ChannelCounter>{channel.subscribers} suscriptores</ChannelCounter>
						<Description>{currentVideo.desc}</Description>
					</ChannelDetail>
					</ChannelInfo>
         <Subscribe onClick={handleSub}>
            {currentUser.subscribedUsers?.includes(channel._id)
              ? "subscrito"
              : "subscribirse"}
          </Subscribe>
        </Channel>
     
				<Hr/>
				<Comments videoId ={currentVideo._id}/>
      </Content>
    <Recomendation type='random'/>
    </Container>
  )
};

export default Video;
