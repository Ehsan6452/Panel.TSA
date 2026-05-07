import { useLang, languages }  from '../../utils/LangHandler.jsx';
import { usePermission }       from '../../utils/PermissionHandler.jsx';
import { useTheme }            from '../../utils/ThemeHandler.jsx';
import LanguageSelect from '../common/LanguageSelect.jsx';
import { IoLanguage, IoLogOutOutline, IoSunnyOutline, IoMoonOutline,IoMenuOutline  } from 'react-icons/io5';

export default function Header({onMenuClick}) {
  const { lang, langCode, changeLanguage } = useLang();
  const { session, clearSession }          = usePermission();
  const { theme, toggleTheme }             = useTheme();

  return (
    <header className="header">
      <div className="header-brand">
        <button className="menu-btn" onClick={onMenuClick}>
          <IoMenuOutline size={26}/>
        </button>
        <span className="header-title">{lang("common.panel")}</span>
      </div>

      <div className="header-actions">

        <div className="lang-selector">
          <IoLanguage size={25} />
          <LanguageSelect languages={languages} onChange={(code)=> changeLanguage(code)}/>
        </div>

        <button className="theme-toggle" onClick={toggleTheme} title={theme}>
          {theme === 'light'
            ? <IoMoonOutline size={20} />
            : <IoSunnyOutline size={20} />
          }
        </button>

        {session && (
          <div className="header-user">
            <span className="header-username">{session.name}</span>
            <button
              className="logout-btn"
              onClick={clearSession}
              title={lang('common.logout')}
            >
              <IoLogOutOutline size={18} />
            </button>
          </div>
        )}

      </div>
    </header>
  );
}
