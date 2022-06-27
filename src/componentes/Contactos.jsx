import React, { Fragment } from 'react'
import SeccionContactos1 from './componentes-Contactos/SeccionContactos1';
import SeccionContactos2 from './componentes-Contactos/SeccionContactos2';
import MapView from './componentes-Contactos/MapView';
import Contact from '../assets/imagenes/contact.jpg'

const Contactos = () => {

    return ( 
        <Fragment>
             <div class="container mb-5">
                <div class="row">
                    <div id="galeria">
                        
                            <div>
                                <img class="d-block w-100 contact-img mb-5" src={Contact} alt="mujer llamando por celular"/>
                            </div>
                    </div>
                </div>
                <h2 class= "display-6 fw-bold mt-5 mb-5 text-center" > ¡CONTACTATE CON NOSOTROS! </h2>
            </div>


            <div className='container'>
                <div className='row align-items-start'>
                    <div className='col-12 col-md-12 col-lg-6 my-5'>
                            <MapView id="map"/> 
                    </div>
                    
                  
                    <div className='col-12 col-md-12 col-lg-6'>
                        <aside className="contacto">
                        <SeccionContactos1/>
                        <SeccionContactos2/>  
                        </aside> 
                    </div> 
                </div>
            </div>
           

        </Fragment>
     );
}
 
export default Contactos;