import React, { useState, useMemo } from 'react';
import { useLang } from '../../utils/LangHandler';
import Toolbar from '../../elements/Toolbar/Toolbar';
import Pagination from '../../elements/Pagination/Pagination';
import DocumentCard from '../../elements/DocumentCard/DocumentCard';
import usePaginationState from '../../hooks/PaginationState/usePaginationState';
import usePaginatedData from '../../hooks/PaginatedData/usePaginatedData';
import './DocumentsGrid.css';

export default function DocumentsGrid({
    tabs = [],
    data = [],
    onTabChange: externalTabChange,
    onDownload,
    onDelete,
    onView,
    onUpload,
    enableSearch = true,
    enableUpload = true,
    searchPlaceholder = 'common.search'
}) {
    const { lang } = useLang();
    const [activeTab, setActiveTab] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState({});
    const [paginationState, setPaginationState] = usePaginationState(1, 12);

    // تنظیم تب اولیه
    React.useEffect(() => {
        if (tabs.length > 0 && !activeTab) {
            setActiveTab(tabs[0]?.tab || tabs[0]?.id);
        }
    }, [tabs, activeTab]);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setPaginationState({ page: 1 });
        externalTabChange?.(tabId);
    };

    // دریافت دیتای تب فعال
    const currentTabData = useMemo(() => {
        const activeTabObj = tabs.find(tab => (tab.tab || tab.id) === activeTab);
        return activeTabObj?.data || [];
    }, [tabs, activeTab]);

    // فیلتر جستجو
    const filteredBySearch = useMemo(() => {
        if (!searchQuery) return currentTabData;
        
        const lowerQuery = searchQuery.toLowerCase();
        return currentTabData.filter(doc => {
            return doc.name.toLowerCase().includes(lowerQuery) ||
                   doc.description?.toLowerCase().includes(lowerQuery) ||
                   doc.uploadedBy?.toLowerCase().includes(lowerQuery);
        });
    }, [currentTabData, searchQuery]);

    // فیلترهای اضافی (بر اساس نوع سند یا وضعیت)
    const filteredData = useMemo(() => {
        if (Object.keys(activeFilters).length === 0) return filteredBySearch;
        
        return filteredBySearch.filter(doc => {
            return Object.entries(activeFilters).every(([key, val]) => {
                if (!val) return true;
                if (key === 'status') {
                    return doc.status === val;
                }
                if (key === 'type') {
                    return doc.type === val;
                }
                return true;
            });
        });
    }, [filteredBySearch, activeFilters]);

    // پیجینیشن
    const { paginatedData, totalItems } = usePaginatedData({
        data: filteredData,
        enablePagination: true,
        page: paginationState.page,
        rowsPerPage: paginationState.rowsPerPage
    });

    // تبدیل تب‌ها به فرمت Toolbar
    const toolbarTabs = tabs.map(tab => ({ id: tab.tab || tab.id }));

    // فیلترهای پیشنهادی
    const documentFilters = [
        {
            key: 'status',
            options: ['active', 'expiring_soon', 'expired']
        },
        {
            key: 'type',
            options: ['contract', 'legal', 'certificate', 'insurance']
        }
    ];

    return (
        <div className="documents-grid-wrapper">
            <Toolbar
                tabs={toolbarTabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                enableSearch={enableSearch}
                enableAdd={enableUpload}
                onAddClick={onUpload}
                filters={documentFilters}
                searchPlaceholder={searchPlaceholder}
                onSearchChange={setSearchQuery}
                onFilterChange={setActiveFilters}
                addButtonText="Upload Document"
            />

            <div className="documents-grid-container">
                {paginatedData.length > 0 ? (
                    <div className="documents-grid">
                        {paginatedData.map(doc => (
                            <DocumentCard
                                key={doc.id}
                                document={doc}
                                onDownload={onDownload}
                                onDelete={onDelete}
                                onView={onView}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="documents-empty">
                        <span className="empty-icon">📁</span>
                        <p>{lang('common.noData')}</p>
                        <button className="upload-btn" onClick={onUpload}>
                            Upload First Document
                        </button>
                    </div>
                )}
            </div>

            <Pagination
                totalItems={totalItems}
                onPageChange={setPaginationState}
                enablePagination={true}
                defaultRowsPerPage={12}
            />
        </div>
    );
}