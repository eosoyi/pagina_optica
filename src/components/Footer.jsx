import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope  } from "react-icons/fa";

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
                                {/**
                                <div className="row-info">
                                     
                                    <FaWhatsapp className="icon-tels"></FaWhatsapp>
                                    <span className="text-info-contactanos">0022-4488</span>
                                </div>
                                */}
                                <div className="row-info">
                                    <FaPhone className="icon-tels"></FaPhone>
                                    <span className="text-info-contactanos">7767-5658</span>
                                </div>
                                <div className="row-info">
                                    <FaEnvelope   className="icon-tels"></FaEnvelope>
                                    <span className="text-info-contactanos">opticas@opticaspov.com</span>
                                </div>
                            </div>
                            <div className="container-info">
                                <h2 className="titulo-contactanos">DIRECCIÓN</h2>
                                <div className="row-info">
                                    <FaMapMarkerAlt className="icon-tels"></FaMapMarkerAlt>
                                    <p className="text-ubicacion">
                                        3 Calle 8-81 Zona 4 CHIMALTENANGO, Plaza Real Local No. 12
                                    </p>
                                </div>
                            </div>
                            <div className="container-info">
                                <h2 className="titulo-contactanos">BÚSCANOS</h2>
                                <div className="row-redes">
                                    <a 
                                        href="https://www.facebook.com/profile.php?id=61552276735914&mibextid=ZbWKwL"
                                        target="_blank"
                                    >
                                        <FaFacebookF className="icon-redes"></FaFacebookF>
                                    </a>
                                    <a 
                                        href="https://instagram.com/opticas_pov?igshid=OGQ5ZDc2ODk2ZA=="
                                        target="_blank"
                                    >
                                        <FaInstagram className="icon-redes"></FaInstagram>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="container-derechos">
                            <p>
                                2023 Todos los derechos reservados por <strong>Ópticas Point of view</strong> . Diseñado por <strong>eosoyi</strong>
                            </p>
                        </div>
                    </section>
                </section>
            </footer>
        </>
    );
}