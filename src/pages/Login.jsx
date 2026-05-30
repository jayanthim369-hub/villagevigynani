import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import PageShell from './PageShell';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <PageShell title="Login" eyebrow="Account Access" description="Sign in to continue to creator and admin tools.">
      <form className="glass-card" onSubmit={handleSubmit} style={{ padding: '32px', maxWidth: '460px', margin: '0 auto' }}>
        <label className="form-group">
          <span className="form-label">Email</span>
          <input className="form-input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label className="form-group">
          <span className="form-label">Password</span>
          <input className="form-input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </label>
        {error && <p className="badge badge-rejected" style={{ marginBottom: '16px' }}>{error}</p>}
        <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>Login</button>
      </form>
    </PageShell>
  );
};

export default Login;
