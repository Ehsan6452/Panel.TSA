import React, { useMemo, useState } from 'react';
import { useLang } from '../../utils/LangHandler';
import Toolbar from '../Toolbar/Toolbar';
import Pagination from '../Pagination/Pagination';
import usePaginatedData from '../../hooks/PaginatedData/usePaginatedData';
import usePaginationState from '../../hooks/PaginationState/usePaginationState';
import './AdvancedTable.css';

export default function AdvancedTable({
    columns = [],
    data = [],
    tabs = [],
    activeTab = '',
    onTabChange,
    onRowClick,
    enableSearch = false,
    enablePagination = false,
    enableExport = false,
    enableAdd = false,
    onAddClick,
    onExportClick,
    filters = [],
    searchPlaceholder = 'common.search'
}) {
    const { lang } = useLang();
    const [paginationState, setPaginationState] = usePaginationState(1, 10);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState({});

    // اعمال فیلتر جستجو روی دیتا
    const filteredBySearch = useMemo(() => {
        if (!searchQuery) return data;
        
        const lowerQuery = searchQuery.toLowerCase();
        return data.filter(row => {
            return Object.values(row).some(value => 
                String(value).toLowerCase().includes(lowerQuery)
            );
        });
    }, [data, searchQuery]);

    // اعمال فیلترهای اضافی
    const processedData = useMemo(() => {
        if (Object.keys(activeFilters).length === 0) return filteredBySearch;
        
        return filteredBySearch.filter(row => {
            return Object.entries(activeFilters).every(([key, val]) => {
                if (!val) return true;
                const rowValue = String(row[key]).toLowerCase();
                const filterValue = String(val).toLowerCase();
                return rowValue === filterValue;
            });
        });
    }, [filteredBySearch, activeFilters]);

    // پیجینیشن
    const { paginatedData, totalItems } = usePaginatedData({
        data: processedData,
        enablePagination,
        page: paginationState.page,
        rowsPerPage: paginationState.rowsPerPage
    });

    // تابع رندر سلول با قابلیت ترجمه
    const renderCell = (col, value) => {
        if (value === undefined || value === null) return '-';
        
        if (col.translatable && col.namespace) {
            return lang(`${col.namespace}.${value}`);
        }
        
        // اگر value یک آرایه است، آن را با کاما جدا کن
        if (Array.isArray(value)) {
            return value.join(', ');
        }
        
        return value;
    };

    // تابع تعیین کلاس CSS برای ستون‌ها (اختیاری)
    const getColumnClassName = (col) => {
        if (col.key === 'id') return 'col-id';
        if (col.key === 'status') return 'col-status';
        if (col.type === 'date') return 'col-date';
        return '';
    };

    return (
        <div className="advanced-table-wrapper">
            <Toolbar
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={onTabChange}
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

            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            {columns.map((col, idx) => (
                                <th key={col.key} className={getColumnClassName(col)}>
                                    {lang(`table.${col.title}`) || col.title}
                                </th>
                            ))}
                            {onRowClick && (
                                <th className="col-actions">{lang('common.action')}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, idx) => (
                                <tr 
                                    key={row.id || idx} 
                                    onClick={() => onRowClick?.(row.id)}
                                    className={row.status ? `row-status-${row.status}` : ''}
                                >
                                    {columns.map(col => (
                                        <td 
                                            key={col.key} 
                                            data-label={lang(`table.${col.title}`) || col.title}
                                            className={getColumnClassName(col)}
                                        >
                                            {renderCell(col, row[col.key])}
                                        </td>
                                    ))}
                                    {onRowClick && (
                                        <td className="col-actions" data-label={lang('common.action')}>
                                            <button
                                                className="details-btn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onRowClick(row.id);
                                                }}
                                            >
                                                {lang('common.seeMore')}
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))
                        ) : (
                            <tr className="no-data-row">
                                <td 
                                    colSpan={columns.length + (onRowClick ? 1 : 0)} 
                                    className="no-data-cell"
                                >
                                    {lang('common.noData')}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination
                totalItems={totalItems}
                onPageChange={setPaginationState}
                enablePagination={enablePagination}
                defaultRowsPerPage={10}
            />
        </div>
    );
}