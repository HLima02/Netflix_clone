import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header'
import MainBanner from '../../components/MainBanner'
import AdvantagesInitialPage from '../../components/AdvantagesInitialPage'
import FrequentAskedQuestions from '../../components/FrequentAskedQuestions'
import Footer from '../../components/Footer'

import { Advantage } from '../../services/api_advantage'


import './inicialPage.style.scss'

export default function InicialPage() {
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
      <FrequentAskedQuestions />  
      <Footer />
    </div>
  )
}
