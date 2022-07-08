import React, { Fragment, useState } from 'react';
import imagenes from '../../assets/imagenes';
import CardEquipo from './CardEquipo';

const SeccionSobre3 = () => {
    
    const equipoTrabajo = [
        {   id: 1,
            imagen: imagenes.Profile3, 
            nombre: 'Cristian Enrique Bösz', 
            cargo: 'CEO/Fundador', 
            email: 'mailto:cristian.bosz@davinci.edu.ar',
            like: 'https://www.linkedin.com/in/cristian-bosz/',
            insta: 'https://www.instagram.com/cristianbosz/?hl=es' },
        
        {   id: 2,
            imagen: imagenes.Profile2, 
            nombre: 'Francisco Agustin Zoric', 
            cargo: 'CEO/Fundador', 
            email: 'mailto:francisco.zoric@davinci.edu.ar',
            like: 'https://www.linkedin.com/in/francisco-agustin-zoric-a43971241/',
            insta: 'https://www.instagram.com/agus_zoric/' },
    ]

    const [equipo, setEquipo] = useState(equipoTrabajo);
    
    
    return ( 
    <Fragment>
        <section className='container'>
                    <div className='row d-3 position-relative mb-5'>
                            <div className='col-12 text-center '>
                                <h1 className='h-s'>Conocé a nuestro equipo</h1>
                                <p className='p-s'>Walletfy fue fundado por estudiantes de la Escuela Da Vinci que querían hacer que la educación financiera fuera más divertida y atractiva para los adultos jóvenes. Hoy, Walletfy cuenta con un equipo diverso de profesionales calificados que lo llevan al siguiente nivel.</p>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center text-center equipo">
                                <CardEquipo equipo= {equipo}/>
                            </div>
                    </div>
            </section>
    </Fragment> 
    
    );
}
 
export default SeccionSobre3;
