import React from 'react'
import './resultados.css'
import BlurText from './BlurText.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const Resultados = () => {
  return (
    <>
      <h1 className='resultadosH1' >
        <BlurText text="Resultados" />
      </h1>

      <div className='container-fluid container-cards' id='resultados'>
        
        <div className="card-custom">
          <h1 className='h1Cards '>20 CM</h1>
          <img src="/20cm.jpeg" alt="" />
        </div>

        <div className="card-custom">
          <h1 className='h1Cards'>50 CM</h1>
          <video src="/50cm.mp4" className="card-video" controls autoPlay loop muted  />
        </div>

        <div className="card-custom">
          <h1 className='h1Cards'>30 CM</h1>
          <video src="/1Mes.mp4" className="card-video" controls autoPlay loop/> 
        </div>
      </div>
      <FontAwesomeIcon icon={faAnglesDown} size="2xl" style={{color: "rgb(15, 33, 245)", fontSize: "80px"}} />
      <img src="/formula.png" className='formula' alt="" />

    </>
  )
}

export default Resultados