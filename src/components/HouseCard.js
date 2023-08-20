import React from 'react';
import { Link } from 'react-router-dom';

const HouseCard = ({ houseData }) => {
  return (
    <Link to="/logement" className="house-card">
      <img src={houseData.cover} alt={houseData.title} />
      <p className="WhiteText SmallText">{houseData.title}</p>
    </Link>
  );
};

export default HouseCard;