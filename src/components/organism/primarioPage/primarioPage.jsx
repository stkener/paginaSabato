import React, { useState } from 'react';
import { Modal, Carousel, Image } from 'react-bootstrap';
import './primarioPageStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function PrimarioPage() {
    const [mostrar, setMostrar] = useState(false);
    const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);

    const imagenes = [
        "./images/uniforme_gim.png",
        "./images/buzo.png"
    ];

     // Funciones para manejar el modal y la selección de imágenes
    const handleClose = () => setMostrar(false);
    const handleShow = (index) => {
        setIndiceSeleccionado(index);
        setMostrar(true);
    };

    const handleSelect = (selectedIndex, e) => {
        setIndiceSeleccionado(selectedIndex);
    };

    return(
        <div>
            <h2 className='letraTitulo aparecer'>Nivel Primario</h2>
            <div className='contenedorParrafoImg'>
                <p className='parrafo estiloMarcoParrafo aparecerIzquierda'>
                    En el Nivel Primario comienza una etapa clave en la trayectoria educativa. En este nivel, se prioriza el desarrollo de habilidades cognitivas, sociales y emocionales a través de propuestas educativas que integran la curiosidad y la participación activa de los niños. La enseñanza se organiza en torno a contenidos adecuados para su edad, con un enfoque en la lectura, escritura y matemáticas, complementados por actividades que fomentan la creatividad y el pensamiento crítico. A su vez, se promueven valores como el respeto, la solidaridad y la responsabilidad, preparando a los estudiantes para una convivencia armónica y una integración activa en su entorno escolar y social.
                    
                </p>
                <img src="./images/primariaSabato.jpg" alt="fotoPrimario" className='fotoNivelesEstilo aparecerDerecha'/>
            </div>

            <div className='contenedorHorarioIngresoUniforme aparecer'>
                <div className='contenedorHorariosUniforme'>
                    <div>
                        <h3 className='letraSubTitulo'>Horarios</h3>
                        <p className='parrafo'>Turno Mañana: 8:30 a 12:30</p>
                        <p className='parrafo'>Turno Tarde: 13 a 16:30</p>
                    </div>
                    <div>
                        <h3 className='letraSubTitulo'>Uniforme</h3>
                        {/* Miniaturas */}
                        <div className="d-flex gap-2 contenedorUniforme">
                            {imagenes.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    thumbnail
                                    style={{ cursor: 'pointer' }} //, width: '150px', height: '100px'
                                    onClick={() => handleShow(index)}
                                    alt={`Thumbnail ${index + 1}`}
                                    className='imagenUniforme'
                                />
                            ))}
                        </div>

                        {/* Modal con la galería */}
                        <Modal show={mostrar} onHide={handleClose} centered size="sm">
                            <Modal.Header closeButton>
                                <Modal.Title>Uniforme</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Carousel activeIndex={indiceSeleccionado} onSelect={handleSelect}>
                                    {imagenes.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="d-block w-100"
                                                src={image}
                                                alt={`Slide ${index + 1}`}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
                <div>
                    <h3 className='letraSubTitulo'>Requisitos de ingreso</h3>
                    <ul className='parrafoBis'>
                        <li>Tener la edad requerida al 30 de junio.</li>
                        <li>Examen de ingreso. Se tomará a partir de 2º año de EP.</li>
                        <li>Fotocopia del DNI. (frente y dorso)</li>
                        <li>Constancia de alumno regular del año que cursa.</li>
                        <li>Fotocopia de la Partida de Nacimiento.</li>
                        <li>Fotocopia de boletín.</li>
                        <li>Tres fotos de 4 X 4.</li>
                        <li>Vacunas:</li>
                            <ul>
                                <li>BCG</li>
                                <li>Triple</li>
                                <li>Sabín</li>
                                <li>MMR o Antisarampionosa</li>
                            </ul>
                        <li>Certif. Bucodental</li>
                        <li>Examen audiométrico</li>
                        <li>Examen de agudeza visual</li>
                        <li>Apto físico para realizar actividad deportivo-recreativa.</li>
                    </ul>
                </div>
            </div>

            <div className='contenedorUbicacion aparecer'>
                <div className='contenedorMapaInfo'>
                <div>
                    <h3 className='letraSubTitulo'>Ubicación</h3>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6316037871075!2d-58.64720712099287!3d-34.58818700323861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb94b9a6bbe93%3A0x1f84ea99c050379!2sGerman%20Argerich%201742%2C%20B1686%20Hurlingham%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1734361735174!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                        }}
                    />
                </div>
                </div>
                <div className='contenedorListaInfo'>
                    <ul className='listaInfoStyle'>
                        <li>
                            <span className="icono"><FontAwesomeIcon icon={faLocationDot} /></span>
                            <span className="texto">Argerich 1742, Hurlingham</span>
                        </li>
                        <li>
                            <span className="icono"><FontAwesomeIcon icon={faWhatsapp} /></span>
                            <span className="texto"></span>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/colegioernestosabatoprimaria/" target="_blank" rel="noopener noreferrer">
                                <span className="icono"><FontAwesomeIcon icon={faSquareFacebook} /></span>
                                <span className="texto">Primaria Ernesto Sabato</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PrimarioPage;