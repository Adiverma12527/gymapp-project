import React from 'react'
import Navbar from './atoms/navbar'
import './App.css'
import About from './pages/About/About'
import Program from './pages/Program/Program'
import Training from './pages/Training/Training'
import Pricing from './pages/Pricing/Pricing'
import {Link} from 'react-scroll'

const App = () => {
  return (
    <div >
      <Navbar/>  
      <div className='homeimage'><div className='joinwithus'>Join With Us</div></div>
      <About/>
      <Program/>
      <Training/>
      <Pricing/>
    </div>
  )
}

export default App
