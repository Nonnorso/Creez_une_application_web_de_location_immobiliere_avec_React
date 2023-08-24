import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import collapseIcon from '../../assets/arrow_back_ios-24px 2.png';
import Slideshow from '../../components/Slideshow';
import LogementRating from '../../components/LogementRating';
import LogementHost from '../../components/LogementHost';
import LogementTags from '../../components/LogementTags';
import LogementPresentation from '../../components/LogementPresentation';

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

      <div className="FlexRow LogementDisposition">
        <div>
          <div>
            <LogementPresentation title={logementData.title} location={logementData.location} />
          </div>

          <div>
            <LogementTags tags={logementData.tags} />
          </div>
        </div>

        <div className="LogementHostAndRateStyle">
          <div>
            <LogementHost host={logementData.host} />
          </div>

          <div>
            <LogementRating rating={parseInt(logementData.rating)} />
          </div>
        </div>
      </div>

      <div className='FlexRow LogementCollapseStyle'>
        <Collapse title="Description" 
        content={logementData.description} 
        icon={<img src={collapseIcon} alt="Icône de Collapse" />} />

        <Collapse title="Équipements" 
        content={logementData.equipments.join(' ')}
        icon={<img src={collapseIcon} alt="Icône de Collapse" />} />
      </div>
    </div>
  );
}

export default FicheLogement;