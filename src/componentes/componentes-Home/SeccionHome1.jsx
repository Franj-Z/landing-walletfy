import React, { Fragment } from 'react';
import imagenes from '../../assets/imagenes';
import iconos from '../../assets/iconos';

const SeccionHome1 = () => {
    return ( 
        <Fragment>
            <section className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 align-self-sm-center'>
                        <h1 className='titulo-home text-center'>El aliado de tu bolsillo</h1>
                        <p className='p-home text-center'>Cuando tenés la costumbre de organizar bien tu dinero, pagás menos por tus seguros, la luz o el teléfono, conseguís la mejor financiación, y controlás vos a los bancos… ¡Te acostumbrás a tener más dinero!</p>
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
        </Fragment>
     );
}
 
export default SeccionHome1;