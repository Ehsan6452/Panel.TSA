import React from 'react';
import { FiPhone, FiMail, FiUserX, FiEdit } from 'react-icons/fi';
import { useLang } from '../../../utils/LangHandler';
import Avatar from '../../../elements/Avatar/Avatar';
import './ProfileHeader.css';


const getAvatarInitials = (name, email) => {
  if (name && name.trim()) {
    const parts = name.trim().split(/\s+/); 
    if (parts.length >= 2) {
      
      return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
    } else if (parts.length === 1) {
     
      const single = parts[0];
      return single.substring(0, 2).toUpperCase();
    }
  }

  if (email) return email.substring(0, 2).toUpperCase();
  return 'U';
};

export default function ProfileHeader({ userData, onAction }) {
  const { lang } = useLang();

  if (!userData)
    return <div className="ph-skeleton">{lang('profile.errors.loading')}</div>;

  const {
    avatarUrl,
    name,               // ← فیلد جدید به جای firstName + lastName
    email,
    phone,
    userType,
    subType,
    createdAt,
    lastActivity,
    status
  } = userData;

  const statusConfig = {
    active: { label: lang('accountStatus.Active'), className: 'status-active' },
    suspended: { label: lang('accountStatus.Suspended'), className: 'status-suspended' },
    blocked: { label: lang('accountStatus.Inactive'), className: 'status-blocked' }
  };
  const currentStatus = statusConfig[status] || statusConfig.active;

  const typeMap = {
    user: lang('common.users.users'),
    supplier: lang('common.users.vendors'),
    employee: lang('common.users.employees')
  };

  const subTypeMap = {
    accommodation: lang('common.services.accommodation'),
    carRental: lang('common.services.carRental'),
    restaurant: lang('common.services.restaurant'),
    entertainment: lang('common.services.entertainment'),

    management: lang('department.management'),
    support: lang('department.support'),
    marketting: lang('department.marketting'),
    finance: lang('department.finance'),
    technical: lang('department.technical'),

    admins: lang('common.users.admins'),
    users: lang('common.users.users')
  };

  return (
    <div className="profile-header-card">
      <div className="ph-main-section">

        <Avatar
          src={avatarUrl}
          name={name}
          email={email}
        />

        {/* Identity */}
        <div className="ph-column ph-identity-col">
          <h2 className="ph-name">{name || lang('pages.users.profile.header.noName')}</h2>

          <div className="ph-contact-info">
            <span className="ph-info-item">
              <FiMail className="ph-info-icon" />
              {email || lang('pages.users.profile.header.noEmail')}
            </span>

            <span className="ph-info-item">
              <FiPhone className="ph-info-icon" />
              {phone || lang('pages.users.profile.header.noPhone')}
            </span>
          </div>
        </div>

        <div className="ph-divider"></div>

        {/* Type + SubType */}
        <div className="ph-column ph-type-col">
          <span className="ph-label">{lang('pages.users.profile.header.userType')}</span>
          <span className="ph-value">
            {typeMap[userType] || userType}
            {subType && (
              <>
                {' - '}
                {subTypeMap[subType] || subType}
              </>
            )}
          </span>
        </div>

        <div className="ph-divider"></div>

        {/* Dates */}
        <div className="ph-column ph-dates-col">
          <div className="ph-date-row">
            <span className="ph-label">{lang('pages.users.profile.header.joinDate')}</span>
            <span className="ph-value">{createdAt}</span>
          </div>
          <div className="ph-date-row">
            <span className="ph-label">{lang('pages.users.profile.header.lastActivity')}</span>
            <span className="ph-value dir-ltr">{lastActivity}</span>
          </div>
        </div>
      </div>

      {/* Action section */}
      <div className="ph-action-section">
        <div className={`ph-status-badge ${currentStatus.className}`}>
          {currentStatus.label}
        </div>

        <div className="ph-icon-buttons">
          <button
            className="ph-icon-btn btn-primary-outline"
            title={lang('pages.users.profile.header.actions.editTitle')}
            onClick={() => onAction('EDIT', userData.id, userData.subType)}
          >
            <FiEdit size={18} />
          </button>

          <button
            className="ph-icon-btn btn-primary-outline"
            title={lang('pages.users.profile.header.actions.callTitle')}
            onClick={() => onAction('CALL', phone, '')}
            disabled={!phone}
          >
            <FiPhone size={18} />
          </button>

          <button
            className="ph-icon-btn btn-primary-outline"
            title={lang('pages.users.profile.header.actions.emailTitle')}
            onClick={() => onAction('EMAIL', email, '')}
            disabled={!email}
          >
            <FiMail size={18} />
          </button>

          <button
            className="ph-icon-btn btn-danger-outline"
            title={lang('pages.users.profile.header.actions.deactivateTitle')}
            onClick={() => onAction('DEACTIVATE', userData.id)}
          >
            <FiUserX size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}