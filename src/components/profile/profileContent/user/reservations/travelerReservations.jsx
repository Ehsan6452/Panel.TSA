import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { profileApi } from "../../../../../services/api";
import { useLang } from '../../../../../utils/LangHandler';
import { usePermission } from "../../../../../utils/PermissionHandler";

// Import Components
import AdvancedTable from '../../../../../elements/AdvanceTable/AdvancedTable';


export default function TravelerReservation() {
    const { id } = useParams();
    const { can } = usePermission();
    const navigate = useNavigate();
    const { lang } = useLang();

    const [reservations, setReservations] = useState(null);
    const [activeTab, setActiveTab] = useState('all');

    const basePath = 'pages.users.profile.reservations';


    useEffect(() => {
        if (!can('users.profile.reservations.view')) {
            navigate('/users'); 
        }
    }, [can, navigate]);


    useEffect(() => {
        const fetchReservations = async (id) => {
            try {
                const res = await profileApi.getUserReservationsById(id);

                setReservations(res);
            } catch (error) {
                console.error("fetch reservations failed : ", error);
                setReservations([]);
            }
        };
        if(id) fetchReservations(id);
    }, [id]);


    if (reservations === null) {
        return (
            <div style={{ color: 'var(--text-primary)', padding: '20px' }}>
                {lang(`common.loading`) || 'Loading...'}
            </div>
        );
    }


    const filteredDataByTab = reservations.filter(res => {
        if (activeTab === 'all') return true;
        return res.status === activeTab;
    });


    const columns = [
        { key: 'ref', title: 'reference', translatable: false },
        { key: 'date', title: 'date', translatable: false },
        { key: 'serviceType', title: 'serviceType', translatable: true, namespace: 'common.services' },
        { key: 'status', title: 'status', translatable: true, namespace: 'reservations.status' },
        { key: 'amount', title: 'amount', translatable: false },
    ];


    const tabs = [
        { id: 'all' },
        { id: 'completed' },
        { id: 'pending' },
        { id: 'cancelled' }
    ];

   
    const filters = [
        { 
            key: 'serviceType', 
            options: ['carRental', 'accommodation', 'restaurant', 'entertainment'] 
        }
    ];

    const handleRowClick = (resId) => {
        console.log("Navigating to reservation details for:", resId);
        // navigate(`/reservations/${resId}`);
    };

    return (
        <section className="flex flex-1 flex-column" style={{ width: '100%' }}>
            <h2 className='mb-3' style={{ color: 'var(--text-primary)' }}>
                {lang(`${basePath}.title`) || 'Traveler Reservations'}
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
