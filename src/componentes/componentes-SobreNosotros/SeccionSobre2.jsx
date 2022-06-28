import React, { Fragment } from 'react'
import imagenes from '../../assets/imagenes';

const SeccionSobre2 = () => {
    return ( 
        <Fragment>
            <section className='container'>
                    <div className='row position-relative'>
                        <div className='col-12 col-lg-6 texto-s'>
                            <h2 className='h3 h-s'>En Walletfy nuestro objetivo principal es brindarle las herramientas necesarias a las personas para su <b>capacitación en el mundo de las finazas.</b></h2>
                            <p className='p-s'>Creemos que administrar las finanzas debería ser tan fácil como comprar en línea. Debe hacerse en cualquier momento, en cualquier lugar y en unos pocos clics.</p>
                            <p className='p-s'>Lo que comenzó como un simple seguimiento de gastos para un pequeño grupo de personas se ha convertido en una aplicación de finanzas personales que aporta belleza a las finanzas de cientos de miles de usuarios de casi todos los países del mundo.</p>

                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='contenedor-divs'>
                                <div className='div-1'>
                                </div>
                                <div className='div-2'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='circle grey small'>
                        <div className='row d-2 position-relative'>
                            <div className='col-12 col-lg-6'>
                                <div className=''>
                                    <img src={imagenes.Team2} alt="Equipo de trabajo" className='img-fluid img-s'/>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6 texto-s'>
                                <h2 className='h3 h-s'>Queremos que tu vida financiera esté libre de estrés.</h2>
                                <p className='p-s'>Walletfy te ayuda a poner tus finanzas en forma para que no tengas que preocuparte por cada dólar que gastás. Si sabés cuánto y en qué gastas, es más fácil cambiar tus hábitos financieros, si sentís que eso es lo que necesitas.</p>
                                <p className='p-s'>Tener una imagen completa de tus finanzas en un solo lugar, hace que sean más fáciles de administrar. Nuestra misión acá es ayudarlo a dejar atrás tus fantasmas financieros, superar tus miedos y tratarte a vos mismo con sabiduría financiera.</p>
                            </div>
                        </div>
                    </div>
            </section>
        </Fragment>
     );
}
 
export default SeccionSobre2;