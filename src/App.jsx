
import './App.css'
import Inicio from './components/Inicio.jsx'
import PayPalButton from './components/paypal/paypalButton.jsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'




function App() {
console.log(import.meta.env.VITE_PAYPAL_CLIENT_ID);
  return (
    <>
    <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID}}>
      <Inicio />
      <PayPalButton totalValue="50.00" invoice="Compra de Spar Elite" />
    </PayPalScriptProvider>
    </>
  )
}

export default App
