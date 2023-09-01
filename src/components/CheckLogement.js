import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import FicheLogement from '../pages/fiche_de_logement/ficheLogement';

function CheckLogement({ jsonData }) {
  const { id } = useParams();
  const logementData = jsonData.find(house => house.id === id);

  if (!logementData) {
    return <Navigate to="/404" />;
  }

  return <FicheLogement jsonData={jsonData} />;
}

export default CheckLogement;