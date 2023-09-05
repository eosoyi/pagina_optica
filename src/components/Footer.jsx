import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

import '../styles/Footer.css';

export const Footer = () => {
    return(
        <>
            <footer>
                <section className="container-global">
                    <section className="container-footer-main">
                        <div className="container-info-main">
                            <div className="container-info">
                                <h2 className="titulo-contactanos">CONTACTO</h2>
                                <div className="row-info">
                                    <FaWhatsapp className="icon-tels"></FaWhatsapp>
                                    <span className="text-info-contactanos">0022-4488</span>
                                </div>
                                <div className="row-info">
                                    <FaPhone className="icon-tels"></FaPhone>
                                    <span className="text-info-contactanos">0022-4488</span>
                                </div>
                            </div>
                            <div className="container-info">
                                <h2 className="titulo-contactanos">DIRECCIÓN</h2>
                                <div className="row-info">
                                    <FaMapMarkerAlt className="icon-tels"></FaMapMarkerAlt>
                                    <p className="text-ubicacion">
                                        Opticas Exclusivas Km. 22.5 Carretera a El Salvador, Empresarial Eco Plaza, 
                                        Bodega 227, GUATEMALA C.A.
                                    </p>
                                </div>
                            </div>
                            <div className="container-info">
                                <h2 className="titulo-contactanos">BÚSCANOS</h2>
                                <div className="row-redes">
                                    <FaFacebookF className="icon-redes"></FaFacebookF>
                                    <FaInstagram className="icon-redes"></FaInstagram>
                                </div>
                            </div>
                        </div>
                        <div className="container-derechos">
                            <p>
                                2023 Todos los derechos reservados por <strong>Ópticas Point of wiew</strong> . Diseñado por <strong>eosoyi</strong>
                            </p>
                        </div>
                    </section>
                </section>
            </footer>
        </>
    );
}