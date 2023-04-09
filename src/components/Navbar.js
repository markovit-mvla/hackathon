import React, { Component } from 'react';
import "./Navbar.css";
import {useNavigate} from 'react-router-dom';
const Navbar = ({navigate}) =>{

    
    
    return (
        <div>
        <nav id  = "nav"className="navbar navbar-dark fixed-top  flex-md-nowrap p-0 shadow">
        <button
        id = "but" onClick = {navigate}
      >
        Home
      </button>
      </nav>
      </div>
    );
}

export default Navbar