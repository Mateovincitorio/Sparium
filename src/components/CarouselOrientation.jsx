import React from 'react'
import './carousel.css'

const CarouselOrientation = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner caja-interna-carousel">

        <div className="carousel-item active" data-bs-interval="3000">
          <video src="/1.mp4" autoPlay loop muted></video>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
<video src="/2.mp4" autoPlay loop muted></video>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
<video src="/3.mp4" autoPlay loop muted></video>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
<video src="/4.mp4" autoPlay loop muted></video>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
<video src="/5.mp4" autoPlay loop muted></video>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
<video src="/6.mp4" autoPlay loop muted></video>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
<video src="/7.mp4" autoPlay loop muted></video>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
<video src="/8.mp4" autoPlay loop muted></video>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
<video src="/9.mp4" autoPlay loop muted></video>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
<video src="/10.mp4" autoPlay loop muted></video>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default CarouselOrientation