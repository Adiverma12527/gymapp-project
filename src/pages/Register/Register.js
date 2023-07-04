import React from 'react';
import './Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [change, setChange] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  function onNavigate() {
    localStorage.setItem("email", change);
    localStorage.setItem("password", password);
    navigate("/Login");
  }

  function navigation() {
    navigate("/Login");
  }

  return (
    <div className='Register'>
      <div className='login'>
        <p className='logins'> register</p>
        <div className='inputs'>
          <input placeholder='enter your name' className='input' onChange={e => setName(e.target.value)} /><br/><br/>
          <input placeholder=' enter your Email' className='input' onChange={e => setChange(e.target.value)} /><br/><br/>
          <input placeholder='create password' className='input' onChange={e => setPassword(e.target.value)} />
        </div>
        <br/><br/>
        <button className='button' onClick={onNavigate}>Register</button>
        <button className='already' onClick={navigation}>already exist, login</button>
      </div>
    </div>
  );
};

export default Register;