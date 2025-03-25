import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RoutesApp from './routes';
import AuthProvider from './Contexts/auth'

import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
        <ToastContainer autoClose={2500} />
      </AuthProvider>
    </BrowserRouter>
  )
}
