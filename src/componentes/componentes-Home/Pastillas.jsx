import React, { Fragment } from 'react'
import { motion } from 'framer-motion';
const Pastillas = (props) => {
    console.log(props.pastilla);
    return ( 
        <Fragment>
            {
                props.pastilla.map(pastilla => (
                    <div key={pastilla.id} className='col-12 col-lg-4 div-h my-3'>
                        <motion.div className='text-center pasti'
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                          }}>
                                <img src={pastilla.icono} alt={pastilla.titulo} className='img-fluid' />
                                <h3 className="tituPasti text-white fw-bold">{pastilla.titulo}</h3>
                                <p className='fw-normal text-white'>{pastilla.texto}</p>
                        </motion.div>
                    </div>
                ))
            }
        </Fragment>
     );
}
 
export default Pastillas;