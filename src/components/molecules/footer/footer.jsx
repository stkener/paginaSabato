import React from "react";
import './footerStyle.css';
import ContenedorLogoTitulo from "../../atoms/contenedorLogoTitulo/contenedorLogoTitulo";
import ContenedorLinksFooter from "../../atoms/contenedorLinksFooter/contenedorLinksFooter";

const Footer = () => {
    return (
        <div className="estiloFooter">
            <ContenedorLogoTitulo tipo="footer"/>
            <ContenedorLinksFooter />
        </div>
    );
};

export default Footer;