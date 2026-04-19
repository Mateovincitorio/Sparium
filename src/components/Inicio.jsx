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

gsap.registerPlugin(ScrollTrigger);

const Inicio = () => {
  const listRef = useRef(null);
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(-1);

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

  return (
    <>
    <section>
        <nav className="navbar navbar-expand-lg mi-navbar">
  <div className="container-fluid ">
    <a className="navbar-brand mi-navbar-brand" href="#"><img className="logoNavbar" src="/Logo.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </section>
    <section>
        <div className='introduccion'>
        </div>

        <div className='entrenamiento'>
            <BlurText text="Entrenamiento efectivo basado en ciencia en solo 4 Meses" />
            <div className="container tabla-grafico">
  <div className="row">
    <div className="col">
      {/*<ul ref={listRef}>
        {texts.map((text, index) => (
          <li key={index} className='li-entrenamiento'>
            <TextType 
              text={[text]} 
              shouldAnimate={index === currentAnimationIndex}
              onComplete={handleAnimationComplete}
            />
          </li>
        ))}
      </ul>}*/}
      <ul className='ul-entrenamiento'>
        <li className="li-entrenamiento">Análisis biomecánico con 3 videos solicitados y un entrenamiento de prueba adaptado a 7 dias.</li>
        <li className="li-entrenamiento">Entrenamiento 100% personalizado estratégicamente en maximizar tu potencia</li>
        <li className="li-entrenamiento">Retroalimentación para perfeccionar la técnica y acceso directo 24/7 vía WhatsApp para resolver dudas.</li>
      </ul>
        <button type="button" className="btn btn-wsp btn-outline-success"><a href='https://wa.me/56992062609?text=Hola, quiero información sobre el entrenamiento' target='_blank' rel='noopener noreferrer' className="text-decoration-none texto-btn text-black"><FontAwesomeIcon icon={faWhatsapp} size='xl' style={{color: "rgb(0, 0, 0)", background:"none"}} /></a></button>
    </div>
    <div className="col">
      <img className='spariumLogo' src="/Logo.png" alt="Grafico" />
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