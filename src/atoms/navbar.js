import React from 'react'
import './navbar.css'
import { FiMenu} from "react-icons/fi";
import { useState } from 'react';

const Navbar = () => {
  const[toggle,settoggle]=useState(false)
  function togglefunction(){
    settoggle(!toggle)
  }
  return (
    <div className='navbar'>
    <div className='mobilenavbar'> <div className='leftside'> <div><span className='blackpart' >NGE</span><span  className='bluepart' >GYM</span> </div><img  className='bicepsimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYewkKQAIhCJvORM1S2hrhPNf31iRSQQZXEqdcf63GyA&s'/> </div> <div className='icon'> <FiMenu onClick={togglefunction}/></div></div>
    {
      toggle? <ul typeof='star' className='list' > <li className='listitem'>ABOUT</li><li className='listitem'>PROGRAM</li><li className='listitem'>TRAINING</li><li className='listitem'>PRICING</li> </ul> : ""
    
    }
    
<div className='gym'> GYM
</div><div className='sections'>
<span className='section'>  ABOUT
</span>
<span  className='section'>PROGRAM
</span>
<span  className='section'>TRAINING
</span>
<span  className='section'>PRICING
</span>
</div>
<div className='joinus'> <div className='joinusbutton' > Join Us </div></div>
    
    </div>
  )
}

export default Navbar
