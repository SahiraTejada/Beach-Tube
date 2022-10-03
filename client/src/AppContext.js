import React from 'react'
import {Menu,NavBar} from './components/index';
import {Home,Video,SignIn,Search} from './pages/index';
import styled from 'styled-components';
import {Container,Main,Wrapper} from './appStyles.js';

const Page = styled.div`
background-color: #181818;
color:white;
width:100%;
height : 100vh;
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
  return (
    <>
        <Menu/>
      <Main>
        <NavBar/>
        <Wrapper>
       <Video/></Wrapper></Main>
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
