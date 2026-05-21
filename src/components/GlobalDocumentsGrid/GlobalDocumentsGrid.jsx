import React, { useState, useMemo, useEffect } from 'react';
import { useLang } from '../../utils/LangHandler';
import Toolbar from '../../elements/Toolbar/Toolbar';
import Pagination from '../../elements/Pagination/Pagination';
import GlobalDocumentCard from '../../elements/GlobalDocumentCard/GlobalDocumentCard';
import usePaginationState from '../../hooks/PaginationState/usePaginationState';
import usePaginatedData from '../../hooks/PaginatedData/usePaginatedData';
import './GlobalDocumentsGrid.css';

export default function GlobalDocumentsGrid({
    categories = [],
    data = [],
    onDownload,
    onDelete,
    onView,
    onViewVendor,
    onUpload,
    enableSearch = true,
    enableUpload = true,
    enableExport = false,
    onExportClick,
    searchPlaceholder = 'common.search'
}) {
    const { lang } = useLang();
    const [activeCategory, setActiveCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState({});
    const [paginationState, setPaginationState] = usePaginationState(1, 12);

    useEffect(() => {
        if (categories.length > 0 && !activeCategory) {
            setActiveCategory(categories[0]);
        }
    }, [categories, activeCategory]);

    const handleTabChange = (newCategory) => {
        setActiveCategory(newCategory);
        setSearchQuery('');
        setActiveFilters({});
        setPaginationState({ page: 1 });
    };

    const currentCategoryData = useMemo(() => {
        const categoryObj = data.find(cat => cat.category === activeCategory);
        return categoryObj?.data || [];
    }, [data, activeCategory]);

    const filteredBySearch = useMemo(() => {
        if (!searchQuery) return currentCategoryData;
        
        const lowerQuery = searchQuery.toLowerCase();
        return currentCategoryData.filter(doc => {
            return doc.name?.toLowerCase().includes(lowerQuery) ||
                   doc.vendorName?.toLowerCase().includes(lowerQuery) ||
                   doc.description?.toLowerCase().includes(lowerQuery) ||
                   doc.uploadedBy?.toLowerCase().includes(lowerQuery);
        });
    }, [currentCategoryData, searchQuery]);

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

    const { paginatedData, totalItems } = usePaginatedData({
        data: filteredData,
        enablePagination: true,
        page: paginationState.page,
        rowsPerPage: paginationState.rowsPerPage
    });

    // لیست تامین‌کنندگان برای فیلتر
    const vendorOptions = useMemo(() => {
        const vendorMap = new Map();
        currentCategoryData.forEach(doc => {
            if (doc.vendorId && doc.vendorName && !vendorMap.has(doc.vendorId)) {
                vendorMap.set(doc.vendorId, doc.vendorName);
            }
        });
        return Array.from(vendorMap.entries()).map(([id, name]) => ({
            value: id,
            label: name
        }));
    }, [currentCategoryData]);

    // لیست انواع اسناد برای فیلتر
    const typeOptions = useMemo(() => {
        const typeSet = new Set();
        currentCategoryData.forEach(doc => {
            if (doc.type) {
                typeSet.add(doc.type);
            }
        });
        return Array.from(typeSet).map(type => ({
            value: type,
            label: lang(`documentType.${type}`) || type
        }));
    }, [currentCategoryData]);

    const filters = [
        {
            key: 'status',
            options: ['active', 'expiring_soon', 'expired']
        },
        {
            key: 'type',
            options: typeOptions
        },
        {
            key: 'vendor',
            options: vendorOptions
        }
    ];

    // حذف فیلتر نامعتبر هنگام تغییر تب
    useEffect(() => {
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
    }, [vendorOptions, activeFilters.vendor]);

    const toolbarTabs = categories.map(cat => ({ id: cat }));

    return (
        <div className="global-documents-grid-wrapper">
            <Toolbar
                tabs={toolbarTabs}
                activeTab={activeCategory}
                onTabChange={handleTabChange}
                enableSearch={enableSearch}
                enableAdd={enableUpload}
                enableExport={enableExport}
                onAddClick={onUpload}
                onExportClick={onExportClick}
                filters={filters}
                searchPlaceholder={searchPlaceholder}
                onSearchChange={setSearchQuery}
                onFilterChange={setActiveFilters}
                addButtonText={lang('globalDocuments.upload')}
            />

            <div className="global-documents-grid-container">
                {paginatedData.length > 0 ? (
                    <div className="global-documents-grid">
                        {paginatedData.map(doc => (
                            <GlobalDocumentCard
                                key={doc.id}
                                document={doc}
                                onDownload={onDownload}
                                onDelete={onDelete}
                                onView={onView}
                                onViewVendor={onViewVendor}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="global-documents-empty">
                        <span className="empty-icon">📁</span>
                        <p>{lang('common.noData')}</p>
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