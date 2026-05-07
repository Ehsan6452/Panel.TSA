// src/pages/PushNotification/PushNotification.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';
import { useLang } from '../../utils/LangHandler.jsx';

export default function PushNotificationPage() {
  const { lang } = useLang();
  const { can } = usePermission();
  const navigate = useNavigate();

  useEffect(() => {
    if (!can('pushNotification.view')) navigate('/dashboard');
  }, [can, navigate]);

  if (!can('pushNotification.view')) return null;

  return <div><h1>{lang('pages.pushNotification.title')}</h1></div>;
}
