import React from 'react';
import './StatCard.css'; // در صورت نیاز استایل‌های مربوطه را اینجا قرار دهید یا از همان css قبلی استفاده کنید

export default function StatCard({ label, value, valueClassName = '', type = 'text' }) {
    return (
        <div className="ust-stat-card">
            <span className="ust-stat-label">{label}</span>
            
            {type === 'tags' && Array.isArray(value) ? (
                <div className="ust-tags-container">
                    {value.map((item, index) => (
                        <span key={index} className="ust-tag">{item}</span>
                    ))}
                </div>
            ) : (
                <span className={`ust-stat-value ${valueClassName}`.trim()}>
                    {value}
                </span>
            )}
        </div>
    );
}
