import { useLang } from '../../utils/LangHandler.jsx';
import { usePermission } from '../../utils/PermissionHandler.jsx';

import QuickView from '../QuickView/QuickView.jsx';
import KpiCards from '../kpiCards/kpiCards.jsx';
import QuickAction from '../common/QuickAction/QuickAction.jsx';

import './Dashboard.css'

export default function DashboardRenderer({
  kpiCards = [],
  tableData=[],
  quickActions = [],
  loading = false,
  permissionBase = "dashboard"
}) {

  const { lang } = useLang();
  const { can } = usePermission();
 
  return (
    <div className="flex-column test w-full flex-1">

      {can(`${permissionBase}.kpiCards.show`) && (
        loading ? (
          <div className='w-full text-center'>{lang('common.loading')}</div>
        ) : kpiCards.length > 0 ? (
          <div className='kpi-cards-container w-full'>
            {kpiCards.map((kpi, index) => (
              <div key={kpi.id || index} className='kpi-card-wrapper'>
                <KpiCards config={kpi}/>
              </div>
            ))}
          </div>
        ) : null
      )}

      <div className="QuickRow flex-1">

        {can(`${permissionBase}.quickAction.show`) && (
          loading ? (
            <div className='w-full text-center'>{lang('common.loading')}</div>
          ) : quickActions.length > 0 ? (
            <div className="actions">
              {quickActions.map((action, index) => (
                <div key={action.id || index} className="QuickAction">
                  <QuickAction data={action}/>
                </div>
              ))}
            </div>
          ) : null
        )}

        {can(`${permissionBase}.quickView.show`) && (
          <div className="quickview">
            <QuickView tableData={tableData}/>
          </div>
        )}

      </div>

    </div>
  );
}
