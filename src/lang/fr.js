const fr = {
  // ==================== GLOBAL ====================
  common: {
    welcome: "Bienvenue",
    panel: "Panneau d'administration",
    loading: "Chargement...",
    error: "Erreur",
    noAccess: "Vous n'avez pas accès à cette page",
    logout: "Déconnexion",
    action: "Action",
    seeMore: "Voir plus",
    seeDetails: "Voir les détails",
    quickAction: "Accès rapide",
    search: "Rechercher...",
    export: "Exporter",
    noData: "Aucune donnée disponible",
    rowsPerPage: "Lignes par page",
    prev: "Précédent",
    next: "Suivant",
    users: {
      users: "Utilisateurs",
      travelers: "Voyageurs",
      vendors: "Prestataires",
      employees: "Employés",
      admins: "Administrateurs"
    },
    time: {
      daily: "Quotidien",
      weekly: "Hebdomadaire",
      monthly: "Mensuel",
      quarterly: "Trimestriel",
      yearly: "Annuel"
    },
    services: {
      carRental: "Location de voitures",
      accommodation: "Hébergement",
      restaurant: "Restaurant",
      entertainment: "Divertissement"
    },
    alerts: {
      warning: "Avertissement",
      sensitive: "Sensible",
      critical: "Critique"
    },
    status: {
      new: "Nouveau",
      pending: "En attente de révision",
      completed: "Terminé",
      approved: "Approuvé",
      rejected: "Rejeté",
      overview: "Aperçu",
      active: "Actif",
      inactive: "Inactif",
      suspended: "Suspendu",
      pendingRenewal: "Renouvellement en attente"
    }
  },

  // ==================== AUTHENTIFICATION ====================
  auth: {
    login: "Connexion",
    username: "Nom d'utilisateur",
    password: "Mot de passe",
    loginButton: "Se connecter au système",
    logout: "Déconnexion"
  },

  // ==================== MENU LATÉRAL ====================
  sidebar: {
    dashboard: "Tableau de bord",
    users: "Utilisateurs",
    vendors: "Prestataires",
    employees: "Employés",
    booking: "Réservations",
    financial: "Finances",
    content: "Contenu",
    reports: "Rapports",
    marketing: "Marketing",
    pushNotification: "Notifications",
    support: "Support",
    systemSetting: "Paramètres système",
    logSecurity: "Journaux et sécurité"
  },

  // ==================== NOMS DES ONGLETS (réutilisables) ====================
  tabs: {
    all: "Tous les journaux",
    security: "Sécurité",
    completed: "Terminé",
    pending: "En attente",
    cancelled: "Annulé",
    activity: "Activité",
    users: "Utilisateurs",
    travelers: "Voyageurs",
    vendors: "Prestataires",
    employees: "Employés",
    admins: "Administrateurs",
    accommodation: "Hébergement",
    carRental: "Location de voitures",
    restaurant: "Restaurant",
    entertainment: "Divertissement",
    info: "Info",
    warning: "Avertissement",
    critical: "Critique",
    management: "Gestion",
    support: "Support",
    marketing: "Marketing",
    finance: "Finances",
    technical: "Technique"
  },

  // ==================== PROFIL (structure partagée) ====================
  profile: {
    tabs: {
      general: "Général",
      specific: "Spécifique",
      admins: "Administrateurs",
      permissions: "Permissions",
      history: "Historique",
      inventory: "Inventaire",
      reservations: "Réservations",
      payments: "Paiements",
      docs: "Documents"
    }
  },

  // ==================== PAGES ====================
  pages: {
    dashboard: {
      title: "Tableau de bord"
    },

    // ----- Utilisateurs -----
    addUser: { title: "Ajouter un nouvel utilisateur" },
    users: {
      title: "Gestion des utilisateurs",
      list: {
        title: "Liste des utilisateurs"
      },
      history: {
        title: "Historique des activités utilisateur"
      },
      profile: {
        header: {
          userType: "Type d'utilisateur",
          joinDate: "Date d'inscription :",
          lastActivity: "Dernière activité :",
          noEmail: "Email non fourni",
          noPhone: "Numéro de téléphone non fourni",
          noName: "Nom non fourni",
          types: {
            traveler: "Voyageur",
            supplier: "Prestataire",
            employee: "Employé"
          },
          status: {
            active: "Actif",
            suspended: "Suspendu",
            blocked: "Bloqué"
          },
          actions: {
            callTitle: "Appel téléphonique",
            emailTitle: "Envoyer un email",
            deactivateTitle: "Désactiver l'utilisateur",
            editTitle: "Modifier l'utilisateur"
          }
        },
        errors: {
          loading: "Chargement...",
          notFound: "Informations non trouvées"
        },
        general: {
          loadingInfo: "Chargement des informations...",
          fields: {
            firstName: "Prénom",
            lastName: "Nom",
            email: "Email",
            phoneNumber: "Numéro de téléphone",
            userType: "Type d'utilisateur",
            subType: "Sous-type"
          },
          info: {
            joinDate: "Date d'inscription",
            lastActivity: "Dernière activité"
          },
          actions: {
            forceLogout: "Déconnexion forcée",
            reVerify: "Re-vérifier",
            sendTempPass: "Envoyer un mot de passe temporaire"
          },
          sections: {
            recentChats: "Chats récents et tickets actifs"
          },
          table: {
            id: "ID",
            subject: "Sujet",
            status: "Statut",
            date: "Date"
          }
        },
        userSpecificTraveler: {
          loading: "Chargement des données du voyageur...",
          stats: {
            rating: "Note moyenne",
            profit: "Profit (commission)",
            favorites: "Services favoris",
            totalBookings: "Total des réservations"
          },
          documents: {
            nationalId: "Carte d'identité nationale",
            passport: "Numéro de passeport",
            dob: "Date de naissance",
            nationality: "Nationalité",
            language: "Langue principale",
            specialNeeds: "Besoins spécifiques / Régime alimentaire"
          },
          titles: {
            companions: "Accompagnateurs (personnes à charge)"
          },
          table: {
            fullName: "Nom complet",
            relation: "Lien de parenté",
            documentId: "Numéro de document (passeport/identité)",
            dob: "Date de naissance"
          }
        },
        userSpecificAdmin: {
          loading: "Chargement des données de l'administrateur...",
          titles: {
            inventory: "Périmètre d'inventaire assigné"
          },
          vendor: {
            subtitle: "Représentant légal pour :",
            viewProfile: "Voir le profil du prestataire"
          },
          stats: {
            role: "Rôle et département",
            shift: "Quart de travail",
            repLetter: "Lettre de représentation",
            allowedIps: "IP autorisées (liste blanche)"
          },
          table: {
            id: "ID produit",
            name: "Nom du produit/service",
            type: "Type",
            status: "Statut"
          }
        },
        permissions: {
          loading: "Chargement des permissions...",
          title: "Permissions et contrôle d'accès",
          description: "Visualisez les permissions attribuées à cet utilisateur. Pour les modifier, accédez au panneau de gestion des rôles."
        },
        history: {
          title: "Historique des activités utilisateur"
        },
        reservations: {
          title: "Réservations du voyageur"
        }
      }
    },

    // ----- Prestataires -----
    addVendor: { title: "Ajouter un nouveau prestataire" },
    vendors: {
      title: "Gestion des prestataires",
      list: {
        title: "Liste des prestataires"
      },
      inventory: {
        title: "Tous les services"
      },
      docs: {
        title: "Documents du prestataire"
      },
      profile: {
        general: {
          loadingInfo: "Chargement des informations du prestataire...",
          fields: {
            brandName: "Nom de la marque",
            formalName: "Raison sociale légale",
            idCode: "Numéro d'enregistrement / Identifiant national",
            email: "Email",
            phoneNumber: "Numéro de téléphone",
            emergencyPhone: "Téléphone d'urgence",
            website: "Site web",
            userType: "Type d'entité",
            subType: "Catégorie de service",
            status: "Statut"
          },
          info: {
            joinDate: "Date d'inscription",
            lastActivity: "Dernière activité"
          },
          actions: {
            forceLogout: "Déconnexion forcée",
            reVerify: "Re-vérifier",
            sendTempPass: "Envoyer un mot de passe temporaire"
          },
          sections: {
            recentTickets: "Tickets récents"
          },
          table: {
            id: "ID",
            subject: "Sujet",
            status: "Statut",
            date: "Date"
          }
        },
        vendorSpecificAccommodations: {
          loading: "Chargement des données d'hébergement...",
          stats: {
            allInventory: "Inventaire total",
            rate: "Note",
            commission: "Commission (Système)",
            allReserve: "Total des réservations"
          },
          documents: {
            type: "Type de propriété",
            rate: "Nombre d'étoiles",
            checkIn: "Plage horaire d'arrivée",
            checkOut: "Plage horaire de départ",
            options: "Équipements et options",
            cancelPolicy: {
              title: "Politique d'annulation",
              lessThan24h: "Moins de 24h avant l'arrivée",
              lessThan48h: "Moins de 48h avant l'arrivée",
              lessThan72h: "Moins de 72h avant l'arrivée"
            }
          },
          titles: {
            activeReserves: "Réservations actives"
          },
          table: {
            id: "ID de réservation",
            user: "Client",
            room: "Chambre",
            date: "Date",
            status: "Statut",
            price: "Prix",
            commission: "Commission"
          }
        }
      }
    },

    // ----- Employés -----
    employee: {
      title: "Employés",
      list: {
        title: "Liste des employés"
      },
      history: {
        title: "Historique des activités de l'employé"
      },
      docs: {
        title: "Documents et contrats"
      }
    },

    // ----- Autres pages -----
    booking: { title: "Gestion des réservations" },
    financial: { title: "Gestion financière" },
    content: { title: "Gestion du contenu" },
    reports: { title: "Rapports" },
    marketing: { title: "Marketing" },
    pushNotification: { title: "Notifications push" },
    support: { title: "Support" },
    systemSetting: { title: "Paramètres système" },
    logSecurity: { title: "Journaux et sécurité" },

    // ----- Info-bulles d'accès rapide -----
    permissions: {
      title: "Permissions",
      tooltip: "Cliquez pour accéder rapidement à la page de gestion des permissions."
    },
    contracts: {
      title: "Contrats",
      tooltip: "Cliquez pour accéder rapidement à la page de gestion des contrats."
    },
    reservations: {
      title: "Réservations",
      tooltip: "Cliquez pour accéder rapidement à la page de gestion des réservations."
    },
    securityAlerts: {
      title: "Alertes de sécurité",
      tooltip: "Cliquez pour accéder rapidement à la page de gestion des alertes de sécurité."
    }
  },

  // ==================== FILTRES ====================
  filters: {
    all_severity: "Toutes les sévérités",
    severity: {
      info: "Info",
      warning: "Avertissement",
      critical: "Critique"
    }
  },

  // ==================== HISTORIQUE D'ACTIVITÉ ====================
  history: {
    types: {
      login: "Connexion utilisateur",
      profile_update: "Mise à jour du profil",
      booking: "Action de réservation",
      failed_login: "Échec de connexion",
      payment: "Paiement"
    },
    severity: {
      info: "Info",
      warning: "Avertissement",
      critical: "Critique"
    }
  },

  // ==================== CARTES KPI (Tableau de bord) ====================
  kpi: {
    totalUsers: {
      title: "Statistiques utilisateurs",
      tooltip: "Affiche le nombre total d'utilisateurs enregistrés par rôle",
      onlineStatus: "{val} utilisateur(s) en ligne"
    },
    newUsers: {
      title: "Nouveaux utilisateurs",
      tooltip: "Tendance d'acquisition de nouveaux utilisateurs au cours des 10 dernières semaines",
      growth: "Croissance de {val}% par rapport à la semaine dernière",
      decline: "Baisse de {val}% par rapport à la semaine dernière",
      neutral: "Aucun changement par rapport à la semaine dernière"
    },
    activeServices: {
      title: "Engagement des services actifs",
      tooltip: "Utilisateurs recevant ou fournissant actuellement des services",
      engagement: "{val}% des utilisateurs engagés"
    },
    securityAlerts: {
      title: "Alertes de sécurité",
      tooltip: "Alertes système et de sécurité enregistrées pour les comptes utilisateurs",
      alertCount: "{val} alerte(s) de type {type}"
    },
    accountStatus: {
      title: "Statut des comptes",
      tooltip: "Compare les comptes actifs et bloqués pour surveiller la santé et la sécurité de la plateforme.",
      active: "Actif",
      blocked: "Bloqué",
      recentBlocks: "{val} compte(s) bloqué(s) au cours des dernières 24h",
      secureStatus: "Aucune violation de sécurité récente"
    },
    activityRate: {
      title: "Taux d'activité",
      tooltip: "Tendance des connexions utilisateur uniques sur la période sélectionnée",
      growth: "Croissance de {val}% par rapport à la période précédente",
      decline: "Baisse de {val}% par rapport à la période précédente",
      neutral: "Aucun changement par rapport à la période précédente"
    },
    conversionRate: {
      title: "Taux de conversion des utilisateurs",
      tooltip: "Suit le pourcentage d'utilisateurs évoluant dans le cycle de vie : de l'inscription à la première réservation, et de la première réservation au client fidèle.",
      tabs: {
        firstBooking: "Invité vers client",
        repeatBooking: "Client vers fidèle"
      },
      growth: "+{val}% par rapport à la période précédente",
      decline: "-{val}% par rapport à la période précédente"
    },
    accountRatio: {
      title: "Comptes vs. Voyageurs réels",
      tooltip: "Compare le nombre total de comptes enregistrés avec le nombre d'utilisateurs ayant effectué au moins une réservation.",
      tabs: {
        thisYear: "Cette année",
        allTime: "Toutes périodes"
      },
      labels: {
        totalAccounts: "Total enregistrés",
        realTravelers: "Voyageurs actifs"
      },
      footerText: "{val}% des comptes enregistrés sont des voyageurs actifs"
    },
    kycStatus: {
      title: "Statut de vérification des documents KYC",
      tooltip: "Affiche le statut de vérification des documents soumis par les prestataires légaux",
      tabs: {
        new: "Nouveau",
        pending: "En attente de révision",
        completed: "Terminé"
      },
      footer: {
        newTotal: "Total nouveaux documents : {val}",
        pendingTotal: "Documents en attente de révision : {val}",
        approvalRate: "Taux d'approbation : {val}",
        rejectionRate: "Taux de rejet : {val}"
      }
    },
    supplierCapacity: {
      title: "Activité et capacité libre",
      tooltip: "Indique combien de prestataires sont actifs aujourd'hui et la capacité libre disponible par catégorie de service.",
      tabs: {
        activity: "Activité des prestataires",
        capacity: "Capacité libre"
      },
      activityChart: "Statut d'activité des prestataires",
      freeCapacityChart: "Capacité disponible par service",
      footer: {
        activeSummary: "Prestataires actifs : {val}",
        totalFreeCapacity: "Capacité totale disponible : {val}"
      }
    },
    revenue: {
      title: "Services générateurs de revenus",
      tooltip: "Indique les revenus générés pour l'entreprise par chaque catégorie de prestataire sur la période sélectionnée.",
      footer: {
        amount: "{val} K"
      }
    },
    satisfaction: {
      title: "Satisfaction des voyageurs",
      tooltip: "Note de satisfaction moyenne par catégorie de service basée sur les retours clients."
    },
    unauth: {
      title: "Tentatives d'accès non autorisé",
      tooltip: "Indique le nombre de tentatives d'accès non autorisé survenues par niveau de risque.",
      unit: "tentative(s)",
      footer: {
        topSource: "Source principale : {val}"
      },
      level: {
        high: "Risque élevé",
        sensitive: "Sensible",
        low: "Risque faible"
      }
    },
    requests: {
      title: "Demandes officielles en cours",
      tooltip: "Affiche le nombre de demandes officielles en cours que les employés ont soumises à leurs managers respectifs.",
      unit: "demande(s)",
      tab: {
        pending: "En attente",
        inReview: "En révision",
        completed: "Terminé"
      },
      footer: {
        topTopic: "Type de demande principal : {val}",
        topRecipient: "Manager le plus ciblé : {val}"
      }
    },
    employeeDeptDist: {
      title: "Répartition des employés par département",
      tooltip: "Montre comment les employés sont répartis dans les départements de l'organisation.",
      tab: {
        all: "Tous les départements"
      },
      department: {
        management: "Direction",
        support: "Support",
        marketing: "Marketing",
        finance: "Finances",
        technical: "Technique"
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

  // ==================== TABLEAUX DE DONNÉES (en-têtes de colonnes partagés) ====================
  table: {
    id: "ID",
    fullName: "Nom complet",
    email: "Email",
    membershipTier: "Niveau d'adhésion",
    totalSpent: "Dépenses totales",
    lastBooking: "Dernière réservation",
    accountStatus: "Statut du compte",
    companyName: "Nom de l'entreprise",
    serviceCategory: "Catégorie de service",
    manager: "Manager",
    commissionRate: "Taux de commission",
    rating: "Note",
    contractStatus: "Statut du contrat",
    department: "Département",
    location: "Emplacement",
    accessRole: "Rôle d'accès",
    joinDate: "Date d'inscription",
    status: "Statut",
    logId: "ID du journal",
    date: "Date",
    actionType: "Type d'action",
    severity: "Sévérité",
    ipAddress: "Adresse IP",
    description: "Description",
    type: "Type"
  },

  // ==================== ÉNUMÉRATIONS (adhésion, statut compte, département, rôles) ====================
  membershipTier: {
    bronze: "Bronze",
    silver: "Argent",
    gold: "Or"
  },

  department: {
    management: "Direction",
    support: "Support",
    marketing: "Marketing",
    finance: "Finances",
    technical: "Technique"
  },

  roles: {
    superAdmin: "Super administrateur",
    admin: "Administrateur",
    financialManager: "Responsable financier",
    support: "Support",
    operationManager: "Responsable des opérations",
    contentManager: "Responsable du contenu",
    marketingManagement: "Responsable marketing",
    vendors: "Prestataire",
    technicalAdmin: "Administrateur technique",
    auditor: "Auditeur"
  }
};

export default fr;