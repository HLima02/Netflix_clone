import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RoutesApp from './routes';


export default function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  )
}
