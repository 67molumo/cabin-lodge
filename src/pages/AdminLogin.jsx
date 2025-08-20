// src/pages/AdminLogin.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../hooks/useToast';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const showToast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login (in real app: call backend /auth/login)
    setTimeout(() => {
      if (credentials.email === 'admin@cabinlodge.co.tz' && credentials.password === 'admin123') {
        localStorage.setItem('adminToken', 'fake-jwt-token');
        showToast('Logged in successfully!', 'success');
        navigate('/admin');
      } else {
        showToast('Invalid credentials.', 'error');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light pt-20">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">🔐</span>
          </div>
          <h1 className="text-2xl font-bold text-primary">Admin Login</h1>
          <p className="text-gray-600">Enter your credentials to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="admin@cabinlodge.co.tz"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Demo: Use <code className="bg-gray-100 px-1 rounded">admin@cabinlodge.co.tz</code> / <code className="bg-gray-100 px-1 rounded">admin123</code>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;