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
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser(){
      const storageUser = localStorage.getItem('@user')

      if(storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false)
        navigate('/profiles')
      }
      setLoading(false)
    }

    loadUser()
  }, [])
  //cadastro
  async function signUp(email, password, name, tel){
    await createUserWithEmailAndPassword(auth, email, password)
    .then(async (value) => {
      let uid = value.user.uid
      console.log(value.user)
      
      await setDoc(doc(db, "users", uid), {
        nome: name,
        telefone: tel,
        email: email,
        uid: uid
      })
      .then(() => {
        let data = {
          nome: name,
          telefone: tel,
          email: email,
          uid: uid
        }
        setUser(data)
        storageUser(data)
        toast.success("Bem vindo ao sistema")
        navigate('/profiles')
      })
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

      let data = {
        uid,
        nome: value.user.nome,
        email: value.user.email,
        telefone: value.user.telefone,
      }
      setUser(data)
      storageUser(data)
      toast.success("Bem-vindo(a) de volta!")
      navigate('/profiles')
    })
    .catch((error) => {
      toast.warning("Erro ao Fazer o Login: " + error.message)
    })
  }

  function storageUser(data){
    localStorage.setItem('@user',JSON.stringify(data))
  }
  
  return (
    <AuthContext.Provider value={{signed: !!user, signUp, singIn,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}
