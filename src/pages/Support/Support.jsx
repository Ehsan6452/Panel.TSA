// src/pages/Support/Support.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';
import { useLang } from '../../utils/LangHandler.jsx';

export default function SupportPage() {
  const { lang } = useLang();
  const { can } = usePermission();
  const navigate = useNavigate();

  useEffect(() => {
    if (!can('support.view')) navigate('/dashboard');
  }, [can, navigate]);

  if (!can('support.view')) return null;

  return <div><h1>{lang('pages.support.title')}</h1></div>;
}
