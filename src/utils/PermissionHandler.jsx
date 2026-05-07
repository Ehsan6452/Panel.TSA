import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react';

import permissionProfiles from '../config/Permisssions';

// ─────────────────────────────────────────────────────────────

const STORAGE_KEY = 'user_session';

class PermissionHandler {
  constructor() {
    this.session   = this._load();
    this.listeners = [];
  }

  _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  setSession(userData) {
    this.session = userData;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    this._notify();
  }

  clearSession() {
    this.session = null;
    localStorage.removeItem(STORAGE_KEY);
    this._notify();
  }

  getRole()    { return this.session?.role  ?? null; }
  getUser()    { return this.session        ?? null; }
  isLoggedIn() { return Boolean(this.session); }

  _rolePerms() {
    const role = this.getRole();
    return role ? (permissionProfiles[role] ?? null) : null;
  }

  can(path) {
    if (!path) return false;

    if (!this.isLoggedIn()) return false;

    // ① نقش پایه
    const rp   = this._rolePerms();
    const keys = path.split('.');
    let   val  = rp;
    for (const k of keys) {
      val = val?.[k];
      if (val === undefined) break;
    }
    if (val === true) return true;

    // ② extraPermissions
    return (this.session?.extraPermissions ?? []).includes(path);
  }

  canViewPage(page) { return this.can(`${page}.view`); }

  getSection(section) {
    const base   = { ...(this._rolePerms()?.[section] ?? {}) };
    const extras = this.session?.extraPermissions ?? [];
    extras.forEach(path => {
      const parts = path.split('.');
      if (parts[0] === section && parts.length === 2)
        base[parts[1]] = true;
    });
    return base;
  }

  subscribe(fn) {
    this.listeners.push(fn);
    return () => { this.listeners = this.listeners.filter(l => l !== fn); };
  }

  _notify() { this.listeners.forEach(l => l(this.session)); }
}

// Singleton
const permissionHandler = new PermissionHandler();

// ─────────────────────────────────────────────────────────────

const PermissionContext = createContext(null);

export function PermissionProvider({ children }) {
  const [session, setSession] = useState(() => permissionHandler._load());

  useEffect(() => permissionHandler.subscribe(setSession), []);

  return (
    <PermissionContext.Provider value={{ session, ph: permissionHandler }}>
      {children}
    </PermissionContext.Provider>
  );
}

export function usePermission() {
  const ctx = useContext(PermissionContext);
  if (!ctx) throw new Error('usePermission must be used inside PermissionProvider');

  const { session, ph } = ctx;

  const can         = useCallback((path)     => ph.can(path),          [session]); // eslint-disable-line
  const canViewPage = useCallback((page)     => ph.canViewPage(page),  [session]); // eslint-disable-line
  const getSection  = useCallback((section)  => ph.getSection(section),[session]); // eslint-disable-line

  return {
    session,
    role        : ph.getRole(),
    isLoggedIn  : ph.isLoggedIn(),
    can,
    canViewPage,
    getSection,
    setSession  : (d) => ph.setSession(d),
    clearSession: ()  => ph.clearSession()
  };
}

export default permissionHandler;
