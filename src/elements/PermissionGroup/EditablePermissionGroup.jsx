import React, { useState } from 'react';

export default function EditablePermissionGroup({ group, onGroupToggle, onSubToggle }) {
    const [isOpen, setIsOpen] = useState(false);

    // بررسی اینکه آیا تمام زیرمجموعه‌ها تیک خورده‌اند
    const isAllGranted = group.subPermissions.length > 0 && group.subPermissions.every(sub => sub.isGranted);

    const handleHeaderClick = (e) => {
        // جلوگیری از باز و بسته شدن آکاردئون وقتی روی چک‌باکس کلیک می‌شود
        if (e.target.type !== 'checkbox') {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className="perm-group-wrapper">
            {/* Header */}
            <div className="perm-group-header" onClick={handleHeaderClick}>
                <div className="perm-group-title-area">
                    <input 
                        type="checkbox" 
                        className="perm-checkbox" 
                        checked={isAllGranted}
                        onChange={(e) => onGroupToggle(group.id, e.target.checked)}
                    />
                    <span className={`perm-group-title ${!isAllGranted ? 'muted-title' : ''}`}>
                        {group.title}
                    </span>
                </div>
                
                <button type="button" className={`perm-toggle-btn ${isOpen ? 'open' : ''}`}>
                    ▼
                </button>
            </div>

            <hr className="perm-divider" />

            {/* Body */}
            {isOpen && (
                <div className="perm-group-body">
                    {group.subPermissions.map((sub) => (
                        <div key={sub.id} className="perm-sub-item">
                            <input 
                                type="checkbox" 
                                className="perm-checkbox sub-checkbox" 
                                checked={sub.isGranted}
                                onChange={() => onSubToggle(group.id, sub.id)}
                            />
                            <span className={`perm-sub-title ${!sub.isGranted ? 'muted-text' : ''}`}>
                                {sub.title}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
