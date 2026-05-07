// src/pages/Financial/Financial.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';
import { useLang } from '../../utils/LangHandler.jsx';

export default function FinancialPage() {
  const { lang } = useLang();
  const { can } = usePermission();
  const navigate = useNavigate();

  useEffect(() => {
    if (!can('financial.view')) navigate('/dashboard');
  }, [can, navigate]);

  if (!can('financial.view')) return null;

  return <div><h1>{lang('pages.financial.title')}</h1></div>;
}
