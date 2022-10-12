
import styled from 'styled-components';
import BeachTube from '../imgs/logo1.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import {Link,useNavigate} from 'react-router-dom';

const Container = styled.div`
 flex:1.5;
 background-color: #8CCCC3;
 height:100vh;
 width: 300px;
 color: #444444;
 position:sticky;
 top:0px;
`;

const Wrapper= styled.div`
padding: 12px 0px;
`;
const Logo = styled.div`
display:flex;
align-items:center;
gap: 5px;
margin-bottom: 15px;
margin-left: 20px;

`;

const Img = styled.img`
 width: 150px;
`;

const Item = styled.div`
color:#44444;
display:flex;
align-items:center;
padding: 13px 0px;
font-family: GothicA1-SemiBold;
cursor:pointer;
 width: 100%;
 &:hover {
      background-color: #54BAB9;
      color:#44444;
      font-family: GothicA1-Bold;
      box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
  }
`;
const Text = styled.p`
font-size: 1.3rem;
cursor:pointer;


`; 

const Icons = styled.div`
padding: 0px 20px;

`;
const Menu = ({ setSidebar }) => {
  const navigate = useNavigate();
  return (
 <Container>
      <Wrapper>
        <Logo>
           <Link to='/'>
          <Img src={BeachTube} alt='BeachTube'/>
            </Link>
        </Logo>
       
      <Item onClick={() =>navigate('/')}>
        <Icons><HomeIcon/></Icons>
       <Text> Principal</Text>
      </Item>
     
      <Item onClick={() =>navigate('/trends')}>
        <Icons><ExploreIcon/></Icons>
        <Text>Explorar</Text>
      </Item>
       
      <Item onClick={() =>navigate('/subscriptions')}>
        <Icons><SubscriptionsIcon/></Icons>
        <Text>Suscripciones</Text>
      </Item>


      
    
    
      </Wrapper>
    </Container>
  )
}

export default Menu
