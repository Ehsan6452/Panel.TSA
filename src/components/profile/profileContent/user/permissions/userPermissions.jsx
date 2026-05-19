import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { profileApi } from '../../../../../services/api';
import { useLang } from '../../../../../utils/LangHandler';
import { usePermission } from '../../../../../utils/PermissionHandler';

import PermissionGroup from '../../../../../elements/PermissionGroup/PermissionGroup';
import './permissions.css';

export default function UserPermissions() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { can } = usePermission();
    const { lang } = useLang();

    const [permissionsData, setPermissionsData] = useState(null);

    const basePath = 'pages.users.profile.permissions';


    useEffect(() => {
   
        if (!can('users.profile.permissions.view')) {
            navigate('/users');
        }
    }, [can, navigate]);


    useEffect(() => {
        const fetchPermissionsData = async (userId) => {
            try {
                
                const res = await profileApi.getUserProfilePermissionsById(userId);
                setPermissionsData(res);
            } catch (error) {
                console.error("Fetch user permissions failed: ", error);
            }
        };

        if (id) fetchPermissionsData(id);
    }, [id]);


    if (!permissionsData) {
        return (
            <div style={{ color: 'var(--text-primary)', padding: '20px' }}>
                {lang(`${basePath}.loading`)}
            </div>
        );
    }

    return (
        <section className="permissions-page-wrapper">

            <div className="permissions-header">
                <h2>{lang(`${basePath}.title`)}</h2>
                <p>{lang(`${basePath}.description`)}</p>
            </div>


            <div className="permissions-list-container">
                {permissionsData?.permissions?.map((group) => (
                    <PermissionGroup 
                        key={group.id}
                        title={group.title} 
                        subPermissions={group.subPermissions}
                    />
                ))}
            </div>
        </section>
    );
}
