// src/components/common/ProtectedRoute.jsx

import { Navigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';

/*
  استفاده:
  <ProtectedRoute>          → فقط بررسی login
  <ProtectedRoute page="products">  → بررسی login + canViewPage
*/

export default function ProtectedRoute({ children, page }) {
  const { isLoggedIn, canViewPage, t } = usePermission();
  const { t: translate } = { t: (k) => k }; // placeholder تا LangHandler لود بشه

  // اگر login نکرده → redirect به login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // اگر page مشخص شده و دسترسی نداشت
  if (page && !canViewPage(page)) {
    return (
      <div className="no-access">
        <h2>دسترسی ندارید</h2>
        <p>برای مشاهده این صفحه با مدیر تماس بگیرید.</p>
      </div>
    );
  }

  return children;
}
