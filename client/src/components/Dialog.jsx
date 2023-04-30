import React  from "react";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
const Container = styled.div`
width:100vw;
display:flex;
height: calc(100vh - 8.8vh);
`;

const Content = styled.div`
 display:flex;
 align-items:center;
 justify-content: center; 
 width:100%;

`;

const DialogText= styled.div`

width:50%;
 font-size:25px;
  display:flex;
 align-items:center;
 justify-content: center; 
 flex-direction:column;
 text-align:center;
`;
const Button = styled.button`
 padding: 10px 15px;
  color: #303030;
  border:none;
  border-radius: 3px;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  
  align-items: center;

  text-transform:uppercase;
  margin-bottom: 20px;
  font-size:16px;
  
`;
const Buttons = styled.div`
display:flex;
gap:60px;
margin-top:80px;
`;

const Dialog = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <DialogText>
          To watch the videos  you need to log in to your account or create a new one.
          <Buttons> 
             <Button style={{backgroundColor:'#8CCCC3'}} onClick={() =>navigate('/signup')}>Sign Up</Button>
            <Button style={{backgroundColor:'#FFF7DA'}} onClick={() =>navigate('/signin')}>Login</Button>
          </Buttons>
          </DialogText>
        
      </Content>
    </Container>
  )
}

export default Dialog