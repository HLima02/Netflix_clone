import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InicialPage from './pages/InicialPage'
import SignIn from './pages/Signin'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InicialPage/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  )
}
