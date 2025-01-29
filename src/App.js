import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BarraSuperior from "./components/molecules/barraSuperior/barraSuperiorElement";
import HomePage from "./components/organism/homePage/homePage";
import HistoriaPage from "./components/organism/historiaPage";
import MisionVisionPage from './components/organism/misionVisionPage';
import DirectivosPage from './components/organism/directivosPage';
import PropuestaEducativaPage from './components/organism/propuestaEducativaPage';
import EmbajadaPazPage from './components/organism/embajadaPazPage/embajadaPazPage';
import JardinPage from "./components/organism/jardinPage/jardinPage";
import PrimarioPage from "./components/organism/primarioPage/primarioPage";
import SecundarioPage from "./components/organism/secundarioPage/secundarioPage";
import ContactoPage from "./components/organism/contactoPage/contactoPage";
import Footer from './components/molecules/footer/footer';

import './appStyle.css'

function App() {
  return (
    <Router>
      <div className="App">
        <BarraSuperior />

        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/historia" element={<HistoriaPage />} />
            <Route path="/misionVision" element={<MisionVisionPage />} />
            <Route path="/directivos" element={<DirectivosPage />} />
            <Route path="/propuestaEducativa" element={<PropuestaEducativaPage />} />
            <Route path="/embajadaPaz" element={<EmbajadaPazPage />} />
            <Route path="/jardin" element={<JardinPage />} />
            <Route path="/primario" element={<PrimarioPage />} />
            <Route path="/secundario" element={<SecundarioPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
