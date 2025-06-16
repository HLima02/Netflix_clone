import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

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
        <Link to="/">
          <img src={logo} alt='Logo Netflix'/>
        </Link>
      </div>

      {sign ? (
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
