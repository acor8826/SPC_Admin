'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

// Import all original theme stylesheets
import '/public/css/animate.min.css';
import '/public/css/animation.css';
import '/public/css/bootstrap-select.min.css';
import '/public/css/bootstrap.css';
import '/public/css/swiper-bundle.min.css';
import '/public/css/style.css';
import '/public/font/fonts.css';
import '/public/icon/style.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login({ email, password });

    if (result.success) {
      router.push('/');
    } else {
      setError(result.message || 'Login failed');
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="login-wrapper">
        <div className="loginbox bg-white shadow-sm border rounded p-4" style={{ maxWidth: 450, width: '100%' }}>
          <div className="text-center mb-4">
            <img
              src="/images/logo/logo.png"
              alt="Logo"
              style={{ height: 40 }}
              className="mb-2"
            />
            <h4 className="font-w700">Admin Login</h4>
          </div>

          {error && (
            <div className="alert alert-danger text-center py-2">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="secret123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
