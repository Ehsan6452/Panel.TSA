import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import { profileApi } from "../../../../../../services/api";
import { useLang } from '../../../../../../utils/LangHandler';
import { usePermission } from "../../../../../../utils/PermissionHandler";

// Import Components
import DataTable from "../../../../../../elements/DataTable/DataTable";
import StatCard from "../../../../../../elements/StatCard/StatCard";

import "./admins.css";

export default function UserSpecificAdmin() {
    const { id } = useParams();
    const { can } = usePermission();
    const navigate = useNavigate();

    const [adminData, setAdminData] = useState(null);
    const { lang } = useLang();
    const basePath = 'pages.users.profile.userSpecificAdmin';

    useEffect(() => {
        if (!can('users.profile.specific.view')) {
            navigate('/users');
        }
    }, [can, navigate]);

    useEffect(() => {
        const fetchAdminData = async (userId) => {
            try {
                const res = await profileApi.getUserProfileSpecificAdminInfoById(userId);
                setAdminData(res);
                
            } catch (error) {
                console.log("fetch admin profile data failed : ", error);
            }
        };
        if(id) fetchAdminData(id);
    }, [id]);

    if (!adminData) {
        return <div style={{ color: 'var(--text-primary)', padding: '20px' }}>{lang(`${basePath}.loading`)}</div>;
    }

    const inventoryColumns = [
        { header: lang(`${basePath}.table.id`) || "Product ID", accessor: "id" },
        { header: lang(`${basePath}.table.name`) || "Product/Service Name", accessor: "name" },
        { header: lang(`${basePath}.table.type`) || "Type", accessor: "type" },
        { 
            header: lang(`${basePath}.table.status`) || "Status", 
            accessor: "status",
            render: (val) => (
                <span className={`usa-status-badge ${val === 'Active' ? 'usa-status-active' : 'usa-status-warning'}`}>
                    {val}
                </span>
            )
        }
    ];


    const vendorprofileClik = () =>{
        navigate(`/vendors/${adminData.vendor.vendorId}`)
    }
    return (
        <section className="usa-wrapper">
            
            {/* Row 0: Vendor Connection */}
            <div className="usa-row-vendor">
                <div className="usa-vendor-info">
                    <span className="usa-subtitle">{lang(`${basePath}.vendor.subtitle`) || "Legal Representative For:"}</span>
                    <h3 className="usa-vendor-name">{adminData.vendor.name}</h3>
                    <span className="usa-vendor-id">Business ID: {adminData.vendor.vendorId}</span>
                </div>
                <div className="usa-vendor-action">
                    <button className="usa-btn-primary"  onClick={vendorprofileClik}>
                        {lang(`${basePath}.vendor.viewProfile`) || "View Vendor Profile"}
                    </button>
                </div>
            </div>

            {/* Row 1: 4 Statistic Cards */}
            <div className="usa-row-stats">
                <StatCard 
                    label={lang(`${basePath}.stats.role`) || "Role & Department"} 
                    value={adminData.stats.role} 
                    valueClassName="usa-text-primary" 
                />
                <StatCard 
                    label={lang(`${basePath}.stats.shift`) || "Working Shift"} 
                    value={adminData.stats.shift} 
                    type="tags" 
                />
                <StatCard 
                    label={lang(`${basePath}.stats.repLetter`) || "Letter of Representation"} 
                    value={adminData.stats.repLetter} 
                    valueClassName="usa-text-success" 
                />
                {/* اضافه شدن IP لیست سفید به جای سقف مالی */}
                <StatCard 
                    label={lang(`${basePath}.stats.allowedIps`) || "Allowed IPs (Whitelist)"} 
                    value={adminData.security.allowedIps} 
                />
            </div>

            {/* بخش TextBox ها کاملا حذف شد */}

            {/* Row 2: Assigned Inventory DataTable */}
            <div className="usa-row-table">
                <div className="usa-table-header">
                    <h3 className="usa-section-title">{lang(`${basePath}.titles.inventory`) || "Assigned Inventory Scope"}</h3>
                    <span className="usa-count-badge">Total: {adminData.inventory.length} Items</span>
                </div>
                <DataTable columns={inventoryColumns} data={adminData.inventory} />
            </div>

        </section>
    );
}
