import React, { Fragment } from 'react'
import imagenes from '../assets/imagenes';
const SobreNosotros = () => {
    return ( 
        <Fragment>
            <section className='container-fluid'>
                <div className='s1-n circle invert green'>
                    <div className='container position-relative'>
                        <div className='row justify-content-center'>
                            <div className='col-12 col-lg-8'>
                                <h1 className='encabezado-s'>Walletfy ayuda a cientos de miles de personas en Argentina a <b>poner su dinero en forma.</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row position-relative'>
                        <div className='col-12 col-lg-6 texto-s'>
                            <h2 className='h3 h-s'>En Walletfy nuestro objetivo principal es brindarle las herramientas necesarias a las personas para su <b>capacitacion en el mundo de las finazas.</b></h2>
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
                                <h2 className='h3 h-s'>Queremos que su vida financiera esté libre de estrés.</h2>
                                <p className='p-s'>Walletfy lo ayuda a poner sus finanzas en forma para que no tenga que preocuparse por cada dólar que gasta. Si sabes cuánto y en qué gastas, es más fácil cambiar tus hábitos financieros, si sientes que eso es lo que necesitas.</p>
                                <p className='p-s'>Tener una imagen completa de sus finanzas en un solo lugar, hace que sean más fáciles de administrar. Nuestra misión aquí es ayudarlo a dejar atrás sus fantasmas financieros, superar sus miedos financieros y tratarse a sí mismo con sabiduría financiera.</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='row d-3 position-relative mb-5'>
                                <div className='col-12 text-center '>
                                    <h1 className='h-s'>Conoce a nuestro equipo</h1>
                                    <p className='p-s'>Walletfy fue fundado por estudiantes de la Escuela Da Vinci que querían hacer que la educación financiera fuera más divertida y atractiva para los adultos jóvenes. Hoy, Walletfy cuenta con un equipo diverso de profesionales calificados que lo llevan al siguiente nivel, somos alrededor de... 2 personas.</p>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center text-center">
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src={imagenes.Profile3} alt="Perfil1" />
                                                <h5 className="card-title pt-3">Cristian Enrique Bösz</h5>
                                                <p className="card-text">CEO/Fundador</p>
                                                <ul className="btn-group ul-s">
                                                    <li><a href="mailto:cristian.bosz@davinci.edu.ar" className="bi bi-envelope-fill a-s"></a></li>
                                                    <li><a href="https://ar.linkedin.com/" target="_blank" className="bi bi-linkedin a-s"></a></li>
                                                    <li><a href="https://www.instagram.com/?hl=es" target="_blank" className="bi bi-instagram a-s"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <img src={imagenes.Profile2} alt="Perfil2" />
                                                <h5 className="card-title pt-3">Francisco Agustin Zoric</h5>
                                                <p className="card-text">CEO/Fundador.</p>
                                                <ul className="btn-group ul-s">
                                                    <li><a href="mailto:francisco.zoric@davinci.edu.ar" className="bi bi-envelope-fill a-s"></a></li>
                                                    <li><a href="https://ar.linkedin.com/" target="_blank" className="bi bi-linkedin a-s"></a></li>
                                                    <li><a href="https://www.instagram.com/?hl=es" target="_blank" className="bi bi-instagram a-s"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default SobreNosotros;