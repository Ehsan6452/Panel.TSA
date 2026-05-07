import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../../utils/PermissionHandler';

export default function EmployeeDocsPage (){
    const { can, session } = usePermission();
    const navigate = useNavigate();

    useEffect(() => {
        if (!can('employees.docs.view')) navigate('/employees');
    }, [can, navigate]);



    if (!can('employees.docs.view')) return null;

    return (
        <section>employee docs page</section>
    )
}