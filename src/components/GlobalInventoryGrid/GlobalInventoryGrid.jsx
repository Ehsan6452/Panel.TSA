import React, { useState, useMemo, useEffect } from 'react';
import { useLang } from '../../utils/LangHandler';
import Toolbar from '../../elements/Toolbar/Toolbar';
import Pagination from '../../elements/Pagination/Pagination';
import GlobalInventoryCard from '../../elements/GlobalInventoryCard/GlobalInventoryCard';
import usePaginationState from '../../hooks/PaginationState/usePaginationState';
import usePaginatedData from '../../hooks/PaginatedData/usePaginatedData';
import './GlobalInventoryGrid.css';

export default function GlobalInventoryGrid({
    categories = [],
    data = [],
    onEdit,
    onDelete,
    onViewDetails,
    onViewVendor,
    onAddClick,
    enableSearch = true,
    enableAdd = true,
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

    // ✅ هنگام تغییر تب، فیلترها و جستجو را ریست کن
    const handleTabChange = (newCategory) => {
        setActiveCategory(newCategory);
        setSearchQuery('');           // ریست جستجو
        setActiveFilters({});         // ریست فیلترها
        setPaginationState({ page: 1 }); // ریست صفحه به اول
    };

    const currentCategoryData = useMemo(() => {
        const categoryObj = data.find(cat => cat.category === activeCategory);
        return categoryObj?.data || [];
    }, [data, activeCategory]);

    const filteredBySearch = useMemo(() => {
        if (!searchQuery) return currentCategoryData;
        
        const lowerQuery = searchQuery.toLowerCase();
        return currentCategoryData.filter(product => {
            return product.basicInfo?.name?.toLowerCase().includes(lowerQuery) ||
                   product.vendorName?.toLowerCase().includes(lowerQuery) ||
                   product.basicInfo?.type?.toLowerCase().includes(lowerQuery) ||
                   product.basicInfo?.tags?.join(' ').toLowerCase().includes(lowerQuery);
        });
    }, [currentCategoryData, searchQuery]);

    const filteredData = useMemo(() => {
        if (Object.keys(activeFilters).length === 0) return filteredBySearch;
        
        return filteredBySearch.filter(product => {
            return Object.entries(activeFilters).every(([key, val]) => {
                if (!val) return true;
                switch (key) {
                    case 'status':
                        return product.basicInfo?.isActive === (val === 'active');
                    case 'stock':
                        const available = product.pricing?.availableUnits || 0;
                        const total = product.pricing?.totalUnits || 0;
                        if (val === 'in_stock') return available > 0;
                        if (val === 'low_stock') return available > 0 && available <= total * 0.3;
                        if (val === 'out_of_stock') return available === 0;
                        return true;
                    case 'vendor':
                        return product.vendorId === val;
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

    // لیست تامین‌کنندگان برای فیلتر (بر اساس تب فعلی)
    const vendorOptions = useMemo(() => {
        const vendorMap = new Map();
        currentCategoryData.forEach(product => {
            if (product.vendorId && product.vendorName && !vendorMap.has(product.vendorId)) {
                vendorMap.set(product.vendorId, product.vendorName);
            }
        });
        return Array.from(vendorMap.entries()).map(([id, name]) => ({
            value: id,
            label: name
        }));
    }, [currentCategoryData]);

    const filters = [
        {
            key: 'status',
            options: ['active', 'inactive']
        },
        {
            key: 'stock',
            options: ['in_stock', 'low_stock', 'out_of_stock']
        },
        {
            key: 'vendor',
            options: vendorOptions
        }
    ];

    // ✅ فقط زمانی که vendorOptions تغییر می‌کند، فیلتر vendor نامعتبر را پاک کن
    useEffect(() => {
        const currentVendorFilter = activeFilters.vendor;
        if (currentVendorFilter) {
            const vendorExists = vendorOptions.some(v => v.value === currentVendorFilter);
            if (!vendorExists) {
                // اگر vendor انتخاب شده در تب جدید وجود ندارد، آن را از فیلترها حذف کن
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
        <div className="global-inventory-grid-wrapper">
            <Toolbar
                tabs={toolbarTabs}
                activeTab={activeCategory}
                onTabChange={handleTabChange}  // ✅ استفاده از تابع جدید
                enableSearch={enableSearch}
                enableAdd={enableAdd}
                enableExport={enableExport}
                onAddClick={onAddClick}
                onExportClick={onExportClick}
                filters={filters}
                searchPlaceholder={searchPlaceholder}
                onSearchChange={setSearchQuery}
                onFilterChange={setActiveFilters}
            />

            <div className="global-inventory-grid-container">
                {paginatedData.length > 0 ? (
                    <div className="global-inventory-grid">
                        {paginatedData.map(product => (
                            <GlobalInventoryCard
                                key={product.id}
                                product={product}
                                onEdit={onEdit}
                                onDelete={onDelete}
                                onViewDetails={onViewDetails}
                                onViewVendor={onViewVendor}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="global-inventory-empty">
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