// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../../pages/home/App';
import APropos from '../../pages/a_propos/aPropos';
import Error404 from '../../pages/404/error404';
import Header from '../../components/Header/Navigation';
import Footer from '../../components/Footer/FooterInfos';
import CheckLogement from '../CheckLogement';
import jsonData from '../../datas/Annonces.json';

function AppRouter() {

  // const [jsonData, setJsonData] = useState([]); 

  // useEffect(() => {
  //   fetch('/Annonces.json')
  //     .then(response => response.json())
  //     .then(data => setJsonData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);
  
    return (
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App jsonData={jsonData} />} />
        <Route path="/logement/:id" element={<CheckLogement jsonData={jsonData} />} />
        <Route path="/about" element={<APropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}
  
  export default AppRouter;