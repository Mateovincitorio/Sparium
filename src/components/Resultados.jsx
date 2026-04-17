import React from 'react'
import './resultados.css'

const Resultados = () => {
  return (
    <>
    <h1 className='resultadosH1'>Resultados</h1>
    <div className='container-fluid align-items-center justify-content-center d-flex flex-wrap gap-4'>
      <div className="card" style={{ width: '18rem' }}>
        <img src="/Logo.png" className="card-img-top card-img" alt="..." />
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img src="/Logo.png" className="card-img-top card-img" alt="..." />
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img src="/Logo.png" className="card-img-top card-img" alt="..." />
      </div>
    </div>
    </>
  )
}

export default Resultados