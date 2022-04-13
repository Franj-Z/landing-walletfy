import React, { Fragment } from 'react';
import SeccionHome1 from './componentes-Home/SeccionHome1.jsx';
import SeccionHome2 from './componentes-Home/SeccionHome2.jsx';
import SeccionHome3 from './componentes-Home/SeccionHome3.jsx';

const Inicio = () => {
    return ( 
        <Fragment>
            <SeccionHome1/>
            <SeccionHome2/>
            <SeccionHome3/>
        </Fragment>
     );
}
 
export default Inicio;
