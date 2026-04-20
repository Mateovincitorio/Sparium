import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Sparium</h2>
          <p>Rendimiento, fuerza y disciplina en un solo producto.</p>
        </div>

        <div className="footer-links">
          <a href="#">Inicio</a>
          <a href="#resultados">Resultados</a>
          <a href="#planes">Planes</a>
          <a href="#Contacto">Contactanos</a>
        </div>

        <div className="footer-social">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">YouTube</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Spar Elite. Todos los derechos reservados.</p>
        <p>Desarrollado por <a href="https://wa.me/3435209850?text=Hola, me gustaría información sobre Tus servicios" target="_blank" rel="noopener noreferrer" className='Mateo'>Mateo Vincitorio</a></p>
      </div>
    </footer>
  );
}

export default Footer;