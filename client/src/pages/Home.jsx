import React from 'react';
import styled from 'styled-components';
import {Card} from '../components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
  overflow-x: hidden;
`;

const Home = () => {
  return (
    <Container>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </Container>
  )
}

export default Home
