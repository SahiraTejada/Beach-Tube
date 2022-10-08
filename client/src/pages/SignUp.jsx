import axios from "axios";
import app from "../firebase";
import React, { useState } from "react";
import styled from "styled-components";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


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
  background-color: #202020;
  border: 1px solid #373737;
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;
const Input = styled.input`
  border: 1px solid #373737;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: white;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #373737;
  color: #aaaaaa;
`;



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
        <Title>Sign Up</Title>
       
       
     
        <Input
          placeholder="username"
          name="name"
          onChange={handleChange}
        />
        <Input placeholder="email" name="email" onChange={handleChange} />
        <Input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
     
        Image:
        {imgPerc > 0 ? (
          "Uploading:" + imgPerc + "%"
        ) : (
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImgUser(e.target.files[0])}
          />
        )}
        <Button onClick={handleUpload}>Sign Up</Button>
        
      
        
      </Wrapper>
      
    </Container>
  );
};

export default SignIn;