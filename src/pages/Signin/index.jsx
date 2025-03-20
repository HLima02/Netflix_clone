import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

import './signin.style.scss'

export default function SignIn() {


  const signIn = async (e) => {
    e.preventDefault()

    alert('teste')
  }

  return (
    <div className='signin_container'>
      <Header />
      <div className='singin_input_box'>
        <h3>Entrar</h3>

        <form onSubmit={(e) => signIn(e)}>
          <input type='E-mail' placeholder='E-mail ou Telefone' />
          <input type='password' placeholder='senha' />
          <button type='submit'>Entrar</button>
        </form>

        <a href='#' className='forgot_password'>Esqueceu sua senha?</a>

        <p className='link_signup'>Novo por aqui? <Link to="/signup">Cadastre-se agora</Link></p>
      </div>
    </div>
  )
}
