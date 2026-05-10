// src/pages/Employees/EmployeePage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../utils/PermissionHandler.jsx';
import { kpiCardsApi, quickActionApi, quickViewApi } from '../../services/api.js';
import DashboardRenderer from '../../components/dashboard/dashboardRenderer.jsx';

const QUICK_ACTION_REGISTRY = {
  employeeHistory: {
    type: "navigate",
    route: "/employees/history",
    icon: "FiActivity",
  },
  employeeRequests: {
    type: "navigate",
    route: "/employees/requests",
    icon: "FiClipboard",
  },
  employeeMessenger: {
    type: "navigate",
    route: "/employees/messenger",
    icon: "FiMessageCircle",
  },
  employeeDepartments: {
    type: "navigate",
    route: "/employees/departments",
    icon: "FiGrid",
  },
};

export default function EmployeePage() {
  const { can, session } = usePermission();
  const navigate = useNavigate();

  const [kpiCards, setKpiCards] = useState([]);
  const [quickViewValues, setQuickViewValues] = useState([]);
  const [quickActions, setQuickActions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!can('employees.dashboard.view')) navigate('/dashboard');
  }, [can, navigate]);

  useEffect(() => {
    const loadEmployeeDashboard = async () => {
      try {
        const [kpi, actionIds] = await Promise.all([
          kpiCardsApi.getKpiCards(session.role, 'employee.dashboard'),
          quickActionApi.getQuickActions(session.role, 'employee.dashboard')
        ]);

        const res = await quickViewApi.getQuickViewData('employee');

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

    loadEmployeeDashboard();
  }, []);

  if (!can('employees.dashboard.view')) return null;

  return (
    <DashboardRenderer
      kpiCards={kpiCards}
      tableData={quickViewValues}
      quickActions={quickActions}
      loading={loading}
      permissionBase="employees.dashboard"
    />
  );
}