// src/pages/Vendors/Vendors.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';
import { kpiCardsApi, quickActionApi, quickViewApi } from '../../services/api.js';
import DashboardRenderer from '../../components/dashboard/dashboardRenderer.jsx';

const QUICK_ACTION_REGISTRY = {
  'addVendor': {
    type: "navigate",
    route: "/vendors/new",
    icon: "FaBuilding",
  },
  'vendors.docs': {
    type: "navigate",
    route: "/vendors/docs",
    icon: "FaFileContract",
  },
  'vendors.list': {
    type: "navigate",
    route: "/vendors/list",
    icon: "FiList",
  },
};

export default function VendorsPage() {
  const { can, session } = usePermission();
  const navigate = useNavigate();

  const [kpiCards, setKpiCards] = useState([]);
  const [quickViewValues, setQuickViewValues] = useState([]);
  const [quickActions, setQuickActions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!can('vendors.dashboard.view')) navigate('/dashboard');
  }, [can, navigate]);

  useEffect(() => {
    const loadVendorDashboard = async () => {
      try {
        const [kpi, actionIds] = await Promise.all([
          kpiCardsApi.getKpiCards(session.role, 'vendor.dashboard'),
          quickActionApi.getQuickActions(session.role, 'vendor.dashboard')
        ]);

        const res = await quickViewApi.getQuickViewData('vendor');

        const rawActionIds = Array.isArray(actionIds[0]) ? actionIds[0] : actionIds;

        const enrichedActions = rawActionIds
          .filter(id => QUICK_ACTION_REGISTRY[id])
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

    loadVendorDashboard();
  }, []);

  if (!can('vendors.dashboard.view')) return null;

  return (
    <DashboardRenderer
      kpiCards={kpiCards}
      tableData={quickViewValues}
      quickActions={quickActions}
      loading={loading}
      permissionBase="vendors.dashboard"
    />
  );
}
