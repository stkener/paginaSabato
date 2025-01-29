import React from 'react';
import './embajadaPazStyle.css'

function EmbajadaPazPage() {
    return(
        <div className='divGeneralEmbajada'>
            <h2 className='tituloEmbajada aparecer'>Somos una embajada de Paz</h2>
            <div className='contenedorImgInstituciones'>
                <img className="imgMilMilenios aparecer" src="/images/mpmLogo.png" alt="Mil milenios de Paz" />
                <img className="imgUnesco aparecer" src="/images/unescoLogo.png" alt="UNESCO" />
                <img className="imgPaz aparecer" src="/images/pazLogo.jpg" alt="Simbolo de Paz" />
            </div>
            <div className='contenedorParrafoDiploma'>
                <div className='parrafoContenedor aparecerIzquierda'>
                    <p className='parrafo'>
                        A través de la fundación Mil Milenios de Paz, y en asociación con la UNESCO, nos nombraron Embajada de Paz.
                        En el marco del proyecto <span>Mil Banderas para Mil Escuelas, Instituciones, Organizaciones y Personalidades “Despertando conciencia de Paz”</span>, nos comprometimos promover y concientizar para la paz.
                        Todos los años realizamos jornadas y actividades artísticas, ecológicas, sociales y culturales, promoviendo los valores de la paz y la unidad.
                    </p>
                </div>
                <img className='imgDiplomaStyle aparecerDerecha' src="/images/diplomaPaz.png" alt="Diploma" /> 
            </div>
            <div className='contenedorParrafoDiploma valoresCel'>
                <img className='fotoPazStyle aparecer' src="/images/fotosPaz.png" alt="fotosPaz" />
                <div class="contenedorValores aparecer">
                    <h2 class="tituloValores">Nuestros valores</h2>
                    <ul class="listaValores">
                        <li>Respeto a la vida</li>
                        <li>Dignidad del ser humano</li>
                        <li>Igualdad</li>
                        <li>Amor</li>
                        <li>Empatía</li>
                        <li>Paciencia</li>
                        <li>Perdón</li>
                        <li>Humildad</li>
                        <li>Solidaridad</li>
                        <li>Tolerancia</li>
                    </ul>
                </div>
            </div>
        </div>
    ) 
}

export default EmbajadaPazPage;

