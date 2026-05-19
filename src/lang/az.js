const az = {
  // ==================== ÜMUMİ ====================
  common: {
    welcome: "Xoş gəlmisiniz",
    panel: "İdarə Paneli",
    loading: "Yüklənir...",
    error: "Xəta",
    noAccess: "Bu səhifəyə giriş icazəniz yoxdur",
    logout: "Çıxış",
    action: "Əməliyyat",
    seeMore: "Ətraflı",
    seeDetails: "Detallara bax",
    quickAction: "Sürətli Giriş",
    search: "Axtar...",
    export: "İxrac et",
    noData: "Məlumat mövcud deyil",
    rowsPerPage: "Səhifədə sıra",
    prev: "Əvvəlki",
    next: "Növbəti",
    users: {
      users: "İstifadəçilər",
      travelers: "Səyahətçilər",
      vendors: "Təchizatçılar",
      employees: "İşçilər",
      admins: "İdarəçilər"
    },
    time: {
      daily: "Günlük",
      weekly: "Həftəlik",
      monthly: "Aylıq",
      quarterly: "Rüblük",
      yearly: "İllik"
    },
    services: {
      carRental: "Avtomobil Kirayəsi",
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
      pending: "Gözləmədə",
      completed: "Tamamlandı",
      approved: "Təsdiqləndi",
      rejected: "Rədd edildi",
      overview: "Ümumi baxış",
      active: "Aktiv",
      inactive: "Qeyri-aktiv",
      suspended: "Dayandırılıb",
      pendingRenewal: "Yenilənmə gözləyir"
    }
  },

  // ==================== GİRİŞ / AUTENTİFİKASİYA ====================
  auth: {
    login: "Daxil ol",
    username: "İstifadəçi adı",
    password: "Şifrə",
    loginButton: "Sistemə daxil ol",
    logout: "Çıxış"
  },

  // ==================== YAN MENYÜ ====================
  sidebar: {
    dashboard: "İdarə Paneli",
    users: "İstifadəçilər",
    vendors: "Təchizatçılar",
    employees: "İşçilər",
    booking: "Rezervasiya",
    financial: "Maliyyə",
    content: "Məzmun",
    reports: "Hesabatlar",
    marketing: "Marketinq",
    pushNotification: "Bildirişlər",
    support: "Dəstək",
    systemSetting: "Sistem Parametrləri",
    logSecurity: "Jurnallar və Təhlükəsizlik"
  },

  // ==================== TAB ADLARI (təkrar istifadə üçün) ====================
  tabs: {
    all: "Bütün Jurnallar",
    security: "Təhlükəsizlik",
    completed: "Tamamlanmış",
    pending: "Gözləmədə",
    cancelled: "Ləğv edilmiş",
    activity: "Fəaliyyət",
    users: "İstifadəçilər",
    travelers: "Səyahətçilər",
    vendors: "Təchizatçılar",
    employees: "İşçilər",
    admins: "İdarəçilər",
    accommodation: "Yerləşmə",
    carRental: "Avtomobil Kirayəsi",
    restaurant: "Restoran",
    entertainment: "Əyləncə",
    info: "Məlumat",
    warning: "Xəbərdarlıq",
    critical: "Kritik",
    management: "İdarəetmə",
    support: "Dəstək",
    marketing: "Marketinq",
    finance: "Maliyyə",
    technical: "Texniki"
  },

  // ==================== PROFİL (ümumi struktur) ====================
  profile: {
    tabs: {
      general: "Ümumi",
      specific: "Xüsusi",
      admins: "İdarəçilər",
      permissions: "İcazələr",
      history: "Tarixçə",
      inventory: "İnventar",
      reservations: "Rezervasiyalar",
      payments: "Ödənişlər",
      docs: "Sənədlər"
    }
  },

  // ==================== SƏHİFƏLƏR ====================
  pages: {
    dashboard: {
      title: "İdarə Paneli"
    },

    // ----- İstifadəçilər -----
    addUser: { title: "Yeni İstifadəçi Əlavə Et" },
    users: {
      title: "İstifadəçi İdarəetməsi",
      list: {
        title: "İstifadəçi Siyahısı"
      },
      history: {
        title: "İstifadəçi Fəaliyyət Tarixçəsi"
      },
      profile: {
        header: {
          userType: "İstifadəçi Tipi",
          joinDate: "Qoşulma Tarixi:",
          lastActivity: "Son Aktivlik:",
          noEmail: "E-poçt təqdim edilməyib",
          noPhone: "Telefon nömrəsi təqdim edilməyib",
          noName: "Ad təqdim edilməyib",
          types: {
            traveler: "Səyahətçi",
            supplier: "Təchizatçı",
            employee: "İşçi"
          },
          status: {
            active: "Aktiv",
            suspended: "Dayandırılıb",
            blocked: "Bloklanıb"
          },
          actions: {
            callTitle: "Zəng et",
            emailTitle: "E-poçt göndər",
            deactivateTitle: "İstifadəçini deaktiv et",
            editTitle: "İstifadəçini redaktə et"
          }
        },
        errors: {
          loading: "Yüklənir...",
          notFound: "Məlumat tapılmadı"
        },
        general: {
          loadingInfo: "Məlumat yüklənir...",
          fields: {
            firstName: "Ad",
            lastName: "Soyad",
            email: "E-poçt",
            phoneNumber: "Telefon nömrəsi",
            userType: "İstifadəçi tipi",
            subType: "Alt tip"
          },
          info: {
            joinDate: "Qoşulma tarixi",
            lastActivity: "Son aktivlik"
          },
          actions: {
            forceLogout: "Məcburi çıxış",
            reVerify: "Yenidən təsdiqlə",
            sendTempPass: "Müvəqqəti şifrə göndər"
          },
          sections: {
            recentChats: "Son söhbətlər və aktiv ticketlər"
          },
          table: {
            id: "ID",
            subject: "Mövzu",
            status: "Status",
            date: "Tarix"
          }
        },
        userSpecificTraveler: {
          loading: "Səyahətçi məlumatları yüklənir...",
          stats: {
            rating: "Orta reytinq",
            profit: "Mənfəət (komissiya)",
            favorites: "Sevimli xidmətlər",
            totalBookings: "Ümumi rezervasiyalar"
          },
          documents: {
            nationalId: "Şəxsiyyət vəsiqəsi",
            passport: "Pasport nömrəsi",
            dob: "Doğum tarixi",
            nationality: "Milliyyət",
            language: "Əsas dil",
            specialNeeds: "Xüsusi ehtiyaclar / pəhriz"
          },
          titles: {
            companions: "Müşayiət edənlər (asılı şəxslər siyahısı)"
          },
          table: {
            fullName: "Tam ad",
            relation: "Qohumluq",
            documentId: "Sənəd nömrəsi (Pasport/Şəxsiyyət)",
            dob: "Doğum tarixi"
          }
        },
        userSpecificAdmin: {
          loading: "İdarəçi məlumatları yüklənir...",
          titles: {
            inventory: "Təyin edilmiş inventar sahəsi"
          },
          vendor: {
            subtitle: "Üçün qanuni nümayəndə:",
            viewProfile: "Təchizatçı profilini gör"
          },
          stats: {
            role: "Rol və şöbə",
            shift: "İş növbəsi",
            repLetter: "Təmsilçilik məktubu",
            allowedIps: "İcazə verilən IP-lər (ağ siyahı)"
          },
          table: {
            id: "Məhsul ID",
            name: "Məhsul/Xidmət adı",
            type: "Tip",
            status: "Status"
          }
        },
        permissions: {
          loading: "İcazələr yüklənir...",
          title: "İcazələr və Giriş Nəzarəti",
          description: "Bu istifadəçi üçün təyin edilmiş icazələri göstərir. Dəyişiklik etmək üçün Rolların idarəetmə panelinə keçin."
        },
        history: {
          title: "İstifadəçi fəaliyyət tarixçəsi"
        },
        reservations: {
          title: "Səyahətçi rezervasiyaları"
        }
      }
    },

    // ----- Təchizatçılar -----
    addVendor: { title: "Yeni Təchizatçı Əlavə Et" },
    vendors: {
      title: "Təchizatçı İdarəetməsi",
      list: {
        title: "Təchizatçı Siyahısı"
      },
      inventory: {
        title: "Bütün Xidmətlər"
      },
      docs: {
        title: "Təchizatçı Sənədləri"
      },
      profile: {
        general: {
          loadingInfo: "Təchizatçı məlumatları yüklənir...",
          fields: {
            brandName: "Brend adı",
            formalName: "Hüquqi şirkət adı",
            idCode: "Qeydiyyat ID / Şəxsiyyət nömrəsi",
            email: "E-poçt",
            phoneNumber: "Telefon nömrəsi",
            emergencyPhone: "Fövqəladə telefon",
            website: "Vebsayt",
            userType: "Qurum tipi",
            subType: "Xidmət kateqoriyası",
            status: "Status"
          },
          info: {
            joinDate: "Qoşulma tarixi",
            lastActivity: "Son aktivlik"
          },
          actions: {
            forceLogout: "Məcburi çıxış",
            reVerify: "Yenidən təsdiqlə",
            sendTempPass: "Müvəqqəti şifrə göndər"
          },
          sections: {
            recentTickets: "Son ticketlər"
          },
          table: {
            id: "ID",
            subject: "Mövzu",
            status: "Status",
            date: "Tarix"
          }
        },
        vendorSpecificAccommodations: {
          loading: "Yaşayış məlumatları yüklənir...",
          stats: {
            allInventory: "Ümumi inventar",
            rate: "Reytinq",
            commission: "Komissiya (Sistem)",
            allReserve: "Ümumi rezervasiyalar"
          },
          documents: {
            type: "Əmlak növü",
            rate: "Ulduz sayı",
            checkIn: "Qeydiyyat vaxtı aralığı",
            checkOut: "Çıxış vaxtı aralığı",
            options: "Şərait və seçimlər",
            cancelPolicy: {
              title: "Ləğv siyasəti",
              lessThan24h: "Gəlişdən 24 saat az əvvəl",
              lessThan48h: "Gəlişdən 48 saat az əvvəl",
              lessThan72h: "Gəlişdən 72 saat az əvvəl"
            }
          },
          titles: {
            activeReserves: "Aktiv rezervasiyalar"
          },
          table: {
            id: "Rezervasiya ID",
            user: "Qonaq",
            room: "Otaq",
            date: "Tarix",
            status: "Status",
            price: "Qiymət",
            commission: "Komissiya"
          }
        }
      }
    },

    // ----- İşçilər -----
    employee: {
      title: "İşçilər",
      list: {
        title: "İşçi Siyahısı"
      },
      history: {
        title: "İşçi Fəaliyyət Tarixçəsi"
      },
      docs: {
        title: "Sənədlər və Müqavilələr"
      }
    },

    // ----- Digər səhifələr -----
    booking: { title: "Rezervasiya İdarəetməsi" },
    financial: { title: "Maliyyə İdarəetməsi" },
    content: { title: "Məzmun İdarəetməsi" },
    reports: { title: "Hesabatlar" },
    marketing: { title: "Marketinq" },
    pushNotification: { title: "Push Bildirişlər" },
    support: { title: "Dəstək" },
    systemSetting: { title: "Sistem Parametrləri" },
    logSecurity: { title: "Jurnallar və Təhlükəsizlik" },

    // ----- Sürətli giriş aləti ucları -----
    permissions: {
      title: "İcazələr",
      tooltip: "İcazələrin idarəetmə səhifəsinə sürətli giriş üçün klikləyin."
    },
    contracts: {
      title: "Müqavilələr",
      tooltip: "Müqavilələrin idarəetmə səhifəsinə sürətli giriş üçün klikləyin."
    },
    reservations: {
      title: "Rezervasiyalar",
      tooltip: "Rezervasiyaların idarəetmə səhifəsinə sürətli giriş üçün klikləyin."
    },
    securityAlerts: {
      title: "Təhlükəsizlik Xəbərdarlıqları",
      tooltip: "Təhlükəsizlik xəbərdarlıqlarının idarəetmə səhifəsinə sürətli giriş üçün klikləyin."
    }
  },

  // ==================== FİLTRƏLƏR ====================
  filters: {
    all_severity: "Bütün Şiddətlər",
    severity: {
      info: "Məlumat",
      warning: "Xəbərdarlıq",
      critical: "Kritik"
    }
  },

  // ==================== FƏALİYYƏT TARİXÇƏSİ ====================
  history: {
    types: {
      login: "İstifadəçi girişi",
      profile_update: "Profil yeniləməsi",
      booking: "Rezervasiya əməliyyatı",
      failed_login: "Uğursuz giriş",
      payment: "Ödəniş"
    },
    severity: {
      info: "Məlumat",
      warning: "Xəbərdarlıq",
      critical: "Kritik"
    }
  },

  // ==================== KPI KARTLARI (İdarə Paneli) ====================
  kpi: {
    totalUsers: {
      title: "İstifadəçi Statistikası",
      tooltip: "Rol üzrə kateqoriyalaşdırılmış qeydiyyatdan keçmiş istifadəçilərin ümumi sayını göstərir",
      onlineStatus: "{val} istifadəçi onlayn"
    },
    newUsers: {
      title: "Yeni İstifadəçilər",
      tooltip: "Son 10 həftə ərzində yeni istifadəçi əldə edilməsi tendensiyası",
      growth: "Keçən həftə ilə müqayisədə {val}% artım",
      decline: "Keçən həftə ilə müqayisədə {val}% azalma",
      neutral: "Keçən həftə ilə müqayisədə dəyişiklik yoxdur"
    },
    activeServices: {
      title: "Aktiv Xidmət İştirakı",
      tooltip: "Hazırda xidmət alan və ya göstərən istifadəçilər",
      engagement: "İstifadəçilərin {val}%-i iştirak edir"
    },
    securityAlerts: {
      title: "Təhlükəsizlik Xəbərdarlıqları",
      tooltip: "İstifadəçi hesabları üçün qeydə alınmış sistem və təhlükəsizlik xəbərdarlıqları",
      alertCount: "{val} {type} xəbərdarlığı"
    },
    accountStatus: {
      title: "Hesab Statusu",
      tooltip: "Platformanın sağlamlığını və təhlükəsizliyini izləmək üçün aktiv və bloklanmış hesabları müqayisə edir.",
      active: "Aktiv",
      blocked: "Bloklanmış",
      recentBlocks: "Son 24 saatda {val} hesab bloklanıb",
      secureStatus: "Son vaxtlar təhlükəsizlik pozuntusu yoxdur"
    },
    activityRate: {
      title: "Fəaliyyət dərəcəsi",
      tooltip: "Seçilmiş dövr ərzində unikal istifadəçi girişlərinin tendensiyası",
      growth: "Əvvəlki dövrlə müqayisədə {val}% artım",
      decline: "Əvvəlki dövrlə müqayisədə {val}% azalma",
      neutral: "Əvvəlki dövrlə müqayisədə dəyişiklik yoxdur"
    },
    conversionRate: {
      title: "İstifadəçi Çevrilmə Dərəcəsi",
      tooltip: "İstifadəçilərin həyat dövrü üzrə hərəkət faizini izləyir: qeydiyyatdan ilk rezervasiyaya qədər, və ilk rezervasiyadan daimi müştəriyə qədər.",
      tabs: {
        firstBooking: "Qonaqdan Müştəriyə",
        repeatBooking: "Müştəridən Daimi Müştəriyə"
      },
      growth: "Əvvəlki dövrlə müqayisədə +{val}%",
      decline: "Əvvəlki dövrlə müqayisədə -{val}%"
    },
    accountRatio: {
      title: "Hesablar vs. Həqiqi Səyahətçilər",
      tooltip: "Qeydiyyatdan keçmiş ümumi hesab sayı ilə ən azı bir rezervasiyası olan istifadəçilərin sayını müqayisə edir.",
      tabs: {
        thisYear: "Bu il",
        allTime: "Bütün dövr"
      },
      labels: {
        totalAccounts: "Ümumi Qeydiyyatdan Keçənlər",
        realTravelers: "Aktiv Səyahətçilər"
      },
      footerText: "Qeydiyyatdan keçən hesabların {val}%-i aktiv səyahətçilərdir"
    },
    kycStatus: {
      title: "KYC Sənədinin Təsdiq Statusu",
      tooltip: "Hüquqi təchizatçılar tərəfindən təqdim edilmiş sənədlərin təsdiq statusunu göstərir",
      tabs: {
        new: "Yeni",
        pending: "Gözləmədə",
        completed: "Tamamlanmış"
      },
      footer: {
        newTotal: "Ümumi yeni sənədlər: {val}",
        pendingTotal: "Gözləmədə olan sənədlər: {val}",
        approvalRate: "Təsdiq dərəcəsi: {val}",
        rejectionRate: "Rədd dərəcəsi: {val}"
      }
    },
    supplierCapacity: {
      title: "Fəaliyyət və Boş Tutum",
      tooltip: "Bu gün neçə təchizatçının aktiv olduğunu və xidmət kateqoriyaları üzrə nə qədər boş tutumun mövcud olduğunu göstərir.",
      tabs: {
        activity: "Təchizatçı Fəaliyyəti",
        capacity: "Boş Tutum"
      },
      activityChart: "Təchizatçı Fəaliyyət Statusu",
      freeCapacityChart: "Xidmətə görə mövcud tutum",
      footer: {
        activeSummary: "Aktiv təchizatçılar: {val}",
        totalFreeCapacity: "Ümumi mövcud tutum: {val}"
      }
    },
    revenue: {
      title: "Gəlir Gətirən Xidmət",
      tooltip: "Hər bir təchizatçı kateqoriyasının seçilmiş dövrdə şirkət üçün nə qədər gəlir əldə etdiyini göstərir.",
      footer: {
        amount: "{val} min"
      }
    },
    satisfaction: {
      title: "Səyahətçi Məmnuniyyəti",
      tooltip: "Müştəri rəylərinə əsasən hər bir xidmət kateqoriyası üzrə orta məmnuniyyət reytinqi."
    },
    unauth: {
      title: "İcazəsiz Giriş Cəhdləri",
      tooltip: "Hər bir risk səviyyəsində neçə icazəsiz giriş cəhdinin baş verdiyini göstərir.",
      unit: "cəhd",
      footer: {
        topSource: "Ən çox mənbə: {val}"
      },
      level: {
        high: "Yüksək Risk",
        sensitive: "Həssas",
        low: "Aşağı Risk"
      }
    },
    requests: {
      title: "Cari Rəsmi Sorğular",
      tooltip: "İşçilərin öz menecerlərinə təqdim etdiyi davam edən rəsmi sorğuların sayını göstərir.",
      unit: "sorğu",
      tab: {
        pending: "Gözləmədə",
        inReview: "Yoxlanılır",
        completed: "Tamamlanmış"
      },
      footer: {
        topTopic: "Ən çox sorğu növü: {val}",
        topRecipient: "Ən çox hədəflənən menecer: {val}"
      }
    },
    employeeDeptDist: {
      title: "Şöbə üzrə İşçi Bölgüsü",
      tooltip: "İşçilərin təşkilatın şöbələri üzrə necə paylandığını göstərir.",
      tab: {
        all: "Bütün Şöbələr"
      },
      department: {
        management: "İdarəetmə",
        support: "Dəstək",
        marketing: "Marketinq",
        finance: "Maliyyə",
        technical: "Texniki"
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

  // ==================== DATA CƏDVƏLLƏRİ (ümumi sütun başlıqları) ====================
  table: {
    id: "ID",
    fullName: "Tam ad",
    email: "E-poçt",
    membershipTier: "Üzvlük səviyyəsi",
    totalSpent: "Ümumi xərcləmə",
    lastBooking: "Son rezervasiya",
    accountStatus: "Hesab statusu",
    companyName: "Şirkət adı",
    serviceCategory: "Xidmət kateqoriyası",
    manager: "Menecer",
    commissionRate: "Komissiya dərəcəsi",
    rating: "Reytinq",
    contractStatus: "Müqavilə statusu",
    department: "Şöbə",
    location: "Məkan",
    accessRole: "Giriş rolu",
    joinDate: "Qoşulma tarixi",
    status: "Status",
    logId: "Jurnal ID",
    date: "Tarix",
    actionType: "Əməliyyat tipi",
    severity: "Şiddət",
    ipAddress: "IP ünvanı",
    description: "Təsvir",
    type: "Tip"
  },

  // ==================== ENUMLAR (üzvülük, hesab statusu, şöbə, rollar) ====================
  membershipTier: {
    bronze: "Bürünc",
    silver: "Gümüş",
    gold: "Qızıl"
  },

  department: {
    management: "İdarəetmə",
    support: "Dəstək",
    marketing: "Marketinq",
    finance: "Maliyyə",
    technical: "Texniki"
  },

  roles: {
    superAdmin: "Super İdarəçi",
    admin: "İdarəçi",
    financialManager: "Maliyyə Meneceri",
    support: "Dəstək",
    operationManager: "Əməliyyat Meneceri",
    contentManager: "Məzmun Meneceri",
    marketingManagement: "Marketinq Meneceri",
    vendors: "Təchizatçı",
    technicalAdmin: "Texniki İdarəçi",
    auditor: "Auditor"
  }
};

export default az;