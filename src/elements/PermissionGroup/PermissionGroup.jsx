import React, { useState } from 'react';
import './style.css';

export default function PermissionGroup({ title, subPermissions }) {
    const [isOpen, setIsOpen] = useState(false);

    // بررسی اینکه آیا تمام زیرمجموعه‌ها تیک خورده‌اند یا خیر
    const isAllGranted = subPermissions.length > 0 && subPermissions.every(sub => sub.isGranted);

    return (
        <div className="perm-group-wrapper">
            {/* Header / Main Checkbox */}
            <div className="perm-group-header" onClick={() => setIsOpen(!isOpen)}>
                <div className="perm-group-title-area">
                    <input 
                        type="checkbox" 
                        className="perm-checkbox" 
                        checked={isAllGranted} 
                        readOnly 
                    />
                    <span className={`perm-group-title ${!isAllGranted ? 'muted-title' : ''}`}>
                        {title}
                    </span>
                </div>
                
                <button className={`perm-toggle-btn ${isOpen ? 'open' : ''}`}>
                    ▼
                </button>
            </div>

            <hr className="perm-divider" />

            {/* Body / Sub Permissions */}
            {isOpen && (
                <div className="perm-group-body">
                    {subPermissions.map((sub) => (
                        <div key={sub.id} className="perm-sub-item">
                            <input 
                                type="checkbox" 
                                className="perm-checkbox sub-checkbox" 
                                checked={sub.isGranted} 
                                readOnly 
                            />
                            {/* اگر دسترسی نداشت، کلاس muted به آن اضافه می‌شود */}
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
