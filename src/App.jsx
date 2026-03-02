import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Cold from './pages/Cold'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/coffee' element={<Product/>}/>
        <Route path='/cold' element={<Cold/>}/>
      </Routes>
    </div>
  )
}

export default App