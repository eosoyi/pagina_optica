import React from "react";
import serviciosOpticos from '../img/opticos.jpg';
import examenVisual from '../img/examen_visual.jpg';
import adaptacion from '../img/adaptacion.jpeg';
import graduados from '../img/graduados.jpg';
import sol from '../img/sol.jpg';
import accesorios from '../img/accesorios.jpg';

import '../styles/servicios.css';

export const Servicios = () => {
    return(
        <>
            <section className="seccion-servicios" id="servicios">
                <section className="container-global">
                    <section className="container-global">
                        <div className="container-titulo">
                            <h2>Nuestros servicios</h2>
                        </div>
                    </section>
                    <div className="container-card-servicios">
                        <figure className="card-servicios" data-text="Servicios òpticos">
                            <img src={serviciosOpticos} style={{height: '60%'}} alt="servicios ópticos" className="img-card"/>
                        </figure>
                        <figure className="card-servicios" data-text="Examen visual">
                            <img src={examenVisual}  style={{height: '90%'}} alt="examen visual" className="img-card"/>
                        </figure>
                        <figure className="card-servicios" data-text="Adaptación de lente de contacto">
                            <img src={adaptacion} style={{height: '90%'}} alt="adaptación de lentes" className="img-card"/>
                        </figure>
                        <figure className="card-servicios" data-text="Lentes graduados">
                            <img src={graduados} alt="lentes graduados" style={{height: '90%'}} className="img-card"/>
                        </figure>
                        <figure className="card-servicios" data-text="Lentes de sol">
                            <img src={sol} style={{height: '90%'}} alt="lentes de sol" className="img-card"/>
                        </figure>
                        <figure className="card-servicios" data-text="Accesorios">
                            <img src={accesorios} style={{height: '90%'}} alt="accesorios" className="img-card"/>
                        </figure>
                        
                    </div>
                </section>
            </section>
        </>
    );
};