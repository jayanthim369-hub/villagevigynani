import React, { createContext, useContext, useState, useEffect } from 'react';
import api from './api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('vv_token');
      if (token) {
        try {
          const userData = await api.get('/auth/me');
          setUser(userData);
        } catch (err) {
          console.error('Session restore failed:', err);
          localStorage.removeItem('vv_token');
        }
      }
      setIsLoading(false);
    };
    initAuth();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('vv_token', response.token);
      setUser(response.user);
      return response.user;
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setIsLoading(true);
    try {
      const response = await api.post('/auth/register', { name, email, password });
      localStorage.setItem('vv_token', response.token);
      setUser(response.user);
      return response.user;
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('vv_token');
    setUser(null);
  };

  const isAdmin = user?.role === 'admin' || user?.email === 'villabgvignani@gmail.com';

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
