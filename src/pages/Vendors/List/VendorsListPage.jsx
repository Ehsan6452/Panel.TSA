import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdvancedTable from '../../../elements/AdvanceTable/AdvancedTable';
//TODO: import Add each type of vendor drawer here ... 
import { vendorApi } from '../../../services/api';
import { usePermission } from '../../../utils/PermissionHandler';


export default function VendorsListPage (){
    const { can, session } = usePermission();
    const navigate = useNavigate();

    const [vendorsList, setVendorsList] = useState([]);
    const [activeTab, setActiveTab] = useState('');
    const [loading, setLoading] = useState(true);
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        if (!can('vendors.list.view')) navigate('/vendors');
    }, [can, navigate]);

    useEffect(()=> {
        const fetchVendorsList = async () => {
            try {
                const res = await vendorApi.getAllVendor();
                setVendorsList(res);
                if (res.length > 0) setActiveTab(res[0].tab);
            } catch (error) {
                console.log("there is an error on fetching vedors list : ", error);
            }
            finally{
                setLoading(false)
                // console.log(vendorsList);
            }
        };
        fetchVendorsList();
    },[])

    const tabs = vendorsList.map((v) => ({id: v.tab}));
    const activeSection = vendorsList.find((v) => v.tab === activeTab);
    console.log(activeSection);
    if (!can('vendors.list.view')) return null;
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
                onRowClick={(id) => navigate(`/vendors/${id}`)}
            />

            {showDialog && (
                <>
                {/*TODO: add drawer management by type of vendors or one for all */}
                </>
            )}
        </section>
    )
}