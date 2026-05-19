import React, { useEffect, useState } from "react";
import { useParams , useNavigate } from 'react-router-dom';
import { profileApi } from "../../../../../services/api";
import { useLang } from "../../../../../utils/LangHandler";
import { usePermission } from "../../../../../utils/PermissionHandler";

// Import Components
import Avatar from "../../../../../elements/Avatar/Avatar";
import TextBox from "../../../../../elements/TextBox/TextBox";
import DataTable from "../../../../../elements/DataTable/DataTable";

import "./UserGeneral.css";

export default function UserGeneral() {
    const { id } = useParams();
    const { lang } = useLang();
    const { can } = usePermission();
    const navigate = useNavigate();

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (!can('users.profile.general.view')) {
            navigate('/users');
        }
    }, [can, navigate]);

    useEffect(() => {
        const fetchUserData = async (userId) => {
            try {
                const res = await profileApi.getUserProfileGeneralInfoById(userId);
                setUserData(res);
            } catch (error) {
                console.log("fetch user profile data failed : ", error);
            }
        };
        if(id) fetchUserData(id);
    }, [id]);

    if (!userData) {
        return <div style={{ color: 'white', padding: '20px' }}>{lang('pages.users.profile.general.loadingInfo')}</div>;
    }

    const ticketColumns = [
        { header: lang('pages.users.profile.general.table.id'), accessor: "id" },
        { header: lang('pages.users.profile.general.table.subject'), accessor: "title" },
        { 
          header: lang('pages.users.profile.general.table.status'), 
          accessor: "status",
          render: (status) => {
            const badgeClass = status === 'Open' ? 'badge-open' : status === 'Closed' ? 'badge-closed' : 'badge-pending';
            return <span className={`table-badge ${badgeClass}`}>{status}</span>;
          }
        },
        { header: lang('pages.users.profile.general.table.date'), accessor: "date" }
    ];
    return (
        <div className="ug-wrapper">
            {/* Top Row: Main Info & Actions */}
            <div className="ug-top-row">
                
                {/* Column 1: Avatar */}
                <div className="ug-col-avatar">
                    <Avatar 
                        src={userData.personalInfo.avatarUrl} 
                        name={userData.personalInfo.firstName + " " + userData.personalInfo.lastName}
                        email={userData.contactInfo.email}
                    />
                </div>

                {/* Column 2: Text Fields */}
                <div className="ug-col-details">
                    <div className="ug-form-row">
                        <TextBox label={lang('pages.users.profile.general.fields.firstName')} value={userData.personalInfo.firstName} />
                        <TextBox label={lang('pages.users.profile.general.fields.lastName')} value={userData.personalInfo.lastName} />
                    </div>
                    <TextBox 
                        label={lang('pages.users.profile.general.fields.email')} 
                        type="email" 
                        value={userData.contactInfo.email} 
                        isVerified={userData.contactInfo.emailVerified} 
                    />
                    <TextBox 
                        label={lang('pages.users.profile.general.fields.phoneNumber')} 
                        value={userData.contactInfo.phone} 
                        isVerified={userData.contactInfo.phoneVerified} 
                    />
                </div>

                {/* Column 3: Actions */}
                <div className="ug-col-actions">
                    <div className="ug-form-row">
                        <TextBox label={lang('pages.users.profile.general.fields.userType')} value={userData.systemData.userType} customStyle={{ textTransform: 'capitalize' }} />
                        <TextBox label={lang('pages.users.profile.general.fields.subType')} value={userData.systemData.subType} customStyle={{ textTransform: 'capitalize' }} />
                    </div>

                    <div className="ug-form-row">
                        <div className="ug-info-box">
                            <span className="ug-info-label">{lang('pages.users.profile.general.info.joinDate')}</span>
                            <span className="ug-info-value">{userData.systemData.createdAt}</span>
                        </div>
                        <div className="ug-info-box">
                            <span className="ug-info-label">{lang('pages.users.profile.general.info.lastActivity')}</span>
                            <span className="ug-info-value" style={{ fontSize: '0.85rem' }}>{userData.systemData.lastActivity}</span>
                        </div>
                    </div>

                    <div className="ug-action-buttons mb-3">
                        <button className="ug-btn ug-btn-danger">{lang('pages.users.profile.general.actions.forceLogout')}</button>
                        <button className="ug-btn ug-btn-warning">{lang('pages.users.profile.general.actions.reVerify')}</button>
                        <button className="ug-btn ug-btn-primary">{lang('pages.users.profile.general.actions.sendTempPass')}</button>
                    </div>
                </div>

            </div>

            {/* Bottom Row: Recent Chats & Tickets */}
            <div className="ug-bottom-row">
                <h3 className="ug-section-title">{lang('pages.users.profile.general.sections.recentChats')}</h3>
                <DataTable columns={ticketColumns} data={userData.recentTickets} />
            </div>
        </div>
    );
}
