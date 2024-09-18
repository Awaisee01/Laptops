// import React from 'react'
// import styled from 'styled-components'

// const MyAccount = () => {
//   return (
//     <Main>
      
//     </Main>
//   )
// }

// export default MyAccount


// const Main = styled.div`



// `;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here (like API calls)
        console.log('Email:', email, 'Password:', password);
    };

    return (
      <Main>
          <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Customer Login</h2>
                <div className="input-container">
                    <label>Email *</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <div className="input-container">
                    <label>Password *</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                    />
                </div>
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    <label>Show Password</label>
                </div>
                <button type="submit" className="btn-login">Sign In</button>
                <div className="login-options">
                    <Link to="/createAccount">Create an Account</Link>
                    <a href="/forgot-password">Forgot Your Password?</a>
                </div>
            </form>
        </div>
      </Main>
    );
};

export default MyAccount;
const Main = styled.div`

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
}

.login-form {
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: center;
}

.input-container {
    margin-bottom: 1rem;
    text-align: left;
}

.input-container label {
    font-weight: bold;
}

.input-container input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 0.5rem;
}

.checkbox-container {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: left;
}

.checkbox-container input {
    margin-right: 0.5rem;
}

.btn-login {
    background-color: #ffcc00;
    color: #333;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
}

.btn-login:hover {
    background-color: #ffa500;
}

.login-options {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
}

.login-options a {
    color: #007bff;
    text-decoration: none;
}

.login-options a:hover {
    text-decoration: underline;
}


`;