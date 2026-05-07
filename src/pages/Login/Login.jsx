// src/pages/Login.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../../utils/LangHandler';
import { usePermission } from '../../utils/PermissionHandler';
import { authApi, userApi } from '../../services/api';
import './Style.css';

export default function Login() {
  const { lang } = useLang();
  const { setSession } = usePermission();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authApi.login(username, password);
      
      setSession({
        isLoggedIn: true,
        role: response.data.role,
        user: response.data,
        token: response.token
      });
      
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">
          {lang('auth.login')}
        </h2>
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">
              {lang('auth.username')}
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              {lang('auth.password')}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="submit-btn"
          >
            {loading ? lang('auth.loading') : lang('auth.login')}
          </button>
        </form>

        <div className="test-users-box">
          <strong>کاربران تستی:</strong>
          <div className="test-users-list">
            superadmin, admin, financial, support, agent, operation, content, marketing, vendor, technical, auditor
          </div>
          <div className="test-users-muted">
            رمز همه: 123456
          </div>
        </div>
      </div>
    </div>
  );
}
