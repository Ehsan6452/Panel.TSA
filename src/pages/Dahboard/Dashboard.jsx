import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';

import DashboardRenderer from '../../components/dashboard/dashboardRenderer.jsx';
// import ReservationModal from '../../components/modals/ReservationModal.jsx'; // مثال

import { kpiCardsApi, quickViewApi, quickActionApi } from '../../services/api.js';

// Registry برای Quick Actions
const QUICK_ACTION_REGISTRY = {
  permissions: {
    type: "navigate",
    route: "/permissions",
    icon: "FaUserShield",
  },
  reservations: {
    type: "navigate",
    icon: "FaCalendarCheck",
    route: "/reservations",
  },
  securityAlerts: {
    type: "navigate",
    route: "/security-alerts",
    icon: "IoWarning",
  },
  contracts: {
    type: "navigate",
    route: "/contracts",
    icon: "RiFilePaper2Fill",
  },
  // بقیه actionها...
};

export default function DashboardPage() {
  const { can, session } = usePermission();
  const navigate = useNavigate();

  const [kpiCards, setKpiCards] = useState([]);
  const [quickViewValues, setQuickViewValues] = useState([]);
  const [quickActions, setQuickActions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!can('dashboard.view')) {
      navigate('/dashboard');
    }
  }, [can, navigate]);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [kpi, actionIds] = await Promise.all([
          kpiCardsApi.getKpiCards(session.role, 'dashboard'),
          quickActionApi.getQuickActions(session.role, 'dashboard')
        ]);
        const res = await quickViewApi.getQuickViewData('Dashboard');

        // Merge کردن actionIds با registry
        const enrichedActions = actionIds
          .filter(id => QUICK_ACTION_REGISTRY[id]) // فقط actionهایی که توی registry هستن
          .map(id => ({
            id,
            title: id,
            ...QUICK_ACTION_REGISTRY[id]
          }));

        setKpiCards(kpi.data || kpi);
        setQuickActions(enrichedActions);
        setQuickViewValues(res);

      } catch (error) {
        console.log("dashboard loading failed:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (!can('dashboard.view')) return null;

  return (
    <DashboardRenderer
      kpiCards={kpiCards}
      tableData={quickViewValues}
      quickActions={quickActions}
      loading={loading}
      permissionBase="dashboard"
    />
  );
}
