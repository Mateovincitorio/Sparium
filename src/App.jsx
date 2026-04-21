
import './App.css'
import Inicio from './components/Inicio.jsx'
import PayPalButton from './components/paypal/paypalButton.jsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Resultados from './components/Resultados.jsx'
import Planes from './components/Planes.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import QuienesSomos from './components/QuienesSomos.jsx'



function App() {
  return (
    <>
      <Inicio />
      <QuienesSomos/>
      <Contacto/>
       <section>
      <Footer/>
    </section>
  
    </>
  )
}

export default App
