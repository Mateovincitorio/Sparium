import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import './paypalButton.css'

const PayPalButton = ({ totalValue, invoice }) => {
  return (
    <>
      <div className="paypal-wrapper">
      <PayPalButtons
        style={{
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
          height: 50,
        }}
        fundingSource="paypal"
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: invoice,
                amount: {
                  value: totalValue,
                },
              },
            ],
          })
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order?.capture()
          console.log('order', order)
        }}
      />
      </div>
    </>
  )
}

export default PayPalButton
