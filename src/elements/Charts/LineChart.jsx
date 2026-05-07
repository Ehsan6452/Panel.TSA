import { useState } from "react";
import './chart.css'

export default function LineChart({ data, color = "#6366f1" }) {
  const [hover, setHover] = useState(null);

  if (!data || data.length === 0) return null;

  const max = Math.max(...data.map(d => typeof d === 'number' ? d : (d.value || d.amount || 0))) || 1;
  const width = 600, height = 200;
  
  // حاشیه افقی برای جلوگیری از بریده شدن تولتیپ و نقاط در اول و آخر نمودار
  const paddingX = 40; 
  const drawingWidth = width - (paddingX * 2); 
  
  const stepX = data.length > 1 ? drawingWidth / (data.length - 1) : drawingWidth;

  const points = data.map((d, i) => {
    const val = typeof d === 'number' ? d : (d.value || d.amount || 0);
    // اضافه کردن paddingX به مختصات x
    const x = paddingX + (i * stepX);
    const y = height - (val / max) * (height - 80) - 20; 
    return { x, y, val, originalData: d };
  });

  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible chart-fade-in">
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* خطوط راهنمای پس زمینه */}
      {[0, 0.5, 1].map((ratio, i) => {
        const yPos = height - (ratio * (height - 80)) - 20;
        return (
          <line 
            key={i} 
            x1={paddingX - 10} // کمی بیرون‌زدگی از خطوط برای زیبایی
            y1={yPos} 
            x2={width - paddingX + 10} 
            y2={yPos} 
            stroke="#334155" 
            strokeDasharray="4" 
            strokeOpacity="0.3" 
          />
        )
      })}

      {/* خط اصلی نمودار */}
      <path 
        d={path} 
        fill="none" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="chart-line-animate" 
        filter="url(#glow)" 
      />

      {/* نقاط روی خط */}
      {points.map((p, i) => {
        const isHovered = hover && hover.x === p.x;
        return (
          <circle
            key={i} 
            cx={p.x} 
            cy={p.y} 
            r={isHovered ? "8" : "6"} 
            fill="#1e293b" 
            stroke={color} 
            strokeWidth="3"
            className="transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHover(p)} 
            onMouseLeave={() => setHover(null)}
          />
        )
      })}

      {/* Tooltip */}
      {hover && (
        <g className="chart-tooltip transition-all duration-200">
          <rect x={hover.x - 30} y={hover.y - 45} width="60" height="28" fill="#cbd5e1" rx="6" />
          <path d={`M ${hover.x - 5} ${hover.y - 17} L ${hover.x + 5} ${hover.y - 17} L ${hover.x} ${hover.y - 10} Z`} fill="#cbd5e1" />
          <text x={hover.x} y={hover.y - 26} fill="#0f172a" fontSize="14" fontWeight="bold" textAnchor="middle">
            {hover.val}
          </text>
        </g>
      )}
    </svg>
  );
}
