import { useLang } from '../../../utils/LangHandler';
import { useNavigate } from 'react-router-dom';

import { FaUserShield, FaCalendarCheck, FaHistory, FaBuilding, FaFileContract } from "react-icons/fa";
import { RiFilePaper2Fill } from "react-icons/ri";
import { IoWarning, IoMegaphoneOutline } from "react-icons/io5";
import { FiActivity, FiClipboard, FiMessageCircle, FiGrid, FiUserPlus, FiUsers, FiList, FiSend } from "react-icons/fi";

import './QuickAction.css';

const ICON_REGISTRY = {
  FaUserShield,
  FaCalendarCheck,
  RiFilePaper2Fill,
  IoWarning,
  FiActivity,
  FiClipboard,
  FiMessageCircle,
  FiGrid,
  FiUserPlus,
  IoMegaphoneOutline,
  FiUsers,
  FaHistory,
  FaBuilding,
  FaFileContract,
  FiList,
  FiSend
};

export default function QuickAction({ data }) {
  const { lang } = useLang();
  const navigate = useNavigate();

  if (!data) return <div>Loading...</div>;

  const IconComponent = ICON_REGISTRY[data.icon];

  const handleAction = () => {
    if (data.type === 'navigate') {
      navigate(data.route);
    } else if (data.type === 'modal' && data.onAction) {
      data.onAction();
    }
  };

  const titleLangKey = `pages.${data.title || data.id}.title`;
  const tooltipLangKey = `pages.${data.title || data.id}.tooltip`;

  return (
    <section
      className="quick-action-card"
      onClick={handleAction}
      title={lang(tooltipLangKey)}
    >
      <div className="qa-header">
        <h4>{lang(titleLangKey)}</h4>
      </div>

      <div className="qa-body">
        {IconComponent ? <IconComponent className="qa-icon" /> : <div className="qa-icon-placeholder" />}
      </div>

      <div className="qa-footer">
        <button
          className="qa-button"
          onClick={(e) => {
            e.stopPropagation();
            handleAction();
          }}
        >
          {lang('common.quickAction')}
        </button>
      </div>
    </section>
  );
}
