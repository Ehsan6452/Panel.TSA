import React, { useState, useEffect } from 'react';
import { useLang } from '../../utils/LangHandler';
import './Toolbar.css';

export default function Toolbar({
    tabs = [],
    activeTab = '',
    onTabChange,
    enableSearch = false,
    enableAdd = false,
    enableExport = false,
    onAddClick,
    onExportClick,
    filters = [],
    searchPlaceholder = 'common.search',
    onSearchChange,
    onFilterChange,
    addButtonText = null
}) {
    const { lang } = useLang();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState({});

    // ارسال searchQuery به والد هنگام تغییر
    useEffect(() => {
        onSearchChange?.(searchQuery);
    }, [searchQuery, onSearchChange]);

    // ارسال activeFilters به والد هنگام تغییر
    useEffect(() => {
        onFilterChange?.(activeFilters);
    }, [activeFilters, onFilterChange]);

    const handleFilterChange = (key, value) => {
        setActiveFilters(prev => ({ ...prev, [key]: value }));
    };

    const getFilterValue = (key) => activeFilters[key] || '';

    // تابع کمکی برای رندر کردن گزینه‌های فیلتر
    const renderFilterOptions = (filter) => {
        return filter.options.map(opt => {
            // اگر opt آبجکت است (مانند فیلتر vendor که { value, label } دارد)
            if (typeof opt === 'object' && opt !== null) {
                return (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                );
            }
            // اگر opt رشته است (فیلترهای معمولی)
            return (
                <option key={opt} value={opt}>
                    {lang(`filters.${filter.key}.${opt}`)}
                </option>
            );
        });
    };

    // تابع کمکی برای نمایش عنوان خالی فیلتر
    const getFilterAllLabel = (filter) => {
        // برای فیلتر vendor، عنوان فارسی/انگلیسی "همه تامین‌کنندگان"
        if (filter.key === 'vendor') {
            return lang('filters.all_vendor');
        }
        return lang(`filters.all_${filter.key}`);
    };

    return (
        <div className="toolbar-wrapper">
            {tabs.length > 0 && (
                <div className="toolbar-tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => onTabChange?.(tab.id)}
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
                        placeholder={lang(searchPlaceholder)}
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
                        value={getFilterValue(filter.key)}
                    >
                        <option value="">{getFilterAllLabel(filter)}</option>
                        {renderFilterOptions(filter)}
                    </select>
                ))}

                {enableExport && (
                    <button className="export-btn" onClick={onExportClick}>
                        {lang('common.export')}
                    </button>
                )}

                {enableAdd && (
                    <button className="add-btn" onClick={onAddClick}>
                        {addButtonText || lang('common.add')}
                    </button>
                )}
            </div>
        </div>
    );
}