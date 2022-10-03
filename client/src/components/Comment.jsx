import styled from 'styled-components';
import { useEffect,useState } from 'react';
import axios from 'axios';
import {timeago} from './timeage_es';

const Container = styled.div`
display:flex;
gap:10px;
margin 30px 0px;
`;
const Avatar = styled.img`
border-radius: 50%;
width:45px;
height:45px;
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
color:#aaaaaa;
margin-left:5px;
`;
const Text = styled.span`
font-size:14px;

`;
const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/find/${comment.userId}`);
      setChannel(res.data)
    };
    fetchComment();
  }, [comment.userId]);

  return (
    <Container>
      <Avatar src={channel.img} />
      <Details>
        <Name>
          {channel.name} <Date>{timeago(comment.createdAt)}</Date>
        </Name>
        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  );
};
export default Comment
