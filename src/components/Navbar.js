import React, { Component } from 'react';
import "./Navbar.css";
import {useNavigate} from 'react-router-dom';
const Navbar = ({navigate,navigateV}) =>{

    
    
    return (
        <div>
        <nav id  = "nav"className="navbar navbar-dark fixed-top  flex-md-nowrap p-0 shadow">
        <button
        id = "but" onClick = {navigate}
      >
        Home
      </button>
      <button id = "but2" onClick={navigateV}>Vote</button>
      </nav>
      </div>
    );
}

export default Navbar