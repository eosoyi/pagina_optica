import * as React from "react"
import { Footer } from "../components/Footer"
import { FondoCargando } from "../components/FondoCargando";
import { Slider } from "../components/Slider";

import { Servicios } from "../components/Servicios";
import { Nosotros } from "../components/Nosotros";
import { Whatsapp } from "../components/Whatsapp";
import { Menu } from "../components/Menu";

import '../styles/main.css';
import { Estilos } from "../components/Estilos";

const IndexPage = () => (
  <>
    <main>
      <FondoCargando></FondoCargando>
      <Menu></Menu>
      <br/><br/><br/><br/><br/>
      <Estilos></Estilos>
      <br/><br/><br/><br/>
      <Nosotros></Nosotros>
      <br/><br/><br/><br/>
      <Servicios></Servicios>
      <br/><br/><br/><br/>
      <Slider></Slider>
      <Footer></Footer>
      {/** <Whatsapp></Whatsapp> */}
    </main>
  </>
)

export default IndexPage
