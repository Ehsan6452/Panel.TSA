import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { profileApi } from "../../../../../services/api"
import { useLang } from "../../../../../utils/LangHandler"
import { usePermission } from "../../../../../utils/PermissionHandler"

import AdvancedTable from "../../../../../elements/AdvanceTable/AdvancedTable"

export default function VendorReservation(){
    const { id } = useParams();
    const { can } = usePermission();
    const navigate = useNavigate();
    const { lang } = useLang();

    const basePath = "pages.vendors.profile.reservations";

    const [reservesData, setReservesData] = useState([]); 
    const [activeTab, setActiveTab] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!can("vendors.profile.reservations.view")) navigate("/vendors");
    }, [can, navigate]);

    useEffect(() => {
        const fetchReservesDataById = async (vendorId) => {
            setLoading(true); 
            try {
                const res = await profileApi.getVendorPofileReservationById(vendorId);
                const reservations = res?.reservations || [];
                setReservesData(reservations);
                

                if (reservations.length > 0) {
                    setActiveTab(reservations[0].tab);
                }
            } catch (error) {
                console.log("fetching data from vendor reserves failed : " + error);
                setReservesData([]); 
            } finally {
                setLoading(false);
            }
        };
        if(id) fetchReservesDataById(id);
    }, [id]);


    if (loading) {
        return <div style={{ color: 'white', padding: '20px' }}>{lang(`${basePath}.loading`)}</div>;
    }


    if (!reservesData || reservesData.length === 0) {
        return <div style={{ color: 'white', padding: '20px' }}>{lang(`${basePath}.noData`)}</div>;
    }

    const reservesStatusData = reservesData.map((r) => ({ id: r.tab }));
    const activeSection = reservesData.find((r) => r.tab === activeTab); 

    return (
        <AdvancedTable 
            tabs={reservesStatusData}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            columns={activeSection?.columns || []}
            data={activeSection?.data || []} 
            onRowClick={(rowId) => navigate(`/reserves/${rowId}`)}
            enableSearch
            enableExport
            enablePagination
        />
    );
}