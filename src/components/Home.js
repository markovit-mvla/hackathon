import React, { Component } from 'react';
import logo from '../logo.png';
import "./Home.css";
import Navbar from "./Navbar"
import { useNavigate } from 'react-router-dom';
const Home =()=>{

    const navigate = useNavigate();
    const navigateHome=()=>{
        navigate("/");
    }
    const navigateVoting =()=>{
        navigate("/voting");
    }
    return(
        <div>
        <Navbar navigate = {navigateHome} navigateV = {navigateVoting}/>
        <div id ="container" className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">

                  <img src={logo} className="App-logo" alt="logo" style={{ width: '50%', height: '50%' }} />
    
                <h1>Los Altos Hacks Blockchain Ballots</h1>
                <p className = "">
                  Revolutionize voting
                </p>
                <button id = "beg" onClick={navigateVoting}>Begin the voting process</button>
              </div>
            </main>
          </div>
        </div>
        </div>
    
  
    );
}
export default Home