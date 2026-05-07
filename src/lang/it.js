const it = {
  auth: {
    login: "Accesso",
    username: "Nome utente",
    password: "Password",
    loginButton: "Accedi al sistema",
    logout: "Disconnetti"
  },
  profile: {
    tabs: {
      general: "Generale",
      specific: "Informazioni specifiche",
      permissions: "Permessi",
      history: "Cronologia",
      inventory: "Inventario",
      reservations: "Prenotazioni",
      payments: "Pagamenti",
      docs: "Documenti"
    },
    header: {
      userType: "Tipo di utente",
      joinDate: "Data di iscrizione:",
      lastActivity: "Ultima attività:",
      noEmail: "Email non registrata",
      noPhone: "Telefono non registrato",
      types: {
        traveler: "Viaggiatore",
        supplier: "Fornitore",
        employee: "Dipendente"
      },
      status: {
        active: "Attivo",
        suspended: "Sospeso",
        blocked: "Bloccato"
      },
      actions: {
        callTitle: "Chiama",
        emailTitle: "Invia email",
        deactivateTitle: "Disattiva utente"
      }
    },
    errors: {
      loading: "Caricamento...",
      notFound: "Informazione non trovata"
    }
  },
  sidebar: {
    dashboard: "Dashboard",
    users: "Utenti",
    vendors: "Fornitori",
    employee:'Dipendenti',
    booking: "Prenotazioni",
    financial: "Finanze",
    content: "Contenuti",
    reports: "Report",
    marketing: "Marketing",
    pushNotification: "Notifiche",
    support: "Supporto",
    systemSetting: "Impostazioni sistema",
    logSecurity: "Log e sicurezza"
  },
  pages: {
    dashboard: { title: "Dashboard" },
    users: { title: "Gestione utenti" },
      usersList: { title: "Elenco utenti" },
      usersHistory: { title: "Cronologia azioni utenti" },
    vendors: { title: "Gestione fornitori" },
      vendorsList: { title: "Elenco fornitori" },
      globalInventory: { title: "Tutti i servizi" },
      vendorsDocs: { title: "Documenti fornitori" },
    employee: { title: "Dipendenti" },
      employeeList: { title: "Elenco dipendenti" },
      employeeHistory: { title: "Cronologia azioni dipendenti" },
      employeeDocs: { title: "Documenti e contratti" },
    booking: { title: "Gestione prenotazioni" },
    financial: { title: "Gestione finanziaria" },
    content: { title: "Gestione contenuti" },
    reports: { title: "Report" },
    marketing: { title: "Marketing" },
    pushNotification: { title: "Notifiche push" },
    support: { title: "Supporto" },
    systemSetting: { title: "Impostazioni di sistema" },
    logSecurity: { title: "Log e sicurezza" },
    permissions: {
      title: "Permessi",
      tooltip: "Clicca per accedere rapidamente alla pagina di gestione dei permessi."
    },
    contracts: {
      title: "Contratti",
      tooltip: "Clicca per accedere rapidamente alla pagina di gestione dei contratti."
    },
    reservations: {
      title: "Prenotazioni",
      tooltip: "Clicca per accedere rapidamente alla pagina di gestione delle prenotazioni."
    },
    securityAlerts: {
      title: "Avvisi di sicurezza",
      tooltip: "Clicca per accedere rapidamente alla pagina di gestione degli avvisi di sicurezza."
    },
  },
  kpi: {
    totalUsers: {
      title: "Statistiche utenti",
      tooltip: "Numero totale di utenti registrati",
      onlineStatus: "{val} utenti online"
    },
    newUsers: {
      title: "Nuovi utenti",
      tooltip: "Trend dei nuovi utenti nelle ultime 10 settimane",
      growth: "+{val}% rispetto alla settimana scorsa",
      decline: "-{val}% rispetto alla settimana scorsa",
      neutral: "Nessun cambiamento"
    },
    activeServices: {
      title: "Servizi attivi",
      tooltip: "Utenti che ricevono o forniscono servizi",
      engagement: "{val}% utenti attivi"
    },
    securityAlerts: {
      title: "Avvisi di sicurezza",
      tooltip: "Avvisi di sicurezza del sistema",
      alertCount: "{val} {type}"
    },
  },
  table:{
    id: "ID",
    fullName:'Nome completo',
    email:'Email',
    membershipTier:'Livello di iscrizione',
    totalSpent:'Spesa totale',
    lastBooking:'Ultima prenotazione',
    accountStatus:'Stato account',
    companyName:'Nome azienda',
    serviceCategory:'Categoria servizio',
    manger:'Responsabile',
    commissionRate:'Tasso di commissione',
    rating:'Valutazione',
    contractStatus:'Stato contratto',
    department:'Dipartimento',
    location:'Posizione',
    accessRole:'Ruolo di accesso',
    joinDate:'Data di ingresso',
    status:'Stato'
  },
  membershipTier: {
    bronze:'Bronzo',
    silver:'Argento',
    gold:'Oro'
  },
  accountStatus: {
    Active: "Attivo",
    Inactive: "Inattivo",
    Suspended: "Sospeso"
  },
  department:{
    management:'Gestione',
    support:'Supporto',
    marketting:'Marketing',
    finance:'Finanza',
    technical:'Tecnico'
  },
  roles:{
    superAdmin:'Super amministratore',
    admin:'Amministratore',
    financialManager:'Responsabile finanziario',
    support:'Supporto',
    operationManager:'Responsabile operativo',
    contentManager:'Responsabile contenuti',
    marketingManagement:'Responsabile marketing',
    vendors:'Fornitore',
    technicalAdmin:'Amministratore tecnico',
    auditor:'Revisore'
  },
  common: {
    welcome: "Benvenuto",
    noAccess: "Non hai accesso a questa pagina",
    loading: "Caricamento...",
    error: "Errore",
    panel: "Pannello di amministrazione",
    logout: "Disconnetti",
    action: "Azione",
    seeMore: "Vedi altro",
    quickAction: "Accesso rapido",
    users: {
      travelers: "Viaggiatori",
      users: "utenti",
      vendors: "Fornitori",
      employees: "Dipendenti"
    },
    time: {
      daily: "Giornaliero",
      weekly: "Settimanale",
      monthly: "Mensile",
      quarterly: "Trimestrale",
      yearly: "Annuale"
    },
    services: {
      carRental: "Noleggio auto",
      accommodation: "Alloggio",
      restaurant: "Ristorante",
      entertainment: "Intrattenimento"
    },
    alerts: {
      warning: "Avviso",
      sensitive: "Sensibile",
      critical: "Critico"
    },
    status: {
      new: "Nuovo",
      pending: "In attesa di revisione",
      completed: "Completato",
      approved: "Approvato",
      rejected: "Respinto",
      overview: "Panoramica",
      active: "Attivo",
      inactive: "Inattivo"
    },
  }
};

export default it;
