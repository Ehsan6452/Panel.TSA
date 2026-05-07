const fr = {
  auth: {
    login: "Connexion",
    username: "Nom d'utilisateur",
    password: "Mot de passe",
    loginButton: "Se connecter",
    logout: "Déconnexion"
  },
  profile: {
    tabs: {
      general: "Général",
      specific: "Informations spécifiques",
      permissions: "Autorisations",
      history: "Historique",
      inventory: "Inventaire",
      reservations: "Réservations",
      payments: "Paiements",
      docs: "Documents"
    },
    header: {
      userType: "Type d'utilisateur",
      joinDate: "Date d'inscription:",
      lastActivity: "Dernière activité:",
      noEmail: "Email non enregistré",
      noPhone: "Téléphone non enregistré",
      types: {
        traveler: "Voyageur",
        supplier: "Fournisseur",
        employee: "Employé"
      },
      status: {
        active: "Actif",
        suspended: "Suspendu",
        blocked: "Bloqué"
      },
      actions: {
        callTitle: "Appeler",
        emailTitle: "Envoyer un email",
        deactivateTitle: "Désactiver l'utilisateur"
      }
    },
    errors: {
      loading: "Chargement...",
      notFound: "Information non trouvée"
    }
  },
  sidebar: {
    dashboard: "Tableau de bord",
    users: "Utilisateurs",
    vendors: "Fournisseurs",
    employee:'Employés',
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
  pages: {
    dashboard: { title: "Tableau de bord" },
    users: { title: "Gestion des utilisateurs" },
      usersList: { title: "Liste des utilisateurs" },
      usersHistory: { title: "Historique des actions des utilisateurs" },
    vendors: { title: "Gestion des fournisseurs" },
      vendorsList: { title: "Liste des fournisseurs" },
      globalInventory: { title: "Tous les services" },
      vendorsDocs: { title: "Documents des fournisseurs" },
    employee: { title: "Employés" },
      employeeList: { title: "Liste des employés" },
      employeeHistory: { title: "Historique des actions des employés" },
      employeeDocs: { title: "Documents et contrats" },
    booking: { title: "Gestion des réservations" },
    financial: { title: "Gestion financière" },
    content: { title: "Gestion du contenu" },
    reports: { title: "Rapports" },
    marketing: { title: "Marketing" },
    pushNotification: { title: "Notifications push" },
    support: { title: "Support" },
    systemSetting: { title: "Paramètres du système" },
    logSecurity: { title: "Journaux et sécurité" },
    permissions: {
      title: "Autorisations",
      tooltip: "Cliquez pour accéder rapidement à la page de gestion des autorisations."
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
    },

  },
  kpi: {
    totalUsers: {
      title: "Statistiques des utilisateurs",
      tooltip: "Nombre total d'utilisateurs enregistrés",
      onlineStatus: "{val} utilisateurs en ligne"
    },
    newUsers: {
      title: "Nouveaux utilisateurs",
      tooltip: "Tendance des nouveaux utilisateurs sur 10 semaines",
      growth: "+{val}% par rapport à la semaine dernière",
      decline: "-{val}% par rapport à la semaine dernière",
      neutral: "Aucun changement"
    },
    activeServices: {
      title: "Services actifs",
      tooltip: "Utilisateurs recevant ou fournissant des services",
      engagement: "{val}% des utilisateurs actifs"
    },
    securityAlerts: {
      title: "Alertes de sécurité",
      tooltip: "Alertes de sécurité enregistrées",
      alertCount: "{val} {type}"
    },
  },
  table:{
    id: "ID",
    fullName:'Nom complet',
    email:'Email',
    membershipTier:'Niveau d’adhésion',
    totalSpent:'Dépenses totales',
    lastBooking:'Dernière réservation',
    accountStatus:'Statut du compte',
    companyName:'Nom de l’entreprise',
    serviceCategory:'Catégorie de service',
    manger:'Responsable',
    commissionRate:'Taux de commission',
    rating:'Évaluation',
    contractStatus:'Statut du contrat',
    department:'Département',
    location:'Localisation',
    accessRole:'Rôle d’accès',
    joinDate:'Date d’adhésion',
    status:'Statut'
  },
  membershipTier: {
    bronze:'Bronze',
    silver:'Argent',
    gold:'Or'
  },
  accountStatus: {
    Active: "Actif",
    Inactive: "Inactif",
    Suspended: "Suspendu"
  },
  department:{
    management:'Gestion',
    support:'Support',
    marketting:'Marketing',
    finance:'Finance',
    technical:'Technique'
  },
  roles:{
    superAdmin:'Super administrateur',
    admin:'Administrateur',
    financialManager:'Responsable financier',
    support:'Support',
    operationManager:'Responsable des opérations',
    contentManager:'Responsable du contenu',
    marketingManagement:'Responsable marketing',
    vendors:'Fournisseur',
    technicalAdmin:'Administrateur technique',
    auditor:'Auditeur'
  },
  common: {
    welcome: "Bienvenue",
    noAccess: "Vous n'avez pas accès à cette page",
    loading: "Chargement...",
    error: "Erreur",
    panel: "Panneau d'administration",
    logout: "Déconnexion",
    action: "Action",
    seeMore: "Voir plus",
    quickAction: "Accès rapide",
    users: {
      travelers: "Voyageurs",
      users: "utilisateurs",
      vendors: "Fournisseurs",
      employees: "Employés"
    },
    time: {
      daily: "Quotidien",
      weekly: "Hebdomadaire",
      monthly: "Mensuel",
      quarterly: "Trimestriel",
      yearly: "Annuel"
    },
    services: {
      carRental: "Location de voiture",
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
      pending: "En attente de vérification",
      completed: "Terminé",
      approved: "Approuvé",
      rejected: "Rejeté",
      overview: "Aperçu",
      active: "Actif",
      inactive: "Inactif"
    },
  }
};

export default fr;
