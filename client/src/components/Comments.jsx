import styled from 'styled-components';
import {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import axios from 'axios';

const Container = styled.div`

`;


const NewComment = styled.div`
display:flex;
align-items:center;
gap:10px;
`;
const Avatar = styled.img`
border-radius: 50%;
width:45px;
height:45px;
`;
const Input = styled.input`
border:none;
border-bottom:1px solid #373737;
background-color:transparent;
outline:none;
padding:5px;
color:white;
width:100%;
font-size:14px;
font-weight: 400;
line-height: 20px;
margin:5px;
`;
const Comments = ({videoId}) => {

  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);

  //TODO: ADD NEW COMMENT FUNCTIONALITY

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser.img} />
        <Input placeholder="Add a comment..." />
      </NewComment>
      {comments.map(comment=>(
        <Comment key={comment._id} comment={comment}/>
      ))}
    </Container>
  );
};

export default Comments
