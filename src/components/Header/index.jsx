import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/Logo.png'
import './header.style.scss'

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className='header__container'>
      <div>
        <img src={logo} alt='Logo Netflix'/>
      </div>
      <div>
        <button onClick={() => navigate('/signin')}>Entrar</button>
      </div>
    </div>
  )
}
