import React from "react";
import './botonMenuStyle.css'

const BotonMenu = ({ texto }) => {
    return(
        <button className="botonMenuStyle">
            {texto}
        </button>
    );
}

export default BotonMenu;