import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RoutesApp from './routes';
import AuthProvider from './Contexts/auth'


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  )
}
