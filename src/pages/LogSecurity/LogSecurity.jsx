// src/pages/LogSecurity/LogSecurity.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';
import { useLang } from '../../utils/LangHandler.jsx';

export default function LogSecurityPage() {
  const { lang } = useLang();
  const { can } = usePermission();
  const navigate = useNavigate();

  useEffect(() => {
    if (!can('logSecurity.view')) navigate('/dashboard');
  }, [can, navigate]);

  if (!can('logSecurity.view')) return null;

  return <div><h1>{lang('pages.logSecurity.title')}</h1></div>;
}
