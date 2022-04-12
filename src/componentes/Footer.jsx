import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import iconos from '../assets/iconos';


const Footer = () => {
    return ( 
        <Fragment>
            <footer className='bg-light'>
                <div className='container footer-w'>
                    <div className='row'>
                        <div className='col-12 col-lg-2 pb-2 d-flex justify-content-center'>
                            <img src={iconos.Iconow} alt="Icono Walletfy" className='footer-img' />
                        </div>
                        <div className='col-12 col-lg-6 align-self-center d-none d-lg-block'>
                            <div className='row'>
                                <div className='col-8 '>
                                <ul>
                                    <li><Link to="/">Inicio</Link></li>
                                    <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
                                    <li><Link to="/contactos">Contactos</Link></li>
                                    <li><a href="#">Más Walletfy</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-12 col-lg-4 text-center text-md-right align-self-center'>
                            <button className='btn btn-dark'><i className="bi bi-robot pe-2"></i><span>Android</span></button>
                            <button className='btn btn-dark ms-2'><i className="bi bi-apple pe-2"></i>Apple</button>
                            <ul className="btn-group ul-s">
                                <li><a href="https://www.facebook.com" className="bi bi-facebook a-f"></a></li>
                                <li><a href="https://www.twitter.com/" target="_blank" className="bi bi-twitter a-f"></a></li>
                                <li><a href="https://www.instagram.com/?hl=es" target="_blank" className="bi bi-instagram a-f"></a></li>
                            </ul>
                        </div>
                        <div className='col-12 mb-4'>
                            <div className="text-center">
                                <small>
                                    Copyright 2022 Walletfy | Todos los derechos reservados.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
     );
}
 
export default Footer;