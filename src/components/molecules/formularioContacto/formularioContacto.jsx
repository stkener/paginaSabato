import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './formularioContactoStyle.css';
import '../../atoms/botonMenu/botonMenuStyle.css';
import VentanaModalError from '../../atoms/ventanaModal/ventanaModal'
import emailjs from "emailjs-com";


function FormularioContacto() {

    const [formData, setFormData] = useState({
        user_name: "",//nombre: "",
        user_email: "",//email: "",
        nivel: "",
        form_mensaje: ""//mensaje: ""
    });

    /*const [errores, setErrores] = useState({});*/
    const [mostrarModal, setMostrarModal] = useState(false);
    const [modalMensaje, setModalMensaje] = useState("");
    
    const resetearFormulario = (e) => {
        setFormData({
            user_name: "",
            user_email: "",
            nivel: "",
            form_mensaje: ""
        });
        e.target.reset();
    };


    //handleInputChange
    //Actualiza los valores del formulario en tiempo real
    const actualizarValoresFormulario = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validarFormulario = () => {
        const error = {};

        if (!formData.user_name.trim()) {
            error.nombre = "El nombre no puede estar vacío.";
        }

        if (!formData.user_email.trim()) {
            error.email = "El email no puede estar vacío.";
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
            error.email = "Ingresa un email válido.";
        }

        if (!formData.nivel || formData.nivel === "") {
            error.nivel = "Debes seleccionar un nivel.";
        }

        if (!formData.form_mensaje.trim()) {
            error.mensaje = "El mensaje no puede estar vacío.";
        }

        /*setErrores(error);*/
        
        if (Object.keys(error).length > 0) {
            const messages = Object.values(error).join("\n");
            setModalMensaje(messages);
            setMostrarModal(true);
        }

        return Object.keys(error).length === 0;
    };

    
    const enviarDatos = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            emailjs
                .sendForm(
                    "service_febq6rg",//"tu_service_id"
                    "template_w5ht4qh",//"tu_template_id"
                    e.target,
                    "iDIImETcXAnzmqrRS"//"tu_user_id"
                )
                .then(
                    (result) => {
                        alert("Correo enviado exitosamente.");
                        resetearFormulario(e);
                    },
                    (error) => {
                        alert("Ocurrió un error, intenta de nuevo.");
                    }
                );
        }
    };

    return(
        <div>
            <form action="" className='formStyle' onSubmit={enviarDatos}>
                <div>
                    <Form.Label className='labelStyle'>Nombre</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className='inputStyle'
                        name="user_name"
                        value={formData.user_name}
                        onChange={actualizarValoresFormulario}
                    />
                    
                </div>
                <div>
                    <Form.Label className='labelStyle'>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingresa tu email"
                        className='inputStyle'
                        name="user_email"
                        value={formData.user_email}
                        onChange={actualizarValoresFormulario}
                    /> 
                    
                </div>
                <div>
                    <Form.Select
                        aria-label="Default select example"
                        className='inputStyle'
                        name="nivel"
                        value={formData.nivel}
                        onChange={actualizarValoresFormulario}
                    >
                        <option className='optionStyle' value="">A que nivel queres escribir</option>
                        <option value="1" className='optionStyle'>Inicial</option>
                        <option value="2" className='optionStyle'>Primaria</option>
                        <option value="3" className='optionStyle'>Secundaria</option>
                    </Form.Select>
                    
                </div>
                <div>
                    <Form.Label className='labelStyle'>Mensaje</Form.Label>
                    <Form.Control 
                        as="textarea"
                        rows={4}
                        className='inputStyle textareaStyle'
                        name="form_mensaje"
                        value={formData.form_mensaje}
                        onChange={actualizarValoresFormulario}
                    />
                    
                </div>
                <div>
                    <button type="submit" className="botonMenuStyle">Enviar</button>
                </div>
            </form>
            
            <VentanaModalError 
                mostrar={mostrarModal} 
                onClose={() => setMostrarModal(false)} 
                mensaje={modalMensaje} 
            />
        </div>
    ) 
}

export default FormularioContacto;

/*className='letraFormularioStyle'*/