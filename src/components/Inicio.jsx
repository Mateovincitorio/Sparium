import React from 'react'
import './inicio.css'

const Inicio = () => {
  return (
    <>
    <section>
        <nav className="navbar navbar-expand-lg mi-navbar">
  <div className="container-fluid ">
    <a className="navbar-brand mi-navbar-brand" href="#">Sparium</a>
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
        <div className='mi-body-div'>
    
        </div>
    </section>
    </>
  )
}

export default Inicio