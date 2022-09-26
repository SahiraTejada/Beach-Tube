import axios from "axios";
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSucess } from "../redux/userSlice";
import {auth,provider} from '../firebase.js';
import { signInWithPopup } from "firebase/auth";
import { async } from "@firebase/util";

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
  background-color: #202020;
  border: 1px solid #373737;
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
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
  background-color: #373737;
  color: #aaaaaa;
`;


const SignIn = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { name, password });
      dispatch(loginSucess (res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };
  const SignInWithGoogle =  async () =>{
    dispatch(loginStart())
    signInWithPopup(auth,provider)
    .then((result) =>{
      axios.post('/auth/google',{
        name:result.user.displayName,
        email:result.user.email,
        img:result.user.photoURL,
      }).them((res)=>{
        dispatch(loginSucess(res.data));
      })
    })
    .catch((error)=>{
      dispatch(loginFailure());

    })
  }

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        
        <Input placeholder="username"  onChange={e=>setName(e.target.value)}/>
        <Input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        <Button onClick={SignInWithGoogle}>Sign in with Google</Button>
        <Title>or</Title>
        <Input placeholder="username" onChange={e=>setName(e.target.value)}/>
        <Input placeholder="email" onChange={e=>setEmail(e.target.value)}/>
        <Input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
        <Button>Sign up</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
