import React from 'react';
import { FiPhone, FiMail, FiExternalLink } from 'react-icons/fi';
import { useLang } from '../../../../../utils/LangHandler';
import Avatar from '../../../../../elements/Avatar/Avatar';
import './OwnerHeader.css';

export default function OwnerHeader({ ownerData, onAction }) {
  const { lang } = useLang();

  if (!ownerData) return null;

  const {
    id,
    avatar,
    fullName,
    email,
    phone,
    role
  } = ownerData;

  return (
    <div className="owner-header-card">
      <div className="oh-main-section">
        
        {/* Avatar */}
        <div className="oh-avatar-container">
          <Avatar
            src={avatar}
            name={fullName}
            email={email}
          />
        </div>

        {/* Identity - با badge نقش در کنار نام */}
        <div className="oh-column oh-identity-col">
          <div className="oh-name-wrapper">
            <h2 className="oh-name">{fullName}</h2>
            <span className="oh-role-badge">{role}</span>
          </div>
          <div className="oh-contact-info">
            <span className="oh-info-item">
              <FiMail className="oh-info-icon" />
              {email}
            </span>
            <span className="oh-info-item">
              <FiPhone className="oh-info-icon" />
              {phone}
            </span>
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="oh-action-section">
        <div className="oh-icon-buttons">
          <button
            className="oh-icon-btn btn-primary-outline"
            title={lang('pages.users.profile.header.actions.openProfile')}
            onClick={() => onAction?.('Profile', id)}
            disabled={!phone}
          >
            <FiExternalLink size={18} />
          </button>
          <button
            className="oh-icon-btn btn-primary-outline"
            title={lang('pages.users.profile.header.actions.callTitle')}
            onClick={() => onAction?.('CALL', phone)}
            disabled={!phone}
          >
            <FiPhone size={18} />
          </button>
          <button
            className="oh-icon-btn btn-primary-outline"
            title={lang('pages.users.profile.header.actions.emailTitle')}
            onClick={() => onAction?.('EMAIL', email)}
            disabled={!email}
          >
            <FiMail size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}