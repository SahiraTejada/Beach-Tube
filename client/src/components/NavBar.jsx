import React, { useState} from "react";
import styled from 'styled-components';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Link ,useNavigate} from "react-router-dom";
import { useSelector} from 'react-redux';
import Upload from "./Upload";
import Popper from '@mui/material/Popper';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import UserDefault from '../imgs/user.png'



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
const Content = styled.div`
  position: static;
  justify-content: space-evenly;
  background-color: #202020;
  color: #fff;
  text-align: center;
  border-radius: 3px;
  padding: 20px 0px;
  border: solid #303030;
  border-width: 1px 1px;
  z-index: 1;
  margin-top:15px;
  opacity: 0.97; 
  width:220px;
  margin-right:20px;
   
`
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

const Avatar = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color:white;

`;


const User = styled.div`
display:flex;
align-items:center;
gap:12px;
cursor: pointer;
`;


const Logout = styled.div`
display:flex;
align-items:center;
padding: 10px 0px;
justify-content: center; 
color:white;
&:hover {
      background-color: rgba(255, 255, 255, 0.1);
      cursor:pointer;
  }
`
const DetailsAccount = styled.p`
padding: 0px 0px;

`;


const NavBar = () => {
 
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const opened = Boolean(anchorEl);
  const id = opened ? 'simple-popper' : undefined;
  
  return (
    <>
     <Container>
      <Wrapper> 
        <Search>
          <Input placeholder='Buscar' onChange={(e) => setQ(e.target.value)}>
          </Input>
          <SearchIcon onClick={() =>navigate(`/search?q=${q}`) }>
            <SearchSharpIcon 
          style={{padding:'7px', opacity: '0.8'}}/>
          </SearchIcon>
        </Search>  
          {currentUser ? (
            <User>
              <VideoCallSharpIcon onClick={() => setOpen(true)} />
              <Avatar src={currentUser.img ? (currentUser.img): (UserDefault)} onClick={handleClick}/>
               <Popper id={id} open={opened} anchorEl={anchorEl} className='popper'>
        <Content>
       <DetailsAccount>{currentUser.name}</DetailsAccount>
       <DetailsAccount style={{paddingTop:'7px'}}> {currentUser.email}</DetailsAccount>
       <Hr/> 
        <div onClick={()=> navigate('/signin')}>
       <Logout style={{ textDecoration: "none" }}>
      <LogoutRoundedIcon style={{paddingRight:'5px'}}/> Cerrar sesión</Logout> </div>
       </Content>
              </Popper>
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
