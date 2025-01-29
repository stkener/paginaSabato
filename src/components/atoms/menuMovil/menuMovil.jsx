import React from "react";
import { Link } from "react-router-dom";
import './menuMovilStyle.css';


const MenuMovil = ({ isOpen }) => {
    return (
        <div className={`menuMovil ${isOpen ? "abierto" : ""}`}>
            
            <nav className="navStyle">
                <Link to="/" className="linkStyle">Home</Link>
                <Link to="/historia" className="linkStyle">Historia</Link>
                <Link to="/misionVision" className="linkStyle">Misión y visión</Link>
                <Link to="/directivos" className="linkStyle">Equipo Directivo</Link>
                <Link to="/propuestaEducativa" className="linkStyle">Propuesta Educativa</Link>
                <Link to="/embajadaPaz" className="linkStyle">Embajada de Paz</Link>
                <Link to="/jardin" className="linkStyle">Jardín</Link>
                <Link to="/primario" className="linkStyle">Primario</Link>
                <Link to="/secundario" className="linkStyle">Secundario</Link>
                <Link to="/contacto" className="linkStyle">Contacto</Link>
            </nav>
        </div>
    );
};

export default MenuMovil;

/*
<button className="cerrarMenu" onClick={closeMenu}>X</button>
*/