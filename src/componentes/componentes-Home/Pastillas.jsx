import React, { Fragment } from 'react'

const Pastillas = (props) => {
    console.log(props.pastilla);
    return ( 
        <Fragment>
            {
                props.pastilla.map(pastilla => (
                    <div key={pastilla.id} className='col-12 col-lg-4 div-h'>
                        <div className='row d-flex align-items-center'>
                                <div className='col-2'>
                                    <div className='pastilla'>
                                        <img src={pastilla.icono} alt="Icono Torta" className='pastillaIconoTorta' />
                                    </div>
                                </div>
                                <div className='col-10'>
                                    <p className='descripcionPastillas'>{pastilla.texto}</p>
                                </div>
                        </div>
                    </div>
                ))
            }
        </Fragment>
     );
}
 
export default Pastillas;