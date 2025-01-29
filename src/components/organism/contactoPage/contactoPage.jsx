import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import FormularioContacto from '../../molecules/formularioContacto/formularioContacto';
import './contactoPageStyle.css'

function ContactoPage() {
    
    return(
        <div className='contenedorFormularioTitulo'>
            <h1 className='letraTitulo'>Contacto</h1>
            <FormularioContacto />
    
        </div>
    ) 
}

export default ContactoPage;