import { useParams } from 'react-router-dom';
import jsonData from '../../datas/Annonces.json';

function FicheLogement() {
  const { id } = useParams();
  const logementData = jsonData.find(house => house.id === id);

  if (!logementData) {
    return <p>Logement introuvable</p>;
  }

  return (
    <div>
      <img src={logementData.cover} alt={logementData.title} />
      <p>{logementData.title}</p>
      <p>{logementData.description}</p>
    </div>
  );
}

export default FicheLogement;