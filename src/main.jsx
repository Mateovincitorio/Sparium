import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import dotenv from 'dotenv'
dotenv.config()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PayPalScriptProvider
      options={{
        'client-id': process.env['client-id'],
        components: 'buttons',
        currency: 'USD',
      }}
    >
      <App />
    </PayPalScriptProvider>
  </StrictMode>,
)
