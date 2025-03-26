import { useState, useEffect, useContext, use } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Contexts/auth'

import { toast } from 'react-toastify';
import { IMaskInput } from 'react-imask';
import Header from '../../components/Header'

export default function SignUp({}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [password, setPassword] = useState('')

  const {user, signUp } = useContext(AuthContext)

  useEffect(() => {
    const loadUser = () => {
      console.log("usuario: " + user)
    }

    loadUser()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(name != '' && tel != '' && email != '' && password != ''){
      await signUp(email, password, name, tel)
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

        <form onSubmit={(e) => handleSubmit(e)}>
          <input type='text' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
          <IMaskInput mask="(00) 00000-0000" placeholder='Telefone' value={tel} onChange={(e) => setTel(e.target.value)} />
          <input type='E-mail' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Cadastrar</button>
        </form>

        <p className='link_signup'>Ja possui uma conta? <Link to="/signin">Faça o login</Link></p>
      </div>
    </div>
  )
}
