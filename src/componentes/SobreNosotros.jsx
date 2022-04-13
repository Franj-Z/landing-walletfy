import React, { Fragment } from 'react'
import SeccionSobre1 from './componentes-SobreNosotros/SeccionSobre1';
import SeccionSobre2 from './componentes-SobreNosotros/SeccionSobre2';
import SeccionSobre3 from './componentes-SobreNosotros/SeccionSobre3';
const SobreNosotros = () => {
    return ( 
        <Fragment>
            <SeccionSobre1/>
            <SeccionSobre2/>
            <SeccionSobre3/>    
        </Fragment>
     );
}
 
export default SobreNosotros;