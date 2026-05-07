import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../../utils/PermissionHandler';

export default function EmployeesHistoryPage (){
    const { can, session } = usePermission();
    const navigate = useNavigate();

    useEffect(() => {
        if (!can('employees.history.view')) navigate('/employees');
    }, [can, navigate]);



    if (!can('employees.history.view')) return null;

    return (
        <section>employees history page</section>
    )
}