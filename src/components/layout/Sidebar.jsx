import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLang } from "../../utils/LangHandler.jsx";
import { usePermission } from "../../utils/PermissionHandler.jsx";
import sidebarConfig from "../../config/SidebarConfig.js";

import {
  MdDashboard,
  MdPeople,
  MdStorefront,
  MdEventNote,
  MdAttachMoney,
  MdArticle,
  MdAssessment,
  MdCampaign,
  MdNotifications,
  MdSupport,
  MdSettings,
  MdSecurity,
  MdBadge,
  MdChevronRight
} from "react-icons/md";

import { IoCloseOutline } from "react-icons/io5";

import "./style.css";

const iconMap = {
  dashboard: MdDashboard,
  users: MdPeople,
  vendors: MdStorefront,
  employees: MdBadge,
  booking: MdEventNote,
  financial: MdAttachMoney,
  content: MdArticle,
  reports: MdAssessment,
  marketing: MdCampaign,
  pushNotification: MdNotifications,
  support: MdSupport,
  systemSetting: MdSettings,
  logSecurity: MdSecurity
};

// function SidebarItem({ item, depth = 0 }) {

//   const { lang } = useLang();
//   const { can } = usePermission();
//   const navigate = useNavigate();

//   const [open, setOpen] = useState(false);

//   const hasPermission = (key) => {
//     if (!key) return true;
//     return can(key) || can(`${key}.view`);
//   };

//   const children = (item.children || []).filter(c => hasPermission(c.key));

//   const hasChildren = children.length > 0;

//   if (!hasPermission(item.key) && !hasChildren) return null;

//   const Icon = iconMap[item.key];

//   return (
//     <li className={`sb-item depth-${depth}`}>

//       {hasChildren ? (
//         <div className="sb-parent">

//           <div
//             className="sb-parent-main"
//             onClick={() => item.path && navigate(item.path)}
//           >
//             {Icon && <Icon className="sb-icon" />}
//             <span>{lang(item.label)}</span>
//           </div>

//           <button
//             className={`sb-chevron ${open ? "open" : ""}`}
//             onClick={() => setOpen(!open)}
//           >
//             ▼
//           </button>

//         </div>
//       ) : (
//         <NavLink
//           to={item.path}
//           className={({ isActive }) =>
//             `sb-link ${isActive ? "active" : ""}`
//           }
//         >
//           {Icon && <Icon className="sb-icon" />}
//           <span>{lang(item.label)}</span>
//         </NavLink>
//       )}

//       {hasChildren && open && (
//         <ul className="sb-children">
//           {children.map(child => (
//             <SidebarItem
//               key={child.key}
//               item={child}
//               depth={depth + 1}
//             />
//           ))}
//         </ul>
//       )}

//       {item.dividerAfter && <hr className="sb-divider" />}

//     </li>
//   );
// }

function SidebarItem({ item, depth = 0 }) {

  const { lang } = useLang();
  const { can } = usePermission();

  const [open, setOpen] = useState(false);

  const hasPermission = (key) => {
    if (!key) return true;
    return can(key) || can(`${key}.view`);
  };

  const children = (item.children || []).filter(c => hasPermission(c.key));
  const hasChildren = children.length > 0;

  if (!hasPermission(item.key) && !hasChildren) return null;

  const Icon = iconMap[item.key];

  return (
    <li className={`sb-item depth-${depth}`}>

      {hasChildren ? (
        <div className="sb-parent">

          <NavLink
            to={item.path || "#"}
            className={({ isActive }) =>
              `sb-link sb-parent-main ${isActive ? "active" : ""}`
            }
          >
            {depth > 0
              ? <MdChevronRight className="sb-icon" />
              : Icon && <Icon className="sb-icon" />
            }

            <span>{lang(item.label)}</span>
          </NavLink>

          <button
            className={`sb-chevron ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            ▼
          </button>

        </div>
      ) : (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `sb-link ${isActive ? "active" : ""}`
          }
        >
          {depth > 0
            ? <MdChevronRight className="sb-icon" />
            : Icon && <Icon className="sb-icon" />
          }

          <span>{lang(item.label)}</span>
        </NavLink>
      )}

      {hasChildren && open && (
        <ul className="sb-children">
          {children.map(child => (
            <SidebarItem
              key={child.key}
              item={child}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}

      {item.dividerAfter && <hr className="sb-divider" />}

    </li>
  );
}


export default function Sidebar({ open, onClose }) {

  const { session, role } = usePermission();

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>

      <button className="sidebar-close" onClick={onClose}>
        <IoCloseOutline size={28} />
      </button>

      <div className="sb-profile">

        <div className="sb-avatar">
          {session?.user?.name?.[0] ?? "?"}
        </div>

        <div className="sb-userinfo">

          <span className="sb-name">
            {session?.user?.name ?? "—"}
          </span>

          <span className="sb-role">
            {role ?? "—"}
          </span>

        </div>

      </div>

      <nav className="sb-nav">
        <ul className="sb-list">
          {sidebarConfig.map(item => (
            <SidebarItem key={item.key} item={item} />
          ))}
        </ul>
      </nav>

    </aside>
  );
}
