import React from 'react';
import './carrusel.css';
import Carousel from 'react-bootstrap/Carousel';


const Carrusel = ({ imagenes }) => {
  return (
    <div className="contenedorCarrusel">
        <Carousel className='carrusel'>
            {imagenes.map((image, index) => (
                <Carousel.Item key={index} interval={2000}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
            />
      </Carousel.Item>
        ))}
      </Carousel>
    
    </div>
  );
};

export default Carrusel;

 /**/