import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import '../styles/whatsapp.css';

export const Whatsapp = () => {
    return(
        <>
            <a href="https://wa.me/12345678" target="_blank">
                <section className="whatsapp-container">
                    <FaWhatsapp className="icon-whatsapp"></FaWhatsapp>
                    <span className="span-text">Comunícate</span>   
                </section>
            </a>
        </>
    );
}