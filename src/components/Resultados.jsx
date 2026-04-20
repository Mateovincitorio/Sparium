import React from 'react'
import './resultados.css'

const Resultados = () => {
  return (
    <>
      <h1 className='resultadosH1' id='resultados'>Resultados</h1>

      <div className='container-fluid'>
        
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