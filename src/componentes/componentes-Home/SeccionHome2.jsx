import React, { Fragment, useState } from 'react'
import iconos from '../../assets/iconos';
import Pastillas from './Pastillas';

const SeccionHome2 = () => {
    const pastillas = [
        {
            id: 1,
            icono: iconos.Torta,
            texto: 'Informes ordenados con todos tus gastos.'
        },
        {
            id: 2,
            icono: iconos.Book,
            texto: 'Capacitarse y aprender nunca fue tan facil.'
        },
        {
            id: 3,
            icono: iconos.Bell,
            texto: 'Notificaciones y Seguimiento en tiempo real.'
        },  
    ]
    const [pastilla, setPastilla] = useState(pastillas);


    return ( 
        <Fragment>
            <section className='container'>
                <h2 className='pt-5 pb-5 subtitulo-home'>Walletfy ¡Mucho más que una billetera virtual!</h2>
                <div className='pastillas'>
                    <div className='row'>
                        <Pastillas pastilla = {pastilla}/>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default SeccionHome2;