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
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return(
    <>
      <Helmet>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE-Edge"/>
        <meta name="viewport" content="width-device-width, initial-scale=1.0, user-scalable=no"/>
        <meta name="description" content="Descubre la excelencia en cuidado visual en nuestra óptica. Expertos en salud visual, ofrecemos exámenes precisos, moda en monturas y lentes de calidad. Tu visión es nuestra prioridad. Visítanos para una atención ocular de primera clase."/>
        <enlace rel="canonical" href="https://opticaspov.com/" />
        <meta name="keywords" content="cuidado visual, exámenes de la vista, opticas, lentes de calidad"/>
        <meta name="author" content="eosoyi"/>
      </Helmet>
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
  );
}

export default IndexPage
