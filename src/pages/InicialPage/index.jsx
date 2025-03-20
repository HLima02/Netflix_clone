import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header'

import './inicialPage.style.scss'

export default function InicialPage() {
  const navigate = useNavigate()
  
  return (
    <div>
      <Header />
      <section className='banner'>
        <div className="banner__txt">
          <h2>Filmes, programas de TV e muito mais ilimitados</h2>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="input_area">
            <input type="text" placeholder="E-mail"/>
            <button onClick={() => navigate('/signin')}>Iniciar</button>
          </div>
        </div>
      </section>
    </div>
  )
}
