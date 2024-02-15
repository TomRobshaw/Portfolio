import React, { Component, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class ImageCarousel extends Component {
	render() {
    const { content } = this.props;
    console.log('Content:', content);
    const servoMateImages = [
      { src: '../ServoMate1.png', alt: 'ServoMate Dashboard 1', legend: 'ServoMate Dashboard' },
      { src: '../ServoMate2.png', alt: 'ServoMate Car Status 2', legend: 'ServoMate Car Status' },
      { src: '../ServoMate3.png', alt: 'ServoMate Nearby Garages 3', legend: 'ServoMate Nearby Garages' },
    ];

    const saucedImages = [
      { src: '../Sauced.png', alt: 'Sauced App', legend: 'Sauced Log In' },
    ];

    const imagesToShow = content === 'servoMate' ? servoMateImages : saucedImages;

		return (
			<Carousel showThumbs={false} showStatus={false}>
        {imagesToShow.map((image, index) => (
          <div key={index} className="h-[400px]">
            <img src={image.src} alt={image.alt} />
            <p className="legend">{image.legend}</p>
          </div>
        ))}
      </Carousel>
		);
	}
};
