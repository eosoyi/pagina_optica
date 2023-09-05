import React, { useEffect, useState } from "react";

import '../styles/FondoCargando.css'

export const FondoCargando = () => {
    const [estaCargando, setEstaCargando] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setEstaCargando(false);
        }, 700);
    },[]);

    return (
        <>
        {
            estaCargando ?
                <section className="container-fondo-cargando">
                    <h2>POV</h2>
                    <h3>Point of view</h3>
                </section>
            :
            <div></div>
        }
        </>
    );
}