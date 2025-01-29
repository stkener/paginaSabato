import React, { useState } from "react";
import './botonHamburguesaStyle.css';
import MenuMovil from "../menuMovil/menuMovil";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const BotonHamburguesa = () => {
    /*const [activo, setActivo] = useState(false);

    const toggleActivo = () => {
        setActivo(!activo);
    };*/

    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => setMenuAbierto(!menuAbierto);
    /*const closeMenu = () => setMenuAbierto(false);*/

    return(
        <div
            className={`hamburguesa ${menuAbierto ? "activo" : ""}`} 
            onClick={toggleMenu}
        >
            
            {menuAbierto ? (
                <FontAwesomeIcon icon={faXmark} className="icono" />
            ) : (
                <FontAwesomeIcon icon={faBars} className="icono" />
            )}    

            <MenuMovil isOpen={menuAbierto} />   
        </div>
    );
}

export default BotonHamburguesa;

/*

<FontAwesomeIcon icon="fa-regular fa-bars" />   
            <FontAwesomeIcon icon="fa-solid fa-xmark" />  

<span className="linea lineaUno"></span>
            <span className="linea lineaDos"></span>
            <span className="linea lineaTres"></span>
*/