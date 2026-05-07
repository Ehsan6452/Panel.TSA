import { useState } from 'react';
import { useLang } from '../../utils/LangHandler';
import './chart.css';

export default function DonutChart({ data }) {
  const { lang } = useLang();

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // تغییر amount به value
  const total = data.reduce((sum, item) => sum + (item.value || 0), 0) || 1;

  const COLORS = ["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#06b6d4"];

  const radius = 7;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;

  // تغییر amount به value
  const centerValue =
    hoveredIndex !== null
      ? (data[hoveredIndex].value || 0)
      : total;

  return (
    <div className="donut-wrapper w-full flex">

      <svg viewBox="10 10 20 20" width="140" height="140">

        <g transform="rotate(-90 20 20)">

          <circle
            cx="20"
            cy="20"
            r={radius}
            fill="transparent"
            stroke="#1e293b"
            strokeWidth="5"
          />

          {data.map((item, i) => {

            // تغییر amount به value
            const value = item.value || 0;
            const strokeLength = (value / total) * circumference;
            const dashOffset = -((cumulative / total) * circumference);
            cumulative += value;

            // خواندن رنگ از دیتا (اگر نبود، استفاده از پیش‌فرض)
            const color = item.color || COLORS[i % COLORS.length];
            const isHovered = hoveredIndex === i;

            return (
              <circle
                key={i}
                cx="20"
                cy="20"
                r={radius}
                fill="transparent"
                stroke={color}
                strokeWidth={isHovered ? "3" : "2.5"}
                strokeDasharray={`${strokeLength} ${circumference}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                className={`donut-slice ${isHovered ? "slice-hover" : ""}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            );
          })}
        </g>

        <text
          x="20"
          y="20"
          textAnchor="middle"
          dominantBaseline="middle"
          className="donut-center-text"
        >
          {centerValue}
        </text>

      </svg>

      {/* legend */}
      <div className="donut-legend">

        {data.map((item, i) => {

          const rawName = item.nameKey;
          const translatedName = rawName ? lang(rawName) : lang(`item_${i}`);
          
          // خواندن رنگ از دیتا برای راهنمای نمودار
          const color = item.color || COLORS[i % COLORS.length];

          return (
            <div
              key={i}
              className="legend-item"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span
                className="legend-dot"
                style={{ backgroundColor: color }}
              />

              <span className="legend-text">
                {translatedName}
              </span>
            </div>
          );
        })}

      </div>

    </div>
  );
}
