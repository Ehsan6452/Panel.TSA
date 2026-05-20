import { useState } from 'react';

export default function usePaginationState(initialPage = 1, initialRowsPerPage = 10) {
    const [page, setPage] = useState(initialPage);
    const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

    const handleChange = ({ page: newPage, rowsPerPage: newRowsPerPage }) => {
        if (newPage !== undefined) setPage(newPage);
        if (newRowsPerPage !== undefined) setRowsPerPage(newRowsPerPage);
    };

    return [{ page, rowsPerPage }, handleChange];
}