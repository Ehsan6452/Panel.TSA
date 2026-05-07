// src/pages/Users/steps/UserAccessStep.jsx
import React, { useState } from 'react';
import './steps.css';

const PERMISSIONS = [
    {
        id: 'users',
        title: 'User Management',
        subPermissions: [
            { id: 'users.view', title: 'View Users' },
            { id: 'users.create', title: 'Create User' },
            { id: 'users.edit', title: 'Edit User' },
            { id: 'users.delete', title: 'Delete User' },
        ],
    },
    {
        id: 'trips',
        title: 'Trip Management',
        subPermissions: [
            { id: 'trips.view', title: 'View Trips' },
            { id: 'trips.create', title: 'Create Trip' },
            { id: 'trips.edit', title: 'Edit Trip' },
            { id: 'trips.delete', title: 'Delete Trip' },
        ],
    },
    {
        id: 'reports',
        title: 'Reports',
        subPermissions: [
            { id: 'reports.view', title: 'View Reports' },
            { id: 'reports.export', title: 'Export Reports' },
        ],
    },
    {
        id: 'settings',
        title: 'Settings',
        subPermissions: [
            { id: 'settings.view', title: 'View Settings' },
            { id: 'settings.edit', title: 'Edit Settings' },
        ],
    },
];

const ALL_KEYS = PERMISSIONS.flatMap(group => group.subPermissions.map(sub => sub.id));

const PREDEFINED_ROLES = {
    custom: { title: 'Custom (Personalized)', keys: [] },
    super_admin: { title: 'Super Admin', keys: ALL_KEYS },
    manager: {
        title: 'Manager',
        keys: [
            'users.view', 'users.edit',
            'trips.view', 'trips.create', 'trips.edit',
            'reports.view', 'reports.export',
            'settings.view'
        ]
    },
    operator: {
        title: 'Trip Operator',
        keys: ['users.view', 'trips.view', 'trips.create', 'trips.edit', 'reports.view']
    },
    viewer: {
        title: 'Read Only',
        keys: ['users.view', 'trips.view', 'reports.view', 'settings.view']
    }
};

const EditablePermissionGroup = ({ group, selectedKeys, onGroupToggle, onSubToggle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const isAllGranted = group.subPermissions.length > 0 && 
        group.subPermissions.every(sub => selectedKeys.includes(sub.id));

    const handleHeaderClick = (e) => {
        if (e.target.type !== 'checkbox') {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className="perm-group-wrapper">
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
            {isOpen && (
                <div className="perm-group-body">
                    {group.subPermissions.map((sub) => {
                        const isGranted = selectedKeys.includes(sub.id);
                        return (
                            <div key={sub.id} className="perm-sub-item">
                                <input
                                    type="checkbox"
                                    className="perm-checkbox sub-checkbox"
                                    checked={isGranted}
                                    onChange={() => onSubToggle(sub.id)}
                                />
                                <span className={`perm-sub-title ${!isGranted ? 'muted-text' : ''}`}>
                                    {sub.title}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default function UserAccessStep({ data, onChange, errors }) {
    const selectedKeys = data?.permissions || [];
    const selectedRole = data?.role || 'custom';

    const handleRoleChange = (e) => {
        const roleKey = e.target.value;
        
        if (roleKey !== 'custom') {
            onChange({ 
                role: roleKey, 
                permissions: PREDEFINED_ROLES[roleKey].keys 
            });
        } else {
            onChange({ role: roleKey });
        }
    };

    const handleGroupToggle = (groupId, isChecked) => {
        const group = PERMISSIONS.find(g => g.id === groupId);
        const subIds = group.subPermissions.map(sub => sub.id);

        let newPermissions;
        if (isChecked) {
            newPermissions = [...new Set([...selectedKeys, ...subIds])];
        } else {
            newPermissions = selectedKeys.filter(key => !subIds.includes(key));
        }

        onChange({ 
            permissions: newPermissions, 
            role: 'custom' 
        });
    };

    const handleSubToggle = (subId) => {
        let newPermissions;
        if (selectedKeys.includes(subId)) {
            newPermissions = selectedKeys.filter(key => key !== subId);
        } else {
            newPermissions = [...selectedKeys, subId];
        }

        onChange({ 
            permissions: newPermissions, 
            role: 'custom' 
        });
    };

    return (
        <div className="access-management-step">
            <div className="role-selector-container">
                <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Select Role Template</label>
                <select
                    className="role-select"
                    value={selectedRole}
                    onChange={handleRoleChange}
                >
                    {Object.entries(PREDEFINED_ROLES).map(([key, roleData]) => (
                        <option key={key} value={key}>
                            {roleData.title}
                        </option>
                    ))}
                </select>
            </div>

            <div className="permissions-list">
                {PERMISSIONS.map((group) => (
                    <EditablePermissionGroup
                        key={group.id}
                        group={group}
                        selectedKeys={selectedKeys}
                        onGroupToggle={handleGroupToggle}
                        onSubToggle={handleSubToggle}
                    />
                ))}
            </div>

            {errors?.permissions && (
                <span style={{ color: '#ef4444', fontSize: '0.85rem' }}>{errors.permissions}</span>
            )}
        </div>
    );
}