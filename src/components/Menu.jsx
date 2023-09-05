import React, { useState } from "react";
import { FaAlignRight, FaTimes, FaCaretRight } from "react-icons/fa";
import logo from '../img/logo.png';

import '../styles/menu.css';

export const Menu = () => {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        const open = document.getElementById('open');
        open.style.transform = 'translate(0%, 0)';
    }
    
    const closeMenu = () => {
        const open = document.getElementById('open');
        open.style.transform = 'translate(-100%, 0)';
    }

    return(
        <>
            <section className="container-menu-main">
                <section className="container-menu">
                    <figure>
                        <img src={logo} alt="logo empresa" className="logo-img"/>
                    </figure>
                    <a onClick={openMenu} title="Abrir" className="abrir">
                        <FaAlignRight className="icon-menu"></FaAlignRight>
                    </a>
                </section>
                <div className="nav-bar" id="open">
                    <section className="container-menu menu">
                        <a className="icon-close" onClick={closeMenu} title="Cerrar">
                            <FaTimes className="close"></FaTimes>
                        </a>
                        <nav className="nav">
                            <ul>
                                <li className="item-menu">
                                    <FaCaretRight className="icon-item"></FaCaretRight>
                                    <a href="">Inicio</a>
                                </li>
                                <li className="item-menu">
                                    <FaCaretRight className="icon-item"></FaCaretRight>
                                    <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
                                </li>
                                <li className="item-menu">
                                    <FaCaretRight className="icon-item"></FaCaretRight>
                                    <a href="#servicios" onClick={closeMenu}>Servicios</a>
                                </li>
                                <li className="item-menu">
                                    <FaCaretRight className="icon-item"></FaCaretRight>
                                    <a href="#proveedores" onClick={closeMenu}>Marcas</a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </div>
            </section>
        </>
    );
};