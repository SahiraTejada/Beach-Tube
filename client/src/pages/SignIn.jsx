import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Youtube from '../imgs/logo1.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #333333;
  color:white;
  border-radius :10px;
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  padding:15px;
`;


const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const Text = styled.p`
color:white;
cursor:pointer;
`

const Img = styled.img`
 width: 200px;
`;
const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { email, password });
      dispatch(loginSuccess(res.data));
      navigate("/")
    } catch (err) {
      dispatch(loginFailure());
    }
  };
  return (
    <Container>
      <Wrapper>
         <Img src={Youtube} alt='Youtube'/>
        <Title>Sign in</Title>
       
        <TextField id="outlined-basic" label="Email" type='email' color="secondary" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>

         <TextField id="outlined-basic" label="Contraseña" color="secondary" type="password" variant="outlined"  onChange={(e) => setPassword(e.target.value)}/>
        <Button onClick={handleLogin}>Sign in</Button>
        <Text onClick={() =>navigate('/signup')}>No tienes una cuenta?</Text>
        
      </Wrapper>
      
    </Container>
  );
};

export default SignIn;
