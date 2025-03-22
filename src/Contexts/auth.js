import { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({children}) {
  const [user, setUser] = useState('teste')
  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}
