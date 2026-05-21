import React, { useState, useMemo, useEffect } from 'react';
import { useLang } from '../../utils/LangHandler';
import Toolbar from '../../elements/Toolbar/Toolbar';
import Pagination from '../../elements/Pagination/Pagination';
import InventoryCard from '../../elements/InventoryCard/InventoryCard';
import usePaginationState from '../../hooks/PaginationState/usePaginationState';
import usePaginatedData from '../../hooks/PaginatedData/usePaginatedData';
import './InventoryGrid.css';

export default function InventoryGrid({
    tabs = [],
    data = [],
    onTabChange: externalTabChange,
    onEdit,
    onDelete,
    onViewDetails,
    onViewVendor,
    onAddClick,
    enableSearch = true,
    enableAdd = true,
    enableExport = false,
    onExportClick,
    filters = [],
    searchPlaceholder = 'common.search',
    globalMode = false,
    vendorFilterEnabled = false
}) {
    const { lang } = useLang();
    const [activeTab, setActiveTab] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState({});
    const [paginationState, setPaginationState] = usePaginationState(1, 12);

    // ----- تنظیم تب اولیه (بدون شرط) -----
    useEffect(() => {
        if (tabs.length === 0) return;
        if (activeTab) return;
        if (globalMode) {
            setActiveTab(tabs[0]);
        } else {
            const firstTab = tabs[0]?.tab || tabs[0]?.id;
            if (firstTab) setActiveTab(firstTab);
        }
    }, [tabs, activeTab, globalMode]);

    // ----- استخراج دیتای تب جاری (بدون شرط) -----
    const currentTabData = useMemo(() => {
        if (!activeTab) return [];
        if (globalMode) {
            const categoryObj = data.find(cat => cat.category === activeTab);
            return categoryObj?.data || [];
        } else {
            let activeTabObj = tabs.find(tab => tab.tab === activeTab);
            if (!activeTabObj) activeTabObj = tabs.find(tab => tab.id === activeTab);
            return activeTabObj?.data || [];
        }
    }, [tabs, data, activeTab, globalMode]);

    // ----- گزینه‌های فیلتر وندور (برای حالت global یا فعال شده) -----
    const vendorOptions = useMemo(() => {
        if (!globalMode && !vendorFilterEnabled) return [];
        const vendorMap = new Map();
        currentTabData.forEach(product => {
            if (product.vendorId && product.vendorName && !vendorMap.has(product.vendorId)) {
                vendorMap.set(product.vendorId, product.vendorName);
            }
        });
        return Array.from(vendorMap.entries()).map(([id, name]) => ({ value: id, label: name }));
    }, [currentTabData, globalMode, vendorFilterEnabled]);

    // ----- حذف خودکار فیلتر وندور در صورت نامعتبر بودن -----
    useEffect(() => {
        if (!activeFilters.vendor) return;
        const exists = vendorOptions.some(v => v.value === activeFilters.vendor);
        if (!exists) {
            setActiveFilters(prev => {
                const newFilters = { ...prev };
                delete newFilters.vendor;
                return newFilters;
            });
        }
    }, [vendorOptions, activeFilters.vendor]);

    // ----- جستجو -----
    const filteredBySearch = useMemo(() => {
        if (!searchQuery) return currentTabData;
        const lowerQuery = searchQuery.toLowerCase();
        return currentTabData.filter(product => {
            const fields = [
                product.basicInfo?.name,
                product.basicInfo?.type,
                product.basicInfo?.tags?.join(' '),
                product.id,
                product.vendorName
            ];
            return fields.some(field => String(field).toLowerCase().includes(lowerQuery));
        });
    }, [currentTabData, searchQuery]);

    // ----- فیلترهای status, stock, vendor -----
    const filteredData = useMemo(() => {
        if (Object.keys(activeFilters).length === 0) return filteredBySearch;
        return filteredBySearch.filter(product => {
            return Object.entries(activeFilters).every(([key, val]) => {
                if (!val) return true;
                switch (key) {
                    case 'status':
                        return product.basicInfo?.isActive === (val === 'active');
                    case 'stock': {
                        const available = product.pricing?.availableUnits || 0;
                        const total = product.pricing?.totalUnits || 0;
                        if (val === 'in_stock') return available > 0;
                        if (val === 'low_stock') return available > 0 && available <= total * 0.3;
                        if (val === 'out_of_stock') return available === 0;
                        return true;
                    }
                    case 'vendor':
                        return product.vendorId === val;
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

    // ----- تغییر تب -----
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setSearchQuery('');
        setActiveFilters({});
        setPaginationState({ page: 1 });
        externalTabChange?.(tabId);
    };

    // ----- ساخت فیلترهای نهایی -----
    const defaultFilters = [
        { key: 'status', options: ['active', 'inactive'] },
        { key: 'stock', options: ['in_stock', 'low_stock', 'out_of_stock'] }
    ];
    let finalFilters = filters.length ? filters : defaultFilters;
    if ((globalMode || vendorFilterEnabled) && vendorOptions.length) {
        finalFilters = [...finalFilters, { key: 'vendor', options: vendorOptions }];
    }

    // ----- تبدیل تب‌ها به فرمت Toolbar -----
    const toolbarTabs = useMemo(() => {
        if (globalMode) {
            return tabs.map(cat => ({ id: cat }));
        } else {
            return tabs.map(tab => ({ id: tab.tab || tab.id }));
        }
    }, [tabs, globalMode]);

    return (
        <div className="inventory-grid-wrapper">
            <Toolbar
                tabs={toolbarTabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                enableSearch={enableSearch}
                enableAdd={enableAdd}
                enableExport={enableExport}
                onAddClick={onAddClick}
                onExportClick={onExportClick}
                filters={finalFilters}
                searchPlaceholder={searchPlaceholder}
                onSearchChange={setSearchQuery}
                onFilterChange={setActiveFilters}
            />

            <div className="inventory-grid-container">
                {paginatedData.length > 0 ? (
                    <div className="inventory-grid">
                        {paginatedData.map(product => (
                            <InventoryCard
                                key={product.id}
                                product={product}
                                onEdit={onEdit}
                                onDelete={onDelete}
                                onViewDetails={onViewDetails}
                                onViewVendor={onViewVendor}
                                showVendor={globalMode || vendorFilterEnabled}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="inventory-empty">
                        <span className="empty-icon">📦</span>
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