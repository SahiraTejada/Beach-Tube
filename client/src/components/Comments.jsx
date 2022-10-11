import styled from 'styled-components';
import {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import axios from 'axios';
import UserDefault from '../imgs/user.png';
import { useLocation } from 'react-router-dom';
const Container = styled.div`

`;

const Avatar = styled.img`
 width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color:white;
`
const NewComment = styled.div`
display:flex;
align-items:center;
gap:10px;
`;

const Input = styled.input`
border:none;
border-bottom:1px solid #373737;
background-color:transparent;
outline:none;
padding:5px;

width:100%;
font-size:14px;
font-weight: 400;
line-height: 20px;
margin:5px;
color: black;
`;

const Button= styled.button`
background-color:${(props) => props.type === "cancel" ? "transparent":" #9ED2C6"};

 text-transform:uppercase;
 border:none;
 border-radius:2px;
 height:max-content;
 padding:10px 16px;
 cursor:pointer;
 font-weight:700;
 letter-spacing: 0.5px;
color: black;
`
const Buttons = styled.div`
display:flex;
float:right;
margin-top:5px;


`;
const Comments = ({videoId}) => {

  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("");
  const [newComment, setNewComment] = useState({});
      const [CommentLists, setCommentLists] = useState([])
  const path = useLocation().pathname.split("/")[2];
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);
    

const handleComment = async ()=>{
 
   try{
      
        const res = await axios.post(`/comments/${videoId}`,{desc,videoId});
        setComments(res.data);
   }catch(err){
    console.log('vnjfibv8978776');
   }
 

}
  //TODO: ADD NEW COMMENT FUNCTIONALITY
console.log(videoId);
  return (
    <Container>
      <NewComment>
         <Avatar src={currentUser.img ? (currentUser.img): (UserDefault)} />
        <Input onClick={()=> setShow(true)} onChange={(e) => setDesc(e.target.value)}
        placeholder="Add a comment..." />
       
      </NewComment> {
       show ?  <Buttons><Button  onClick={()=> setShow(false)} type="cancel">Cancelar </Button><Button onClick={handleComment}>Comentar</Button></Buttons>: null
        }
      {comments.map(comment=>(
        <Comment key={comment._id} comment={comment}/>
      ))}
    </Container>
  );
};

export default Comments
