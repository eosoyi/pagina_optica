import React from "react";

import estilo_1 from '../img/estilos/estilo_1.png';
import estilo_2 from '../img/estilos/estilo_2.png';
import estilo_3 from '../img/estilos/estilo_3.png';
import estilo_4 from '../img/estilos/estilo_4.png';
import estilo_5 from '../img/estilos/estilo_5.png';
import estilo_6 from '../img/estilos/estilo_6.png';
import estilo_7 from '../img/estilos/estilo_7.png';
import estilo_8 from '../img/estilos/estilo_8.png';

import '../styles/estilos.css';

export const Estilos = () => {
    return(
        <>
        <section className="seccion-estilos" id="estilos">
            <section className="container-global">
                <section className="container-global">
                    <div className="container-titulo">
                        <h2>Conoces nuestros estilos</h2>
                    </div>
                    <section className="grid-container">
                        <figure class="grid-item">
                            <div className="info-grid">
                                <h2>LO2676 420 52-16</h2>
                                {/*
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Quas, aspernatur. 
                                    Delectus sit maxime assumenda magni quibusdam
                                </p>
                                */}
                            </div>
                            <img src={estilo_1} alt="imagen estilo 1" />
                        </figure>

                        <figure class="grid-item">
                            <div className="info-grid">
                                <h2>LO2677 519 51-17</h2>
                            </div>
                            <img src={estilo_2} alt="imagen estilo 2" />
                        </figure>

                        <figure class="grid-item">
                            <div className="info-grid">
                                <h2>LO2150 001 55-18</h2>
                            </div>
                            <img src={estilo_3} alt="imagen estilo 3" />
                        </figure>
                        <figure class="grid-item">
                            <div className="info-grid">
                                <h2>LO2661 601 54-15</h2>
                            </div>
                            <img src={estilo_4} alt="imagen estilo 4" />
                        </figure>
                        <figure class="grid-item">
                            <div className="info-grid">
                                <h2>HG1102 OIT 56-16</h2>
                            </div>
                            <img src={estilo_5} alt="imagen estilo 5" />
                        </figure>
                        <figure class="grid-item">
                            <div className="info-grid">
                                <h2>HG1142 RZZ 54-18</h2>
                            </div>
                            <img src={estilo_6} alt="imagen estilo 6" />
                        </figure>
                        <figure class="grid-item">
                            <div className="info-grid">
                                <h2>HG1074 UYY 56-17</h2>
                            </div>
                            <img src={estilo_7} alt="imagen estilo 7" />
                        </figure>
                        <figure class="grid-item">
                            <div className="info-grid">
                                <h2>HG 1102 IZH 56-19</h2>
                            </div>
                            <img src={estilo_8} alt="imagen estilo 8" />
                        </figure>
                    </section>
                </section>
            </section>
        </section>
        </>
    );
}