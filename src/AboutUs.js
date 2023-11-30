import React from 'react';
import Slide from './Slide';
import './AboutUs.css';
import { colors } from '@mui/material';
const AboutUs = () => {
  return (
    <div className="about-us-page">
          
      <div className="bimage">
      <img src="https://assets.architecturaldigest.in/photos/632c2468b1c1612420a1690d/4:3/w_1440,h_1080,c_limit/INDR3006.png" alt="Restaurant" /> 
      </div>
      <div className="togetherness">
            <h1>Connecting Through Cuisine</h1>
            <p>At EazyEats, our overarching mission transcends the mere act of dining; we aspire to weave a tapestry of shared experiences and cultural appreciation through the artistry of food. With every dish meticulously crafted, we invite you to embark on a journey that extends beyond the plate, fostering connections, celebrating diversity, and embracing the shared moments that make life flavorful.</p>
          </div>
          <div className='slide'>
          <React.StrictMode>
            <Slide />
          </React.StrictMode>
          </div>
          <div className="reservation-explanation">
        <h2>Sustainability at the Core</h2>
        <p>Within the very essence of EazyEats, sustainability isn't just a commitment; it's a guiding philosophy that influences every facet of our operation. We believe in the profound impact that conscientious choices can have on the environment, and as such, we've meticulously designed our practices to reflect this ethos.
Our journey toward sustainability begins with the careful selection of ingredients. We prioritize local and organic sources, not merely as a culinary choice but as a conscious effort to support nearby farmers, reduce transportation-related carbon footprints, and promote agricultural practices that nurture rather than deplete the land.
But sustainability for us extends far beyond the sourcing of ingredients. It permeates our kitchen operations, where we employ innovative techniques to minimize waste, optimize energy usage, and implement water-conserving practices. Our chefs are not just culinary artists; they're stewards of resources, ensuring that each dish is not only a masterpiece of flavor but also a testament to responsible and ethical gastronomy.
Packaging, too, plays a crucial role in our sustainability narrative. We've embraced eco-friendly materials, striving to reduce single-use plastics and minimize packaging waste. It's a small step, but one that aligns with our larger commitment to leaving a positive imprint on the environment.
Furthermore, our dedication to sustainability isn't static; it's an evolving journey of continuous improvement. We engage with our community, seek feedback, and explore new technologies and methods that align with our values. Through these efforts, we aspire not only to serve exquisite meals but to contribute meaningfully to a more sustainable and resilient future.</p>
      </div>
      <div className="our-team">
        <h2>Our Team</h2>
        <div className="team-details" >
            <p>Nithya</p>
            <p>Praveen</p>
            <p>Sushma</p>
            <p>Sai Deepthi</p>
            <p>Evitha</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;