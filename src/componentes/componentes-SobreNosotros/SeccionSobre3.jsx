import React, { Fragment } from 'react';
import imagenes from '../../assets/imagenes';

const SeccionSobre3 = () => {
    return ( 
    
    <Fragment>
        <section className='container'>
                    <div className='row d-3 position-relative mb-5'>
                            <div className='col-12 text-center '>
                                <h1 className='h-s'>Conoce a nuestro equipo</h1>
                                <p className='p-s'>Walletfy fue fundado por estudiantes de la Escuela Da Vinci que querían hacer que la educación financiera fuera más divertida y atractiva para los adultos jóvenes. Hoy, Walletfy cuenta con un equipo diverso de profesionales calificados que lo llevan al siguiente nivel, somos alrededor de... 2 personas.</p>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center text-center equipo">
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
            </section>
    </Fragment> 
    
    );
}
 
export default SeccionSobre3;
