import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../../../utils/LangHandler'; 
import { usePermission } from '../../../utils/PermissionHandler';

export default function ProfileSidebar({ tabs = [], activeTab, onTabChange, type, subType }) {
  const { lang } = useLang();
  const { can } = usePermission();
  const navigate = useNavigate();

  return (
    <div className="profile-sidebar-wrapper">
      <nav className="psb-nav">
        <ul className="psb-list">
          {tabs.map((tab) => {
            const permissionKey = `${type}.profile.${tab.key}.view`;

            // ۱. بررسی دسترسی از سیستم پرمیشن‌ها
            if (!can(permissionKey)) {
              return null;
            }

            // ۲. بررسی منطق بیزینسی (تب رزرو فقط برای مسافرین در بخش کاربران)
            if (type === 'users' && tab.key === 'reservations' && subType !== 'traveler') {
               return null; 
               // اگر نوع پروفایل users بود و تب رزرو بود، 
               // ولی ساب‌تایپ کاربر traveler نبود (مثلا admin بود)، این تب ساخته نمی‌شود.
            }

            return (
              <li key={tab.key} className="psb-item">
                <button
                  className={`psb-btn ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => onTabChange(tab.key)}
                >
                  <span className="psb-label">{lang(`profile.tabs.${tab.key}`)}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
