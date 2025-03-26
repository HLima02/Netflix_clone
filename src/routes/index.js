import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Private from './Private'

import InicialPage from '../pages/InicialPage'
import SignIn from '../pages/Signin'
import SignUp from '../pages/SignUp'
import Profiles from '../pages/Profiles'

export default function RoutesApp({children}) {
  return (
    <Routes>
      <Route path='/' element={<Private><InicialPage/></Private>} />
      <Route path='/signin' element={<Private><SignIn/></Private>} />
      <Route path='/signup' element={<Private><SignUp/></Private>} />
      <Route path='/profiles' element={<Private><Profiles/></Private>} />
    </Routes>
  )
}
