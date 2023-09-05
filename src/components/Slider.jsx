import React, { useEffect, useState } from "react";

import converse from '../img/converse.svg';
import carolina_herrera from '../img/carolina_herrera.svg';
import guess from '../img/guess.svg';
import hugo_boss from '../img/hugo_boss.svg';
import longchamp from '../img/longchamp.svg';
import marchon from '../img/marchon_eyewear.svg';
import tommy from '../img/tommy_hilfiger.svg';
import tous from '../img/tous_logo.svg';

import '../styles/slider.css';

export const Slider = () => {

    useEffect(() => {
        const carouselSlide = document.querySelector('.carousel-slide');
        const images = carouselSlide.querySelectorAll('img');
        const numImages = images.length / 2;
        let counter = 0;
        setInterval(() => {
          if (counter === numImages) {
            counter = 0;
          }
          carouselSlide.style.transform = `translateX(-${counter * (100 / numImages)}%)`;
          counter++;
        }, 2000);
      }, []);

    return(
        <>
            <section className="seccion-proveedores" id="proveedores">
                <section className="container-global">
                    <div className="container-titulo">
                        <h2>Trabajamos con</h2>
                    </div>
                </section>
                <div className="carousel-container">
                    <div className="carousel-slide" >
                        <img src={ converse } alt="logo-converse" />
                        <img src={ carolina_herrera } alt="logo-carolina-herrera" />
                        <img src={ guess } alt="logo-guess" />
                        <img src={ hugo_boss } alt="logo-hugo-boss" />
                        <img src={ longchamp } alt="logo-longchamp" />
                        <img src={ marchon } alt="logo-marchon" />
                        <img src={ tommy } alt="logo-tommy" />
                        <img src={ tous } alt="logo-tous" />
                    </div>
                </div>
            </section>
        </>
    );
};