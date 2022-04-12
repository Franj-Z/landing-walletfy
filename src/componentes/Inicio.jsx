import React, { Fragment } from 'react';
import imagenes from '../assets/imagenes.js';
import iconos from '../assets/iconos.js';

const Inicio = () => {
    return ( 
        <Fragment>
            <section className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 align-self-sm-center'>
                        <h1 className='titulo-home text-center'>El aliado de tu bolsillo</h1>
                        <p className='p-home text-center'>Cuando tienes la costumbre de organizar bien tu dinero, pagas menos por tus seguros, la luz o el teléfono, consigues la mejor financiación, y controlas tú a los bancos… ¡Te acostumbras a tener más dinero!</p>
                        <div className='plataformas text-center'>
                            <a href="https://www.apple.com/la/ios/ios-15/" className='btn btn-dark mt-3'><img src={iconos.Apple} alt="icono apple" /></a>
                            <a href="https://play.google.com/store?hl=es_AR&gl=US" className='btn btn-dark ms-3 mt-3'><img src={iconos.Android} alt="icono android" /></a>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-center'>
                        <img src={imagenes.Home} alt="Imagen de la Home" className='img-fluid' />
                    </div>
                </div>
            </section>
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
 
export default Inicio;
