import React from 'react';
import emptyStarIcon from '../assets/Vectoremptystar.png';
import filledStarIcon from '../assets/VectorRateStars.png';

const LogementRating = ({ rating }) => {
    const filledStars = Math.round(rating / 1);
  
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push(<img key={i} src={filledStarIcon} alt="Filled Star" />);
      } else {
        stars.push(<img key={i} src={emptyStarIcon} alt="Empty Star" />);
      }
    }
  
    return <div className="rating">{stars}</div>;
  };
  
  export default LogementRating;