import React from 'react';
import HouseCard from './HouseCard';

const Cards = ({ jsonData }) => {
  
  return (
    <div className="cards-container">
      {jsonData.map((house, index) => (
        <HouseCard key={index} houseData={house} />
      ))}
    </div>
  );
};

export default Cards;