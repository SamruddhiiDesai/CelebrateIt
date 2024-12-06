import React from 'react';
import '../assets/style/Login.css';
import { Link } from 'react-router-dom'; 

function Login() {
  return (
    <>
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Forgot Password? <a href="/reset-password">Reset here</a>
      </p>
      <p>
        New here? <Link as={Link} to="/registration">Create an account</Link>
      </p>
    </div>
    
    </>
  );
}

export default Login;
