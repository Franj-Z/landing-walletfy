import React, { Fragment } from 'react'
import iconos from '../../assets/iconos';

const SeccionHome2 = () => {
    return ( 
        <Fragment>
            <section className='container'>
                <h2 className='pt-5 pb-5 subtitulo-home'>Walletfy ¡Mucho más que una billetera virtual!</h2>
                <div className='pastillas'>
                    <div className='row'>
                            <div className='col-12 col-lg-4 div-h'>
                                <div className='row d-flex align-items-center'>
                                        <div className='col-2'>
                                            <div className='pastilla'>
                                                <img src={iconos.Torta} alt="Icono Torta" className='pastillaIconoTorta' />
                                            </div>
                                        </div>
                                        <div className='col-10'>
                                            <p className='descripcionPastillas'>Informes ordenados con todos tus gastos.</p>
                                        </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-4 div-h'>
                                <div className='row d-flex align-items-center'>
                                        <div className='col-2'>
                                            <div className='pastilla'>
                                                <img src={iconos.Book} alt="Icono Torta" className='pastillaIconoLibro' />
                                            </div>
                                        </div>
                                        <div className='col-10'>
                                            <p className='descripcionPastillas'>Capacitarse y aprender nunca fue tan facil.</p>
                                        </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-4 div-h'>
                                <div className='row d-flex align-items-center'>
                                        <div className='col-2'>
                                            <div className='pastilla'>
                                                <img src={iconos.Bell} alt="Icono Torta" className='pastillaIconoCampana' />
                                            </div>
                                        </div>
                                        <div className='col-10'>
                                            <p className='descripcionPastillas'>Notificaciones y Seguimiento en tiempo real.</p>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default SeccionHome2;