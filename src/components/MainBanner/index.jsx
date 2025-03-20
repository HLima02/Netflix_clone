import React from 'react'

import InputSignUp from '../InputSignUp'

import './mainBanner.style.scss'

export default function MainBanner() {
  return (
    <section className='banner'>
      <div className="banner__txt">
        <h2>Filmes, programas de TV e muito mais ilimitados</h2>
        <p>Assista em qualquer lugar. Cancele quando quiser.</p>
        <InputSignUp />
      </div>
    </section>
  )
}
