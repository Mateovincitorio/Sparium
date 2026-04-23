import React , {useState} from 'react'
import './planes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import PayPalButton from './paypal/paypalButton.jsx'
import BlurText from './BlurText.jsx'
import Modal from './Modal.jsx'

const Planes = () => {

const [plan, setPlan] = useState(null);

  const abrirModal = (tipoPlan) => {
    setPlan(tipoPlan);
    const modal = new window.bootstrap.Modal(
      document.getElementById("miModal")
    );
    modal.show();
  };
  return (
    <>
    <h1 className='planes' id='planes'><BlurText text="Planes" className="text-7xl font-bold text-center" /></h1>

    <div className='container-fluid container-planes'>
        
        <div className="card-custom container-cards-planes spar-pro">
          <div className="container-pro">

          <h1 className='h1Cards-planes'>Spar Pro</h1>
          <ul className='ul-planes'>
            <li className='li-planes'>ENTRENAMIENTO PERSONALIZADO <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              /></li>
            <li className='li-planes'>LLAMADAS GRUPALES <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              /></li>
            <li className='li-planes'>ANALISIS BIOMECANICO INICIAL <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              /></li>
            <li className='li-planes'>APP PRIVADA <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              /></li>
          </ul>




          <h2>Paga ahora</h2>
          <div className="pagos-pro">
            <button className='btnMensual' data-bs-toggle="modal" data-bs-target="#miModal">
              Plan Mensual
            </button>
            <button className='btnTrimestral' data-bs-toggle="modal" data-bs-target="#miModal">
              Plan Trimestral
            </button>
          </div>
          </div>
          
        </div>

        <div className="card-custom container-cards-planes">
          <div className="container-pro">

          <h1 className='h1Cards-planes'>Spar Elite</h1>
          <ul className='ul-planes'>
            <li className='li-planes'>ENTRENAMIENTO PERSONALIZADO <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
                /></li>
            <li className='li-planes'>LLAMADAS GRUPALES <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              /></li>
            <li className='li-planes'>ANALISIS BIOMECANICO INICIAL <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              /></li>
            <li className='li-planes'>APP PRIVADA <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              /></li>
            <li className='li-planes'>ANALISIS BIOMECANICO MENSUAL <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              /></li>
            <li className='li-planes'>KIT DE BIENVENIDA <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
                /></li>
            <li className='li-planes'>PLAN RECOVERY <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              /></li>
            <li className='li-planes'>PRIORIDAD DE CONTACTO <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              /></li>
            <li className='li-planes'>LLAMADAS 1 A 1 CON EL EQUIPO <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "rgb(33, 245, 15)" }}
              /></li>
          </ul>
           <h2>Paga ahora</h2>
          <div className="pagos">
            <button className='btnMensual' data-bs-toggle="modal" data-bs-target="#miModal">Plan Mensual</button>
            <button className='btnTrimestral' data-bs-toggle="modal" data-bs-target="#miModal">Plan Trimestral</button>
          </div>
                </div>
        </div>
    <Modal />
      </div>
      {/*<table className='tablePlanes' id='planes'>
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
      </table>*/}
    </>
  )
}

export default Planes