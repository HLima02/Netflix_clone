import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InicialPage from './pages/InicialPage'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InicialPage/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}
