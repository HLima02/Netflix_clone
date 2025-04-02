import { useContext } from 'react'
import { AuthContext } from '../../Contexts/auth'
import './style.scss'
import { FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'

import LogoffButton from '../../components/LogoffButton'
import avatar from '../../assets/avatar/avatar_01.png'

export default function Profiles() {
  const { user } = useContext(AuthContext)
  //console.log("usuário: ", user)
  return (
    <div className='profile_container'>
      <h1>Quem esta assistindo?</h1>
      <div className='avatar_section'>
        <Link to='/home'>
          <div className='avatar_item'>
            <img src={avatar} alt="Avatar padrão" />
            <p>{user.nome}</p>
          </div>
        </Link>
        
        <div className='avatar_item'>
          <FaPlusCircle size={100} color='#BFBFBF'/>
          <p>Adicionar perfil</p>
        </div>
      </div>
      {/* <LogoffButton/> */}
    </div>
  )
}
