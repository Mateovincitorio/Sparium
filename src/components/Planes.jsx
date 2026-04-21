import React from 'react'
import './planes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import PayPalButton from './paypal/paypalButton.jsx'
import BlurText from './BlurText.jsx'

const Planes = () => {
  return (
    <>
    <h1 className='planes'><BlurText text="Planes" /></h1>
      <table className='tablePlanes' id='planes'>
        <thead>
          <tr>
            <th className='thTable'>SPAR PRO</th>
            <th className='thTable'>BENEFICIOS</th>
            <th className='thTable'>SPAR ELITE</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
            <td>
              ENTRENAMIENTO PERSONALIZADO
            </td>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
            <td>
              LLAMADAS GRUPALES
            </td>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
            <td>
              ANALISIS BIOMECANICO INICIAL
            </td>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
            <td>
              APP PRIVADA
            </td>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faX}
                size="lg"
                style={{ color: "rgb(243, 8, 8)" }}
              />
            </td>
            <td>
              ANALISIS BIOMECANICO MENSUAL
            </td>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faX}
                size="lg"
                style={{ color: "rgb(243, 8, 8)" }}
              />
            </td>
            <td>
              KIT DE BIENVENIDA (JOCKEY OF TEAM + CREATINA)
            </td>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faX}
                size="lg"
                style={{ color: "rgb(243, 8, 8)" }}
              />
            </td>
            <td>
              PLAN RECOVERY
            </td>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faX}
                size="lg"
                style={{ color: "rgb(243, 8, 8)" }}
              />
            </td>
            <td>
              PRIORIDAD DE CONTACTO
            </td>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faX}
                size="lg"
                style={{ color: "rgb(243, 8, 8)" }}
              />
            </td>
            <td>
              LLAMADAS 1 A 1 CON EL EQUIPO
            </td>
            <td>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Planes