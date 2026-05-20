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
    onTabChange: externalTabChange,
    onEdit,
    onDelete,
    onViewDetails,
    onAddClick,
    enableSearch = true,
    enableAdd = true,
    enableExport = false,
    onExportClick,
    filters = [],
    searchPlaceholder = 'common.search'
}) {
    const { lang } = useLang();
    
    const [activeTab, setActiveTab] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState({});
    const [paginationState, setPaginationState] = usePaginationState(1, 12);

    useEffect(() => {
        if (tabs.length > 0 && !activeTab) {
            const firstTab = tabs[0]?.tab || tabs[0]?.id;
            if (firstTab) {
                setActiveTab(firstTab);
            }
        }
    }, [tabs, activeTab]);


    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setPaginationState({ page: 1 });
        externalTabChange?.(tabId);
    };


    const currentTabData = useMemo(() => {
        if (!activeTab) return [];
        

        let activeTabObj = tabs.find(tab => tab.tab === activeTab);

        if (!activeTabObj) {
            activeTabObj = tabs.find(tab => tab.id === activeTab);
        }
        return activeTabObj?.data || [];
    }, [tabs, activeTab]);


    const filteredBySearch = useMemo(() => {
        if (!searchQuery) return currentTabData;
        
        const lowerQuery = searchQuery.toLowerCase();
        return currentTabData.filter(product => {
            const searchableFields = [
                product.basicInfo?.name,
                product.basicInfo?.type,
                product.basicInfo?.tags?.join(' '),
                product.id
            ];
            return searchableFields.some(field => 
                String(field).toLowerCase().includes(lowerQuery)
            );
        });
    }, [currentTabData, searchQuery]);

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

    const toolbarTabs = tabs.map(tab => ({ 
        id: tab.tab || tab.id
    }));

    const defaultFilters = [
        {
            key: 'status',
            options: ['active', 'inactive']
        },
        {
            key: 'stock',
            options: ['in_stock', 'low_stock', 'out_of_stock']
        }
    ];

    const finalFilters = filters.length > 0 ? filters : defaultFilters;

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
            onSearchChange={setSearchQuery}      // ✅ این خط باید باشد
            onFilterChange={setActiveFilters}    // ✅ این خط باید باشد
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