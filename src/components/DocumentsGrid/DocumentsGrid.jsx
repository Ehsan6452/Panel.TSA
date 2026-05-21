import React, { useState, useMemo, useEffect } from 'react';
import { useLang } from '../../utils/LangHandler';
import Toolbar from '../../elements/Toolbar/Toolbar';
import Pagination from '../../elements/Pagination/Pagination';
import DocumentCard from '../../elements/DocumentCard/DocumentCard';
import usePaginationState from '../../hooks/PaginationState/usePaginationState';
import usePaginatedData from '../../hooks/PaginatedData/usePaginatedData';
import './DocumentsGrid.css';

export default function DocumentsGrid({
    // حالت معمولی (vendor documents)
    tabs = [],
    data = [],
    onTabChange: externalTabChange,
    // حالت سراسری (global documents)
    categories = [],
    globalData = [],
    // اکشن‌ها
    onDownload,
    onDelete,
    onView,
    onViewVendor,
    onUpload,
    // تنظیمات
    enableSearch = true,
    enableUpload = true,
    enableExport = false,
    onExportClick,
    searchPlaceholder = 'common.search',
    // حالت سراسری
    globalMode = false
}) {
    const { lang } = useLang();
    const [activeTab, setActiveTab] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState({});
    const [paginationState, setPaginationState] = usePaginationState(1, 12);

    // ----- تنظیم تب اولیه -----
    useEffect(() => {
        if (globalMode) {
            if (categories.length > 0 && !activeTab) {
                setActiveTab(categories[0]);
            }
        } else {
            if (tabs.length > 0 && !activeTab) {
                const firstTab = tabs[0]?.tab || tabs[0]?.id;
                if (firstTab) setActiveTab(firstTab);
            }
        }
    }, [tabs, categories, activeTab, globalMode]);

    // ----- دریافت دیتای تب جاری -----
    const currentTabData = useMemo(() => {
        if (globalMode) {
            const categoryObj = globalData.find(cat => cat.category === activeTab);
            return categoryObj?.data || [];
        } else {
            const activeTabObj = tabs.find(tab => (tab.tab || tab.id) === activeTab);
            return activeTabObj?.data || [];
        }
    }, [tabs, globalData, activeTab, globalMode]);

    // ----- تغییر تب -----
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setSearchQuery('');
        setActiveFilters({});
        setPaginationState({ page: 1 });
        externalTabChange?.(tabId);
    };

    // ----- فیلتر جستجو -----
    const filteredBySearch = useMemo(() => {
        if (!searchQuery) return currentTabData;
        const lowerQuery = searchQuery.toLowerCase();
        return currentTabData.filter(doc => {
            const searchableFields = [
                doc.name,
                doc.description,
                doc.uploadedBy,
                doc.vendorName
            ];
            return searchableFields.some(field => 
                String(field).toLowerCase().includes(lowerQuery)
            );
        });
    }, [currentTabData, searchQuery]);

    // ----- فیلترهای اضافی (status, type, vendor) -----
    const filteredData = useMemo(() => {
        if (Object.keys(activeFilters).length === 0) return filteredBySearch;
        
        return filteredBySearch.filter(doc => {
            return Object.entries(activeFilters).every(([key, val]) => {
                if (!val) return true;
                switch (key) {
                    case 'status':
                        return doc.status === val;
                    case 'type':
                        return doc.type === val;
                    case 'vendor':
                        return doc.vendorId === val;
                    default:
                        return true;
                }
            });
        });
    }, [filteredBySearch, activeFilters]);

    // ----- پیجینیشن -----
    const { paginatedData, totalItems } = usePaginatedData({
        data: filteredData,
        enablePagination: true,
        page: paginationState.page,
        rowsPerPage: paginationState.rowsPerPage
    });

    // ----- گزینه‌های فیلتر (برای حالت سراسری) -----
    const vendorOptions = useMemo(() => {
        if (!globalMode) return [];
        const vendorMap = new Map();
        currentTabData.forEach(doc => {
            if (doc.vendorId && doc.vendorName && !vendorMap.has(doc.vendorId)) {
                vendorMap.set(doc.vendorId, doc.vendorName);
            }
        });
        return Array.from(vendorMap.entries()).map(([id, name]) => ({ value: id, label: name }));
    }, [currentTabData, globalMode]);

    const typeOptions = useMemo(() => {
        const typeSet = new Set();
        currentTabData.forEach(doc => {
            if (doc.type) typeSet.add(doc.type);
        });
        return Array.from(typeSet).map(type => ({
            value: type,
            label: lang(`documentType.${type}`) || type
        }));
    }, [currentTabData]);

    // ----- ساخت فیلترهای نهایی -----
    const getFilters = () => {
        const baseFilters = [
            { key: 'status', options: ['active', 'expiring_soon', 'expired'] }
        ];
        
        if (globalMode) {
            if (typeOptions.length) {
                baseFilters.push({ key: 'type', options: typeOptions });
            }
            if (vendorOptions.length) {
                baseFilters.push({ key: 'vendor', options: vendorOptions });
            }
        } else {
            baseFilters.push({ key: 'type', options: ['contract', 'legal', 'certificate', 'insurance'] });
        }
        
        return baseFilters;
    };

    // ----- حذف فیلتر vendor نامعتبر -----
    useEffect(() => {
        if (!globalMode) return;
        const currentVendorFilter = activeFilters.vendor;
        if (currentVendorFilter) {
            const vendorExists = vendorOptions.some(v => v.value === currentVendorFilter);
            if (!vendorExists) {
                setActiveFilters(prev => {
                    const newFilters = { ...prev };
                    delete newFilters.vendor;
                    return newFilters;
                });
            }
        }
    }, [vendorOptions, activeFilters.vendor, globalMode]);

    // ----- تبدیل تب‌ها به فرمت Toolbar -----
    const toolbarTabs = globalMode 
        ? categories.map(cat => ({ id: cat }))
        : tabs.map(tab => ({ id: tab.tab || tab.id }));

    const finalFilters = getFilters();

    return (
        <div className="documents-grid-wrapper">
            <Toolbar
                tabs={toolbarTabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                enableSearch={enableSearch}
                enableAdd={enableUpload}
                enableExport={enableExport}
                onAddClick={onUpload}
                onExportClick={onExportClick}
                filters={finalFilters}
                searchPlaceholder={searchPlaceholder}
                onSearchChange={setSearchQuery}
                onFilterChange={setActiveFilters}
                addButtonText={lang('globalDocuments.upload')}
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
                                onViewVendor={onViewVendor}
                                showVendor={globalMode}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="documents-empty">
                        <span className="empty-icon">📁</span>
                        <p>{lang('common.noData')}</p>
                        {enableUpload && (
                            <button className="upload-btn" onClick={onUpload}>
                                {lang('globalDocuments.uploadFirst')}
                            </button>
                        )}
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