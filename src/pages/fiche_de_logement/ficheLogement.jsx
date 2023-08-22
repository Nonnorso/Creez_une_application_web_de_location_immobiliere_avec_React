import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import collapseIcon from '../../assets/arrow_back_ios-24px 2.png';
import Slideshow from '../../components/Slideshow';

function FicheLogement({ jsonData }) {
  const { id } = useParams();
  const logementData = jsonData.find(house => house.id === id);
  const navigate = useNavigate();

  if (!logementData) {
    navigate('/404');
    return null; 
  }

  return (
    <div>
      <div>
      <Slideshow images={logementData.pictures} />
      </div>

      <div>
      <p>{logementData.title}</p>
      <p>{logementData.location}</p> 
      </div>
         
      <div>
        <ul>
          {logementData.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>

      <div>
        <p>{logementData.host.name}</p>
        <img src={logementData.host.picture} alt="Host" />
        <span>{logementData.host.rating}</span>
      </div>

      <div>
        <Collapse title="Description" content={logementData.description} icon={<img src={collapseIcon} alt="Icône de Collapse" />} />
        <Collapse title="Équipements" content={logementData.equipments.join(', ')} icon={<img src={collapseIcon} alt="Icône de Collapse" />} />
      </div>

    </div>
  );
}

export default FicheLogement;