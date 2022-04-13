import React, { Fragment } from 'react'
import SeccionContactos1 from './componentes-Contactos/SeccionContactos1';
import SeccionContactos2 from './componentes-Contactos/SeccionContactos2';



const Contactos = () => {

    return ( 
        <Fragment>
            <aside className="container-fluid  py-3 contacto">
            <SeccionContactos1/>
            <SeccionContactos2/>          
            </aside>
        </Fragment>
     );
}
 
export default Contactos;