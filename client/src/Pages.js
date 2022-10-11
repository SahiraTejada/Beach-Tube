import React,{useState} from 'react'
import {Menu,NavBar,Logo,NavBarVideo} from './components/index';
import {Home,Video,SignIn,Search,SignUp} from './pages/index';
import styled from 'styled-components';
import {Wrapper} from './appStyles.js';

const Page = styled.div`
background-color:#A39980;
width:100%;
height : 100vh;
`
 const Main = styled.div`
flex:7;
background:linear-gradient(#E9DAC1,transparent);
background-color:#D4C6AF  ;

`
const VideoMain = styled.div`
background:linear-gradient(#E9DAC1,transparent);
background-color: #AFA491  ;
width:100%;
position: relative;
     
`

const LogoBox = styled.div`


`
const NavContainer = styled.div`
`
export const RandomPage = () => {
 
  return (
    <>
      <Menu/>
        <Main>
          <NavBar/>
          <Wrapper>
        <Home type='random'/>
        </Wrapper>
          </Main>
   </>
  )
}

export const VideoPage = () => {
  return (
    <>
        <VideoMain>
         <NavContainer>
            <NavBarVideo/>
          </NavContainer>
          <Wrapper>
            <Video/>
          </Wrapper>
        </VideoMain>
    </>
  )
}



export const SigninPage = () => {
  return (
      <Page>
        <SignIn/>
      </Page>
  )
}

export const SubPage = () => {
  return (
    <>
      <Menu/>
        <Main>
          <NavBar/>
          <Wrapper>
            <Home type='sub'/>
          </Wrapper>
        </Main>
    </>
  )
}

export const TrendsPage = () =>{
return (
     <>
        <Menu/>
          <Main>
            <NavBar/>
            <Wrapper>
              <Home type='trend'/>
            </Wrapper>
          </Main>
    </>
  )
}


export const SearchPage = () =>{
return (
     <>
        <Menu/>
          <Main>
            <NavBar/>
            <Wrapper>
              <Search/>
            </Wrapper>
          </Main>
    </>
  )
}


export const SignUpPage = () => {
  return (
    <Page>
      <SignUp/>
    </Page>
  )
}