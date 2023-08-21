import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../../pages/home/App';
import FicheLogement from '../../pages/fiche_de_logement/ficheLogement';
import APropos from '../../pages/a_propos/aPropos';
import Error404 from '../../pages/404/error404';
import Header from '../../components/Header/Navigation';
import Footer from '../../components/Footer/FooterInfos';

function AppRouter() {
    return (
      <Router>
        <Header />
  
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="/about" element={<APropos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
  
        <Footer />
      </Router>
    );
  }
  
  export default AppRouter;