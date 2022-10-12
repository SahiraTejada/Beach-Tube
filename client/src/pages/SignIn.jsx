import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../features/userSlice";
import { auth, provider } from "../firebase";

import { useNavigate } from "react-router-dom";
import BeachTube from '../imgs/logo1.png'
import { signInWithPopup } from "firebase/auth"

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
  background-color: #8CCCC3;
  color:Black;
  border-radius :10px;
  padding: 20px 50px;
  gap: 10px;
  height:400px;
  width:320px;
`;

const Title = styled.h1`
  font-size: 24px;
  padding:15px;
`;


const Input = styled.input`
  border: 1px solid #373737;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: white;

`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #54BAB9;
  color: black;
  font-family: GothicA1-Bold;
  margin-bottom:20px;
`;

const Text = styled.p`
color:white;
cursor:pointer;
color: black;

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

  const signinWithGoogle = async ()=>{
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
        .post("/auth/google", {
          name: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL,
        })
        .then((res)=>{
        dispatch(loginSuccess(res.data));
      });
    })
    .catch((loginFailure)=>{});
      dispatch(loginFailure());
  }
  
  return (
    <Container>
      <Wrapper>
         <Img src={BeachTube} alt='BeachTube'/>
        <Title>Login</Title>
        <div style={{margin:'15px 0px', width:'300px',paddingRight:'10px'}}>
       <Input  placeholder="Email" type='email' onChange={(e) => setEmail(e.target.value)}/></div>
        <div style={{marginBottom:'15px',width:'300px',paddingRight:'10px'}}>
         <Input placeholder="Contraseña" type="password"  onChange={(e) => setPassword(e.target.value)}/></div>
        <Button onClick={handleLogin}>Acceder</Button>




        <Text onClick={() =>navigate('/signup')}>No tienes una cuenta?</Text>

        

        
        
      </Wrapper>
      
    </Container>
  );
};




export default SignIn;
