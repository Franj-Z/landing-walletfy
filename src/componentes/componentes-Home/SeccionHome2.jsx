import React, { Fragment, useState } from 'react'
import iconos from '../../assets/iconos';
import Pastillas from './Pastillas';
import imagenes from '../../assets/imagenes'
const SeccionHome2 = () => {
    const pastillas = [
        {
            id: 1,
            titulo: 'Capacitación',
            icono: imagenes.WallyLibro,
            texto: 'Capacitarse y aprender nunca fue tan fácil. Lecciones ordenadas desde el nivel más básico hasta el más avanzado del mundo de las finanzas.'
        },
        {
            id: 2,
            titulo: 'Información detallada',
            icono: imagenes.WallyTorta,
            texto: 'Informes ordenados con todos tus gastos junto a poderosos gráficos para saber a dónde está yendo tu dinero.'
        },
        {
            id: 3,
            titulo: 'Recordatorios',
            icono: imagenes.WallyTips,
            texto: 'Notificaciones y seguimiento en tiempo real mostrando cálculos y porcentajes en el momento trayendo así un resumen completo de tu dinero.'
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