import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // Perform logout actions here (clear session, tokens, etc.)
      // For demonstration, simulate logout by redirecting to login page
      navigate('/login');
      console.log('Logout successful');
    };
  
    return (
      <div>
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      </div>
    );
  };
  
  export default Logout;