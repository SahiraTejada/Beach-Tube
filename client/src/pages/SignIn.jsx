import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Youtube from '../imgs/logo1.png'
import { useEffect } from "react";
import { grey, red } from '@mui/material/colors';


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

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
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

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const Text = styled.p`
color:white;
cursor:pointer;
`

const Img = styled.img`
 width: 200px;
 


`;
const SignIn = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setSignUp] = useState(false);
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signup", { name,email, password });
      dispatch(loginSuccess(res.data));
      navigate("/")
    } catch (err) {
      dispatch(loginFailure());
      console.error(err.response.data);
    }
  };

  /*const signInWithGoogle = async () => {
    dispatch(loginStart());
    //signInWithPopup(auth, provider)
      .then((result) => {
       
        axios
          .post("http://localhost:8800/api/auth/google", {
            
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            console.log(res)
            dispatch(loginSuccess(res.data));
            navigate("/")
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
        console.log("ero")
      });
  };*/
const primary = red[500]; // #f44336
  
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
