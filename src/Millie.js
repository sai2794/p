import { Typography } from '@mui/material'
import React from 'react'
import './Millie.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import logos from './logos.jpeg'
const footer = () => {
  return (
    <>
    <div className='hom' style={{display:'flex',backgroundColor:'black'}}>
    <div className='pink'>
    <img
        src={logos}
        alt="Description of the image"
        style={{ width: '50%', height: 'auto' }}
      />
    
   <br/>    <YouTubeIcon/> &emsp;&emsp;
       <InstagramIcon/>    &emsp;&emsp;
       <FacebookIcon/>    &emsp;&emsp;
       <TwitterIcon/>       &emsp;&emsp;
    </div>
    <div className='gigi' style={{color:'white' , display:'flex', paddingLeft:'230px',paddingTop:'20px'}}>
    Locate Us
   <br/> Opposite to Birla Mandir,New delhi
   <br/> Mobile: 9009683732
    <br/>Phone: 9000363528
    <br/>Email: Peazy667@gmail.com
      </div>
      <div className='may' style={{display:'flex',backgroundColor:'black',color:'whitesmoke',paddingLeft:'290px'}}>
      <br/>  Profile
      <br/> My Account
      <br/> Checkout
      <br/>Order tracking
      <br/> help & support
      </div>
    </div>
      </>
  )
}
export default footer
