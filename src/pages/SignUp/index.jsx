import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

export default function SignUp() {
  const signUp = async (e) => {
    e.preventDefault()

    alert('cadastrando')
  }

  return (
    <div className='signin_container'>
      <Header />
      <div className='singin_input_box'>
        <h3>Entrar</h3>

        <form onSubmit={(e) => signUp(e)}>
          <input type='text' placeholder='Nome' />
          <input type='tel' placeholder='Telefone' />
          <input type='E-mail' placeholder='E-mail' />
          <input type='password' placeholder='senha' />
          <button type='submit'>Cadastrar</button>
        </form>

        <p className='link_signup'>Ja possui uma conta? <Link to="/signin">Faça o login</Link></p>
      </div>
    </div>
  )
}
