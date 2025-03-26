import { useContext } from 'react'
import { AuthContext } from '../Contexts/auth'
import { Navigate } from 'react-router-dom'

export default function Private({ children }) {
  const { signed, loading } = useContext(AuthContext)
  //const navigate = useNavigate()

  if(loading) {
    return (
      <div>Carregando...</div>
    )
  }

  return signed ? children : <Navigate to="/" />
}
