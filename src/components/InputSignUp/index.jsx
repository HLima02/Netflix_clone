import React from 'react'
import { useNavigate } from 'react-router-dom'

import './InputSignUp.style.scss';

export default function InputSignUp() {
  const navigate = useNavigate()

  return (
    <div className='input_signup'>
      <p className='input_signup_txt'>Pronto para assistir? Insira seu e-mail para criar ou reiniciar sua assinatura.</p>
      <div className="input_area">
        <input type="text" placeholder="E-mail"/>
        <button onClick={() => navigate('/signin')}>Iniciar</button>
      </div>
    </div>
  )
}
