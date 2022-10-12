import axios from "axios";
import app from "../firebase";
import React, { useState } from "react";
import styled from "styled-components";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BeachTube from '../imgs/logo1.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: white;

`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #8CCCC3;
  color:Black;
  border-radius :10px;
  padding: 20px 50px;
  gap: 10px;
  height:430px;
  width:320px;
`;

const Title = styled.h1`
  font-size: 24px;
  padding: 15px;
`;

const ContentInput= styled.div`
margin:15px 0px
width:400px

`
const Input = styled.input`
  border: 1px solid #373737;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: black;

`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #54BAB9;
  color: black;
  font-family: GothicA1-Bold;
`;

const Img = styled.img`
 width: 200px;
`;
const ChooseFile = styled.button`
    position:relative;
    display:inline-block;    
	border-radius:8px;
    border:#ebebeb solid 1px;
    width:250px; 
    padding: 4px 6px 4px 8px;
    font: normal 14px Myriad Pro, Verdana, Geneva, sans-serif;
    color: black;
    margin-top: 2px;
	background:white;
  margin-bottom:7px;
`

const InputFile = styled.input`
    -webkit-appearance:none; 
    position:absolute;
    top:0; left:0;
    opacity:0; 
`

const SignIn = () => {


  const [imguser,setImgUser] = useState(undefined)
  const [imgPerc,setImgPerc] = useState(undefined)
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});



 const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


   const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       if(urlType === "img")  { setImgPerc(Math.round(progress)) 
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  

  useEffect(() => {
    imguser && uploadFile(imguser, "img");
  }, [imguser]);

  const handleUpload = async (e)=>{
    e.preventDefault();
  
    const res = await axios.post("/auth/signup", {...inputs})
    res.status===200 && navigate('/signin')
  }
  
  return (
    <Container>
      <Wrapper>
        <Img src={BeachTube} alt='BeachTube'/>
        <Title>Sign Up</Title>
       
       
 
        <Input
          placeholder="Usuario"
          name="name"
          onChange={handleChange}
        />

        <Input style={{margin:'18px 0px'}} placeholder="Correo" name="email" onChange={handleChange} />

        <Input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
        />
     
        <h3 style={{margin:'5px'}}>Foto de perfil:</h3>
        {imgPerc > 0 ? (
          "Uploading:" + imgPerc + "%"
        ) : (<ChooseFile class="choose_file">
        <span>Seleccionar imagen</span>
        <InputFile name="Select File" type="file" accept="image/*"  onChange={(e) => setImgUser(e.target.files[0])}/>
    </ChooseFile>
        
        )}
          
        <Button onClick={handleUpload}>Sign Up</Button>
        
      
        
      </Wrapper>
      
    </Container>
  );
};

export default SignIn;