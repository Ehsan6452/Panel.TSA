import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../../utils/PermissionHandler';

export default function EmployeeListPage (){
    const { can, session } = usePermission();
    const navigate = useNavigate();



    useEffect(() => {
    console.log(session?.permissions?.employees);
    console.log('can employees.list.view:', can('employees.list.view'));

        if (!can('employees.list.view')) navigate('/employees');
    }, [can, navigate]);

    if (!can('employees.list.view')) return null;

    return (
        <section>employee List page</section>
    )
}