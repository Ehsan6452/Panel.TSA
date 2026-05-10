import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdvancedTable from '../../../elements/AdvanceTable/AdvancedTable';
// TODO: import add each type of employee drawer here ...
import { employeeApi, vendorApi } from '../../../services/api';
import { usePermission } from '../../../utils/PermissionHandler';

export default function EmployeeListPage (){
    const { can, session } = usePermission();
    const navigate = useNavigate();

    const [employeesList, setEmployeesList] = useState([]);
    const [activeTab, setActiveTab] = useState('');
    const [loading, setLoading] = useState(true);
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        if (!can('employees.list.view')) navigate('/employees');
    }, [can, navigate]);

    useEffect(()=> {
        const fetchEmployeeList = async () => {
            try {
                const res = await employeeApi.getAllEmployee();
                setEmployeesList(res);
                if (res.length > 0) setActiveTab(res[0].tab);
            } catch (error) {
                console.log("there is an error on fetching employee list : ", error);
            }
            finally{
                setLoading(false)
                // console.log(vendorsList);
            }
        };
        fetchEmployeeList();
    },[])

    const tabs = employeesList.map((v) => ({id: v.tab}));
    const activeSection = employeesList.find((v) => v.tab === activeTab);
    console.log(activeSection);
    if (!can('employees.list.view')) return null;
    if (loading) return <div className="flex items-center justify-center h-full text-gray-400">Loading...</div>;

    return (
        <section className='h-full w-full'>
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
                onRowClick={(id) => navigate(`/employees/${id}`)}
            />

            {showDialog && (
                <>
                {/*TODO: add drawer management by type of employees or one for all */}
                </>
            )}
        </section>
    )
}