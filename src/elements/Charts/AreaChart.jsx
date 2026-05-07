import './chart.css'

export default function AreaChart({ data, color = "#8b5cf6" }) {
  if (!data || data.length === 0) return null;

  // پشتیبانی همزمان از آرایه اعداد ساده و آبجکت‌ها
  const max = Math.max(...data.map(d => typeof d === 'number' ? d : (d.value || d.amount || 0))) || 1;
  const width = 600, height = 200;
  
  const stepX = data.length > 1 ? width / (data.length - 1) : width;

  const points = data.map((d, i) => {
    // خواندن مقدار صحیح
    const val = typeof d === 'number' ? d : (d.value || d.amount || 0);
    const x = i * stepX;
    const y = height - (val / max) * (height - 30) - 10;
    return { x, y };
  });

  const line = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  // بستن مسیر برای رنگ‌آمیزی زیر نمودار
  const area = `${line} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full chart-fade-in">
      <defs>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.5"/>
          <stop offset="100%" stopColor={color} stopOpacity="0.0"/>
        </linearGradient>
      </defs>

      <path d={area} fill="url(#areaGradient)" className="chart-line-animate" />
      <path d={line} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" className="chart-line-animate" />
    </svg>
  );
}
