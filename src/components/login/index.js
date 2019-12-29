import React from 'react';
import style from './login.scss';

import auth from '../../common/authentication/index';
import Input from './input.js';

function LoginPage() {

  let { from } = location.state || { from: { pathname: "/" } };
  const login = () => console.log("Logging in");
  
  return (
    <div className={ style["box-container"] }>
      <div className={ style.box }>
        <h2>Dashboard Name</h2>
        <Input type='text' name='username' placeholder='username' />
        <Input type='password' name='password' placeholder='password' />
        <button className={ style["sign-in"] }onClick={login}>Sign in</button>
      
      </div>
    </div>
  )
}


export default LoginPage;