import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../Contexts/auth'
import logo from '../../assets/Logo.png'
import './header.style.scss'

export default function Header() {
  const { signed, sign, Logout } = useContext(AuthContext)
  console.log('Logados: ', signed)

  const navigate = useNavigate()

  return (
    <header className='header__container'>
      <div>
        <img src={logo} alt='Logo Netflix'/>
      </div>

      {sign !== null ? (
        <div>
          <button onClick={() => Logout()}>Sair</button>
        </div>
      ) : (
        <div>
          <button onClick={() => navigate('/signin')}>Entrar</button>
        </div>
      )}

      {/* {!signed &&
         <div>
          <button onClick={() => navigate('/signin')}>Entrar</button>
        </div>
      } */}
    </header>
  )
}
