import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({ content, showStatus, showThumbs }) => {
  const servoMateImages = [
    { src: '../images/servomate1.jpg', alt: 'ServoMate Dashboard 1', legend: 'ServoMate Dashboard' },
    { src: '../images/servomate2.jpg', alt: 'ServoMate Car Status 2', legend: 'ServoMate Car Status' },
    { src: '../images/servomate3.jpg', alt: 'ServoMate Nearby Garages 3', legend: 'ServoMate Nearby Garages' },
  ];

  const saucedImages = [
    { src: '../images/sauced.jpg', alt: 'Sauced App', legend: 'Sauced Log In' },
  ];

  const imagesToShow = content === 'servoMate' ? servoMateImages : saucedImages;

  return (
    <Carousel showThumbs={showThumbs} showStatus={showStatus}>
      {imagesToShow.map((image, index) => (
        <div key={index} className="h-[400px]">
          <img src={image.src} alt={image.alt} />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
