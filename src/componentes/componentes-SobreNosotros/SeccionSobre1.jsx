import React, { Fragment } from 'react';
import Mockup1 from '../../assets/imagenes/mockup1.jpg'

const SeccionSobre1 = () => {
    return ( 
        <Fragment>
            <section className='container-fluid'>
                <div className='s1-n circle invert green'>
                    <div className='container position-relative'>
                        <div className='row justify-content-center'>
                            <div className='col-12 col-lg-8'>
                                <h1 className='encabezado-s'>Walletfy ayuda a cientos de miles de personas en Argentina a <b>poner su dinero en forma.</b></h1>
                            </div>
               
                            <div className='mockup-mobile'>
                                <img className="d-block w-100 mb-5 mockup-mobile" src={Mockup1} alt="hombre usando wallefy"/>
                            </div>
               
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default SeccionSobre1;
