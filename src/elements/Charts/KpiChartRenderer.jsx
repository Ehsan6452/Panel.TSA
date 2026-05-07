import BarChart from './BarChart';
import DonutChart from './DonutChart'; 
import AreaChart from './AreaChart';
import LineChart from './LineChart';

export default function KpiChartRenderer({ tabData }) {
  if (!tabData || tabData.type !== 'chart' || !tabData.value) {
    return null;
  }

  // اصلاح مهم: استفاده از height ثابت به جای minHeight
  // اضافه کردن flex برای وسط چین شدن نمودار
  const chartWrapperStyle = { 
    height: '110px', 
    width: '100%', 
    marginTop: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  switch (tabData.chartType) {
    case 'bar':
      return (
        <div className='px-3' style={chartWrapperStyle}>
          <BarChart data={tabData.value} />
        </div>
      );
    case 'pie':
      return (
        <div className='px-3' style={chartWrapperStyle}>
          <DonutChart data={tabData.value} />
        </div>
      );
    case 'area':
      return (
        <div className='px-3' style={chartWrapperStyle}>
          <AreaChart data={tabData.value} />
        </div>
      );
    case 'line':
      return (
        <div className='px-3' style={chartWrapperStyle}>
          <LineChart data={tabData.value} />
        </div>
      );
    default:
      return null;
  }
}
