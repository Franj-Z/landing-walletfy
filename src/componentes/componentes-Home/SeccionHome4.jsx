import React, { Fragment } from 'react';
import imagenes from '../../assets/imagenes';

const SeccionHome4 = () => {
    return ( 
        <Fragment>
            <div className='container text-center d-none d-lg-block'>
                <div className='mt-5 pt-5 mb-5 pb-5'>
                    <div className='row anuncio'>
                        <div className='col col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <img src={imagenes.Logo2} alt="logo" className='logo2' />
                        </div>
                        <div className='col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                            <p className='anunciop'>Mantenete al tanto de todos tus movimiento mientras aprendés del mundo de finanzas</p>
                        </div>
                        <div className='col col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2'>
                            <button className='btn btn-primary btn-lg'>Saber más</button>
                        </div>
                    </div>
                </div>    
            </div>
        </Fragment>
     );
}
 
export default SeccionHome4;