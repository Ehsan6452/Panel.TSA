import { useState } from 'react';
import { useLang } from '../../utils/LangHandler';

export default function PieChart({ data }) {
  const { lang } = useLang();
  const [tooltip, setTooltip] = useState({ show: false, text: '', color: '', x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!data || data.length === 0) return null;

  const total = data.reduce((sum, item) => sum + (item.value || item.amount || 0), 0) || 1;
  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#06b6d4"];

  // برای ساخت Pie Chart دقیق با stroke، شعاع 16 است تا با استروک 32 کل دایره پر شود
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;

  const handleMouseMove = (e, name, percentage, color, index) => {
    setHoveredIndex(index);
    setTooltip({
      show: true,
      text: `${percentage}% ${name}`,
      color: color,
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setTooltip(prev => ({ ...prev, show: false }));
  };

  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <svg viewBox="0 0 32 32" className="h-[90%] w-auto rounded-full overflow-hidden">
        {data.map((item, i) => {
          const value = item.value || item.amount || 0;
          const strokeLength = (value / total) * circumference;
          const dashOffset = -((cumulative / total) * circumference);
          cumulative += value;
          
          const rawName = item.nameKey;
          const translatedName = rawName ? lang(rawName) : lang(`item_${i}`); 
          const percentage = Math.round((value / total) * 100);
          
          // استفاده از رنگ دیتای بک‌اند یا رنگ‌های پیش‌فرض
          const color = item.color || COLORS[i % COLORS.length];
          const isHovered = hoveredIndex === i;

          return (
            <circle
              key={i}
              cx="16"
              cy="16"
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth="32"
              strokeDasharray={`${strokeLength} ${circumference}`}
              strokeDashoffset={dashOffset}
              className="transition-all duration-300 ease-out cursor-pointer"
              style={{ 
                transformOrigin: 'center', 
                transform: 'rotate(-90deg)',
                opacity: hoveredIndex !== null && !isHovered ? 0.6 : 1 // کم‌رنگ شدن بقیه قطاع‌ها در زمان هاور
              }}
              onMouseMove={(e) => handleMouseMove(e, translatedName, percentage, color, i)}
              onMouseLeave={handleMouseLeave}
            />
          )
        })}
      </svg>

      {/* Tooltip مشابه DonutChart */}
      {tooltip.show && (
        <div 
          className="fixed z-[99999] pointer-events-none flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800 text-white rounded-md shadow-lg text-[11px] font-medium whitespace-nowrap"
          style={{ 
            top: tooltip.y - 35,
            left: tooltip.x,
            transform: 'translateX(-50%)',
          }}
        >
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tooltip.color }}></span>
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
