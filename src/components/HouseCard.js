import { Link } from 'react-router-dom';
import "../Styles/houseCard.scss"

const HouseCard = ({ houseData }) => {
  
  return (
    <Link to={`/logement/${houseData.id}`} className="house-card">
      <img src={houseData.cover} alt={houseData.title} />
      <p className="WhiteText SmallText">{houseData.title}</p>
    </Link>
  );
};

export default HouseCard;