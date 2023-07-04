import React from 'react'
import './Footer.css'
import { PiFacebookLogoBold} from "react-icons/pi";
import {FaInstagramSquare } from "react-icons/fa";
import {AiFillTwitterCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
    <div className='gymss'>
    <div className='left'><div ><h3 style={{color:'white'}}  >GYM</h3></div><div style={{color:'white'}}>We are providing the best services<br/> here in very cheap price.</div><div className='iconss'> <Link to="https://www.facebook.com/profile.php?id=100011993833801" className='facebook'><PiFacebookLogoBold/> </Link><Link to="https://www.instagram.com/adityav_erma/" className='instagram'><FaInstagramSquare/></Link> <Link to="https://twitter.com/Adityav02145155" className='twitter'> <AiFillTwitterCircle/></Link></div></div>

 <div className='healthyliving'>
 <h3 style={{color:'white'}} >Healthy living</h3>
 <p style={{color:'white'}} >fitness</p>
 <p style={{color:'white'}}>healthy</p>
 <p style={{color:'white'}}>exercise</p>
 <p style={{color:'white'}}> hardwork</p>
 </div>
 <div className='servicess'>
 <h3 style={{color:'white'}}> Services</h3>
 <p style={{color:'white'}}> Good equipment </p>
 <p style={{color:'white'}}> Fast services</p>
 <p style={{color:'white'}} > Ready to help </p>
 <p style={{color:'white'}}>  Average fee </p></div>
 <div className='programss'> 
 <h3 style={{color:'white'}}>Programs </h3>
 <p style={{color:'white'}}>Yoga  </p>
 <p style={{color:'white'}}> Intense workout</p>
 <p style={{color:'white'}}> super strength workout</p>
 <p style={{color:'white'}}> diet programs.</p></div>

        
    
    </div>
   
    <div className='foot' >
    <hr style={{marginTop:"100px"}}></hr>
    <p style={{display:"flex", justifyContent:"center" , alignItems:"center"}} >  @ 2023 inc ALL RIGHT RESERVED. </p>
   
   </div>
      
    </div>
  )
}

export default Footer
