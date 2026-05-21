import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { profileApi } from "../../../../../services/api"
import { useLang } from "../../../../../utils/LangHandler"
import { usePermission } from "../../../../../utils/PermissionHandler"

import AdvancedTable from "../../../../../elements/AdvanceTable/AdvancedTable"

export default function VendorHistory() {
    const { id } = useParams();
    const { can } = usePermission();
    const navigate = useNavigate();
    const { lang } = useLang();

    const basePath = "pages.vendors.profile.history";

    const [historyData, setHistoryData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!can("vendors.profile.history.view")) navigate("/vendors");
    }, [can, navigate]);

    useEffect(() => {
        const fetchHistoryDataById = async (vendorId) => {
            setLoading(true);
            try {
                const res = await profileApi.getVendorProfileHistoryById(vendorId);
                console.log("API Response:", res);
                
                setHistoryData(res?.history || null);
            } catch (error) {
                console.log("fetching data from vendor history failed : " + error);
                setHistoryData(null);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchHistoryDataById(id);
    }, [id]);

    if (loading) {
        return <div style={{ color: 'white', padding: '20px' }}>{lang(`${basePath}.loading`)}</div>;
    }

    if (!historyData || !historyData.data || historyData.data.length === 0) {
        return <div style={{ color: 'white', padding: '20px' }}>{lang(`${basePath}.noData`)}</div>;
    }

 
    const getFiltersFromColumns = () => {
        const filters = [];
        

        if (historyData.columns.some(col => col.key === 'severity')) {
            filters.push({
                key: 'severity',
                options: ['info', 'warning', 'critical']
            });
        }
        

        if (historyData.columns.some(col => col.key === 'type')) {
            filters.push({
                key: 'type',
                options: ['login_success', 'logout', 'failed_login', 'price_update', 'reservation_status_change', 'inventory_update']
            });
        }
        

        if (historyData.columns.some(col => col.key === 'adminRole')) {
            filters.push({
                key: 'adminRole',
                options: ['reception', 'finance_manager', 'operation_manager', 'chief_pilot', 'chef']
            });
        }
        
        return filters;
    };

    return (
        <AdvancedTable 
            tabs={[{ id: historyData.tab }]}
            activeTab={historyData.tab}
            columns={historyData.columns || []}
            data={historyData.data || []}
            onRowClick={(rowId) => console.log("View log details:", rowId)}
            enableSearch={true}
            enableExport={true}
            enablePagination={true}
            filters={getFiltersFromColumns()}
            searchPlaceholder="Search by admin name, action, description..."
        />
    );
}