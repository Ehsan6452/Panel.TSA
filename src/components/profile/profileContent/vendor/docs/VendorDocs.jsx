import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { profileApi } from "../../../../../services/api"
import { useLang } from "../../../../../utils/LangHandler"
import { usePermission } from "../../../../../utils/PermissionHandler"

import DocumentsGrid from "../../../../../components/DocumentsGrid/DocumentsGrid"

export default function VendorDocs() {
    const { id } = useParams();
    const { can } = usePermission();
    const navigate = useNavigate();
    const { lang } = useLang();

    const basePath = "pages.vendors.profile.docs";

    const [documentsData, setDocumentsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!can("vendors.profile.docs.view")) navigate("/vendors");
    }, [can, navigate]);

    useEffect(() => {
        const fetchDocumentsDataById = async (vendorId) => {
            setLoading(true);
            try {
                const res = await profileApi.getVendorProfileDocumentsById(vendorId);
                console.log("API Response:", res);
                
                const documents = res?.documents || [];
                setDocumentsData(documents);
            } catch (error) {
                console.log("fetching data from vendor documents failed : " + error);
                setDocumentsData([]);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchDocumentsDataById(id);
    }, [id]);

    const handleDownload = async (docId) => {
        console.log("Download document:", docId);
        // TODO: Implement download logic
        // const response = await profileApi.downloadDocument(docId);
        // window.open(response.url, '_blank');
    };

    const handleDelete = async (docId) => {
        console.log("Delete document:", docId);
        // TODO: Implement delete logic with confirmation
        if (window.confirm(lang(`${basePath}.confirmDelete`))) {
            try {
                // await profileApi.deleteDocument(docId);
                // Refresh documents list
                // fetchDocumentsDataById(id);
                console.log("Document deleted successfully");
            } catch (error) {
                console.log("Delete failed:", error);
            }
        }
    };

    const handleView = async (docId) => {
        console.log("View document:", docId);
        // TODO: Implement view logic (open PDF in new tab or modal)
        // const response = await profileApi.getDocumentPreview(docId);
        // window.open(response.url, '_blank');
    };

    const handleUpload = () => {
        console.log("Upload new document");
        // TODO: Implement upload drawer/modal
        // open upload drawer for this vendor
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full text-gray-400">
                {lang(`${basePath}.loading`)}
            </div>
        );
    }

    if (!documentsData || documentsData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <span className="text-6xl mb-4 opacity-50">📁</span>
                <p className="text-gray-400">{lang(`${basePath}.noData`)}</p>
                <button 
                    onClick={handleUpload}
                    className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                    {lang(`${basePath}.uploadFirst`)}
                </button>
            </div>
        );
    }

    return (
        <DocumentsGrid
            tabs={documentsData}
            onDownload={handleDownload}
            onDelete={handleDelete}
            onView={handleView}
            onUpload={handleUpload}
            enableSearch={true}
            enableUpload={true}
            searchPlaceholder={lang(`${basePath}.searchPlaceholder`)}
        />
    );
}