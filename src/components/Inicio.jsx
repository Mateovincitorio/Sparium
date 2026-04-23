import React, { useRef, useEffect, useState } from 'react'
import './inicio.css'
import BlurText from './BlurText.jsx'
import TextType from './Cursor.jsx'
import Resultados from './Resultados.jsx'
import Planes from './Planes.jsx'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import StaggeredMenu from "./StaggeredMenu.jsx";
import CarouselOrientation from './CarouselOrientation.jsx';

gsap.registerPlugin(ScrollTrigger);

const Inicio = () => {
  const listRef = useRef(null);
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(-1);
  const [showNav, setShowNav] = useState(true);

  const texts = [
    "Análisis biomecánico con 3 videos solicitados y un entrenamiento de prueba adaptado a 7 dias.",
    "Entrenamiento 100% personalizado estratégicamente en maximizar tu potencia.",
    "Retroalimentación para perfeccionar la técnica y acceso directo 24/7 vía WhatsApp para resolver dudas."
  ];
  


  useEffect(() => {
    const element = listRef.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        setCurrentAnimationIndex(0);
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const handleAnimationComplete = () => {
    setCurrentAnimationIndex(prev => prev + 1);
  };
    const menuItems = [
    { label: "Home",  link: "/" },
    { label: "Resultados", link: "#resultados" },
    { label: "Planes", link: "#planes" },
    { label: "Contacto", link: "#contacto" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];


  return (
    <>
    <section>
      <StaggeredMenu
  position="right"
  items={menuItems}
  socialItems={socialItems}
  displaySocials={true}
  displayItemNumbering={true}
  menuButtonColor="#ffffff"
  openMenuButtonColor="#fff"
  changeMenuColorOnOpen={true}
  colors={["#B497CF", "#5227FF"]}
  logoUrl="/Logo.png"
  accentColor="#5227FF"
/>
        {/*<nav className="navbar navbar-expand-lg mi-navbar">
  <div className="container-fluid ">
    <a className="navbar-brand mi-navbar-brand" href="#"><img className="logoNavbar" src="/Logo.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#resultados">Resultados</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#planes">Planes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacto">Contactanos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>*/}
    </section>
    <section>
        <div className='introduccion'>
          <img className='introduccion-img' src="/Portada1.png" alt="" />
        </div>

        <div className='entrenamiento'>
            <BlurText text="Entrenamiento basado en los mejores deportistas del mundo"  />
            <div className="container tabla-grafico">
  <div className="row">
    <div className="col">
      <ul ref={listRef}>
        {texts.map((text, index) => (
          <li key={index} className='li-entrenamiento'>
            <TextType 
              text={[text]} 
              shouldAnimate={index === currentAnimationIndex}
              onComplete={handleAnimationComplete}
            />
          </li>
        ))}
      </ul>
      {/*<ul className='ul-entrenamiento'>
        <li className="li-entrenamiento">Análisis biomecánico con 3 videos solicitados y un entrenamiento de prueba adaptado a 7 dias.</li>
        <li className="li-entrenamiento">Entrenamiento 100% personalizado estratégicamente en maximizar tu potencia</li>
        <li className="li-entrenamiento">Retroalimentación para perfeccionar la técnica y acceso directo 24/7 vía WhatsApp para resolver dudas.</li>
      </ul>}*/}
        <button type="button" className="btn btn-wsp btn-outline-success"><a href='https://wa.me/56992062609?text=Hola, quiero información sobre el entrenamiento' target='_blank' rel='noopener noreferrer' className="text-decoration-none texto-btn text-black"><FontAwesomeIcon icon={faWhatsapp} size='xl' style={{color: "rgb(0, 0, 0)", background:"none"}} /></a></button>
    </div>
    <div className="col">
      <CarouselOrientation/>
    </div>
  </div>
</div>
        </div>
    </section>
    <section>
      <Resultados/>
    </section>
    <section>
      <Planes/>
    </section>
    </>
  )
}

export default Inicio