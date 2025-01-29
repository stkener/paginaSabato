import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function VentanaModalError({ mostrar, onClose, mensaje }) {
    return (
        <Modal show={mostrar} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Errores en el formulario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{mensaje}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VentanaModalError;