import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../../utils/PermissionHandler';

export default function GlobalInventoryPage (){
    const { can, session } = usePermission();
    const navigate = useNavigate();

    useEffect(() => {
        if (!can('vendors.globalInventory.view')) navigate('/vendors');
    }, [can, navigate]);



    if (!can('vendors.globalInventory.view')) return null;

    return (
        <section>Global Inventory page</section>
    )
}