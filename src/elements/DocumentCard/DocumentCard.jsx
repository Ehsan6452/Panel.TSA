import React from 'react';
import { FiDownload, FiTrash2, FiEye, FiClock, FiUser, FiFileText } from 'react-icons/fi';
import { useLang } from '../../utils/LangHandler';
import './DocumentCard.css';

export default function DocumentCard({ document, onDownload, onDelete, onView }) {
    const { lang } = useLang();
    
    const getStatusConfig = (status) => {
        switch(status) {
            case 'active':
                return { label: 'Valid', className: 'status-active', icon: '✅' };
            case 'expiring_soon':
                return { label: 'Expiring Soon', className: 'status-warning', icon: '⚠️' };
            case 'expired':
                return { label: 'Expired', className: 'status-expired', icon: '❌' };
            default:
                return { label: status, className: '', icon: '📄' };
        }
    };
    
    const getTypeConfig = (type) => {
        switch(type) {
            case 'contract':
                return { label: 'Contract', icon: '📄', color: '#3b82f6' };
            case 'legal':
                return { label: 'Legal', icon: '⚖️', color: '#8b5cf6' };
            case 'certificate':
                return { label: 'Certificate', icon: '🏆', color: '#10b981' };
            case 'insurance':
                return { label: 'Insurance', icon: '🛡️', color: '#f59e0b' };
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
                        <span>Uploaded: {document.uploadDate}</span>
                    </div>
                    <div className="meta-item">
                        <FiUser size={12} />
                        <span>By: {document.uploadedBy}</span>
                    </div>
                </div>
                
                {document.expiryDate && (
                    <div className="document-expiry">
                        Expires: {document.expiryDate}
                    </div>
                )}
            </div>
            
            <div className="document-actions">
                <button 
                    className="action-btn view-btn"
                    onClick={() => onView?.(document.id)}
                    title="View Document"
                >
                    <FiEye />
                </button>
                <button 
                    className="action-btn download-btn"
                    onClick={() => onDownload?.(document.id)}
                    title="Download"
                >
                    <FiDownload />
                </button>
                <button 
                    className="action-btn delete-btn"
                    onClick={() => onDelete?.(document.id)}
                    title="Delete"
                >
                    <FiTrash2 />
                </button>
            </div>
        </div>
    );
}