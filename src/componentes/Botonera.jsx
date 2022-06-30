import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import imagenes from "../assets/imagenes";
import { motion } from "framer-motion"
const Botonera = () => {
    return (  
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                            <a className="navbar-brand titulo" href="#">
                                <motion.img src={imagenes.Logo} alt="logo" className="logo"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.3 }}/>
                            </a>
                  
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse justify-content-between text-center" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item me-2 position-relative">
                                        <Link className="nav-link boton text-dark " to="/">Inicio</Link>
                                    </li>
                                    <li className="nav-item  me-2 position-relative">
                                        <Link className="nav-link boton text-dark " to="/sobrenosotros">Sobre Nosotros</Link>
                                    </li>
                                    <li className="nav-item  me-2 position-relative">
                                        <Link className="nav-link boton text-dark " to="/contactos">Contactos</Link>
                                    </li>
                                </ul>
                            </div>
                    </div>
           </nav>
        </Fragment>
    );
}
 
export default Botonera;