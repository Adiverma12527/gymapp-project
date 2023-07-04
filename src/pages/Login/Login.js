import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [change, setChange] = useState('');
  const [password, setPassword] = useState('');

  function onNavigate() {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (change === storedEmail && password === storedPassword) {
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  }

  return (
    <div className='Register'>
      <div className='login'>
        <p className='logins'> log in</p>
        <div className='inputs'>
          <input placeholder=' enter your Email' className='input' onChange={e => setChange(e.target.value)} /><br/><br/>
          <input placeholder='password' className='input' onChange={e => setPassword(e.target.value)} />
        </div>
        <br/><br/>
        <button className='button' onClick={onNavigate}>Login</button>
      </div>
    </div>
  );
};

export default Login;
