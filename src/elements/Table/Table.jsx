import React from 'react';
import { useLang } from '../../utils/LangHandler';
import './Table.css';

const TRANSLATABLE_COLUMNS = {
    "membershipTier": "membershipTier",
    "accountStatus": "accountStatus",
    "serviceCategory": "common.services",
    "contractStatus": "accountStatus",
    "department": "department",
    "accessRole": "roles",
    "status": "accountStatus"
};

function Table({ titles, data, onRowClick }) {

    const { lang } = useLang();

    const renderCell = (title, value) => {

        const namespace = TRANSLATABLE_COLUMNS[title];

        if (namespace) {
            return lang(`${namespace}.${value}`);
        }

        return value;
    };

    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        {titles.map((title, index) => (
                            <th className="text-center" key={index}>
                                {lang(`table.${title}`)}
                            </th>
                        ))}
                        <th className="text-center">
                            {lang('common.action')}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} onClick={() => onRowClick(row[0])}>

                            {row.map((cell, cellIndex) => (
                                <td
                                    className="text-center"
                                    key={cellIndex}
                                    data-label={lang(`${titles[cellIndex]}`)}
                                >
                                    {renderCell(titles[cellIndex], cell)}
                                </td>
                            ))}

                            <td className="text-center">
                                <button
                                    className="details-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onRowClick(row[0]);
                                    }}
                                >
                                    {lang('common.seeMore')}
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
