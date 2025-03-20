import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header'
import MainBanner from '../../components/MainBanner'
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
      <MainBanner/>
      
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
