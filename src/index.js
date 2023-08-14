import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.scss'
import App from './pages/home/App';
import FicheLogement from './pages/fiche_de_logement/ficheLogement';
import APropos from './pages/a_propos/aPropos';
import Error404 from './pages/404/error404';
import Header from './components/Header/Navigation';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />

      <Routes>

        <Route path ="/" element={<App />} />
        <Route path ="/logement" element={<FicheLogement />} />
        <Route path ="/about" element={<APropos />} />
        <Route path ="/error404" element={<Error404 />} />

      </Routes>

    </Router>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
