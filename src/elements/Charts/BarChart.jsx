import './chart.css'

export default function BarChart({ data, color1 = "#22c55e", color2 = "#3b82f6" }) {
  if (!data || data.length === 0) return null;

  // پشتیبانی از هر دو حالت: آرایه عددی ساده و آرایه آبجکت
  const max = Math.max(...data.map(d => typeof d === 'number' ? d : (d.value || d.amount || 0))) || 1;
  const width = 600, height = 200;
  // برای زمانی که فقط دو میله داریم (مثل کارت آخر)، عرض میله خیلی بزرگ نشود
  const barWidth = Math.min((width / data.length) - 5, 60); 

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible chart-fade-in">
      <defs>
        <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={color1} stopOpacity="0.3"/>
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>

      {data.map((item, i) => {
        // استخراج مقدار صحیح (چه عدد باشد چه آبجکت)
        const val = typeof item === 'number' ? item : (item.value || item.amount || 0);
        
        // استفاده از رنگ اختصاصی در صورت وجود در آبجکت، در غیر این صورت استفاده از گرادیانت پیش‌فرض
        const barFill = (typeof item === 'object' && item.color) ? item.color : "url(#barGradient)";
        
        const barHeight = (val / max) * (height - 20); // محاسبه ارتفاع
        const xPos = (i * (width / data.length)) + ((width / data.length) / 2) - (barWidth / 2);

        return (
          <g key={i} className="chart-bar-animate">
            <rect
              x={xPos} y={height - barHeight} width={barWidth} height={barHeight}
              fill={barFill} rx="4"
              className="transition-all duration-300 hover:opacity-80 cursor-pointer"
            />
            {/* نمایش عدد صحیح هنگام هاور شدن */}
            <text x={xPos + (barWidth / 2)} y={height - barHeight - 8} fill="var(--text-primary)" textAnchor="middle" fontSize="14" className="opacity-0 hover:opacity-100 transition-opacity">
               {val}
            </text>
          </g>
        )
      })}
    </svg>
  );
}
