import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

const PayPalButton = ({ totalValue, invoice }) => {
  return (
    <>
      <PayPalButtons
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
    </>
  )
}

export default PayPalButton
