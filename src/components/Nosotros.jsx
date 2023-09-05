import React from "react";

import adaptacion from '../img/adaptacion.jpeg';

import '../styles/nosotros.css';

export const Nosotros = () => {
    return(
        <>
            <section className="seccion-nosotros" id="nosotros">
                <section className="container-global">
                    <section className="container-nosotros-info">
                        <div className="container-sobre-nosotros">
                            <article className="articulo-nosotros">
                                <h2 className="titulo-nosotros">Sobre nosotros</h2>
                                <p className="parrafo-nosotros">
                                    Somos una empresa que se destaca por su excelencia,
                                    dedicada a proporcionar servicios ópticos de primer nivel,
                                    lentes de calidad y atención personalizada. 
                                    Nuestro objetivo es mejorar la salud visual de 
                                    nuestros clientes y garantizar su satisfacción total.
                                </p>
                            </article>
                            <article className="articulo-nosotros">
                                <h2 className="titulo-nosotros">Nuestra experiencia</h2>
                                <p className="parrafo-nosotros">
                                    Ópticas POV cuenta con personal profesional capacitado para pacientes de todas las edades,
                                    ponemos a su disposición examenes de la vista, lentes graduados, aro oftalmico y solares 
                                    de la mejor calidad y de las mejores marcas a nivel comercial, 
                                    lentes contacto graduado y de color y producto seleccionado.
                                </p>
                            </article>
                        </div>
                        <figure>
                            <img src={adaptacion} alt="imagen quienes somos" className="img-quienes-somos" />
                        </figure>
                    </section>
                </section>
            </section>
        </>
    );
};