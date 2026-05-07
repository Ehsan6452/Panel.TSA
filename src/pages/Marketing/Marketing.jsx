// src/pages/Marketing/Marketing.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';
import { useLang } from '../../utils/LangHandler.jsx';

export default function MarketingPage() {
  const { lang } = useLang();
  const { can } = usePermission();
  const navigate = useNavigate();

  useEffect(() => {
    if (!can('marketing.view')) navigate('/dashboard');
  }, [can, navigate]);

  if (!can('marketing.view')) return null;

  return <div><h1>{lang('pages.marketing.title')}</h1></div>;
}
