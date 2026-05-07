const tr = {
  auth: {
    login: "Giriş",
    username: "Kullanıcı adı",
    password: "Şifre",
    loginButton: "Sisteme giriş",
    logout: "Çıkış"
  },
  profile: {
    tabs: {
      general: "Genel",
      specific: "Özel Bilgiler",
      permissions: "İzinler",
      history: "Geçmiş",
      inventory: "Envanter",
      reservations: "Rezervasyonlar",
      payments: "Ödemeler",
      docs: "Belgeler"
    },
    header: {
      userType: "Kullanıcı Türü",
      joinDate: "Katılım Tarihi:",
      lastActivity: "Son Aktivite:",
      noEmail: "E‑posta kaydedilmemiş",
      noPhone: "Telefon kaydedilmemiş",
      types: {
        traveler: "Gezgin",
        supplier: "Tedarikçi",
        employee: "Çalışan"
      },
      status: {
        active: "Aktif",
        suspended: "Askıya Alındı",
        blocked: "Engellendi"
      },
      actions: {
        callTitle: "Telefonla ara",
        emailTitle: "E‑posta gönder",
        deactivateTitle: "Kullanıcıyı devre dışı bırak"
      }
    },
    errors: {
      loading: "Yükleniyor...",
      notFound: "Bilgi bulunamadı"
    }
  },
  sidebar: {
    dashboard: "Kontrol Paneli",
    users: "Kullanıcılar",
    vendors: "Tedarikçiler",
    employee:'Çalışanlar',
    booking: "Rezervasyon",
    financial: "Finans",
    content: "İçerik",
    reports: "Raporlar",
    marketing: "Pazarlama",
    pushNotification: "Bildirimler",
    support: "Destek",
    systemSetting: "Sistem Ayarları",
    logSecurity: "Kayıtlar ve Güvenlik"
  },
  pages: {
    dashboard: { title: "Gösterge Paneli" },
    users: { title: "Kullanıcı Yönetimi" },
      usersList: { title: "Kullanıcı Listesi" },
      usersHistory: { title: "Kullanıcı İşlem Geçmişi" },
    vendors: { title: "Satıcı Yönetimi" },
      vendorsList: { title: "Tedarikçi Listesi" },
      globalInventory: { title: "Tüm Hizmetler" },
      vendorsDocs: { title: "Tedarikçi Belgeleri" },
    employee: { title: "Çalışanlar" },
      employeeList: { title: "Çalışan Listesi" },
      employeeHistory: { title: "Çalışan İşlem Geçmişi" },
      employeeDocs: { title: "Belgeler ve Sözleşmeler" },
    booking: { title: "Rezervasyon Yönetimi" },
    financial: { title: "Finans Yönetimi" },
    content: { title: "İçerik Yönetimi" },
    reports: { title: "Raporlar" },
    marketing: { title: "Pazarlama" },
    pushNotification: { title: "Anlık Bildirimler" },
    support: { title: "Destek" },
    systemSetting: { title: "Sistem Ayarları" },
    logSecurity: { title: "Kayıtlar ve Güvenlik" },
    permissions: {
      title: "Yetkiler",
      tooltip: "Yetki yönetimi sayfasına hızlı erişmek için tıklayın."
    },
    contracts: {
      title: "Sözleşmeler",
      tooltip: "Sözleşme yönetimi sayfasına hızlı erişmek için tıklayın."
    },
    reservations: {
      title: "Rezervasyonlar",
      tooltip: "Rezervasyon yönetimi sayfasına hızlı erişmek için tıklayın."
    },
    securityAlerts: {
      title: "Güvenlik Uyarıları",
      tooltip: "Güvenlik uyarıları yönetimi sayfasına hızlı erişmek için tıklayın."
    },
  },
  kpi: {
    totalUsers: {
      title: "Kullanıcı İstatistikleri",
      tooltip: "Rollere göre kayıtlı kullanıcı sayısı",
      onlineStatus: "{val} çevrimiçi kullanıcı"
    },
    newUsers: {
      title: "Yeni Kullanıcılar",
      tooltip: "Son 10 haftadaki yeni kullanıcı eğilimi",
      growth: "Geçen haftaya göre %{val} artış",
      decline: "Geçen haftaya göre %{val} azalma",
      neutral: "Geçen haftaya göre değişiklik yok"
    },
    activeServices: {
      title: "Aktif Hizmet Katılımı",
      tooltip: "Şu anda hizmet alan veya veren kullanıcılar",
      engagement: "Kullanıcıların %{val} aktif"
    },
    securityAlerts: {
      title: "Güvenlik Uyarıları",
      tooltip: "Kullanıcı hesapları için güvenlik uyarıları",
      alertCount: "{val} adet {type}"
    },
  },
  table:{
    id: "Kimlik",
    fullName:'Ad Soyad',
    email:'E‑posta',
    membershipTier:'Üyelik Seviyesi',
    totalSpent:'Toplam Harcama',
    lastBooking:'Son Rezervasyon',
    accountStatus:'Hesap Durumu',
    companyName:'Şirket Adı',
    serviceCategory:'Hizmet Türü',
    manger:'Yönetici',
    commissionRate:'Komisyon Oranı',
    rating:'Puan',
    contractStatus:'Sözleşme Durumu',
    department:'Departman',
    location:'Konum',
    accessRole:'Erişim Yetkisi',
    joinDate:'Katılım Tarihi',
    status:'Durum'
  },
  membershipTier: {
    bronze:'Bronz',
    silver:'Gümüş',
    gold:'Altın'
  },
  accountStatus: {
    Active: "Aktif",
    Inactive: "Pasif",
    Suspended: "Askıya Alındı"
  },
  department:{
    management:'Yönetim',
    support:'Destek',
    marketting:'Pazarlama',
    finance:'Finans',
    technical:'Teknik'
  },
  roles:{
    superAdmin:'Süper Yönetici',
    admin:'Yönetici',
    financialManager:'Finans Müdürü',
    support:'Destek',
    operationManager:'Operasyon Müdürü',
    contentManager:'İçerik Yöneticisi',
    marketingManagement:'Pazarlama Müdürü',
    vendors:'Tedarikçi',
    technicalAdmin:'Teknik Yönetici',
    auditor:'Denetçi'
  },
  common: {
    welcome: "Hoş geldiniz",
    noAccess: "Bu sayfaya erişiminiz yok",
    loading: "Yükleniyor...",
    error: "Hata",
    panel: "Yönetim Paneli",
    logout: "Çıkış",
    action: "İşlem",
    seeMore: "Daha fazla",
    quickAction: "Hızlı Erişim",
    users: {
      travelers: "Gezginler",
      users: "kullanıcılar",
      vendors: "Tedarikçiler",
      employees: "Çalışanlar"
    },
    time: {
      daily: "Günlük",
      weekly: "Haftalık",
      monthly: "Aylık",
      quarterly: "Üç Aylık",
      yearly: "Yıllık"
    },
    services: {
      carRental: "Araç Kiralama",
      accommodation: "Konaklama",
      restaurant: "Restoran",
      entertainment: "Eğlence"
    },
    alerts: {
      warning: "Uyarı",
      sensitive: "Hassas",
      critical: "Kritik"
    },
    status: {
      new: "Yeni",
      pending: "İnceleme Bekliyor",
      completed: "Tamamlandı",
      approved: "Onaylandı",
      rejected: "Reddedildi",
      overview: "Genel Bakış",
      active: "Aktif",
      inactive: "Pasif"
    },
  }
};

export default tr;
