import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../Contexts/auth'
import logo from '../../assets/Logo.png'
import './header.style.scss'

export default function Header() {
  const { signed } = useContext(AuthContext)
  console.log(signed)

  const navigate = useNavigate()
  return (
    <header className='header__container'>
      <div>
        <img src={logo} alt='Logo Netflix'/>
      </div>

      {!signed &&
         <div>
          <button onClick={() => navigate('/signin')}>Entrar</button>
        </div>
      }
    </header>
  )
}
