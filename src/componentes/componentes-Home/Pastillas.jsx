import React, { Fragment } from 'react'

const Pastillas = (props) => {
    console.log(props.pastilla);
    return ( 
        <Fragment>
            {
                props.pastilla.map(pastilla => (
                    <div key={pastilla.id} className='col-12 col-lg-4 div-h'>
                        <div className='text-center pasti'>
                                <img src={pastilla.icono} alt={pastilla.titulo} className='img-fluid' />
                                <h3 className="tituPasti">{pastilla.titulo}</h3>
                                <p>{pastilla.texto}</p>
                        </div>
                    </div>
                ))
            }
        </Fragment>
     );
}
 
export default Pastillas;