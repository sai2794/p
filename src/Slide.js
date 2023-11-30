import React, { useState } from 'react';
import './Slide.css';
const Slide = () => {
  const images = [
    "https://static.toiimg.com/photo/57867312.cms",
    "https://img.freepik.com/premium-photo/delicious-details-closeup-food-table-with-purpose_950053-1527.jpg",
    "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/02/FotoJetcoverindianrest.jpg",
    "https://www.masalamastee.com/wp-content/uploads/2021/06/indian-food-new.jpg",
    "https://gumlet.assettype.com/homegrown%2Fimport%2Fbook%2Fkvrqotcrgk-1536587603.jpg"
  ];

  const [imageSlide, setImageSlide] = useState(0);

  const prevSlide = () => {
    setImageSlide(imageSlide === 0 ? images.length - 1 : imageSlide - 1);
  }

  const nextSlide = () => {
    setImageSlide(imageSlide === images.length - 1 ? 0 : imageSlide + 1);
  }

  return (
    <div>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>⬅</div>
        {
          images.map((image, index) =>
            imageSlide === index && (
              <div className="slide" key={index}>
                <img src={image} alt="carousel" className="slider-image" />
              </div>
            )
          )
        }
        <div className="right-arrow" onClick={nextSlide}>⮕</div>
      </div>
    </div>
  );
}

export default Slide;