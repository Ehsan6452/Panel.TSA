import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProfileHeader from './profileHeader/profileHeader';
import ProfileSidebar from './profileSidebar/profileSidebar';
import ProfileContent from './profileContent/profileContent';
import EditTravelerDrawer from '../../pages/Users/drawers/EditTravelerDrawer';
import EditAdminDrawer from '../../pages/Users/drawers/EditAdminDrawer';
import { profileApi } from '../../services/api';
import { PROFILE_TABS_CONFIG } from './profileConfig';
import { NormalizeUser } from '../../utils/NormalizeUser';
import { useLang } from '../../utils/LangHandler';
import { usePermission } from '../../utils/PermissionHandler';
import './profile.css';

export default function ProfileRenderer({ type }) {
    const { id } = useParams();
    const { lang } = useLang();
    const { can } = usePermission();
    const navigate = useNavigate();

    const hasViewAccess = can(`${type}.profile.view`);
    const availableTabs = PROFILE_TABS_CONFIG[type] || [];

    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(availableTabs[0]?.key);
    const [editDrawerOpen, setEditDrawerOpen] = useState(false);
    const [editDrawerType, setEditDrawerType] = useState(null);

    useEffect(() => {
        if (!hasViewAccess) {
            navigate(`/${type}`);
        }
    }, [hasViewAccess, navigate, type]);

    useEffect(() => {
        if (!hasViewAccess) return;

        if (availableTabs.length > 0) {
            setActiveTab(availableTabs[0]?.key);
        }

        const fetchProfileData = async () => {
            setIsLoading(true);
            try {
                let response;
                switch (type) {
                    case 'users':
                        response = await profileApi.getUserProfileById(id);
                        break;
                    case 'vendors':
                        response = await profileApi.getVendorProfileById(id);
                        break;
                    case 'employees':
                        response = await profileApi.getEmployeeProfileById(id);
                        break;
                    default:
                        return;
                }
                if (response) {
                    const normalized = NormalizeUser(response);
                    setUserData(normalized);
                }
            } catch (error) {
                console.error(`خطا در دریافت اطلاعات پروفایل (${type}):`, error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfileData();
    }, [id, type, hasViewAccess]);

    const handleHeaderAction = (actionType, userId, subType) => {
        switch (actionType) {
            case 'EDIT':
                handleEdit(userData?.subType || subType);
                break;
            default:
                console.log(`Action: ${actionType} on user: ${userId}`);
                break;
        }
    };

    const handleEdit = (subType) => {
        if (!subType) {
            console.error('SubType is required for editing');
            return;
        }

        const normalizedSubType = subType.toLowerCase();
        console.log(normalizedSubType);
        
        if (normalizedSubType === 'traveler' || normalizedSubType === 'admin') {
            setEditDrawerType(normalizedSubType);
            setEditDrawerOpen(true);
        } else {
            console.error(`Unsupported subType for edit drawer: ${subType}`);
        }
    };

    const handleEditDrawerClose = () => {
        setEditDrawerOpen(false);
        setEditDrawerType(null);
    };

    const handleEditSuccess = async () => {
        setEditDrawerOpen(false);
        setEditDrawerType(null);
        
        setIsLoading(true);
        try {
            let response;
            switch (type) {
                case 'users':
                    response = await profileApi.getUserProfileById(id);
                    break;
                case 'vendors':
                    response = await profileApi.getVendorProfileById(id);
                    break;
                case 'employees':
                    response = await profileApi.getEmployeeProfileById(id);
                    break;
                default:
                    return;
            }
            if (response) {
                const normalized = NormalizeUser(response);
                setUserData(normalized);
            }
        } catch (error) {
            console.error(`خطا در بروزرسانی اطلاعات پروفایل (${type}):`, error);
        } finally {
            setIsLoading(false);
        }
    };

    const renderEditDrawer = () => {
        if (!editDrawerOpen || !editDrawerType) return null;

        const drawerProps = {
            isOpen: editDrawerOpen,
            onClose: handleEditDrawerClose,
            userId: id,
            onSuccess: handleEditSuccess
        };

        switch (editDrawerType) {
            case 'traveler':
                return <EditTravelerDrawer {...drawerProps} />;
            case 'admin':
                return <EditAdminDrawer {...drawerProps} />;
            default:
                return null;
        }
    };

    if (!hasViewAccess) return null;

    if (isLoading) return <div className="profile-loading">loading ... </div>;
    if (!userData) return <div className="profile-error">اطلاعات کاربر یافت نشد.</div>;

    return (
        <>
            <div className="profile-layout">
                <aside className="profile-sidebar-container">
                    <ProfileSidebar
                        tabs={availableTabs}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                        type={type}
                        subType={userData.subType}
                    />
                </aside>

                <main className="profile-main">
                    <header className="profile-header-container">
                        <ProfileHeader
                            userData={userData}
                            onAction={handleHeaderAction}
                        />
                    </header>

                    <div className="profile-content-area flex" key={activeTab}>
                        <ProfileContent
                            subType={userData.subType}
                            type={userData.userType}
                            activeTab={activeTab}
                        />
                    </div>
                </main>
            </div>

            {renderEditDrawer()}
        </>
    );
}