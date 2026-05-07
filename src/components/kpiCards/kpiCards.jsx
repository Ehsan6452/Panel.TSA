// src/components/KpiCards/KpiCard.jsx
import React, { useState } from 'react';
import { useLang } from '../../utils/LangHandler.jsx';
import KpiChartRenderer from '../../elements/Charts/KpiChartRenderer.jsx';
import './KpiCards.css';

export default function KpiCard({ config }) {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState(config.tabs[0]?.id);

  if (!config) return null;

  const currentData = config.data[activeTab];

  const formatText = (text, val, typeKey) => {
    if (!text) return '';
    let result = text.replace('{val}', val);
    if (typeKey) {
      result = result.replace('{type}', lang(typeKey));
    }
    return result;
  };

  // تابع کمکی برای تعیین استایل رنگی آیتم فوتر
  const getFooterItemStyle = (item) => {
    const style = {};
    if (item.color) {
      style.backgroundColor = item.color; // استفاده از رنگ دلخواه
    } else {
      // اگر رنگ دلخواه نبود، از کلاس‌های استایل پیش‌فرض بر اساس status استفاده کن
      // این بخش ممکن است نیاز به تطبیق با CSS شما داشته باشد
      // مثال: اگر کلاس‌های CSS شما برای رنگ‌بندی dot ها چیزی شبیه 'bg-info', 'bg-success' باشد
      // ما اینجا فقط یک استایل inline برای نمایش رنگ در نظر می‌گیریم
      // در CSS خود باید برای این کلاس‌ها تعریف رنگ پس‌زمینه را اضافه کنید
      // یا اگر فقط برای dot است، آن را متفاوت هندل کنید.
      // برای سادگی، اینجا فقط یک نمونه ساده از رنگ‌دهی را پیاده‌سازی می‌کنیم
      if (item.status === 'info') style.backgroundColor = 'var(--color-blue)'; // مثال
      if (item.status === 'success') style.backgroundColor = 'var(--color-green)'; // مثال
      if (item.status === 'warning') style.backgroundColor = 'var(--color-orange)'; // مثال
      if (item.status === 'error') style.backgroundColor = 'var(--color-red)'; // مثال
    }
    return style;
  };

  return (
    <div className="kpi-card">
      {/* --- Header --- */}
      <div className="kpi-header">
        <div className="kpi-title-row">
          <h3 className="kpi-title">{lang(config.header.titleKey)}</h3>
          {config.header.tooltipKey && (
            <div className="kpi-tooltip-icon" title={lang(config.header.tooltipKey)}>
              ?
            </div>
          )}
        </div>

        {config.tabs.length > 0 && (
          <div className="kpi-tabs">
            {config.tabs.map((tab) => (
              <button
                key={tab.id}
                className={`kpi-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {lang(tab.labelKey)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* --- Content --- */}
      <div className="kpi-content">
        {!currentData ? (
          /* در صورتی که دیتایی برای تب انتخاب شده از سمت بک‌اند نیامده باشد */
          <div className="kpi-no-data" style={{ color: 'var(--text-secondary)', padding: '2rem 0', textAlign: 'center' }}>
            داده‌ای یافت نشد
          </div>
        ) : (
          <>
            {currentData.type === 'number' && (
              <div className="kpi-big-number">
                {currentData.value.toLocaleString()}
              </div>
            )}
            {currentData.type === 'chart' && (
              <KpiChartRenderer tabData={currentData} />
            )}
          </>
        )}
      </div>

      {/* --- Footer --- */}
      {(() => {
        if (!currentData || !currentData.footer) return null;

        // اگر فوتر آرایه نبود، آن را داخل یک آرایه می‌گذاریم
        const footerItems = Array.isArray(currentData.footer)
          ? currentData.footer
          : [currentData.footer];

        if (footerItems.length === 0) return null;

        return (
          <div className="kpi-footer-container">
            {footerItems.map((item, index) => (
              <div key={index} className="kpi-footer-item">
                {/* تغییر برای پذیرش رنگ دلخواه */}
                <div
                  className="blinking-dot"
                  style={getFooterItemStyle(item)}
                ></div>
                <span className="kpi-footer-text">
                  {formatText(
                    lang(item.textKey),
                    item.textVal,
                    item.typeKey
                  )}
                </span>
              </div>
            ))}
          </div>
        );
      })()}
    </div>
  );
}
