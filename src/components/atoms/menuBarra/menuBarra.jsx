import React from "react";
import { Link } from "react-router-dom";
import BotonMenu from "../botonMenu/botonMenu";
import SubMenu from "../subMenu/subMenu";
//import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import './menuBarraStyle.css'
//import { useState } from "react";


const MenuBarra = () => {
    
    return (
        <div className="menuBarraStyle">
            <Link to="/"><BotonMenu texto="Home" /></Link>
            <SubMenu 
                textoBoton="Nosotros" 
                opciones={[
                    { texto: "Historia", ruta: "/historia" },
                    { texto: "Misión y visión", ruta: "/misionVision" },
                    { texto: "Equipo Directivo", ruta: "/directivos" },
                    { texto: "Propuesta educativa", ruta: "/propuestaEducativa" },
                    { texto: "Embajada de Paz", ruta: "/embajadaPaz" }
                ]}
            />
            
            <SubMenu 
                textoBoton="Niveles" 
                opciones={[
                    { texto: "Jardín", ruta: "/jardin" },
                    { texto: "Primario", ruta: "/primario" },
                    { texto: "Secundario", ruta: "/secundario" }
                ]}
            />            
            <Link to="/contacto"><BotonMenu texto="Contacto" /></Link>
            
        </div>
    );
};

export default MenuBarra;

//<BotonMenu texto="Niveles" onClick={() => console.log("Ir a Niveles")} />
//<Link to="/nosotros"><BotonMenu texto="Nosotros" /></Link>