import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo_kharcha_guru from '../../img/logo_kharcha_guru.png';
import BACKGROUND_LOGIN_SIGNUP from '../../img/BACKGROUND_LOGIN_SIGNUP.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const validate = () => {
    if (!email || !password) {
      return 'Email and password are required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format.';
    }
    return '';
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    try {
      await login(email, password);
    } catch (err) {
      setError(err?.response?.data?.error || 'Invalid email or password');
    }
  };

  return (
    <LoginBg>
      <LoginCard>
        <div className="logo">
          <img src={logo_kharcha_guru} alt="KharchaGuru Logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <p className="subtitle">Streamline your expense management...</p>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p className="link">
            New here? <Link to="/signup">Create an Account</Link>
          </p>
        </form>
      </LoginCard>
    </LoginBg>
  );
};

const LoginBg = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0e7ef 0%, #f8fafc 100%);
`;

const LoginCard = styled.div`
  background: var(--glass-bg);
  border: var(--glass-border);
  box-shadow: var(--glass-shadow);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-radius: var(--glass-radius);
  padding: 2.5rem 2rem;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    h2 {
      text-align: center;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }
    .subtitle {
      text-align: center;
      color: var(--primary-color2);
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .error {
      color: red;
      text-align: center;
      margin-bottom: 0.5rem;
    }
    input {
      width: 100%;
      padding: 0.8rem 1rem;
      border-radius: 10px;
      border: var(--glass-border);
      background: var(--glass-bg);
      color: var(--primary-color);
      font-size: 1rem;
      margin-bottom: 0.2rem;
      box-shadow: var(--glass-shadow);
      &::placeholder {
        color: var(--primary-color2);
      }
    }
    button {
      width: 100%;
      padding: 0.8rem 1rem;
      border-radius: var(--glass-radius);
      border: none;
      background: var(--color-accent);
      color: #fff;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
      &:hover, &:focus {
        background: var(--color-green);
      }
    }
    .link {
      text-align: center;
      margin-top: 0.5rem;
      font-size: 0.95rem;
      a {
        color: var(--primary-color);
        text-decoration: underline;
      }
    }
  }
`;

export default Login;