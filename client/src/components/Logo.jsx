import React from 'react';
import styled from 'styled-components';
import Youtube from '../imgs/logo1.png';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Link } from 'react-router-dom';

const LogoFrame = styled.div`


 height:10px;

color: white;
display:flex;
position:static;
margin-top:12px;

 
`;

const Img = styled.img`
 width: 100px;


`;
const Icons = styled.div`
padding: 0px 20px;
cursor:pointer;

`;
const Logo = () => {
  return (
    <LogoFrame>
        <Link to='/'>
          <Img src={Youtube} alt='Youtube'/>
        </Link>
    </LogoFrame>
  )
}

export default Logo