import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import imagenes from "../assets/imagenes";

const Botonera = () => {
    return (  
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                            <a className="navbar-brand titulo" href="#">
                                <img src={imagenes.Logo} alt="logo" className="logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item me-2 position-relative">
                                        <Link className="nav-link boton" to="/">Inicio</Link>
                                    </li>
                                    <li className="nav-item  me-2 position-relative">
                                        <Link className="nav-link boton" to="/sobrenosotros">Sobre Nosotros</Link>
                                    </li>
                                    <li className="nav-item  me-2 position-relative">
                                        <Link className="nav-link boton" to="/contactos">Contactos</Link>
                                    </li>
                                </ul>
                            </div>
                    </div>
           </nav>
        </Fragment>
    );
}
 
export default Botonera;