import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react';

import fa from '../lang/fa.js';
import en from '../lang/en.js';
import ar from '../lang/ar.js';
import tr from '../lang/tr.js';
import az from '../lang/az.js';
import hy from '../lang/hy.js';
import tj from '../lang/tj.js';
import ru from '../lang/ru.js';
import fr from '../lang/fr.js';
import it from '../lang/it.js';

// ─────────────────────────────────────────────────────────────

const STORAGE_KEY = 'app_language';

const locales = { fa, en, ar, tr, az, hy, tj, ru, fr, it };

export const languages = [
  { code: 'fa', label: 'فارسی', dir: 'rtl' },
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'tr', label: 'Türkçe', dir: 'ltr' },
  { code: 'az', label: 'Azərbaycan dili', dir: 'ltr' },
  { code: 'hy', label: 'Հայերեն', dir: 'ltr' },
  { code: 'tj', label: 'Тоҷикӣ', dir: 'ltr' },
  { code: 'ru', label: 'Русский', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'it', label: 'Italiano', dir: 'ltr' },
];


// ─────────────────────────────────────────────────────────────

function getNestedValue(obj, path) {
  if (typeof path !== "string") {
    return path;
  }
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

// ─────────────────────────────────────────────────────────────

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [langCode, setLangCode] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || 'fa';
  });


  useEffect(() => {
    const lang = languages.find(l => l.code === langCode);
    document.documentElement.dir  = lang?.dir  ?? 'rtl';
    document.documentElement.lang = langCode;
    localStorage.setItem(STORAGE_KEY, langCode);
  }, [langCode]);

  const lang = useCallback((path) => {
    const translations = locales[langCode] ?? locales['fa'];
    return getNestedValue(translations, path) ?? path;
  }, [langCode]);

  const changeLanguage = useCallback((code) => {
    if (locales[code]) setLangCode(code);
  }, []);

  const currentLang = languages.find(l => l.code === langCode);

  return (
    <LangContext.Provider value={{ langCode, currentLang, lang, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LangProvider');
  return ctx;
}
