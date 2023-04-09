import React, { Component ,useState} from 'react';
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar";
import "./Voting.css";
import Webcam from "react-webcam";

const Voting = () =>{
    const [cam,setCam] = useState('false');
    const [check,setCheck] = useState('false');
    const[cand,setCand] = useState('false');
    const[camera,setCamera] = useState('false');
    const[cam2,setCam2] = useState('true');
   const openCamera=()=> {
        setCamera('true');
       setCam('true');
   }
   const closeCamera=()=>{
        setCam('false');
        setCheck("true");
        setCand('true');
        setCam2('false');
   }
   const canditate1=()=>{

   }
   const canditate2=()=>{

   }
    const navigate = useNavigate();
    const navigateHome=()=>{
        navigate("/");
    }
    const navigateVoting=()=>{
        navigate("/voting");
    }
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
    return (
       
        <div id="cont">
        <Navbar navigate={navigateHome} navigateV={navigateVoting}/>
        <h1 id = "h1">Verify your Citizenship</h1>
      {camera==="false" &&<button id="test" onClick={openCamera}>Open Camera</button>}
      {camera==="true"&&cam2==="true" && <button id="test2" onClick={closeCamera}>Close Camera</button>}
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
  {cand==="true" && <div>
    <button id="cand" onClick={canditate1}>Canditate 1</button>
    <button id="cand2" onClick={canditate2}>Canditate 2</button>
    </div>}
</div>
    );

}




export default Voting