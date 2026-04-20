import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './contacto.css'
import {useState} from 'react';

const Contacto = () => {
    const [status, setStatus] = useState(''); // Estado para almacenar el mensaje de estado
    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
        const result = await response.json();
        if(result.success){
            setStatus('Gracias por contactarnos, te responderemos pronto!');
            e.target.reset(); // Reiniciar el formulario después de enviar
        }else{
            setStatus('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        }
    }
    return (
    <>
        <section id='contacto'>
            
            <form className='formulario' onSubmit={handleSubmit}>
                <h2>Contáctanos</h2>
                <input type="hidden" name="access_key" value="48e723a6-c6c7-442a-9650-fe9980b10251" />

                <input type="text" name="name" placeholder='Nombre' required />

                <input type="email" name="email" placeholder='Correo electrónico' required />

                <textarea name="message" placeholder='Mensaje' required></textarea>

                <button type="submit">Enviar</button>
                {status && <p>{status}</p>}
            </form>
        </section>
    </>
  )
}

export default Contacto