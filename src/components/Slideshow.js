import React, { useState } from 'react';
import leftArrowIcon from '../assets/VectorLeft_vector.png';
import rightArrowIcon from '../assets/Vector.png';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="CarousselContainer">

        <div className="CarousselImage">
            <img src={images[currentIndex]} alt={`${currentIndex + 1}`} />
        </div>

        <div className="CarousselCounter SmallText WhiteText">
          {currentIndex + 1}/{images.length}
        </div>

        <div className="CarousselNav">
          <img
            src={leftArrowIcon}
            alt="Previous"
            className="NavArrow LeftArrow"
            onClick={handlePrevClick}/>

          <img
            src={rightArrowIcon}
            alt="Next"
            className="NavArrow RightArrow"
            onClick={handleNextClick}/>
        
      </div>
    </div>
  );
};

export default Slideshow;