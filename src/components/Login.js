import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();  
    navigate('/'); 
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #C8E6C9' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4" style={{ color: '#4CAF50' }}>Welcome to MeroBazar</h2>
          <p className="text-center text-muted mb-4">Login to your account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: '#2E2E2E' }}>Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderColor: '#C8E6C9' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: '#2E2E2E' }}>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderColor: '#C8E6C9' }}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3" style={{ background: 'linear-gradient(45deg, #4CAF50, #66BB6A)', border: 'none' }}>
              Login
            </button>
          </form>
          <div className="text-center">
            <Link to="#" className="text-muted" style={{ color: '#8D6E63' }}>Forgot Password?</Link>
          </div>
          <div className="text-center mt-3">
            <span className="text-muted">Don't have an account? </span>
            <Link to="#" style={{ color: '#4CAF50' }}>Register here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;