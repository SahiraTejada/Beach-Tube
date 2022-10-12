import styled from 'styled-components';
import { useEffect,useState } from 'react';
import axios from 'axios';
import {timeago} from '../timeage_es';
import UserDefault from '../imgs/user.png';



const Container = styled.div`
display:flex;
gap:10px;
margin 30px 0px;
`;

const Details = styled.div`
display:flex;
flex-direction:column;
gap:10px;
margin:5px;
`;

const Name = styled.span`
font-size: 13px;
font-weight:500;
`;
const Date = styled.span`
font-size:12px;
font-ewight:400;
color: black;
margin-left:5px;
`;
const Text = styled.span`
font-size:14px;

`;
const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color:white;
`;
const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComment = async () => {
      try{
      const res = await axios.get(`/users/find/${comment.userId}`);
      setChannel(res.data);
      }catch(err){
        console.err(err.response.data); 
      }
    }

    fetchComment();
  }, [comment.userId]);

  return (
   <>
    <Container>
      <Avatar src={channel.img ? (channel.img): (UserDefault)} />
     
      <Details>
        <Name>
          {channel.name} <Date>{timeago(comment.createdAt)}</Date></Name> 
       
        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  
</>
  );
};
export default Comment
