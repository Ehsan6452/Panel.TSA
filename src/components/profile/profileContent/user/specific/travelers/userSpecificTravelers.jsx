import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import { profileApi } from "../../../../../../services/api";
import { useLang } from '../../../../../../utils/LangHandler';
import { usePermission } from "../../../../../../utils/PermissionHandler";

// Import Components
import TextBox from "../../../../../../elements/TextBox/TextBox";
import DataTable from "../../../../../../elements/DataTable/DataTable";
import StatCard from "../../../../../../elements/StatCard/StatCard";

import "./travelers.css";

export default function UserSpecificTravelers() {
    const { id } = useParams();
    const { can } = usePermission();
    const navigate = useNavigate();

    const [travelerData, setTravelerData] = useState(null);

    const { lang } = useLang();

    const basePath = 'pages.users.profile.userSpecificTraveler';

    // (کدهای بررسی دسترسی و فراخوانی API مانند قبل)
    useEffect(() => {
        if (!can('users.profile.specific.view')) {
            navigate('/users');
        }
    }, [can, navigate]);

    useEffect(() => {
        const fetchTravelerData = async (userId) => {
            try {
                const res = await profileApi.getUserProfileSpecificTravelerInfoById(userId);
                setTravelerData(res);
            } catch (error) {
                console.log("fetch user profile data failed : ", error);
            }
        };
        if(id) fetchTravelerData(id);
    }, [id]);

    if (!travelerData) {
        return <div style={{ color: 'white', padding: '20px' }}>{lang(`${basePath}.loading`)}</div>;
    }

    const companionColumns = [
        { header: lang(`${basePath}.table.fullName`), accessor: "fullName" },
        { 
            header: lang(`${basePath}.table.relation`), 
            accessor: "relation",
            render: (relation) => <span className="ust-relation-badge">{relation}</span>
        },
        { header: lang(`${basePath}.table.documentId`), accessor: "documentId" },
        { header: lang(`${basePath}.table.dob`), accessor: "dob" }
    ];

    return (
        <section className="ust-wrapper">
            
            {/* Row 1: 4 Statistic Cards Using StatCard Component */}
            <div className="ust-row-stats">
                <StatCard 
                    label={lang(`${basePath}.stats.rating`)} 
                    value={travelerData.stats.rating} 
                    valueClassName="ust-text-warning" 
                />
                <StatCard 
                    label={lang(`${basePath}.stats.profit`)} 
                    value={travelerData.stats.profit} 
                    valueClassName="ust-text-success" 
                />
                <StatCard 
                    label={lang(`${basePath}.stats.favorites`)} 
                    value={travelerData.stats.favorites} 
                    type="tags" 
                />
                <StatCard 
                    label={lang(`${basePath}.stats.totalBookings`)} 
                    value={travelerData.stats.totalBookings} 
                />
            </div>

            {/* Row 2: Document & Additional Info (TextBoxes) */}
            <div className="ust-row-details">
                <div className="ust-form-subrow ust-col-2">
                    <TextBox label={lang(`${basePath}.documents.nationalId`)} value={travelerData.documents.nationalId} />
                    <TextBox label={lang(`${basePath}.documents.passport`)} value={travelerData.documents.passport} />
                </div>
                
                <div className="ust-form-subrow ust-col-4">
                    <TextBox label={lang(`${basePath}.documents.dob`)} value={travelerData.documents.dob} />
                    <TextBox label={lang(`${basePath}.documents.nationality`)} value={travelerData.documents.nationality} />
                    <TextBox label={lang(`${basePath}.documents.language`)} value={travelerData.documents.language} />
                    <TextBox label={lang(`${basePath}.documents.specialNeeds`)} value={travelerData.documents.specialNeeds} />
                </div>
            </div>

            {/* Row 3: Companions DataTable */}
            <div className="ust-row-table">
                <h3 className="ust-section-title">{lang(`${basePath}.titles.companions`)}</h3>
                <DataTable columns={companionColumns} data={travelerData.companions} />
            </div>

        </section>
    );
}
