import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '../../../utils/PermissionHandler';
import { useLang } from '../../../utils/LangHandler';
import { vendorApi } from '../../../services/api';
import DocumentsGrid from '../../../components/DocumentsGrid/DocumentsGrid';

export default function VendorsDocsPage() {
    const { can } = usePermission();
    const navigate = useNavigate();
    const { lang } = useLang();

    const [documentsData, setDocumentsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!can('vendors.docs.view')) navigate('/vendors');
    }, [can, navigate]);

    useEffect(() => {
        const fetchGlobalDocuments = async () => {
            setLoading(true);
            try {
                const res = await vendorApi.getGlobalDocuments();
                console.log("Global Documents Response:", res);
                
                const categories = res?.categories || res || [];
                setDocumentsData(categories);
            } catch (error) {
                console.log("fetching global documents failed: ", error);
                setDocumentsData([]);
            } finally {
                setLoading(false);
            }
        };
        
        fetchGlobalDocuments();
    }, []);

    const handleDownload = async (docId) => {
        console.log("Download document:", docId);
    };

    const handleDelete = async (docId) => {
        console.log("Delete document:", docId);
        if (window.confirm(lang('globalDocuments.confirmDelete'))) {
            // Delete logic
        }
    };

    const handleView = async (docId) => {
        console.log("View document:", docId);
    };

    const handleViewVendor = (vendorId) => {
        console.log("View vendor profile:", vendorId);
        navigate(`/vendors/${vendorId}`);
    };

    const handleUpload = () => {
        console.log("Upload new document");
    };

    const handleExportClick = () => {
        console.log("Export documents data");
    };

    const categories = documentsData.map(cat => cat.category);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <p className="mt-2 text-gray-400">{lang('globalDocuments.loading')}</p>
                </div>
            </div>
        );
    }

    if (!documentsData || documentsData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <span className="text-6xl mb-4 opacity-50">📁</span>
                <p className="text-gray-400">{lang('globalDocuments.noData')}</p>
                <button 
                    onClick={handleUpload}
                    className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                    {lang('globalDocuments.uploadFirst')}
                </button>
            </div>
        );
    }

    return (
        <DocumentsGrid
            categories={categories}           // ['contracts', 'legal_docs', ...]
            globalData={documentsData}        // [{ category: 'contracts', data: [...] }]
            globalMode={true}
            onDownload={handleDownload}
            onDelete={handleDelete}
            onView={handleView}
            onViewVendor={handleViewVendor}
            onUpload={handleUpload}
            onExportClick={handleExportClick}
            enableSearch={true}
            enableUpload={true}
            enableExport={true}
        />
    );
}