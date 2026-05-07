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

    // مسیر پایه برای فایل زبان
    const basePath = 'pages.users.profile.permissions';

    // ۱. بررسی دسترسی برای مشاهده این تب
    useEffect(() => {
        // کلید دسترسی را بر اساس سیستم خود تنظیم کنید
        if (!can('users.profile.permissions.view')) {
            navigate('/users');
        }
    }, [can, navigate]);

    // ۲. دریافت اطلاعات از API
    useEffect(() => {
        const fetchPermissionsData = async (userId) => {
            try {
                // این متد باید در فایل api شما ساخته شود و دیتای ماک را برگرداند
                const res = await profileApi.getUserProfilePermissionsById(userId);
                setPermissionsData(res);
            } catch (error) {
                console.error("Fetch user permissions failed: ", error);
            }
        };

        if (id) fetchPermissionsData(id);
    }, [id]);

    // ۳. وضعیت در حال بارگذاری
    if (!permissionsData) {
        return (
            <div style={{ color: 'var(--text-primary)', padding: '20px' }}>
                {lang(`${basePath}.loading`)}
            </div>
        );
    }

    return (
        <section className="permissions-page-wrapper">
            {/* هدر صفحه و توضیحات */}
            <div className="permissions-header">
                <h2>{lang(`${basePath}.title`)}</h2>
                <p>{lang(`${basePath}.description`)}</p>
            </div>

            {/* لیست گروه‌های دسترسی */}
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
