import React, { useState } from 'react';
import { Modal, Carousel, Image } from 'react-bootstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function SecundarioPage() {
    const [mostrar, setMostrar] = useState(false);
    const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);

    const imagenes = [
        "./images/uniforme_gris.png",
        "./images/uniforme_chicas.png"
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
            <h2 className='letraTitulo aparecer'>Nivel Secundario</h2>
            <div className='contenedorParrafoImg'>
                <p className='parrafo estiloMarcoParrafo aparecerIzquierda'>
                   En el Nivel Secundario se transita una etapa crucial en la trayectoria escolar. La educación en este nivel se centra en la construcción de conocimientos específicos y en el desarrollo del pensamiento crítico, habilidades fundamentales para la vida adulta. A través de propuestas educativas de calidad, se promueven aprendizajes significativos que preparan a los estudiantes para afrontar desafíos académicos, laborales y sociales. Los contenidos están diseñados para responder a su edad y fomentar la autonomía, el compromiso y la responsabilidad. Asimismo, se prioriza la formación en valores personales y sociales orientados a la convivencia, la participación activa y la integración en el ámbito comunitario y ciudadano. 
                </p>
                <img src="./images/secundariaSabato.jpg" alt="fotoJardin" className='fotoNivelesEstilo aparecerDerecha'/>
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
                        <li>Rendir un examen nivelatorio de Lengua y otro de Matemática.</li>
                        <li>Fotocopia del DNI. (frente y dorso)</li>
                        <li>Fotocopia de la Partida de Nacimiento.</li>
                        <li>Fotocopia de boletín.</li>
                        <li>Tres fotos de 4 X 4.</li>
                        <li>Concesión del pase emitido por la Escuela/Colegio de procedencia.</li>
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
                            __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.0189514452977!2d-58.64443267567049!3d-34.57838702085862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9536762c285%3A0xd4b90cc616069641!2sMaestra%20Piovano%201053%2C%20B1686%20William%20C.%20Morris%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1734370854588!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                        }}
                    />
                </div>
                </div>
                <div className='contenedorListaInfo'>
                    <ul className='listaInfoStyle'>
                        <li>
                            <span className="icono"><FontAwesomeIcon icon={faLocationDot} /></span>
                            <span className="texto">Maestra Piovano 1053/1061, Hurlingham</span>
                        </li>
                        <li>
                            <span className="icono"><FontAwesomeIcon icon={faWhatsapp} /></span>
                            <span className="texto"></span>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100072023436259" target="_blank" rel="noopener noreferrer">
                                <span className="icono"><FontAwesomeIcon icon={faSquareFacebook} /></span>
                                <span className="texto">Primaria Ernesto Sabato</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ) 
}

export default SecundarioPage;