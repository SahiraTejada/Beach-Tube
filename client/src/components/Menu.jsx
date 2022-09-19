
import styled from 'styled-components';
import Youtube from '../imgs/logo1.png';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowSharpIcon from '@mui/icons-material/SlideshowSharp';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {Link} from 'react-router-dom';

const Container = styled.div`
 flex:1.5;
 background-color: #202020;
 height:100vh;
 width: 300px;
 color: white;
 position:sticky;
 top:0px;
`;

const Wrapper= styled.div`
padding: 18px 0px;
`;
const Logo = styled.div`
display:flex;
align-items:center;
gap:5px;
margin-bottom: 15px;

`;

const Img = styled.img`
 width: 100px;
`;

const Item = styled.div`
display:flex;
align-items:center;
padding: 13px 0px;
cursor:pointer;
 width: 100%;
 &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      font-weight:bold;
  }
`;
const Text = styled.p`
font-size: 0.9rem;
cursor:pointer;

`; 

const Hr = styled.div`
margin: 15px 0px;
border: 1px solid #303030; 

`;
const Icons = styled.div`
padding: 0px 20px;
`;
const Menu = () => {
  return (
 <Container>
      <Wrapper>
        <Logo>
          <Icons><MenuSharpIcon /></Icons>
           <Link to='/'>
          <Img src={Youtube} alt='Youtube'/></Link>
        </Logo>
        
      <Item>
        <Icons><HomeIcon/></Icons>
       <Text> Principal</Text>
      </Item>
      <Item>
        <Icons><ExploreIcon/></Icons>
        <Text>Explorar</Text>
      </Item>
      <Item>
        <Icons><SubscriptionsIcon/></Icons>
        <Text>Suscripciones</Text>
      </Item>
      <Hr/>
      <Item>
        <Icons><SlideshowSharpIcon /></Icons>
        <Text>Tus videos</Text>
      </Item>
      <Item>
        <Icons><ThumbUpIcon/></Icons>
          <Text>Me gusta</Text>
      </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
