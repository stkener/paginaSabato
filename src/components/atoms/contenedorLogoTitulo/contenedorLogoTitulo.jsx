import React from "react";
import './contenedorLogoTituloStyle.css'


const ContenedorLogoTitulo = ({tipo}) => {

    return(
        <div className={`contenedorTituloLogo ${tipo}`}>
            <img src="/images/Logo_Sabato.png" alt="Logo Sabato" className={tipo}/>
            <div className={`nombreLogo ${tipo}`}>
                <p className={tipo}>COLEGIO</p>
                <p className={tipo}>ERNESTO SABATO</p>
                <p className={tipo}>DIPREGEP 6499</p>
            </div>
        </div>
    );
}
export default ContenedorLogoTitulo; 
