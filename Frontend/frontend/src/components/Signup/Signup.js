import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo_kharcha_guru from '../../img/logo_kharcha_guru.png';
import BACKGROUND_LOGIN_SIGNUP from '../../img/BACKGROUND_LOGIN_SIGNUP.png';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useContext(AuthContext);

  const validate = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      return 'All fields are required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters.';
    }
    if (password !== confirmPassword) {
      return 'Passwords do not match.';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    signup(fullName, email, password, confirmPassword).catch(err => {
      setError(err?.response?.data?.error || 'Signup failed. Please try again.');
    });
  };

  return (
    <SignupBg>
      <SignupCard>
        <div className="logo">
          <img src={logo_kharcha_guru} alt="KharchaGuru Logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <h2>New User</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Signup</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p className="link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </SignupCard>
    </SignupBg>
  );
};

const SignupBg = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0e7ef 0%, #f8fafc 100%);
`;

const SignupCard = styled.div`
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
      background: var(--color-green);
      color: #fff;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
      &:hover, &:focus {
        background: var(--color-accent);
      }
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
`;

export default Signup;













//   const validateInputs = () => {
//     if (username.length < 6) {
//       return 'Username must be at least 6 characters long.';
//     }
//     if (password.length < 6) {
//       return 'Password must be at least 6 characters long.';
//     }
//     return '';
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationError = validateInputs();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     signup(username, password).catch(err => {
//       setError('Signup failed. Please try again.');
//     });
//   };

//   const styles = {
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100vh',
//       width: '100vw',
//       overflow: 'hidden',
//       backgroundImage: `url(${BACKGROUND_LOGIN_SIGNUP})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//     },
//     form: {
//       backgroundColor: '#FFF0F5',
//       padding: '40px',
//       borderRadius: '20px',
//       boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
//       maxWidth: '400px',
//       width: '100%',
//     },
//     input: {
//       width: '100%',
//       padding: '12px',
//       margin: '12px 0',
//       borderRadius: '10px',
//       border: '1px solid #ced4da',
//       fontSize: '16px',
//       boxSizing: 'border-box',
//     },
//     button: {
//       width: '100%',
//       padding: '12px',
//       backgroundColor: 'green',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '10px',
//       fontSize: '16px',
//       cursor: 'pointer',
//       marginTop: '15px',
//       transition: 'background-color 0.3s ease',
//     },
//     heading: {
//       textAlign: 'center',
//       marginBottom: '30px',
//       color: '#343a40',
//       fontSize: '24px',
//     },
//     link: {
//       textAlign: 'center',
//       marginTop: '20px',
//       color: '#007bff',
//       textDecoration: 'none',
//       fontSize: '14px',
//     },
//     subtitle: {
//       textAlign: 'center',
//       marginBottom: '30px',
//       color: '#6c757d',
//       fontSize: '16px',
//     },
//     logo: {
//       textAlign: 'center',
//       marginBottom: '30px',
//     },
//     logoImg: {
//       width: '80px',
//       height: '80px',
//       borderRadius: '50%',
//     },
//     error: {
//       color: 'red',
//       textAlign: 'center',
//       marginBottom: '10px',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.logo}>
//         <img
//           src={logo_kharcha_guru}
//           alt="KharchaGuru Logo"
//           style={styles.logoImg}
//         />
//       </div>
//       <form style={styles.form} onSubmit={handleSubmit}>
//         <h2 style={styles.heading}>Signup</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>
//           Signup
//         </button>
//         {error && <p style={styles.error}>{error}</p>}
//       </form>
//       <p style={styles.link}>
//       Already have an account? <Link to="/login" style={{ color: '#007bff' }}>Login here</Link>
//       </p>
//     </div>
//   );
// };

// export default Signup;

