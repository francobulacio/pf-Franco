import React from 'react'
import {FiSend} from 'react-icons/fi'
import '../style/contactMe.css'
import { useGlobalContext } from '../Context/GlobalContextProvider'
const ContactMe = () => {
  const {isLigth} = useGlobalContext()
  const inputStyle = {backgroundColor: isLigth ? 'rgba(57, 62, 70, 0.50)' : '#E0EBE3'}
  return (
    <section className='section'>
      <h2 className='titleSection'>Contáctame</h2>
      <div className='contactMeSection'>
        <div className='imageContactMe'>
          <img src='/idea.png'/>
        </div>
        <form>
          <div className='inputsContainer'>
            <div className='inputContainer'>
              <label>Tu nombre</label>
              <input placeholder='Nombre completo' style={inputStyle}/>
            </div>
            <div className='inputContainer'>
              <label>Tu correo electrónico</label>
              <input placeholder='Correo electrónico' style={inputStyle}/>
            </div>
          </div>
          <div>
            <label>Tu mensaje</label>
            <textarea name="" id="" placeholder='Mensaje' className='inputContainer' style={inputStyle}>

            </textarea>
          </div>
          <div>
            <button type='submit' className='btn-send'>Enviar mensaje <FiSend/> </button>

          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactMe