const tr = {
  // ==================== GENEL ====================
  common: {
    welcome: "Hoş Geldiniz",
    panel: "Yönetim Paneli",
    loading: "Yükleniyor...",
    error: "Hata",
    noAccess: "Bu sayfaya erişim izniniz yok",
    logout: "Çıkış Yap",
    action: "İşlem",
    seeMore: "Daha Fazla Gör",
    seeDetails: "Detayları Gör",
    quickAction: "Hızlı Erişim",
    search: "Ara...",
    export: "Dışa Aktar",
    noData: "Veri mevcut değil",
    rowsPerPage: "Sayfa başına satır",
    prev: "Önceki",
    next: "Sonraki",
    users: {
      users: "Kullanıcılar",
      travelers: "Seyahat Edenler",
      vendors: "Tedarikçiler",
      employees: "Çalışanlar",
      admins: "Yöneticiler"
    },
    time: {
      daily: "Günlük",
      weekly: "Haftalık",
      monthly: "Aylık",
      quarterly: "3 Aylık",
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
      pending: "İncelemede",
      completed: "Tamamlandı",
      approved: "Onaylandı",
      rejected: "Reddedildi",
      overview: "Genel Bakış",
      active: "Aktif",
      inactive: "Pasif",
      suspended: "Askıya Alındı",
      pendingRenewal: "Yenileme Bekliyor"
    }
  },

  // ==================== KİMLİK DOĞRULAMA ====================
  auth: {
    login: "Giriş Yap",
    username: "Kullanıcı Adı",
    password: "Şifre",
    loginButton: "Sisteme Giriş Yap",
    logout: "Çıkış Yap"
  },

  // ==================== YAN MENÜ ====================
  sidebar: {
    dashboard: "Panel",
    users: "Kullanıcılar",
    vendors: "Tedarikçiler",
    employees: "Çalışanlar",
    booking: "Rezervasyon",
    financial: "Finans",
    content: "İçerik",
    reports: "Raporlar",
    marketing: "Pazarlama",
    pushNotification: "Bildirimler",
    support: "Destek",
    systemSetting: "Sistem Ayarları",
    logSecurity: "Günlükler ve Güvenlik"
  },

  // ==================== SEKME ADLARI (yeniden kullanılabilir) ====================
  tabs: {
    all: "Tüm Günlükler",
    security: "Güvenlik",
    completed: "Tamamlanan",
    pending: "Bekleyen",
    cancelled: "İptal Edilen",
    activity: "Aktivite",
    users: "Kullanıcılar",
    travelers: "Seyahat Edenler",
    vendors: "Tedarikçiler",
    employees: "Çalışanlar",
    admins: "Yöneticiler",
    accommodation: "Konaklama",
    carRental: "Araç Kiralama",
    restaurant: "Restoran",
    entertainment: "Eğlence",
    info: "Bilgi",
    warning: "Uyarı",
    critical: "Kritik",
    management: "Yönetim",
    support: "Destek",
    marketing: "Pazarlama",
    finance: "Finans",
    technical: "Teknik"
  },

  // ==================== PROFİL (ortak yapı) ====================
  profile: {
    tabs: {
      general: "Genel",
      specific: "Özel",
      admins: "Yöneticiler",
      permissions: "İzinler",
      history: "Geçmiş",
      inventory: "Envanter",
      reservations: "Rezervasyonlar",
      payments: "Ödemeler",
      docs: "Belgeler"
    }
  },

  // ==================== SAYFALAR ====================
  pages: {
    dashboard: {
      title: "Panel"
    },

    // ----- Kullanıcılar -----
    addUser: { title: "Yeni Kullanıcı Ekle" },
    users: {
      title: "Kullanıcı Yönetimi",
      list: {
        title: "Kullanıcı Listesi"
      },
      history: {
        title: "Kullanıcı Aktivite Geçmişi"
      },
      profile: {
        header: {
          userType: "Kullanıcı Türü",
          joinDate: "Katılım Tarihi:",
          lastActivity: "Son Aktivite:",
          noEmail: "E-posta sağlanmadı",
          noPhone: "Telefon numarası sağlanmadı",
          noName: "İsim sağlanmadı",
          types: {
            traveler: "Seyahat Eden",
            supplier: "Tedarikçi",
            employee: "Çalışan"
          },
          status: {
            active: "Aktif",
            suspended: "Askıya Alınmış",
            blocked: "Engellenmiş"
          },
          actions: {
            callTitle: "Telefon Araması",
            emailTitle: "E-posta Gönder",
            deactivateTitle: "Kullanıcıyı Devre Dışı Bırak",
            editTitle: "Kullanıcıyı Düzenle"
          }
        },
        errors: {
          loading: "Yükleniyor...",
          notFound: "Bilgi bulunamadı"
        },
        general: {
          loadingInfo: "Bilgiler yükleniyor...",
          fields: {
            firstName: "Ad",
            lastName: "Soyad",
            email: "E-posta",
            phoneNumber: "Telefon Numarası",
            userType: "Kullanıcı Türü",
            subType: "Alt Tür"
          },
          info: {
            joinDate: "Katılım Tarihi",
            lastActivity: "Son Aktivite"
          },
          actions: {
            forceLogout: "Zorla Çıkış Yap",
            reVerify: "Yeniden Doğrula",
            sendTempPass: "Geçici Şifre Gönder"
          },
          sections: {
            recentChats: "Son Sohbetler ve Aktif Ticketlar"
          },
          table: {
            id: "ID",
            subject: "Konu",
            status: "Durum",
            date: "Tarih"
          }
        },
        userSpecificTraveler: {
          loading: "Seyahat eden verileri yükleniyor...",
          stats: {
            rating: "Ortalama Puan",
            profit: "Kâr (Komisyon)",
            favorites: "Favori Hizmetler",
            totalBookings: "Toplam Rezervasyon"
          },
          documents: {
            nationalId: "Kimlik Numarası",
            passport: "Pasaport Numarası",
            dob: "Doğum Tarihi",
            nationality: "Uyruk",
            language: "Ana Dil",
            specialNeeds: "Özel İhtiyaçlar / Diyet"
          },
          titles: {
            companions: "Refakatçiler (Bağımlı Kişiler)"
          },
          table: {
            fullName: "Tam Ad",
            relation: "Yakınlık",
            documentId: "Belge Numarası (Pasaport/Kimlik)",
            dob: "Doğum Tarihi"
          }
        },
        userSpecificAdmin: {
          loading: "Yönetici verileri yükleniyor...",
          titles: {
            inventory: "Atanmış Envanter Kapsamı"
          },
          vendor: {
            subtitle: "Yasal Temsilci:",
            viewProfile: "Tedarikçi Profilini Görüntüle"
          },
          stats: {
            role: "Rol ve Departman",
            shift: "Çalışma Vardiyası",
            repLetter: "Temsil Mektubu",
            allowedIps: "İzin Verilen IP'ler (Beyaz Liste)"
          },
          table: {
            id: "Ürün ID",
            name: "Ürün/Hizmet Adı",
            type: "Tür",
            status: "Durum"
          }
        },
        permissions: {
          loading: "İzinler yükleniyor...",
          title: "İzinler ve Erişim Kontrolü",
          description: "Bu kullanıcıya atanmış izinleri görüntüleyin. Değişiklik yapmak için Roller yönetim paneline gidin."
        },
        history: {
          title: "Kullanıcı Aktivite Geçmişi"
        },
        reservations: {
          title: "Seyahat Eden Rezervasyonları"
        }
      }
    },

    // ----- Tedarikçiler -----
    addVendor: { title: "Yeni Tedarikçi Ekle" },
    vendors: {
      title: "Tedarikçi Yönetimi",
      list: {
        title: "Tedarikçi Listesi"
      },
      inventory: {
        title: "Tüm Hizmetler"
      },
      docs: {
        title: "Tedarikçi Belgeleri"
      },
      profile: {
        general: {
          loadingInfo: "Tedarikçi bilgileri yükleniyor...",
          fields: {
            brandName: "Marka Adı",
            formalName: "Yasal Şirket Adı",
            idCode: "Kayıt Numarası / Kimlik No",
            email: "E-posta",
            phoneNumber: "Telefon Numarası",
            emergencyPhone: "Acil Durum Telefonu",
            website: "Web Sitesi",
            userType: "Kurum Türü",
            subType: "Hizmet Kategorisi",
            status: "Durum"
          },
          info: {
            joinDate: "Katılım Tarihi",
            lastActivity: "Son Aktivite"
          },
          actions: {
            forceLogout: "Zorla Çıkış Yap",
            reVerify: "Yeniden Doğrula",
            sendTempPass: "Geçici Şifre Gönder"
          },
          sections: {
            recentTickets: "Son Ticketlar"
          },
          table: {
            id: "ID",
            subject: "Konu",
            status: "Durum",
            date: "Tarih"
          }
        }
      }
    },

    // ----- Çalışanlar -----
    employee: {
      title: "Çalışanlar",
      list: {
        title: "Çalışan Listesi"
      },
      history: {
        title: "Çalışan Aktivite Geçmişi"
      },
      docs: {
        title: "Belgeler ve Sözleşmeler"
      }
    },

    // ----- Diğer sayfalar -----
    booking: { title: "Rezervasyon Yönetimi" },
    financial: { title: "Finansal Yönetim" },
    content: { title: "İçerik Yönetimi" },
    reports: { title: "Raporlar" },
    marketing: { title: "Pazarlama" },
    pushNotification: { title: "Push Bildirimleri" },
    support: { title: "Destek" },
    systemSetting: { title: "Sistem Ayarları" },
    logSecurity: { title: "Günlükler ve Güvenlik" },

    // ----- Hızlı erişim araç ipuçları -----
    permissions: {
      title: "İzinler",
      tooltip: "İzin yönetimi sayfasına hızlı erişmek için tıklayın."
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
    }
  },

  // ==================== FİLTRELER ====================
  filters: {
    all_severity: "Tüm Şiddetler",
    severity: {
      info: "Bilgi",
      warning: "Uyarı",
      critical: "Kritik"
    }
  },

  // ==================== AKTİVİTE GEÇMİŞİ ====================
  history: {
    types: {
      login: "Kullanıcı Girişi",
      profile_update: "Profil Güncelleme",
      booking: "Rezervasyon İşlemi",
      failed_login: "Başarısız Giriş",
      payment: "Ödeme"
    },
    severity: {
      info: "Bilgi",
      warning: "Uyarı",
      critical: "Kritik"
    }
  },

  // ==================== KPI KARTLARI (Panel) ====================
  kpi: {
    totalUsers: {
      title: "Kullanıcı İstatistikleri",
      tooltip: "Rollere göre kategorize edilmiş toplam kayıtlı kullanıcı sayısını gösterir",
      onlineStatus: "{val} kullanıcı çevrimiçi"
    },
    newUsers: {
      title: "Yeni Kullanıcılar",
      tooltip: "Son 10 haftadaki yeni kullanıcı kazanım trendi",
      growth: "Geçen haftaya göre %{val} büyüme",
      decline: "Geçen haftaya göre %{val} düşüş",
      neutral: "Geçen haftaya göre değişiklik yok"
    },
    activeServices: {
      title: "Aktif Hizmet Katılımı",
      tooltip: "Şu anda hizmet alan veya sağlayan kullanıcılar",
      engagement: "Kullanıcıların %{val}'i katılım gösteriyor"
    },
    securityAlerts: {
      title: "Güvenlik Uyarıları",
      tooltip: "Kullanıcı hesapları için kaydedilmiş sistem ve güvenlik uyarıları",
      alertCount: "{val} {type} uyarısı"
    },
    accountStatus: {
      title: "Hesap Durumu",
      tooltip: "Platform sağlığını ve güvenliğini izlemek için aktif ve engellenmiş hesapları karşılaştırır.",
      active: "Aktif",
      blocked: "Engellenmiş",
      recentBlocks: "Son 24 saatte {val} hesap engellendi",
      secureStatus: "Son zamanlarda güvenlik ihlali yok"
    },
    activityRate: {
      title: "Aktivite Oranı",
      tooltip: "Seçilen zaman dilimindeki benzersiz kullanıcı girişlerinin trendi",
      growth: "Önceki döneme göre %{val} büyüme",
      decline: "Önceki döneme göre %{val} düşüş",
      neutral: "Önceki döneme göre değişiklik yok"
    },
    conversionRate: {
      title: "Kullanıcı Dönüşüm Oranı",
      tooltip: "Kullanıcıların yaşam döngüsü boyunca ilerleme yüzdesini izler: kayıttan ilk rezervasyona ve ilk rezervasyondan sadık müşteriye.",
      tabs: {
        firstBooking: "Misafirden Müşteriye",
        repeatBooking: "Müşteriden Sadık Müşteriye"
      },
      growth: "Önceki döneme göre +%{val}",
      decline: "Önceki döneme göre -%{val}"
    },
    accountRatio: {
      title: "Hesaplar vs. Gerçek Seyahat Edenler",
      tooltip: "Kayıtlı toplam hesap sayısı ile en az bir rezervasyonu olan kullanıcı sayısını karşılaştırır.",
      tabs: {
        thisYear: "Bu Yıl",
        allTime: "Tüm Zamanlar"
      },
      labels: {
        totalAccounts: "Toplam Kayıtlı",
        realTravelers: "Aktif Seyahat Edenler"
      },
      footerText: "Kayıtlı hesapların %{val}'i aktif seyahat edenlerdir"
    },
    kycStatus: {
      title: "KYC Belge Doğrulama Durumu",
      tooltip: "Yasal tedarikçiler tarafından sunulan belgelerin doğrulama durumunu gösterir",
      tabs: {
        new: "Yeni",
        pending: "İncelemede",
        completed: "Tamamlandı"
      },
      footer: {
        newTotal: "Toplam yeni belge: {val}",
        pendingTotal: "İnceleme bekleyen belge: {val}",
        approvalRate: "Onay oranı: {val}",
        rejectionRate: "Red oranı: {val}"
      }
    },
    supplierCapacity: {
      title: "Aktivite ve Boş Kapasite",
      tooltip: "Bugün kaç tedarikçinin aktif olduğunu ve hizmet kategorilerine göre ne kadar boş kapasite bulunduğunu gösterir.",
      tabs: {
        activity: "Tedarikçi Aktivitesi",
        capacity: "Boş Kapasite"
      },
      activityChart: "Tedarikçi Aktivite Durumu",
      freeCapacityChart: "Hizmete Göre Mevcut Kapasite",
      footer: {
        activeSummary: "Aktif tedarikçiler: {val}",
        totalFreeCapacity: "Toplam mevcut kapasite: {val}"
      }
    },
    revenue: {
      title: "Gelir Getiren Hizmet",
      tooltip: "Her tedarikçi kategorisinin seçilen zaman diliminde şirket için ne kadar gelir elde ettiğini gösterir.",
      footer: {
        amount: "{val} bin"
      }
    },
    satisfaction: {
      title: "Seyahat Eden Memnuniyeti",
      tooltip: "Müşteri geri bildirimlerine dayalı olarak hizmet kategorisi başına ortalama memnuniyet puanı."
    },
    unauth: {
      title: "Yetkisiz Erişim Denemeleri",
      tooltip: "Her risk seviyesinde kaç yetkisiz erişim girişiminin gerçekleştiğini gösterir.",
      unit: "deneme",
      footer: {
        topSource: "En çok kaynak: {val}"
      },
      level: {
        high: "Yüksek Risk",
        sensitive: "Hassas",
        low: "Düşük Risk"
      }
    },
    requests: {
      title: "Güncel Resmi Talepler",
      tooltip: "Çalışanların ilgili yöneticilerine ilettiği devam eden resmi talep sayısını gösterir.",
      unit: "talep",
      tab: {
        pending: "Bekleyen",
        inReview: "İncelemede",
        completed: "Tamamlanan"
      },
      footer: {
        topTopic: "En çok talep türü: {val}",
        topRecipient: "En çok hedeflenen yönetici: {val}"
      }
    },
    employeeDeptDist: {
      title: "Departmana Göre Çalışan Dağılımı",
      tooltip: "Çalışanların organizasyonun departmanları arasında nasıl dağıldığını gösterir.",
      tab: {
        all: "Tüm Departmanlar"
      },
      department: {
        management: "Yönetim",
        support: "Destek",
        marketing: "Pazarlama",
        finance: "Finans",
        technical: "Teknik"
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

  // ==================== VERİ TABLOLARI (ortak sütun başlıkları) ====================
  table: {
    id: "ID",
    fullName: "Tam Ad",
    email: "E-posta",
    membershipTier: "Üyelik Seviyesi",
    totalSpent: "Toplam Harcama",
    lastBooking: "Son Rezervasyon",
    accountStatus: "Hesap Durumu",
    companyName: "Şirket Adı",
    serviceCategory: "Hizmet Kategorisi",
    manager: "Yönetici",
    commissionRate: "Komisyon Oranı",
    rating: "Puan",
    contractStatus: "Sözleşme Durumu",
    department: "Departman",
    location: "Konum",
    accessRole: "Erişim Rolü",
    joinDate: "Katılım Tarihi",
    status: "Durum",
    logId: "Günlük ID",
    date: "Tarih",
    actionType: "İşlem Türü",
    severity: "Şiddet",
    ipAddress: "IP Adresi",
    description: "Açıklama",
    type: "Tür"
  },

  // ==================== ENUMLAR (üyelik, hesap durumu, departman, roller) ====================
  membershipTier: {
    bronze: "Bronz",
    silver: "Gümüş",
    gold: "Altın"
  },

  department: {
    management: "Yönetim",
    support: "Destek",
    marketing: "Pazarlama",
    finance: "Finans",
    technical: "Teknik"
  },

  roles: {
    superAdmin: "Süper Yönetici",
    admin: "Yönetici",
    financialManager: "Finans Müdürü",
    support: "Destek",
    operationManager: "Operasyon Müdürü",
    contentManager: "İçerik Müdürü",
    marketingManagement: "Pazarlama Müdürü",
    vendors: "Tedarikçi",
    technicalAdmin: "Teknik Yönetici",
    auditor: "Denetçi"
  }
};

export default tr;