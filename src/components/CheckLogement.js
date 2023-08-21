import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import jsonData from '../datas/Annonces.json';
import FicheLogement from '../pages/fiche_de_logement/ficheLogement';

function CheckLogement() {
  const { id } = useParams();
  const logementData = jsonData.find(house => house.id === id);

  if (!logementData) {
    return <Navigate to="/404" />;
  }

  return <FicheLogement />;
}

export default CheckLogement;