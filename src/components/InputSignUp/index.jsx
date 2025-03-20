import React from 'react'
import { useNavigate } from 'react-router-dom'

import './InputSignUp.style.scss';

export default function InputSignUp({ text }) {
  const navigate = useNavigate()

  return (
    <div className='input_signup'>
      <p className='input_signup_txt'>{ text }</p>
      <div className="input_area">
        <input type="text" placeholder="E-mail"/>
        <button onClick={() => navigate('/signin')}>Iniciar</button>
      </div>
    </div>
  )
}
