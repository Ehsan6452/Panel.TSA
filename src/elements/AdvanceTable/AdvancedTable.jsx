import React, { useMemo } from 'react';
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
    filters = []
}) {
    const { lang } = useLang();
    const [paginationState, setPaginationState] = usePaginationState();

    const processedData = useMemo(() => {
        return data;
    }, [data]);

    const { paginatedData, totalItems } = usePaginatedData({
        data: processedData,
        enablePagination,
        page: paginationState.page,
        rowsPerPage: paginationState.rowsPerPage
    });

    const renderCell = (col, value) => {
        if (col.translatable && col.namespace) {
            return lang(`${col.namespace}.${value}`);
        }
        return value;
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
            />

            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            {columns.map(col => (
                                <th key={col.key}>{lang(`table.${col.title}`)}</th>
                            ))}
                            {onRowClick && <th>{lang('common.action')}</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, idx) => (
                                <tr key={row.id || idx} onClick={() => onRowClick?.(row.id)}>
                                    {columns.map(col => (
                                        <td key={col.key} data-label={lang(`table.${col.title}`)}>
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
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length + (onRowClick ? 1 : 0)} className="no-data-cell">
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
            />
        </div>
    );
}