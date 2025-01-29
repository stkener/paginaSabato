import React from "react";
import './contenedorLinksFooterStyle.css';
import { Link } from "react-router-dom";
//import ContenedorLogoTitulo from "../../atoms/contenedorLogoTitulo/contenedorLogoTitulo";

const ContenedorLinksFooter = () => {
    return (
        <div className="contenedorLinks">
            <div className="columnaUno">
                <Link to="/" className="estiloLinks">Home</Link>
                <Link to="/historia" className="estiloLinks">Historia</Link>
                <Link to="/misionVision" className="estiloLinks">Misión y visión</Link>
                <Link to="/directivos" className="estiloLinks">Equipo directivo</Link>
                <Link to="/propuestaEducativa" className="estiloLinks">Propuesta Educativa</Link>
                <Link to="/embajadaPaz" className="estiloLinks">Embajada de Paz</Link>
                <Link to="/contacto" className="estiloLinks">Contacto</Link>
            </div>
            <div className="columnaDos">
                <Link to="/jardin" className="estiloLinks">Inicial</Link>
                <Link to="/primario" className="estiloLinks">Primaria</Link>
                <Link to="/secundario" className="estiloLinks">Secundaria</Link>
            </div>
        </div>
    );
};

export default ContenedorLinksFooter;