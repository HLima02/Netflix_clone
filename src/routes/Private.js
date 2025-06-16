import { useContext, useEffect } from 'react'
import { AuthContext } from '../Contexts/auth'
import { Navigate } from 'react-router-dom'

export default function Private({ children }) {
  const { signed, loading, sign } = useContext(AuthContext)
  console.log('sign', signed)

  if(!signed) {
    return <Navigate to="/" />
  }

  if(loading) {
    return (
      <div>Carregando...</div>
    )
  }

  return children
}
