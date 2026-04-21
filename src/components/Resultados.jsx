import React from 'react'
import './resultados.css'
import BlurText from './BlurText.jsx'

const Resultados = () => {
  return (
    <>
      <h1 className='resultadosH1' id='resultados'>
        <BlurText text="Resultados" />
      </h1>

      <div className='container-fluid container-cards'>
        
        <div className="card-custom">
          <h1 className='h1Cards'>20 CM</h1>
          <img src="/Logo.png" className="card-img" alt="logo" />
        </div>

        <div className="card-custom">
          <h1 className='h1Cards'>50 CM</h1>
          <img src="/Logo.png" className="card-img" alt="logo" />
        </div>

        <div className="card-custom">
          <h1 className='h1Cards'>30 CM</h1>
          <img src="/Logo.png" className="card-img" alt="logo" />
        </div>

      </div>
    </>
  )
}

export default Resultados