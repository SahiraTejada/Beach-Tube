import React, { useState } from "react";
import styled from 'styled-components';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Upload from "./Upload";

const Container = styled.div`
position:sticky;
top:0px;
background-color: #202020;
color: white;
height:8.8vh;
 
`;

const Wrapper = styled.div`
display:flex;
align-items:center;
padding: 0px 18px;
justify-content: flex-end;

`;

const Search = styled.div`
display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding: 10px 0px;
`;

const Input = styled.input`
  width: 50%;
  height: 32px;
  background-color: #121212;
  padding-left: 10px;
  outline: none;
  border: none;
  border: 1px solid #303030;
  border-right: none;
  font-size: 16px;
  color:white;
`;

const Button = styled.button`
 padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  text-transform:uppercase;
  margin-bottom: 10px;
`;

const Hr = styled.div`
margin: 15px 0px;
border: 1px solid #303030; 

`;
const SearchIcon = styled.div`
  height: 33.7px;
  background-color: #313131 !important;
  border-radius: 0 !important;
  width: 40px;
text-align: center;
cursor:pointer;  
`;
const Avatar= styled.img`
border-radius:50%;
height:35px;
width:35px;
background-color: #aaaaaa;
`;

const NavIcons = styled.div`
padding: 0px 10px;
cursor:pointer;

`;

const User = styled.div`
display:flex;
align-items:center;
gap:12px;
cursor: pointer;
`;


const NavBar = () => {
 
    const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
     <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Buscar'></Input>
          <SearchIcon>
          <SearchSharpIcon style={{padding:'7px', opacity: '0.8'}}/></SearchIcon>
        </Search>  
      
     {currentUser ? (
            <User>
              <VideoCallSharpIcon onClick={() => setOpen(true)} />
              <Avatar src={currentUser.img} />
              {currentUser.name}
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleSharpIcon />
                SIGN IN
              </Button>
            </Link>
          )}
      </Wrapper>
     
    </Container>
    {open && <Upload setOpen={setOpen}/>}
    </>
  )
}

export default NavBar
