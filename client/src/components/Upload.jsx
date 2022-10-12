import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:1;
  font-family: GothicA1-Bold;
  
`;

const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  background-color: #8CCCC3;
  color:black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  border-radius :10px;
  box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Title = styled.p`
  text-align: center;
  font-size: 2rem;
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 3px;
  padding: 4px;
  background-color: transparent;
  z-index: 999;
  
  
`;
const ChooseFile = styled.button`
    position:relative;
    display:inline-block;    
	border-radius:8px;
    border:#E9DAC1 solid 1px;
    width:250px; 
 align-items:center;
 padding: 10px 5px;
 justify-content: center;
    font-family: GothicA1-Bold;
    color: #373737;
    margin-top: 2px;
	background:#E9DAC1;;
  margin-bottom:7px;
  font-size:14px;
  
`

const InputFile = styled.input`
    -webkit-appearance:none; 
    position:absolute;
    top:0; left:0;
    opacity:0; 
`
const Desc = styled.textarea`
  border: 1px solid black;
  color:black;
  border-radius: 3px;
  padding: 7px;
  background-color: transparent;
`;
const Button = styled.button`
  border-radius: 3px;
  border: 1px solid black;
  padding: 7px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #54BAB9;
  color: black;
  font-family: GothicA1-Bold;
`;
const Label = styled.label`
  font-size: 14px;
`;
const Upload = ({ setOpen }) => {
  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [inputs, setInputs] = useState({});


  const navigate = useNavigate()

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
        urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
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
    video && uploadFile(video , "videoUrl");
  }, [video]);

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);

  const handleUpload = async (e)=>{
    e.preventDefault();
    const res = await axios.post("/videos", {...inputs})
    setOpen(false)
    res.status===200 && navigate(`/video/${res.data._id}`)
  }

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Subir un video</Title>
        <Label>Video:</Label>
        {videoPerc > 0 ? (
          "Uploading:" + videoPerc + "%"
        ) : (
         <ChooseFile class="choose_file">
     
        <span>Seleccionar video</span>
        <InputFile name="Select File" type="file"      accept="video/*"  onChange={(e) => setVideo(e.target.files[0])}/>
    </ChooseFile>
        )}
        <Input
          type="text"
          placeholder="Título"
          name="title"
          onChange={handleChange}
        />
        <Desc
          placeholder="Descripción"
          name="desc"
          rows={6}
          onChange={handleChange}
        />
      
        <Label>Imagen:</Label>
        {imgPerc > 0 ? (
          "Uploading:" + imgPerc + "%"
        ) : (
         <ChooseFile class="choose_file">
     
        <span>Seleccionar imagen</span>
        <InputFile name="Select File" type="file" accept="image/*"  onChange={(e) => setImg(e.target.files[0])}/>
    </ChooseFile>
        )}
        <Button onClick={handleUpload}>Subir</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;