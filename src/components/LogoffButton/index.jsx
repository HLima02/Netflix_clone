import { useContext } from 'react'
import { AuthContext } from '../../Contexts/auth'

import './style.scss'

export default function LogoffButton() {
  const { Logout } = useContext(AuthContext)

  return (
    <div >
      <button onClick={() => Logout()}>Sair</button>
    </div>
  )
}
