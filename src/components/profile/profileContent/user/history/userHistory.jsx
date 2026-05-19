import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import { profileApi } from "../../../../../services/api";
import { useLang } from '../../../../../utils/LangHandler';
import { usePermission } from "../../../../../utils/PermissionHandler";

// Import Components
import AdvancedTable from '../../../../../elements/AdvanceTable/AdvancedTable';

export default function UserHistory() {
    const { id } = useParams();
    const { can } = usePermission();
    const navigate = useNavigate();
    const { lang } = useLang();

    const [historyLogs, setHistoryLogs] = useState(null);
    const [activeTab, setActiveTab] = useState('all');

    const basePath = 'pages.users.profile.history';


    useEffect(() => {

        if (!can('users.profile.history.view')) {
            navigate('/users');
        }
    }, [can, navigate]);


    useEffect(() => {
        const fetchHistoryData = async (userId) => {
            try {
                
                const res = await profileApi.getUserHistoryById(userId);
                setHistoryLogs(res);
            } catch (error) {
                console.error("fetch user history data failed : ", error);
                setHistoryLogs([]); 
        };
        }
        if(id) fetchHistoryData(id);
    },[id]);


    if (historyLogs === null) {
        return (
            <div style={{ color: 'var(--text-primary)', padding: '20px' }}>
                {lang(`common.loading`) || 'Loading...'}
            </div>
        );
    }


    const filteredDataByTab = historyLogs.filter(log => {
        if (activeTab === 'all') return true;
        if (activeTab === 'security') return log.type.includes('login') || log.type.includes('password');
        if (activeTab === 'activity') return !log.type.includes('login');
        return true;
    });

    const columns = [
        { key: 'id', title: 'logId', translatable: false },
        { key: 'date', title: 'date', translatable: false },
        { key: 'type', title: 'actionType', translatable: true, namespace: 'history.types' },
        { key: 'severity', title: 'severity', translatable: true, namespace: 'history.severity' },
        { key: 'ip', title: 'ipAddress', translatable: false },
        { key: 'desc', title: 'description', translatable: false },
    ];


    const tabs = [
        { id: 'all' },
        { id: 'security' },
        { id: 'activity' }
    ];


    const filters = [
        { key: 'severity', options: ['info', 'warning', 'critical'] }
    ];

    const handleRowClick = (logId) => {
        console.log("Navigating to log details for:", logId);
        // navigate(`/logs/${logId}`);
    };

    return (
        <section className="flex flex-1 flex-column" style={{ width: '100%' }}>
            <h2 className='mb-3' style={{ color: 'var(--text-primary)' }}>
                {lang(`${basePath}.title`) || 'User Activity History'}
            </h2>
            
            <AdvancedTable 
                columns={columns}
                data={filteredDataByTab}
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                onRowClick={handleRowClick}
                enableSearch={true}
                enablePagination={true}
                enableExport={true}
                filters={filters}
            />
        </section>
    );
}
