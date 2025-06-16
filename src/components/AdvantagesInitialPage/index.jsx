import React from 'react'

import './AdvantagesInitialPage.style.scss'

export default function AdvantagesInitialPage({textSide, title, subTitle, image}) {
  return (
    <section className='advantage_container'>
      <div className={`advantage_content ${textSide ? 'leftText' : 'rightText'}`}>
        <div className='advantage_txt'>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <div className='advantage_image'>
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  )
}
