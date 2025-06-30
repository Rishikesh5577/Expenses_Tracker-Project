import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AUTH_API } from '../api/apiEndpoints';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserProfile(token);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get(AUTH_API.PROFILE, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  const login = async (email, password) => {
    try {
      setAuthError(null);
      const response = await axios.post(AUTH_API.LOGIN, { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigate('/');
      window.location.reload(); 
    } catch (error) {
      setAuthError(error.response?.data?.error || 'Invalid email or password');
      throw error;
    }
  };

  const signup = async (fullName, email, password, confirmPassword) => {
    try {
      setAuthError(null);
      const response = await axios.post(AUTH_API.SIGNUP, { fullName, email, password, confirmPassword });
      navigate('/login');
    } catch (error) {
      setAuthError(error.response?.data?.error || 'Signup failed. Please try again.');
      throw error;
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, signOut, authError, setAuthError }}>
     {children}
    </AuthContext.Provider>
  );
};