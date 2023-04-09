import React, { Component } from 'react';
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar";
import "./Voting.css";
    
const Voting = () =>{
    const navigate = useNavigate();
    const navigateHome=()=>{
        navigate("/");
    }
    return (
       
        <div >
        <Navbar navigate={navigateHome}/>
      <button id="test">testingasdasdasd</button>
</div>
    );
}



export default Voting