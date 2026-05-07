const az = {
  auth: {
    login: "Daxil ol",
    username: "İstifadəçi adı",
    password: "Şifrə",
    loginButton: "Sistemə daxil ol",
    logout: "Çıxış"
  },
  profile: {
    tabs: {
      general: "Ümumi",
      specific: "Xüsusi Məlumatlar",
      permissions: "İcazələr",
      history: "Tarixçə",
      inventory: "İnventar",
      reservations: "Rezervasiyalar",
      payments: "Ödənişlər",
      docs: "Sənədlər"
    },
    header: {
      userType: "İstifadəçi Növü",
      joinDate: "Qoşulma Tarixi:",
      lastActivity: "Son Aktivlik:",
      noEmail: "E‑poçt qeyd edilməyib",
      noPhone: "Telefon qeyd edilməyib",
      types: {
        traveler: "Səyyah",
        supplier: "Təchizatçı",
        employee: "İşçi"
      },
      status: {
        active: "Aktiv",
        suspended: "Dayandırılıb",
        blocked: "Bloklanmış"
      },
      actions: {
        callTitle: "Zəng et",
        emailTitle: "E‑poçt göndər",
        deactivateTitle: "İstifadəçini deaktiv et"
      }
    },
    errors: {
      loading: "Yüklənir...",
      notFound: "Məlumat tapılmadı"
    }
  },
  sidebar: {
    dashboard: "Panel",
    users: "İstifadəçilər",
    vendors: "Təchizatçılar",
    employee:'İşçilər',
    booking: "Rezervasiya",
    financial: "Maliyyə",
    content: "Məzmun",
    reports: "Hesabatlar",
    marketing: "Marketinq",
    pushNotification: "Bildirişlər",
    support: "Dəstək",
    systemSetting: "Sistem Ayarları",
    logSecurity: "Log və Təhlükəsizlik"
  },
  pages: {
    dashboard: { title: "Panel" },
    users: { title: "İstifadəçi İdarəsi" },
      usersList: { title: "İstifadəçi Siyahısı" },
      usersHistory: { title: "İstifadəçi Fəaliyyət Tarixi" },
    vendors: { title: "Satıcıların İdarəsi" },
      vendorsList: { title: "Təchizatçı Siyahısı" },
      globalInventory: { title: "Bütün Xidmətlər" },
      vendorsDocs: { title: "Təchizatçı Sənədləri" },
    employee: { title: "İşçilər" },
      employeeList: { title: "İşçi Siyahısı" },
      employeeHistory: { title: "İşçi Fəaliyyət Tarixi" },
      employeeDocs: { title: "Sənədlər və Müqavilələr" },
    booking: { title: "Rezervasiya İdarəsi" },
    financial: { title: "Maliyyə İdarəsi" },
    content: { title: "Məzmun İdarəsi" },
    reports: { title: "Hesabatlar" },
    marketing: { title: "Marketinq" },
    pushNotification: { title: "Push Bildirişləri" },
    support: { title: "Dəstək" },
    systemSetting: { title: "Sistem Ayarları" },
    logSecurity: { title: "Loglar və Təhlükəsizlik" },
    permissions: {
      title: "İcazələr",
      tooltip: "İcazə idarəetmə səhifəsinə tez daxil olmaq üçün klik edin."
    },
    contracts: {
      title: "Müqavilələr",
      tooltip: "Müqavilələrin idarəetmə səhifəsinə tez daxil olmaq üçün klik edin."
    },
    reservations: {
      title: "Rezervasiyalar",
      tooltip: "Rezervasiya idarəetmə səhifəsinə tez daxil olmaq üçün klik edin."
    },
    securityAlerts: {
      title: "Təhlükəsizlik Xəbərdarlıqları",
      tooltip: "Təhlükəsizlik xəbərdarlıqları idarəetmə səhifəsinə tez daxil olmaq üçün klik edin."
    },
  },
  kpi: {
    totalUsers: {
      title: "İstifadəçi Statistikası",
      tooltip: "Rollara görə qeydiyyatdan keçmiş istifadəçilər",
      onlineStatus: "{val} onlayn istifadəçi"
    },
    newUsers: {
      title: "Yeni İstifadəçilər",
      tooltip: "Son 10 həftədə yeni istifadəçi artımı",
      growth: "Keçən həftəyə görə %{val} artım",
      decline: "Keçən həftəyə görə %{val} azalma",
      neutral: "Dəyişiklik yoxdur"
    },
    activeServices: {
      title: "Aktiv Xidmətlər",
      tooltip: "Hazırda xidmət alan və ya verən istifadəçilər",
      engagement: "İstifadəçilərin %{val} aktivdir"
    },
    securityAlerts: {
      title: "Təhlükəsizlik Xəbərdarlıqları",
      tooltip: "İstifadəçi hesabları üçün xəbərdarlıqlar",
      alertCount: "{val} {type}"
    },
  },
  table:{
    id: "ID",
    fullName:'Ad Soyad',
    email:'E-poçt',
    membershipTier:'Üzvlük Səviyyəsi',
    totalSpent:'Ümumi Xərc',
    lastBooking:'Son Rezervasiya',
    accountStatus:'Hesab Statusu',
    companyName:'Şirkət Adı',
    serviceCategory:'Xidmət Kateqoriyası',
    manger:'Menecer',
    commissionRate:'Komissiya Faizi',
    rating:'Reytinq',
    contractStatus:'Müqavilə Statusu',
    department:'Şöbə',
    location:'Məkan',
    accessRole:'Giriş Səviyyəsi',
    joinDate:'Qoşulma Tarixi',
    status:'Status'
  },
  membershipTier: {
    bronze:'Bürünc',
    silver:'Gümüş',
    gold:'Qızıl'
  },
  accountStatus: {
    Active: "Aktiv",
    Inactive: "Qeyri‑aktiv",
    Suspended: "Dayandırılıb"
  },
  department:{
    management:'İdarəetmə',
    support:'Dəstək',
    marketting:'Marketinq',
    finance:'Maliyyə',
    technical:'Texniki'
  },
  roles:{
    superAdmin:'Baş Admin',
    admin:'Admin',
    financialManager:'Maliyyə Meneceri',
    support:'Dəstək',
    operationManager:'Əməliyyat Meneceri',
    contentManager:'Kontent Meneceri',
    marketingManagement:'Marketinq Meneceri',
    vendors:'Təchizatçı',
    technicalAdmin:'Texniki Admin',
    auditor:'Auditor'
  },
  common: {
    welcome: "Xoş gəlmisiniz",
    noAccess: "Bu səhifəyə girişiniz yoxdur",
    loading: "Yüklənir...",
    error: "Xəta",
    panel: "İdarəetmə Paneli",
    logout: "Çıxış",
    action: "Əməliyyat",
    seeMore: "Daha çox",
    quickAction: "Sürətli Giriş",
    users: {
      travelers: "Səyahətçilər",
      users: "istifadəçilər",
      vendors: "Təchizatçılar",
      employees: "İşçilər"
    },
    time: {
      daily: "Gündəlik",
      weekly: "Həftəlik",
      monthly: "Aylıq",
      quarterly: "Rüblük",
      yearly: "İllik"
    },
    services: {
      carRental: "Avtomobil icarəsi",
      accommodation: "Yerləşmə",
      restaurant: "Restoran",
      entertainment: "Əyləncə"
    },
    alerts: {
      warning: "Xəbərdarlıq",
      sensitive: "Həssas",
      critical: "Kritik"
    },
    status: {
      new: "Yeni",
      pending: "Yoxlanılmanı Gözləyir",
      completed: "Tamamlandı",
      approved: "Təsdiqləndi",
      rejected: "Rədd edildi",
      overview: "Ümumi Baxış",
      active: "Aktiv",
      inactive: "Qeyri-aktiv"
    },
  }
};

export default az;
