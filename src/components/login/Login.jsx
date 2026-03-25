import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="sign_in">
        <div className="text">
          <p>Login to Account</p>
          <b>Please enter your email and password to continue</b>
        </div>
        <div className="email">
          <p>Email address:</p>
          <input type="email" placeholder='esteban_schiller@gmail.com' />
        </div>
        <div className="password">
          <div className="forgot">
            <p>Password</p>
            <p>forget password</p>
          </div>
          <input type="password" placeholder='*******' />
        </div>
        <button>Sign in</button>
        <p>Don’t have an account?   <p>Create Account</p> </p>
      </div>
    </div>
  );
}

export default Login;
