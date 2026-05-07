import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdvancedTable from '../../../elements/AdvanceTable/AdvancedTable';
import { usePermission } from '../../../utils/PermissionHandler';
import { userApi } from '../../../services/api';

export default function UsersHistoryPage() {
  const { can } = usePermission();
  const navigate = useNavigate();

  const [historyList, setHistoryList] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!can('users.history.view')) navigate('/users');
  }, [can, navigate]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await userApi.getUserAllHistory();
        setHistoryList(res);
        if (res.length > 0) setActiveTab(res[0].tab);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  if (!can('users.history.view')) return null;
  if (loading) return <div className="flex items-center justify-center h-full text-gray-400">Loading...</div>;

  const tabs = historyList.map((s) => ({ id: s.tab }));
  const activeSection = historyList.find((s) => s.tab === activeTab);

  return (
    <section className="h-full w-full">
      <AdvancedTable
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        columns={activeSection?.columns || []}
        data={activeSection?.data || []}
        enableSearch
        enablePagination
        enableExport
      />
    </section>
  );
}
