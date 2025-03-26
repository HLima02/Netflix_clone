import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

import { AuthContext } from '../../Contexts/auth'
import Header from '../../components/Header'

import './signin.style.scss'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { singIn } = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()

    if(email !== '' & password !== ''){
      await singIn(email, password)
    } else {
      toast.warning('Preencha todos os campos!')
      return
    }
  }

  return (
    <div className='signin_container'>
      <Header />
      <div className='singin_input_box'>
        <h3>Entrar</h3>

        <form onSubmit={(e) => handleLogin(e)}>
          <input type='E-mail' placeholder='E-mail ou Telefone' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Entrar</button>
        </form>

        <a href='#' className='forgot_password'>Esqueceu sua senha?</a>

        <p className='link_signup'>Novo por aqui? <Link to="/signup">Cadastre-se agora</Link></p>
      </div>
    </div>
  )
}
