
import './App.css'
import Inicio from './components/Inicio.jsx'
import PayPalButton from './components/paypal/paypalButton.jsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Resultados from './components/Resultados.jsx'
import Planes from './components/Planes.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
    <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID}}>
      <Inicio />
      <PayPalButton totalValue="50.00" invoice="Compra de Spar Elite" />
      <Contacto/>
       <section>
      <Footer/>
    </section>
    </PayPalScriptProvider>
  
    </>
  )
}

export default App
