import React from 'react'
import "./Home.css";
import Page from "./Page";
import Button from '@mui/material/Button';
import Logout from "./Logout";

import { Link } from 'react-router-dom';



const Home = () => {
  // const handleLogout = () => {
  //   // Perform logout logic here (e.g., clear session/local storage, reset state)
  //   setIsLoggedIn(false);
  //   console.log('Logout successful');
  // };

  return (
    <>
    <div className="img">
      <div className="ppp">
      "Skip the queue, let technology woo!!!<br></br>
      Unlock flavor, reserve with EazyEats."<br></br>
      <Link to='/Page'>
      <Button variant="contained" size="large" padding-left="450px"> 
         Learn More 
      </Button> 

      </Link><br></br>
      {/* <Link to='/login'>
      <Button onClick={handleLogout}>
         Logout
      </Button> 

      </Link> */}
      </div>
      <div className='butt'>
      

      </div>
     
      
    

    </div>
   
    </>
    
    
  )
}

export default Home;
