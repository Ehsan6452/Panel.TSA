import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../../utils/PermissionHandler';

export default function VendorsDocsPage (){
    const { can, session } = usePermission();
    const navigate = useNavigate();

    useEffect(() => {
        if (!can('vendors.docs.view')) navigate('/vendors');
    }, [can, navigate]);



    if (!can('vendors.docs.view')) return null;

    return (
        <section>vendors Docs page</section>
    )
}