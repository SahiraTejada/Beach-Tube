import React,{useState} from 'react'
import {Menu,NavBar} from './components/index';
import {Home,Video,SignIn,Search,SignUp} from './pages/index';
import styled from 'styled-components';
import {Container,Wrapper} from './appStyles.js';
import Youtube from './imgs/logo1.png';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Link } from 'react-router-dom';
import Logo from './components/Logo';
const Page = styled.div`
background-color: #181818;
color:white;
width:100%;
height : 100vh;
`
 const Main = styled.div`
flex:7;
background-color: #181818;
color:white;
`
const VideoMain = styled.div`
background-color: #181818;
color:white;
width:100%;
position: relative;
     
`
const LogoContainer  = styled.div`
position: absolute;
z-index:10000;
`
;
const LogoBox = styled.div`

left:0;
top:0;
`
const NavContainer = styled.div`



  
  

`
export const RandomContext = () => {
 
  return (
   <>
        <Menu/>
      <Main>
     
        <NavBar/>
        <Wrapper>
       <Home type='random'/></Wrapper></Main>
   </>
  )
}

export const VideoContext = () => {
  const [sidebar, setSibebar] = useState(false);
  return (
    <>
    {sidebar && <Menu setSidebar={setSibebar}/>}
      <VideoMain>
        
        <LogoContainer><LogoBox>
       <Logo/></LogoBox></LogoContainer>
      <NavContainer>
      
        <NavBar/></NavContainer>
        <Wrapper>
       <Video/></Wrapper></VideoMain>
    </>
  )
}



export const SigninContext = () => {
  return (
    <Page><SignIn/></Page>
  )
}

export const SubContext = () => {
  return (
    <>
        <Menu/>
      <Main>
        <NavBar/>
        <Wrapper>
       <Home type='sub'/></Wrapper></Main>
    </>
  )
}

export const TrendsContext = () =>{
return (
     <>
        <Menu/>
      <Main>
        <NavBar/>
        <Wrapper>
       <Home type='trend'/></Wrapper></Main>
    </>
  )
}


export const SearchContext = () =>{
return (
     <>
        <Menu/>
      <Main>
        <NavBar/>
        <Wrapper>
       <Search/></Wrapper></Main>
    </>
  )
}


export const SignUpContext = () => {
  return (
    <Page><SignUp/></Page>
  )
}