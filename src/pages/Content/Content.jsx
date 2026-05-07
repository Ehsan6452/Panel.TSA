// src/pages/Content/Content.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';
import { useLang } from '../../utils/LangHandler.jsx';

export default function ContentPage() {
  const { lang } = useLang();
  const { can } = usePermission();
  const navigate = useNavigate();

  useEffect(() => {
    if (!can('content.view')) navigate('/dashboard');
  }, [can, navigate]);

  if (!can('content.view')) return null;

  return <div><h1>{lang('pages.content.title')}</h1></div>;
}
