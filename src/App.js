import React from 'react'
import Navbar from './atoms/navbar'
import './App.css'
import About from './pages/About/About'

import Training from './pages/Training/Training'
import Pricing from './pages/Pricing/Pricing'
import Price from './pages/Price/Price'
import Footer from './atoms/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";






const App = () => {
  return (
    

    



    <div >
      <Navbar/> 
      <Pricing/> 
      <About/>
      <Training/>
      <Price/>
      <Footer/>
    </div>
  )
}

export default App
