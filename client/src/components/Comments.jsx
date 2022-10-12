import styled from 'styled-components';
import {useState,useEffect,useReducer } from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import axios from 'axios';
import UserDefault from '../imgs/user.png';

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
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState({});
  const [inputs, setInputs] = useState({});
  const [reducerValue,forceUpdate] = useReducer(x=>x+1,0);

  useEffect(() => {
   
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        const UseRes = await axios.get(`/users/find/${currentUser._id}`);
        setUserId(UseRes.data);
        setComments(res.data);
      } catch (err) {
         console.err(err.response.data); 
      }
    };
    
    fetchComments();
  }, [videoId,currentUser._id,reducerValue]);
  

const handleComment = async (e)=>{
        const res = await axios.post(`/comments/`,{desc,videoId,userId});
        setInputs(res.data);
        forceUpdate();
}

  return (
    <Container>
      <NewComment>
         <Avatar src={currentUser.img ? (currentUser.img): (UserDefault)} />
      
        <Input onClick={()=> setShow(true)} onChange={(e) => setDesc(e.target.value)} 
        placeholder="Añadir comentarios..." />
       
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
