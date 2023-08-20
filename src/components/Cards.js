import jsonData from '../datas/Annonces.json';
import React from 'react';
import HouseCard from './HouseCard';
//** Avec fetch **//
// import React, { useState, useEffect } from 'react';

const Cards = () => {
  return (
    <div className="cards-container">
      {jsonData.map((house, index) => (
        <HouseCard key={index} houseData={house} />
      ))}
    </div>
  );
};

export default Cards;

//** Si je devais utiliser la methode FETCH pour importer des données en ligne **//

// const Cards = () => {
//   const [jsonData, setJsonData] = useState([]);

//   useEffect(() => {
//     fetch('../../public/datas/Annonces.json')
//       .then(response => response.json())
//       .then(data => setJsonData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="cards-container">
//       {jsonData.map((house, index) => (
//         <HouseCard key={index} houseData={house} />
//       ))}
//     </div>
//   );
// };

// export default Cards;

