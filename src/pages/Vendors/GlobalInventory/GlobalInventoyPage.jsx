import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../../utils/PermissionHandler';
import { useLang } from '../../../utils/LangHandler';
import { vendorApi } from '../../../services/api';
import InventoryGrid from '../../../components/InventoryGrid/InventoryGrid';

export default function GlobalInventoryPage() {
    const { can } = usePermission();
    const navigate = useNavigate();
    const { lang } = useLang();

    const [inventoryData, setInventoryData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!can('vendors.globalInventory.view')) navigate('/vendors');
    }, [can, navigate]);

    useEffect(() => {
        const fetchGlobalInventory = async () => {
            setLoading(true);
            try {
                const res = await vendorApi.getGlobalInventory();
                console.log("Global Inventory Response:", res);
                
                // ساختار مورد انتظار: [{ category: "accommodation", data: [...] }, ...]
                const categoriesData = res?.categories || res || [];
                setInventoryData(categoriesData);
                setCategories(categoriesData.map(cat => cat.category));
            } catch (error) {
                console.log("fetching global inventory failed: ", error);
                setInventoryData([]);
                setCategories([]);
            } finally {
                setLoading(false);
            }
        };
        
        fetchGlobalInventory();
    }, []);

    const handleEdit = (product) => {
        console.log("Edit product:", product);
        // TODO: Open edit drawer for product
    };

    const handleDelete = async (productId) => {
        console.log("Delete product:", productId);
        if (window.confirm(lang('globalInventory.confirmDelete'))) {
            try {
                // await inventoryApi.deleteProduct(productId);
                console.log("Product deleted successfully");
            } catch (error) {
                console.log("Delete failed:", error);
            }
        }
    };

    const handleViewDetails = (productId) => {
        console.log("View product details:", productId);
    };

    const handleViewVendor = (vendorId) => {
        console.log("View vendor profile:", vendorId);
        navigate(`/vendors/${vendorId}`);
    };

    const handleAddClick = () => {
        console.log("Add new product");
    };

    const handleExportClick = () => {
        console.log("Export inventory data");
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <p className="mt-2 text-gray-400">{lang('globalInventory.loading')}</p>
                </div>
            </div>
        );
    }

    if (!inventoryData || inventoryData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <span className="text-6xl mb-4 opacity-50">📦</span>
                <p className="text-gray-400">{lang('globalInventory.noData')}</p>
                <button 
                    onClick={handleAddClick}
                    className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                    {lang('globalInventory.addFirstProduct')}
                </button>
            </div>
        );
    }

    return (
        <InventoryGrid
            tabs={categories}
            data={inventoryData}
            globalMode={true}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onViewDetails={handleViewDetails}
            onViewVendor={handleViewVendor}
            onAddClick={handleAddClick}
            onExportClick={handleExportClick}
            enableSearch={true}
            enableAdd={true}
            enableExport={true}
            searchPlaceholder={lang('globalInventory.searchPlaceholder')}
        />
    );
}