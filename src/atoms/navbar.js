import React from 'react'
import './navbar.css'
import { FiMenu} from "react-icons/fi";
import { useState } from 'react';
import { Link } from 'react-scroll'
import Price from '../pages/Price/Price';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const nevigate=useNavigate();
  function handleClick(){
    nevigate("/Register")
  }
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
    
<Link to='Pricing' className='gym'> GYM
</Link ><div className='sections'>
<Link to='About' className='section'>  ABOUT
</Link>
<Link to='Training' className='section'>PROGRAM
</Link>
<Link to='Training' className='section'>TRAINING
</Link>
<Link  to='Price' className='section'>PRICING
</Link>
</div>
<div className='joinus'> <div className='joinusbutton' onClick={handleClick} > Join Us </div></div>
    
    </div>
  )
}

export default Navbar
