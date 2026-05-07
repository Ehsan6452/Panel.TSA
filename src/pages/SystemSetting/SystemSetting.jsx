// src/pages/SystemSetting/SystemSetting.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';
import { useLang } from '../../utils/LangHandler.jsx';

export default function SystemSettingPage() {
  const { lang } = useLang();
  const { can } = usePermission();
  const navigate = useNavigate();

  useEffect(() => {
    if (!can('systemSetting.view')) navigate('/dashboard');
  }, [can, navigate]);

  if (!can('systemSetting.view')) return null;

  return <div><h1>{lang('pages.systemSetting.title')}</h1></div>;
}
