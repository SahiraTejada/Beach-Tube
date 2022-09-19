import styled from 'styled-components';
import Comment from './Comment';

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
const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src='https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528'/>
        <Input placeholder='Agrega un comentario...'/>
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  )
}

export default Comments
