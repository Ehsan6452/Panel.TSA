import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { profileApi } from "../../../../../services/api"
import { useLang } from '../../../../../utils/LangHandler'
import { usePermission } from '../../../../../utils/PermissionHandler'

import AdvancedTable from "../../../../../elements/AdvanceTable/AdvancedTable"
import OwnerHeader from "./OwnerHeader"

import "./VendorAdmins.css"

export default function VendorAdmins(){
    const { id } = useParams();
    const { can } = usePermission();
    const navigate = useNavigate();
    const { lang } = useLang();

    const basePath = "pages.vendors.profile.admins";

    const [ownerData, setOwnerData] = useState(null);
    const [adminsData, setAdminsData] = useState([]);
    const [activeTab, setActiveTab] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!can("vendors.profile.admins.view")) navigate("/vendors");
    }, [can, navigate]);

    useEffect(() => {
        const fetchAdminsDataById = async (vendorId) => {
            try {
                const res = await profileApi.getVendorsProfileAdminsById(vendorId);
                setOwnerData(res.owner);
                setAdminsData(res.admins);
                
                if (res.admins && res.admins.length > 0) {
                    setActiveTab(res.admins[0].tab);
                }
            } catch (error) {
                console.log("fetching data from vendor admins failed : " + error); 
            } finally {
                setLoading(false);
            }
        };
        if(id) fetchAdminsDataById(id);
    }, [id]);

    useEffect(() => {
        if (adminsData.length > 0 && !activeTab) {
            setActiveTab(adminsData[0].tab);
        }
    }, [adminsData, activeTab]);

    const handleOwnerAction = (action, value) => {
        switch(action) {
            case 'CALL':
                if (value) window.location.href = `tel:${value}`;
                break;
            case 'EMAIL':
                if (value) window.location.href = `mailto:${value}`;
                break;
            case 'Profile' : 
                if(value) navigate(`/users/${value}`)
                break;
            default:
                break;
        }
    };

    if (loading) {
        return <div style={{ color: 'white', padding: '20px' }}>{lang(`${basePath}.loading`)}</div>;
    }

    const adminTabs = adminsData.map((a) => ({id: a.tab}));
    const activeSection = adminsData.find((s) => s.tab === activeTab);

    return (
        <div className="vendor-admins-container">
            <OwnerHeader 
                ownerData={ownerData} 
                onAction={handleOwnerAction}
            />
            
            <AdvancedTable
                tabs={adminTabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                columns={activeSection?.columns || []}
                data={activeSection?.data || []}
                enableSearch
                enableAdd
                enableExport    
                onRowClick={(rowId) => navigate(`/users/${rowId}`)}       
            />
        </div>
    );
}