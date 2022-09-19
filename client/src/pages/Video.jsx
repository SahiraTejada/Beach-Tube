import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import {Card,Comments} from '../components';

const Container = styled.div`
margin: 10px;
display:flex;

`;

const Content = styled.div`
margin-left:20px;
 flex: 4;
  
`;

const Recommendation = styled.div`
flex:2.3; 
padding-left: 22px
`;
const VideoWrapper = styled.div`

`;
const Title = styled.h1`
font-weight:400;
margin-top:10px;
font-size:18px;
`;
const Details = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;
const Info = styled.span`
font-weight:500;
color: #aaaaaa !important;
`;
const Button = styled.div`
display:flex;
align-items:center;
padding-bottom:7px;
gap:5px;
cursor:pointer;

`;
const Buttons = styled.div`
display:flex; 
gap:20px;
`;


const Hr = styled.hr`
border : 1px solid #383838;
margin:16px 0px;
`;

const Channel = styled.div`
display:flex;
justify-content:space-between;

`;

const ChannelInfo = styled.div`
display:flex;
gap:20px;
`;
const Image = styled.img`
border-radius: 50%;
width:45px;
height:45px;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
const Subscribe = styled.button`
background-color: #CC0000;
color:white;
 text-transform:uppercase;
 border:none;
 border-radius:2px;
 height:max-content;
 padding:10px 16px;
 cursor:pointer;
 font-weight:500;
 letter-spacing: 0.5px;

`;
const ChannelName = styled.span`
font-weight:500;
`;
const ChannelCounter = styled.span`
margin-top:5px;
margin-bottom:20px;
font-size:12px;
color: #AAAAAA;


`;
const Description = styled.p`
font-size:14px;`;

const Video = () => {
  return (
    <Container>
     <Content>
        <VideoWrapper>
           <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,986,000 vistas • hace 3 meses</Info>
          <Buttons>
            
            <Button><ThumbUpIcon/>123</Button>
            <Button><ThumbDownAltIcon/>56</Button>
           
            <Button><ReplyIcon/>Compartir</Button>
    
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
						<Image src='https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528'/>
					
					<ChannelDetail>
						<ChannelName>Juan Mendez</ChannelName>
						<ChannelCounter>10,800 suscriptores</ChannelCounter>
						<Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi vitae harum nam eveniet culpa. In consectetur, libero porro officia dolorem sint s!vnfknvlfknvlkfndvlkbfvieobfov Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corporis vitae a, facilis illo odit at quidem unde odio fugiat ad alias? Blanditiis possimus ex quidem neque dolores, odio recusandae, reprehenderit aspernatur deleniti itaque ipsam corrupti fugit! Excepturi, nihil. Obcaecati officia temporibus voluptates. Voluptas, perspiciatis repudiandae consequuntur quibusdam in fugiat.</Description>
					</ChannelDetail>
					</ChannelInfo>
          <Subscribe>Subcribirse</Subscribe>
        </Channel>
				<Hr/>
				<Comments/>
      </Content>
      <Recommendation>
				<Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>				
			</Recommendation>
    </Container>
  )
}

export default Video
