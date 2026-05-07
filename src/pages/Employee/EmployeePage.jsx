import { useEffect, useState } from 'react';
import { usePermission } from '../../utils/PermissionHandler.jsx';
import { useNavigate } from 'react-router-dom';
import { kpiCardsApi,quickActionApi,quickViewApi } from '../../services/api.js';
import DashboardRenderer from '../../components/dashboard/dashboardRenderer.jsx';

export default function EmployeePage(){
    const { can, session } = usePermission();
    const navigate = useNavigate();

    const [kpiCards, setKpiCards] = useState([]);
    const [quickViewTabs, setQuickViewTabs] = useState([]);
    const [quickViewValues, setQuickViewValues] = useState([]);
    const [quickActions, setQuickActions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!can('employees.dashboard.view')) {
        navigate('/dashboard');
        }
    }, [can, navigate]);

        useEffect(() => {
    
        const loadUserDashboard = async () => {
    
          try {
            const [
              kpi,
              actions
            ] = await Promise.all([
              kpiCardsApi.getKpiCards(session.role , 'employee.dashboard'),
              quickActionApi.getQuickActions(session.role,'employee.dashboard')
            ]);
    
            setKpiCards(kpi.data || kpi);
            setQuickActions(actions);
    
    
            // setQuickViewValues(values.flat());
    
          } catch (error) {
            console.log("dashboard loading failed:", error);
          } finally {
            setLoading(false);
          }
        };
    
        loadUserDashboard();
    
      }, []);

    return (
        <DashboardRenderer
            kpiCards={kpiCards}
            quickViewTabs={quickViewTabs}
            quickViewValues={quickViewValues}
            quickActions={quickActions}
            loading={loading}
            permissionBase="employees.dashboard"
        />
    )
}