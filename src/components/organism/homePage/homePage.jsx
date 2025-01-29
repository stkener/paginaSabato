import React from 'react';
import Carrusel from '../../atoms/carrusel/carrusel';
import './homePageStyle.css'
import { Link } from 'react-router-dom';


function HomePage() {
    const imagenes = [
        '/images/inicialPortada.png',
        '/images/primPortada.png',
        '/images/secuPortada.png',
        /*'/images/imgex1.png',
        '/images/imgex2.png',
        '/images/imgex3.png',*/
    ];
    return( 
    <div className='contenedorHome'>
        <Carrusel imagenes={imagenes}/>
        <div className='contenedorVideoLink'>
            <div>
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/5TLPYP5lk7c?si=iIEypKbXS3ZlxR5n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
                <Link to="/embajadaPaz" className='linkEmbajada'>
                    <img src="./images/embajadaPortada.png" alt="embajadaPortada" className='embajadaPortadaStyle'/>
                </Link>
            </div>
            
        </div>
    </div>
    )
}

export default HomePage;