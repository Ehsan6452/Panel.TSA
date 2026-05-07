// src/pages/Reports/Reports.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';
import { useLang } from '../../utils/LangHandler.jsx';

export default function ReportsPage() {
  const { lang } = useLang();
  const { can } = usePermission();
  const navigate = useNavigate();

  useEffect(() => {
    if (!can('reports.view')) navigate('/dashboard');
  }, [can, navigate]);

  if (!can('reports.view')) return null;

  return <div><h1>{lang('pages.reports.title')}</h1></div>;
}
