import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Summary } from './pages/Summary'
import { Sales } from './pages/Sales'
import { Sale } from './pages/Sale'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Summary/>}/>
      <Route path='/sales' element={<Sales/>}/>
      <Route path='/sales/:id' element={<Sale/>}/>
    </Routes>
  )
}
