import React, { useState } from 'react';
import { useLang } from '../../utils/LangHandler';
import './Pagination.css';

export default function Pagination({
    totalItems = 0,
    onPageChange,
    enablePagination = false,
    defaultRowsPerPage = 10
}) {
    const { lang } = useLang();
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

    const totalPages = Math.ceil(totalItems / rowsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;
        setCurrentPage(newPage);
        onPageChange?.({
            page: newPage,
            rowsPerPage,
            offset: (newPage - 1) * rowsPerPage,
            limit: rowsPerPage
        });
    };

    const handleRowsPerPageChange = (newRowsPerPage) => {
        setRowsPerPage(newRowsPerPage);
        setCurrentPage(1);
        onPageChange?.({
            page: 1,
            rowsPerPage: newRowsPerPage,
            offset: 0,
            limit: newRowsPerPage
        });
    };

    if (!enablePagination || totalItems === 0) return null;

    return (
        <div className="pagination-wrapper">
            <div className="pagination-rows-section">
                <span className="pagination-label">{lang('common.rowsPerPage')}:</span>
                <select
                    className="pagination-select"
                    value={rowsPerPage}
                    onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>

            <div className="pagination-controls">
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="pagination-btn"
                >
                    {lang('common.prev')}
                </button>
                <span className="pagination-info">{currentPage} / {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="pagination-btn"
                >
                    {lang('common.next')}
                </button>
            </div>
        </div>
    );
}