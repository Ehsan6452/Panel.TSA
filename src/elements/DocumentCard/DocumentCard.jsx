import React from 'react';
import { FiDownload, FiTrash2, FiEye, FiClock, FiUser, FiFileText } from 'react-icons/fi';
import { useLang } from '../../utils/LangHandler';
import './DocumentCard.css';

export default function DocumentCard({ 
    document, 
    onDownload, 
    onDelete, 
    onView, 
    onViewVendor,      // برای حالت global
    showVendor = false  // فعال‌سازی نمایش وندور
}) {
    const { lang } = useLang();

    const getStatusConfig = (status) => {
        switch(status) {
            case 'active':
                return { label: lang('documentStatus.active'), className: 'status-active', icon: '✅' };
            case 'expiring_soon':
                return { label: lang('documentStatus.expiringSoon'), className: 'status-warning', icon: '⚠️' };
            case 'expired':
                return { label: lang('documentStatus.expired'), className: 'status-expired', icon: '❌' };
            default:
                return { label: status, className: '', icon: '📄' };
        }
    };

    const getTypeConfig = (type) => {
        switch(type) {
            case 'contract':
                return { label: lang('documentType.contract'), icon: '📄', color: '#3b82f6' };
            case 'legal':
                return { label: lang('documentType.legal'), icon: '⚖️', color: '#8b5cf6' };
            case 'certificate':
                return { label: lang('documentType.certificate'), icon: '🏆', color: '#10b981' };
            case 'insurance':
                return { label: lang('documentType.insurance'), icon: '🛡️', color: '#f59e0b' };
            default:
                return { label: type, icon: '📁', color: '#6b7280' };
        }
    };

    const statusConfig = getStatusConfig(document.status);
    const typeConfig = getTypeConfig(document.type);

    const formatFileSize = (bytes) => {
        if (!bytes) return 'Unknown';
        const units = ['B', 'KB', 'MB', 'GB'];
        let size = parseInt(bytes);
        let unitIndex = 0;
        while (size >= 1024 && unitIndex < units.length - 1) {
            size /= 1024;
            unitIndex++;
        }
        return `${size.toFixed(1)} ${units[unitIndex]}`;
    };

    return (
        <div className={`document-card ${document.status}`}>
            <div className="document-icon" style={{ backgroundColor: `${typeConfig.color}20` }}>
                <span className="document-icon-emoji">{typeConfig.icon}</span>
            </div>

            <div className="document-content">
                {/* بخش وندور – فقط در حالت سراسری نمایش داده می‌شود */}
                {showVendor && document.vendorName && (
                    <div className="document-vendor">
                        <button 
                            className="vendor-link"
                            onClick={() => onViewVendor?.(document.vendorId)}
                        >
                            🏢 {document.vendorName}
                        </button>
                    </div>
                )}

                <div className="document-header">
                    <h3 className="document-title">{document.name}</h3>
                    <div className="document-badges">
                        <span className={`doc-type-badge`} style={{ backgroundColor: `${typeConfig.color}20`, color: typeConfig.color }}>
                            {typeConfig.label}
                        </span>
                        <span className={`doc-status-badge ${statusConfig.className}`}>
                            {statusConfig.icon} {statusConfig.label}
                        </span>
                    </div>
                </div>

                {document.description && (
                    <p className="document-description">{document.description}</p>
                )}

                <div className="document-meta">
                    <div className="meta-item">
                        <FiFileText size={12} />
                        <span>{formatFileSize(document.size)}</span>
                    </div>
                    <div className="meta-item">
                        <FiClock size={12} />
                        <span>{lang('document.uploaded')}: {document.uploadDate}</span>
                    </div>
                    <div className="meta-item">
                        <FiUser size={12} />
                        <span>{lang('document.by')}: {document.uploadedBy}</span>
                    </div>
                </div>

                {document.expiryDate && (
                    <div className="document-expiry">
                        {lang('document.expires')}: {document.expiryDate}
                    </div>
                )}
            </div>

            <div className="document-actions">
                <button 
                    className="action-btn view-btn"
                    onClick={() => onView?.(document.id)}
                    title={lang('document.view')}
                >
                    <FiEye />
                </button>
                <button 
                    className="action-btn download-btn"
                    onClick={() => onDownload?.(document.id)}
                    title={lang('document.download')}
                >
                    <FiDownload />
                </button>
                <button 
                    className="action-btn delete-btn"
                    onClick={() => onDelete?.(document.id)}
                    title={lang('document.delete')}
                >
                    <FiTrash2 />
                </button>
            </div>
        </div>
    );
}