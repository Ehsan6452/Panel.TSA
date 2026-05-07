import React, { useState, useMemo } from 'react';
import { useLang } from '../../utils/LangHandler'; // مسیر را تنظیم کنید
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
    enableAdd = false, // پراپ جدید
    onAddClick, // پراپ جدید برای مدیریت اکشن در parent
    filters = [] 
}) {
    const { lang } = useLang();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [activeFilters, setActiveFilters] = useState({});

    const handleFilterChange = (key, value) => {
        setActiveFilters(prev => ({ ...prev, [key]: value }));
        setCurrentPage(1);
    };

    const processedData = useMemo(() => {
        let filteredData = [...data];

        Object.entries(activeFilters).forEach(([key, val]) => {
            if (val) {
                filteredData = filteredData.filter(item => item[key] === val);
            }
        });

        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            filteredData = filteredData.filter(item => 
                Object.values(item).some(val => 
                    String(val).toLowerCase().includes(lowerQuery)
                )
            );
        }

        return filteredData;
    }, [data, searchQuery, activeFilters]);

    const totalPages = Math.ceil(processedData.length / rowsPerPage);
    const paginatedData = enablePagination 
        ? processedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
        : processedData;

    const renderCell = (col, value) => {
        if (col.translatable && col.namespace) {
            return lang(`${col.namespace}.${value}`);
        }
        return value;
    };

    return (
        <div className="advanced-table-wrapper">
            
            {/* Toolbar: Tabs, Search, Filters, Export, Add */}
            <div className="table-toolbar">
                {tabs.length > 0 && (
                    <div className="toolbar-tabs">
                        {tabs.map(tab => (
                            <button 
                                key={tab.id}
                                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => {
                                    if(onTabChange) onTabChange(tab.id);
                                    setCurrentPage(1);
                                }}
                            >
                                {lang(`tabs.${tab.id}`)}
                            </button>
                        ))}
                    </div>
                )}

                <div className="toolbar-actions">
                    {enableSearch && (
                        <input 
                            type="text" 
                            placeholder={lang('common.search')}
                            className="toolbar-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    )}

                    {filters.map(filter => (
                        <select 
                            key={filter.key}
                            className="toolbar-select"
                            onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                            value={activeFilters[filter.key] || ''}
                        >
                            <option value="">{lang(`filters.all_${filter.key}`)}</option>
                            {filter.options.map(opt => (
                                <option key={opt} value={opt}>{lang(`filters.${filter.key}.${opt}`)}</option>
                            ))}
                        </select>
                    ))}

                    {enableExport && (
                        <button 
                            className="export-btn"
                            onClick={() => console.log("Exporting...", processedData)}
                        >
                            {lang('common.export')}
                        </button>
                    )}

                    {enableAdd && (
                        <button 
                            className="add-btn"
                            onClick={() => onAddClick && onAddClick()}
                        >
                            {lang('common.add')}
                        </button>
                    )}
                </div>
            </div>

            {/* بقیه کد بدون تغییر */}
            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            {columns.map(col => (
                                <th key={col.key}>
                                    {lang(`table.${col.title}`)}
                                </th>
                            ))}
                            {onRowClick && (
                                <th>{lang('common.action')}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? paginatedData.map((row, idx) => (
                            <tr 
                                key={row.id || idx} 
                                onClick={() => onRowClick && onRowClick(row.id)}
                            >
                                {columns.map(col => (
                                    <td 
                                        key={col.key} 
                                        data-label={lang(`table.${col.title}`)}
                                    >
                                        {renderCell(col, row[col.key])}
                                    </td>
                                ))}
                                
                                {onRowClick && (
                                    <td>
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
                        )) : (
                            <tr>
                                <td colSpan={columns.length + (onRowClick ? 1 : 0)} style={{ textAlign: 'center', padding: '32px' }}>
                                    {lang('common.noData')}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {enablePagination && processedData.length > 0 && (
                <div className="pagination-container">
                    <div className="pagination-group">
                        <span style={{ color: 'var(--text-sidebar)' }}>{lang('common.rowsPerPage')}:</span>
                        <select 
                            className="toolbar-select"
                            value={rowsPerPage} 
                            onChange={(e) => {
                                setRowsPerPage(Number(e.target.value));
                                setCurrentPage(1);
                            }}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                    </div>
                    <div className="pagination-group" style={{ color: 'var(--text-sidebar)' }}>
                        <button 
                            disabled={currentPage === 1} 
                            onClick={() => setCurrentPage(p => p - 1)}
                            className="pagination-btn"
                        >
                            {lang('common.prev')}
                        </button>
                        <span>{currentPage} / {totalPages}</span>
                        <button 
                            disabled={currentPage === totalPages} 
                            onClick={() => setCurrentPage(p => p + 1)}
                            className="pagination-btn"
                        >
                            {lang('common.next')}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}