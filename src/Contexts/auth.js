import { useState, useEffect, createContext } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../services/firebaseConfig'
import { toast } from 'react-toastify';

export const AuthContext = createContext({})

export default function AuthProvider({children}) {
  const [user, setUser] = useState({})

  //cadastro
  async function signUp(email, password, name, tel){
    await createUserWithEmailAndPassword(auth, email, password)
    .then(async (value) => {
      let uid = value.user.uid
      toast.success('Cadastrado')
      console.log(value.user)
      
      await setDoc(doc(db, "users", uid), {
        nome: name,
        telefone: tel,
        email: email,
        uid: uid
      })
    })
    .catch((error) => {
      toast.warning("Erro ao cadastrar: " + error.message)
    })
  }
  
  return (
    <AuthContext.Provider value={{user, signUp}}>
      {children}
    </AuthContext.Provider>
  )
}
