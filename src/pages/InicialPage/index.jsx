import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header'
import InputSignUp from '../../components/InputSignUp'
import AdvantagesInitialPage from '../../components/AdvantagesInitialPage'
import Footer from '../../components/Footer'

import { Advantage } from '../../services/api_advantage'

import frame01 from '../../assets/frame_01.png'
import frame02 from '../../assets/frame_02.png'
import frame03 from '../../assets/frame_03.png'

import './inicialPage.style.scss'

export default function InicialPage() {
  const navigate = useNavigate()

  console.log(Advantage)

  return (
    <div>
      <Header />
      <section className='banner'>
        <div className="banner__txt">
          <h2>Filmes, programas de TV e muito mais ilimitados</h2>
          <p>Assista em qualquer lugar. Cancele quando quiser.</p>
          <InputSignUp text="Pronto para assistir? Insira seu e-mail para criar ou reiniciar sua assinatura." />
        </div>
      </section>
      
      {Advantage.map((item) => (
        <AdvantagesInitialPage key={item.id}
        textSide={item.textSide} 
        title={item.title} 
        subTitle={item.subTitle}
        image={item.image}/>
        ))
      }      
      <Footer />
    </div>
  )
}
