// src/pages/Users/Users.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';
import { kpiCardsApi, quickActionApi, quickViewApi } from '../../services/api.js';
import DashboardRenderer from '../../components/dashboard/dashboardRenderer.jsx';
import AddTravelerDrawer from './drawers/AddTravelerDrawer.jsx'

const QUICK_ACTION_REGISTRY = {
  'addUser': {
    type: "modal",
    modalComponent: AddTravelerDrawer,
    icon: "FiUserPlus",
  },
  'users.list': {
    type: "navigate",
    route: "/users/list",
    icon: "FiUsers",
  },
  'users.history': {
    type: "navigate",
    route: "/users/history",
    icon: "FaHistory",
  },
};

export default function UsersPage() {
  const { can, session } = usePermission();
  const navigate = useNavigate();

  const [kpiCards, setKpiCards] = useState([]);
  const [quickViewValues, setQuickViewValues] = useState([]);
  const [quickActions, setQuickActions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (!can('users.dashboard.view')) {
      navigate('/dashboard');
    }
  }, [can, navigate]);

  useEffect(() => {
    const loadUserDashboard = async () => {
      try {
        const [kpi, actionIds] = await Promise.all([
          kpiCardsApi.getKpiCards(session.role, 'user.dashboard'),
          quickActionApi.getQuickActions(session.role, 'user.dashboard')
        ]);
        const res = await quickViewApi.getQuickViewData('user');

        const rawActionIds = Array.isArray(actionIds[0]) ? actionIds[0] : actionIds;

        const enrichedActions = rawActionIds
          .filter(id => QUICK_ACTION_REGISTRY[id])
          .map(id => ({
            id,
            title: id,
            ...QUICK_ACTION_REGISTRY[id],
            onAction: QUICK_ACTION_REGISTRY[id].type === 'modal' 
              ? () => {
                setActiveModal(id)
              }
              : undefined
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

    loadUserDashboard();
  }, []);

  if (!can('users.dashboard.view')) return null;

  const ActiveModalComponent = activeModal ? QUICK_ACTION_REGISTRY[activeModal]?.modalComponent : null;

  return (
    <>
      <DashboardRenderer
        kpiCards={kpiCards}
        quickActions={quickActions}
        loading={loading}
        tableData={quickViewValues}
        permissionBase="users.dashboard"
      />

      {ActiveModalComponent && (
        <ActiveModalComponent
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          onSuccess={() => {
            setActiveModal(null);
            // اگه نیاز به reload داشتی اینجا اضافه کن
          }}
        />
      )}
    </>
  );
}
