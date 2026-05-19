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


  const getFooterItemStyle = (item) => {
    const style = {};
    if (item.color) {
      style.backgroundColor = item.color; 
    } else {
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

        const footerItems = Array.isArray(currentData.footer)
          ? currentData.footer
          : [currentData.footer];

        if (footerItems.length === 0) return null;

        return (
          <div className="kpi-footer-container">
            {footerItems.map((item, index) => (
              <div key={index} className="kpi-footer-item">
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
