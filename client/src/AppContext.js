import React from 'react'
import {Menu,NavBar} from './components/index';
import {Home,Video,SignIn} from './pages/index';
import styled from 'styled-components';
import {Container,Main,Wrapper} from './appStyles.js';

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
    <><Main><SignIn/></Main></>
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

