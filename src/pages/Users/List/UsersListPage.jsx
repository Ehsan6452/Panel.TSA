import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdvancedTable from '../../../elements/AdvanceTable/AdvancedTable';
import AddTravelerDrawer from '../drawers/AddTravelerDrawer';
import { usePermission } from '../../../utils/PermissionHandler';
import { userApi } from '../../../services/api';

export default function UsersListPage() {
  const { can } = usePermission();
  const navigate = useNavigate();

  const [userList, setUserList] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (!can('users.list.view')) navigate('/users');
  }, [can, navigate]);

  useEffect(() => {
    const fetchUsersList = async () => {
      try {
        const res = await userApi.getAllUser();
        setUserList(res);
        if (res.length > 0) setActiveTab(res[0].tab);
      } finally {
        setLoading(false);
      }
    };
    fetchUsersList();
  }, []);

  

  if (!can('users.list.view')) return null;
  if (loading) return <div className="flex items-center justify-center h-full text-gray-400">Loading...</div>;

  const tabs = userList.map((s) => ({ id: s.tab }));
  const activeSection = userList.find((s) => s.tab === activeTab);

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
        enableAdd
        onAddClick={() => setShowDialog(true)}
        onRowClick={(id) => navigate(`/users/${id}`)}
      />


      {showDialog && (
        <AddTravelerDrawer
          isOpen={showDialog}
          onClose={()=> setShowDialog(false)}
          onSuccess={()=> setShowDialog(false)

            // refersh
          }
        />
      )}
    </section>
  );
}
