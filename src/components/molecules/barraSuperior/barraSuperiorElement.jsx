import React from "react";
import './barraSuperiorStyle.css'
import ContenedorLogoTitulo from "../../atoms/contenedorLogoTitulo/contenedorLogoTitulo";
import MenuBarra from "../../atoms/menuBarra/menuBarra";
import BotonHamburguesa from "../../atoms/botonHamburguesa/botonHamburguesa";

const BarraSuperior = () => {

    return(
        
        <div className="barraTituloMenu">
            <ContenedorLogoTitulo tipo="barra"/>
            <MenuBarra />
            <BotonHamburguesa />            
        </div>
    );
}
export default BarraSuperior; 
