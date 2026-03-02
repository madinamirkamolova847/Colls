import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/prod' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App