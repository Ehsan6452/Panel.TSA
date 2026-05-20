import { useMemo } from 'react';

export default function usePaginatedData({ data, enablePagination, page, rowsPerPage }) {
    return useMemo(() => {
        if (!enablePagination) {
            return { paginatedData: data, totalItems: data.length };
        }

        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return {
            paginatedData: data.slice(start, end),
            totalItems: data.length
        };
    }, [data, enablePagination, page, rowsPerPage]);
}