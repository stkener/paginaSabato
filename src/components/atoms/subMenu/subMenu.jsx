import React from "react";
import './subMenu3Style.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ textoBoton, opciones }) => {
    const [mostrarSubmenu, setMostrarSubmenu] = useState(false);

    const abrirCerrarSubmenu = () => {
        setMostrarSubmenu(!mostrarSubmenu);
    };
    return(
        <Dropdown isOpen={mostrarSubmenu} toggle={abrirCerrarSubmenu}>
            <DropdownToggle className="botonDesplegable">
                {textoBoton}
            </DropdownToggle>
            <DropdownMenu className="boxSubMenu">
                {opciones.map((opcion, index) => (
                    <Link key={index} to={opcion.ruta}>
                        <DropdownItem className="itemMenu">{opcion.texto}</DropdownItem>
                    </Link>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}

export default SubMenu;