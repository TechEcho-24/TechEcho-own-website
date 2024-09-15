import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'

function App() {
  return (
    <div className='container mx-auto px-4'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
