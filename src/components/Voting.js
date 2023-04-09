import React, { Component ,useState} from 'react';
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar";
import "./Voting.css";
import Webcam from "react-webcam";

const Voting = () =>{
    const [cam,setCam] = useState('false');
    const [check,setCheck] = useState('false');
   const openCamera=()=> {
       setCam('true');
   }
   const closeCamera=()=>{
        setCam('false')
        setCheck("true");
   }
   
    const navigate = useNavigate();
    const navigateHome=()=>{
        navigate("/");
    }
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
    return (
       
        <div id="cont">
        <Navbar navigate={navigateHome}/>
        <h1 id = "h1">Verify your Citizenship</h1>
      <button id="test" onClick={openCamera}>Open Camera</button>
      <button id="test2" onClick={closeCamera}>Close Camera</button>
      <div className="App">
     {cam==="true" && <Webcam 
        audio={false}
        height={350}
        screenshotFormat="image/jpeg"
        width={450}
        videoConstraints={videoConstraints}
     ></Webcam>}

  </div>

  {check==="true" && <div id="id">Verified!</div>}
  {check==="false" && <div id="id2">Not Verified. Please turn your camera on</div>}
  
</div>
    );

}




export default Voting