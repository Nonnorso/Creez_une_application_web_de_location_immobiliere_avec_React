import JsonData from '../datas/Annonces.json';

export default JsonData;

//****** avec Fetch *****//
// import React, { useState, useEffect } from 'react';

// const JsonData = () => {
//   const [jsonData, setJsonData] = useState([]);

//   useEffect(() => {
//     fetch('../../public/datas/Annonces.json')
//       .then(response => response.json())
//       .then(data => setJsonData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       {jsonData.map((dataItem, index) => (
//         <div key={index}>
//           {Object.entries(dataItem).map(([key, value]) => (
//             <div key={key}>
//               <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value}
//             </div>
//           ))}
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JsonData;