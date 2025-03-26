import { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '../services/firebaseConfig'
import { toast } from 'react-toastify';

export const AuthContext = createContext({})

export default function AuthProvider({children}) {
  const [user, setUser] = useState({})
  const navigate = useNavigate();

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

      navigate('/profiles')
    })
    .catch((error) => {
      toast.warning("Erro ao cadastrar: " + error.message)
    })
  }

  //Login
  async function singIn(email, password){
    await signInWithEmailAndPassword(auth, email, password)
    .then(async (value) => {
      let uid = value.user.uid
      const docRef = doc(db, "users", uid)
      const docSnap = await getDoc(docRef)

      navigate('/profiles')
    })
    .catch((error) => {
      toast.warning("Erro ao Fazer o Login: " + error.message)
    })
  }
  
  return (
    <AuthContext.Provider value={{user, signUp, singIn}}>
      {children}
    </AuthContext.Provider>
  )
}
