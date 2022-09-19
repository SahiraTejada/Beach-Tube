import styled from 'styled-components';

const Container = styled.div`
display:flex;
gap:10px;
margin 30px 0px;
`;
const Avatar = styled.img`
border-radius: 50%;
width:45px;
height:45px;
`;
const Details = styled.div`
display:flex;
flex-direction:column;
gap:10px;
margin:5px;
`;

const Name = styled.span`
font-size: 13px;
font-weight:500;
`;
const Date = styled.span`
font-size:12px;
font-ewight:400;
color:#aaaaaa;
margin-left:5px;
`;
const Text = styled.span`
font-size:14px;

`;
const Comment = () => {
  return (
    <Container>
       <Avatar src='https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg'/>
       <Details>
        <Name>
            Ana Lopez <Date>hace 9 dias</Date>
        </Name>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur culpa excepturi beatae ipsum dolores quam quisquam. Perspiciatis provident rem nihil molestiae modi! Eius provident expedita ex sit amet blanditiis iusto!</Text>
       </Details>
    </Container>
  )
}

export default Comment
