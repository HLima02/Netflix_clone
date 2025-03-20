import React from 'react'

import Questions from '../Questions'
import InputSignUp from '../InputSignUp'

import './FrequentAskedQuestions.style.scss'

export default function FrequentAskedQuestions() {
  return (
    <section className='asked_question_section'>
      <div className='asked_question_content'>
        <h2>Perguntas frequentes</h2>
        <Questions />
        <InputSignUp />
      </div>
    </section>
  )
}
