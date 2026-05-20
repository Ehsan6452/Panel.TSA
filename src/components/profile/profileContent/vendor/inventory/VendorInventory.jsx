import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { profileApi } from "../../../../../services/api"
import { useLang } from "../../../../../utils/LangHandler"
import { usePermission } from "../../../../../utils/PermissionHandler"

import InventoryGrid from '../../../../InventoryGrid/InventoryGrid'

export default function VendorInventory(){
    const { id } = useParams();
    const { can } = usePermission();
    const navigate = useNavigate();
    const { lang } = useLang();

    const basePath = "pages.vendors.profile.inventory";

    const [inventoryData, setInventoryData] = useState([]);

    useEffect(()=>{
        if (!can("vendors.profile.inventory.view")) navigate("/vendors");
    },[can, navigate])

    useEffect(()=>{
        const fetchVendorInventoryById = async (vendorId) =>{
            try {
                const res = await profileApi.getVendorProfileInventoryById(vendorId);
                setInventoryData(res?.inventory || []);
            } catch (error) {
                console.log("fetching data for inventory of vendor is failed : " + error);
            }
        };
        if(id) fetchVendorInventoryById(id); 
    },[id])


    const handleEdit = (product) => {
        console.log('Edit product:', product);
    };

    const handleDelete = (id) => {
        console.log('Delete product:', id);
    };

    const handleViewDetails = (id) => {
        console.log('View details:', id);
    };

    const handleAddClick = () => {
        console.log('Add new product');
    };

    return(
        <InventoryGrid
           tabs={inventoryData}
           onEdit={(value) => handleEdit(value)}
           onDelete={(value) => handleDelete(value)}
           onAddClick={() => handleAddClick()}
           onViewDetails={(value)=> handleViewDetails(value)}
           searchPlaceholder={lang("common.search")}
        />
    )
}