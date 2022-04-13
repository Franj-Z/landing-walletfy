import React, { Fragment } from 'react'
import imagenes from '../../assets/imagenes';

const SeccionHome3 = () => {
    return ( 
        <Fragment>
            <article className=' container pt-5 mb-5'>
                <div className='row'>
                    <div className='col-12 col-lg-4'>
                        <img src={imagenes.Home2} alt="Mockup" className='img-fluid d-none d-lg-block'/>
                    </div>
                    <div className='col-12 col-lg-8'>
                        <h2 className='h2-h'>Walletfy es</h2>
                        <ul className='wallet-h'>
                            <li className='wallet-li'>Profesional: Todos nuestros cursos integrales, con ejemplos del mundo real, han sido desarrollados por expertos para convertirlo en un experto.</li>
                            <li className='wallet-li'>Personalizado: El feed en la aplicación le brinda cursos personalizados, cuestionarios interesantes, categorías de glosario útiles, videos educativos que despiertan la curiosidad para satisfacer sus necesidades y habilidades.</li>
                            <li className='wallet-li'>Móvil: Permitiendo el aprendizaje sobre la marcha con tan solo 3 minutos para completar una lección y breves cuestionarios interactivos para verificar su progreso.</li>
                            <li className='wallet-li'>Integral: El glosario financiero detallado y sin jerga que simplifica las nociones complicadas.</li>
                            <li className='wallet-li'>Simple: Interfaz clara y sencilla con información presentada en tarjetas y una opción de pin para recordar y volver al material.</li>
                        </ul>
                    </div>
                </div>
            </article>
        </Fragment>
     );
}
 
export default SeccionHome3;
