const it = {
  // ==================== GLOBALI ====================
  common: {
    welcome: "Benvenuto",
    panel: "Pannello di Amministrazione",
    loading: "Caricamento...",
    error: "Errore",
    noAccess: "Non hai accesso a questa pagina",
    logout: "Esci",
    action: "Azione",
    seeMore: "Vedi altro",
    seeDetails: "Vedi dettagli",
    quickAction: "Accesso rapido",
    search: "Cerca...",
    export: "Esporta",
    noData: "Nessun dato disponibile",
    rowsPerPage: "Righe per pagina",
    prev: "Precedente",
    next: "Successivo",
    users: {
      users: "Utenti",
      travelers: "Viaggiatori",
      vendors: "Fornitori",
      employees: "Dipendenti",
      admins: "Amministratori"
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
      rejected: "Rifiutato",
      overview: "Panoramica",
      active: "Attivo",
      inactive: "Inattivo",
      suspended: "Sospeso",
      pendingRenewal: "In attesa di rinnovo"
    }
  },

  // ==================== AUTENTICAZIONE ====================
  auth: {
    login: "Accedi",
    username: "Nome utente",
    password: "Password",
    loginButton: "Accedi al sistema",
    logout: "Esci"
  },

  // ==================== BARRA LATERALE ====================
  sidebar: {
    dashboard: "Dashboard",
    users: "Utenti",
    vendors: "Fornitori",
    employees: "Dipendenti",
    booking: "Prenotazioni",
    financial: "Finanze",
    content: "Contenuti",
    reports: "Report",
    marketing: "Marketing",
    pushNotification: "Notifiche",
    support: "Supporto",
    systemSetting: "Impostazioni di sistema",
    logSecurity: "Log e Sicurezza"
  },

  // ==================== NOMI SCHEDE (riutilizzabili) ====================
  tabs: {
    all: "Tutti i log",
    security: "Sicurezza",
    completed: "Completati",
    pending: "In attesa",
    cancelled: "Annullati",
    activity: "Attività",
    users: "Utenti",
    travelers: "Viaggiatori",
    vendors: "Fornitori",
    employees: "Dipendenti",
    admins: "Amministratori",
    accommodation: "Alloggio",
    carRental: "Noleggio auto",
    restaurant: "Ristorante",
    entertainment: "Intrattenimento",
    info: "Info",
    warning: "Avviso",
    critical: "Critico",
    management: "Gestione",
    support: "Supporto",
    marketing: "Marketing",
    finance: "Finanza",
    technical: "Tecnico"
  },

  // ==================== PROFILO (struttura condivisa) ====================
  profile: {
    tabs: {
      general: "Generale",
      specific: "Specifico",
      admins: "Amministratori",
      permissions: "Permessi",
      history: "Cronologia",
      inventory: "Inventario",
      reservations: "Prenotazioni",
      payments: "Pagamenti",
      docs: "Documenti"
    }
  },

  // ==================== PAGINE ====================
  pages: {
    dashboard: {
      title: "Dashboard"
    },

    // ----- Utenti -----
    addUser: { title: "Aggiungi nuovo utente" },
    users: {
      title: "Gestione utenti",
      list: {
        title: "Elenco utenti"
      },
      history: {
        title: "Cronologia attività utente"
      },
      profile: {
        header: {
          userType: "Tipo utente",
          joinDate: "Data di iscrizione:",
          lastActivity: "Ultima attività:",
          noEmail: "Email non fornita",
          noPhone: "Numero di telefono non fornito",
          noName: "Nome non fornito",
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
            callTitle: "Chiamata telefonica",
            emailTitle: "Invia email",
            deactivateTitle: "Disattiva utente",
            editTitle: "Modifica utente"
          }
        },
        errors: {
          loading: "Caricamento...",
          notFound: "Informazioni non trovate"
        },
        general: {
          loadingInfo: "Caricamento informazioni...",
          fields: {
            firstName: "Nome",
            lastName: "Cognome",
            email: "Email",
            phoneNumber: "Numero di telefono",
            userType: "Tipo utente",
            subType: "Sottotipo"
          },
          info: {
            joinDate: "Data di iscrizione",
            lastActivity: "Ultima attività"
          },
          actions: {
            forceLogout: "Disconnessione forzata",
            reVerify: "Riverifica",
            sendTempPass: "Invia password temporanea"
          },
          sections: {
            recentChats: "Chat recenti e ticket attivi"
          },
          table: {
            id: "ID",
            subject: "Oggetto",
            status: "Stato",
            date: "Data"
          }
        },
        userSpecificTraveler: {
          loading: "Caricamento dati del viaggiatore...",
          stats: {
            rating: "Valutazione media",
            profit: "Profitto (commissione)",
            favorites: "Servizi preferiti",
            totalBookings: "Prenotazioni totali"
          },
          documents: {
            nationalId: "Documento d'identità",
            passport: "Numero di passaporto",
            dob: "Data di nascita",
            nationality: "Nazionalità",
            language: "Lingua principale",
            specialNeeds: "Esigenze particolari / Dieta"
          },
          titles: {
            companions: "Accompagnatori (persone a carico)"
          },
          table: {
            fullName: "Nome completo",
            relation: "Parentela",
            documentId: "Numero documento (passaporto/identità)",
            dob: "Data di nascita"
          }
        },
        userSpecificAdmin: {
          loading: "Caricamento dati dell'amministratore...",
          titles: {
            inventory: "Ambito di inventario assegnato"
          },
          vendor: {
            subtitle: "Rappresentante legale per:",
            viewProfile: "Visualizza profilo fornitore"
          },
          stats: {
            role: "Ruolo e dipartimento",
            shift: "Turno di lavoro",
            repLetter: "Lettera di rappresentanza",
            allowedIps: "IP consentiti (whitelist)"
          },
          table: {
            id: "ID prodotto",
            name: "Nome prodotto/servizio",
            type: "Tipo",
            status: "Stato"
          }
        },
        permissions: {
          loading: "Caricamento permessi...",
          title: "Permessi e controllo accessi",
          description: "Visualizza i permessi assegnati a questo utente. Per modificare, vai al pannello di gestione dei ruoli."
        },
        history: {
          title: "Cronologia attività utente"
        },
        reservations: {
          title: "Prenotazioni del viaggiatore"
        }
      }
    },

    // ----- Fornitori -----
    addVendor: { title: "Aggiungi nuovo fornitore" },
    vendors: {
      title: "Gestione fornitori",
      list: {
        title: "Elenco fornitori"
      },
      inventory: {
        title: "Tutti i servizi"
      },
      docs: {
        title: "Documenti fornitore"
      },
      profile: {
        general: {
          loadingInfo: "Caricamento informazioni fornitore...",
          fields: {
            brandName: "Nome del marchio",
            formalName: "Ragione sociale legale",
            idCode: "Codice di registrazione / ID nazionale",
            email: "Email",
            phoneNumber: "Numero di telefono",
            emergencyPhone: "Telefono di emergenza",
            website: "Sito web",
            userType: "Tipo di entità",
            subType: "Categoria di servizio",
            status: "Stato"
          },
          info: {
            joinDate: "Data di iscrizione",
            lastActivity: "Ultima attività"
          },
          actions: {
            forceLogout: "Disconnessione forzata",
            reVerify: "Riverifica",
            sendTempPass: "Invia password temporanea"
          },
          sections: {
            recentTickets: "Ticket recenti"
          },
          table: {
            id: "ID",
            subject: "Oggetto",
            status: "Stato",
            date: "Data"
          }
        },
        vendorSpecificAccommodations: {
          loading: "Caricamento dati alloggio...",
          stats: {
            allInventory: "Inventario totale",
            rate: "Valutazione",
            commission: "Commissione (Sistema)",
            allReserve: "Prenotazioni totali"
          },
          documents: {
            type: "Tipo di struttura",
            rate: "Numero di stelle",
            checkIn: "Fascia oraria check-in",
            checkOut: "Fascia oraria check-out",
            options: "Servizi e opzioni",
            cancelPolicy: {
              title: "Politica di cancellazione",
              lessThan24h: "Meno di 24h prima dell'arrivo",
              lessThan48h: "Meno di 48h prima dell'arrivo",
              lessThan72h: "Meno di 72h prima dell'arrivo"
            }
          },
          titles: {
            activeReserves: "Prenotazioni attive"
          },
          table: {
            id: "ID prenotazione",
            user: "Ospite",
            room: "Camera",
            date: "Data",
            status: "Stato",
            price: "Prezzo",
            commission: "Commissione"
          }
        }
      }
    },

    // ----- Dipendenti -----
    employee: {
      title: "Dipendenti",
      list: {
        title: "Elenco dipendenti"
      },
      history: {
        title: "Cronologia attività dipendente"
      },
      docs: {
        title: "Documenti e contratti"
      }
    },

    // ----- Altre pagine -----
    booking: { title: "Gestione prenotazioni" },
    financial: { title: "Gestione finanziaria" },
    content: { title: "Gestione contenuti" },
    reports: { title: "Report" },
    marketing: { title: "Marketing" },
    pushNotification: { title: "Notifiche push" },
    support: { title: "Supporto" },
    systemSetting: { title: "Impostazioni di sistema" },
    logSecurity: { title: "Log e Sicurezza" },

    // ----- Suggerimenti accesso rapido -----
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
    }
  },

  // ==================== FILTRI ====================
  filters: {
    all_severity: "Tutte le gravità",
    severity: {
      info: "Info",
      warning: "Avviso",
      critical: "Critico"
    }
  },

  // ==================== CRONOLOGIA ATTIVITÀ ====================
  history: {
    types: {
      login: "Accesso utente",
      profile_update: "Aggiornamento profilo",
      booking: "Azione di prenotazione",
      failed_login: "Accesso fallito",
      payment: "Pagamento"
    },
    severity: {
      info: "Info",
      warning: "Avviso",
      critical: "Critico"
    }
  },

  // ==================== CARTE KPI (Dashboard) ====================
  kpi: {
    totalUsers: {
      title: "Statistiche utenti",
      tooltip: "Mostra il numero totale di utenti registrati suddivisi per ruolo",
      onlineStatus: "{val} utenti online"
    },
    newUsers: {
      title: "Nuovi utenti",
      tooltip: "Andamento dell'acquisizione di nuovi utenti nelle ultime 10 settimane",
      growth: "Crescita del {val}% rispetto alla scorsa settimana",
      decline: "Diminuzione del {val}% rispetto alla scorsa settimana",
      neutral: "Nessuna variazione rispetto alla scorsa settimana"
    },
    activeServices: {
      title: "Coinvolgimento servizi attivi",
      tooltip: "Utenti che attualmente ricevono o forniscono servizi",
      engagement: "{val}% degli utenti coinvolti"
    },
    securityAlerts: {
      title: "Avvisi di sicurezza",
      tooltip: "Avvisi di sistema e di sicurezza registrati per gli account utente",
      alertCount: "{val} avviso/i di tipo {type}"
    },
    accountStatus: {
      title: "Stato dell'account",
      tooltip: "Confronta account attivi e bloccati per monitorare la salute e la sicurezza della piattaforma.",
      active: "Attivo",
      blocked: "Bloccato",
      recentBlocks: "{val} account bloccati nelle ultime 24 ore",
      secureStatus: "Nessuna violazione di sicurezza recente"
    },
    activityRate: {
      title: "Tasso di attività",
      tooltip: "Andamento degli accessi unici degli utenti nel periodo selezionato",
      growth: "Crescita del {val}% rispetto al periodo precedente",
      decline: "Diminuzione del {val}% rispetto al periodo precedente",
      neutral: "Nessuna variazione rispetto al periodo precedente"
    },
    conversionRate: {
      title: "Tasso di conversione utenti",
      tooltip: "Traccia la percentuale di utenti che si muovono attraverso il ciclo di vita: dalla registrazione alla prima prenotazione, e dalla prima prenotazione al cliente fedele.",
      tabs: {
        firstBooking: "Da ospite a cliente",
        repeatBooking: "Da cliente a fedele"
      },
      growth: "+{val}% rispetto al periodo precedente",
      decline: "-{val}% rispetto al periodo precedente"
    },
    accountRatio: {
      title: "Account vs. Viaggiatori reali",
      tooltip: "Confronta il numero totale di account registrati con il numero di utenti che hanno effettuato almeno una prenotazione.",
      tabs: {
        thisYear: "Quest'anno",
        allTime: "Sempre"
      },
      labels: {
        totalAccounts: "Totale registrati",
        realTravelers: "Viaggiatori attivi"
      },
      footerText: "{val}% degli account registrati sono viaggiatori attivi"
    },
    kycStatus: {
      title: "Stato verifica documenti KYC",
      tooltip: "Mostra lo stato di verifica dei documenti inviati dai fornitori legali",
      tabs: {
        new: "Nuovo",
        pending: "In attesa di revisione",
        completed: "Completato"
      },
      footer: {
        newTotal: "Totale nuovi documenti: {val}",
        pendingTotal: "Documenti in attesa di revisione: {val}",
        approvalRate: "Tasso di approvazione: {val}",
        rejectionRate: "Tasso di rifiuto: {val}"
      }
    },
    supplierCapacity: {
      title: "Attività e capacità libera",
      tooltip: "Mostra quanti fornitori sono attivi oggi e quanta capacità libera è disponibile per categoria di servizio.",
      tabs: {
        activity: "Attività fornitori",
        capacity: "Capacità libera"
      },
      activityChart: "Stato attività fornitori",
      freeCapacityChart: "Capacità disponibile per servizio",
      footer: {
        activeSummary: "Fornitori attivi: {val}",
        totalFreeCapacity: "Capacità totale disponibile: {val}"
      }
    },
    revenue: {
      title: "Servizi generatori di ricavi",
      tooltip: "Mostra quanti ricavi ogni categoria di fornitore ha generato per l'azienda nel periodo selezionato.",
      footer: {
        amount: "{val} mila"
      }
    },
    satisfaction: {
      title: "Soddisfazione dei viaggiatori",
      tooltip: "Valutazione media della soddisfazione per categoria di servizio basata sul feedback dei clienti."
    },
    unauth: {
      title: "Tentativi di accesso non autorizzato",
      tooltip: "Mostra quanti tentativi di accesso non autorizzato si sono verificati per ciascun livello di rischio.",
      unit: "tentativo/i",
      footer: {
        topSource: "Fonte principale: {val}"
      },
      level: {
        high: "Rischio alto",
        sensitive: "Sensibile",
        low: "Rischio basso"
      }
    },
    requests: {
      title: "Richieste ufficiali in corso",
      tooltip: "Mostra il numero di richieste ufficiali in corso che i dipendenti hanno inoltrato ai rispettivi manager.",
      unit: "richiesta/e",
      tab: {
        pending: "In attesa",
        inReview: "In revisione",
        completed: "Completato"
      },
      footer: {
        topTopic: "Tipo di richiesta principale: {val}",
        topRecipient: "Manager più coinvolto: {val}"
      }
    },
    employeeDeptDist: {
      title: "Distribuzione dei dipendenti per dipartimento",
      tooltip: "Mostra come i dipendenti sono distribuiti nei dipartimenti dell'organizzazione.",
      tab: {
        all: "Tutti i dipartimenti"
      },
      department: {
        management: "Direzione",
        support: "Supporto",
        marketing: "Marketing",
        finance: "Finanza",
        technical: "Tecnico"
      },
      footer: {
        management: "{val}",
        support: "{val}",
        marketing: "{val}",
        finance: "{val}",
        technical: "{val}"
      }
    }
  },

  // ==================== TABELLE DATI (intestazioni colonna condivise) ====================
  table: {
    id: "ID",
    fullName: "Nome completo",
    email: "Email",
    membershipTier: "Livello di iscrizione",
    totalSpent: "Totale speso",
    lastBooking: "Ultima prenotazione",
    accountStatus: "Stato account",
    companyName: "Nome azienda",
    serviceCategory: "Categoria di servizio",
    manager: "Manager",
    commissionRate: "Tasso di commissione",
    rating: "Valutazione",
    contractStatus: "Stato contratto",
    department: "Dipartimento",
    location: "Ubicazione",
    accessRole: "Ruolo di accesso",
    joinDate: "Data di iscrizione",
    status: "Stato",
    logId: "ID log",
    date: "Data",
    actionType: "Tipo di azione",
    severity: "Gravità",
    ipAddress: "Indirizzo IP",
    description: "Descrizione",
    type: "Tipo"
  },

  // ==================== ENUM (livelli di iscrizione, stato account, dipartimento, ruoli) ====================
  membershipTier: {
    bronze: "Bronzo",
    silver: "Argento",
    gold: "Oro"
  },

  department: {
    management: "Direzione",
    support: "Supporto",
    marketing: "Marketing",
    finance: "Finanza",
    technical: "Tecnico"
  },

  roles: {
    superAdmin: "Super amministratore",
    admin: "Amministratore",
    financialManager: "Responsabile finanziario",
    support: "Supporto",
    operationManager: "Responsabile operativo",
    contentManager: "Responsabile contenuti",
    marketingManagement: "Responsabile marketing",
    vendors: "Fornitore",
    technicalAdmin: "Amministratore tecnico",
    auditor: "Revisore"
  }
};

export default it;