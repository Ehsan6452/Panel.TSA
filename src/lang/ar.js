const ar = {
  // ==================== GENERAL ====================
  common: {
    welcome: "مرحباً",
    panel: "لوحة الإدارة",
    loading: "جاري التحميل...",
    error: "خطأ",
    noAccess: "ليس لديك صلاحية الوصول إلى هذه الصفحة",
    logout: "تسجيل الخروج",
    action: "إجراء",
    seeMore: "عرض المزيد",
    seeDetails: "عرض التفاصيل",
    quickAction: "وصول سريع",
    search: "بحث...",
    export: "تصدير",
    noData: "لا توجد بيانات متاحة",
    rowsPerPage: "صفوف لكل صفحة",
    prev: "السابق",
    next: "التالي",
    users: {
      users: "المستخدمون",
      travelers: "المسافرون",
      vendors: "الموردون",
      employees: "الموظفون",
      admins: "المدراء"
    },
    time: {
      daily: "يومي",
      weekly: "أسبوعي",
      monthly: "شهري",
      quarterly: "ربع سنوي",
      yearly: "سنوي"
    },
    services: {
      carRental: "تأجير السيارات",
      accommodation: "الإقامة",
      restaurant: "المطاعم",
      entertainment: "الترفيه"
    },
    alerts: {
      warning: "تحذير",
      sensitive: "حساس",
      critical: "حرج"
    },
    status: {
      new: "جديد",
      pending: "قيد المراجعة",
      completed: "مكتمل",
      approved: "موافق عليه",
      rejected: "مرفوض",
      overview: "نظرة عامة",
      active: "نشط",
      inactive: "غير نشط",
      suspended: "معلق",
      pendingRenewal: "قيد التجديد"
    }
  },

  // ==================== المصادقة ====================
  auth: {
    login: "تسجيل الدخول",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    loginButton: "تسجيل الدخول إلى النظام",
    logout: "تسجيل الخروج"
  },

  // ==================== القائمة الجانبية ====================
  sidebar: {
    dashboard: "لوحة التحكم",
    users: "المستخدمون",
    vendors: "الموردون",
    employees: "الموظفون",
    booking: "الحجوزات",
    financial: "المالية",
    content: "المحتوى",
    reports: "التقارير",
    marketing: "التسويق",
    pushNotification: "الإشعارات",
    support: "الدعم",
    systemSetting: "إعدادات النظام",
    logSecurity: "السجلات والأمان"
  },

  // ==================== أسماء التبويبات (قابلة لإعادة الاستخدام) ====================
  tabs: {
    all: "جميع السجلات",
    security: "الأمان",
    completed: "مكتمل",
    pending: "قيد الانتظار",
    cancelled: "ملغي",
    activity: "النشاط",
    users: "المستخدمون",
    travelers: "المسافرون",
    vendors: "الموردون",
    employees: "الموظفون",
    admins: "المدراء",
    accommodation: "الإقامة",
    carRental: "تأجير السيارات",
    restaurant: "المطاعم",
    entertainment: "الترفيه",
    info: "معلومات",
    warning: "تحذير",
    critical: "حرج",
    management: "الإدارة",
    support: "الدعم",
    marketing: "التسويق",
    finance: "المالية",
    technical: "التقني"
  },

  // ==================== الملف الشخصي (هيكل مشترك) ====================
  profile: {
    tabs: {
      general: "عام",
      specific: "محدد",
      admins: "المدراء",
      permissions: "الصلاحيات",
      history: "السجل",
      inventory: "المخزون",
      reservations: "الحجوزات",
      payments: "المدفوعات",
      docs: "المستندات"
    }
  },

  // ==================== الصفحات ====================
  pages: {
    dashboard: {
      title: "لوحة التحكم"
    },

    // ----- المستخدمون -----
    addUser: { title: "إضافة مستخدم جديد" },
    users: {
      title: "إدارة المستخدمين",
      list: {
        title: "قائمة المستخدمين"
      },
      history: {
        title: "سجل نشاط المستخدم"
      },
      profile: {
        header: {
          userType: "نوع المستخدم",
          joinDate: "تاريخ الانضمام:",
          lastActivity: "آخر نشاط:",
          noEmail: "البريد الإلكتروني غير موجود",
          noPhone: "رقم الهاتف غير موجود",
          noName: "الاسم غير موجود",
          types: {
            traveler: "مسافر",
            supplier: "مورد",
            employee: "موظف"
          },
          status: {
            active: "نشط",
            suspended: "معلق",
            blocked: "محظور"
          },
          actions: {
            callTitle: "اتصال هاتفي",
            emailTitle: "إرسال بريد إلكتروني",
            deactivateTitle: "إلغاء تنشيط المستخدم",
            editTitle: "تعديل المستخدم"
          }
        },
        errors: {
          loading: "جاري التحميل...",
          notFound: "المعلومات غير موجودة"
        },
        general: {
          loadingInfo: "جاري تحميل المعلومات...",
          fields: {
            firstName: "الاسم الأول",
            lastName: "اسم العائلة",
            email: "البريد الإلكتروني",
            phoneNumber: "رقم الهاتف",
            userType: "نوع المستخدم",
            subType: "النوع الفرعي"
          },
          info: {
            joinDate: "تاريخ الانضمام",
            lastActivity: "آخر نشاط"
          },
          actions: {
            forceLogout: "تسجيل خروج إجباري",
            reVerify: "إعادة التحقق",
            sendTempPass: "إرسال كلمة مرور مؤقتة"
          },
          sections: {
            recentChats: "المحادثات الأخيرة والتذاكر النشطة"
          },
          table: {
            id: "المعرف",
            subject: "الموضوع",
            status: "الحالة",
            date: "التاريخ"
          }
        },
        userSpecificTraveler: {
          loading: "جاري تحميل بيانات المسافر...",
          stats: {
            rating: "متوسط التقييم",
            profit: "الربح (العمولة)",
            favorites: "الخدمات المفضلة",
            totalBookings: "إجمالي الحجوزات"
          },
          documents: {
            nationalId: "الهوية الوطنية",
            passport: "رقم جواز السفر",
            dob: "تاريخ الميلاد",
            nationality: "الجنسية",
            language: "اللغة الأساسية",
            specialNeeds: "احتياجات خاصة / نظام غذائي"
          },
          titles: {
            companions: "المرافقون (قائمة المعالين)"
          },
          table: {
            fullName: "الاسم الكامل",
            relation: "صلة القرابة",
            documentId: "رقم الوثيقة (جواز سفر / هوية)",
            dob: "تاريخ الميلاد"
          }
        },
        userSpecificAdmin: {
          loading: "جاري تحميل بيانات المدير...",
          titles: {
            inventory: "نطاق المخزون المخصص"
          },
          vendor: {
            subtitle: "الممثل القانوني لـ:",
            viewProfile: "عرض ملف المورد"
          },
          stats: {
            role: "الدور والقسم",
            shift: "نوبة العمل",
            repLetter: "خطاب التفويض",
            allowedIps: "عناوين IP المسموح بها (القائمة البيضاء)"
          },
          table: {
            id: "معرف المنتج",
            name: "اسم المنتج / الخدمة",
            type: "النوع",
            status: "الحالة"
          }
        },
        permissions: {
          loading: "جاري تحميل الصلاحيات...",
          title: "الصلاحيات والتحكم في الوصول",
          description: "عرض الصلاحيات الممنوحة لهذا المستخدم. للتعديل، انتقل إلى لوحة إدارة الأدوار."
        },
        history: {
          title: "سجل نشاط المستخدم"
        },
        reservations: {
          title: "حجوزات المسافر"
        }
      }
    },

    // ----- الموردون -----
    addVendor: { title: "إضافة مورد جديد" },
    vendors: {
      title: "إدارة الموردين",
      list: {
        title: "قائمة الموردين"
      },
      inventory: {
        title: "جميع الخدمات"
      },
      docs: {
        title: "مستندات المورد"
      },
      profile: {
        general: {
          loadingInfo: "جاري تحميل معلومات المورد...",
          fields: {
            brandName: "الاسم التجاري",
            formalName: "اسم الشركة القانوني",
            idCode: "رقم التسجيل / الهوية الوطنية",
            email: "البريد الإلكتروني",
            phoneNumber: "رقم الهاتف",
            emergencyPhone: "هاتف الطوارئ",
            website: "الموقع الإلكتروني",
            userType: "نوع الكيان",
            subType: "فئة الخدمة",
            status: "الحالة"
          },
          info: {
            joinDate: "تاريخ الانضمام",
            lastActivity: "آخر نشاط"
          },
          actions: {
            forceLogout: "تسجيل خروج إجباري",
            reVerify: "إعادة التحقق",
            sendTempPass: "إرسال كلمة مرور مؤقتة"
          },
          sections: {
            recentTickets: "التذاكر الأخيرة"
          },
          table: {
            id: "المعرف",
            subject: "الموضوع",
            status: "الحالة",
            date: "التاريخ"
          }
        }
      }
    },

    // ----- الموظفون -----
    employee: {
      title: "الموظفون",
      list: {
        title: "قائمة الموظفين"
      },
      history: {
        title: "سجل نشاط الموظف"
      },
      docs: {
        title: "المستندات والعقود"
      }
    },

    // ----- الصفحات الأخرى -----
    booking: { title: "إدارة الحجوزات" },
    financial: { title: "الإدارة المالية" },
    content: { title: "إدارة المحتوى" },
    reports: { title: "التقارير" },
    marketing: { title: "التسويق" },
    pushNotification: { title: "الإشعارات الفورية" },
    support: { title: "الدعم" },
    systemSetting: { title: "إعدادات النظام" },
    logSecurity: { title: "السجلات والأمان" },

    // ----- تلميحات الوصول السريع -----
    permissions: {
      title: "الصلاحيات",
      tooltip: "انقر للوصول السريع إلى صفحة إدارة الصلاحيات."
    },
    contracts: {
      title: "العقود",
      tooltip: "انقر للوصول السريع إلى صفحة إدارة العقود."
    },
    reservations: {
      title: "الحجوزات",
      tooltip: "انقر للوصول السريع إلى صفحة إدارة الحجوزات."
    },
    securityAlerts: {
      title: "تنبيهات الأمان",
      tooltip: "انقر للوصول السريع إلى صفحة إدارة تنبيهات الأمان."
    }
  },

  // ==================== عوامل التصفية ====================
  filters: {
    all_severity: "جميع الخطورة",
    severity: {
      info: "معلومات",
      warning: "تحذير",
      critical: "حرج"
    }
  },

  // ==================== سجل النشاط ====================
  history: {
    types: {
      login: "تسجيل دخول المستخدم",
      profile_update: "تحديث الملف الشخصي",
      booking: "إجراء حجز",
      failed_login: "محاولة دخول فاشلة",
      payment: "دفع"
    },
    severity: {
      info: "معلومات",
      warning: "تحذير",
      critical: "حرج"
    }
  },

  // ==================== بطاقات الأداء (لوحة التحكم) ====================
  kpi: {
    totalUsers: {
      title: "إحصائيات المستخدمين",
      tooltip: "يعرض إجمالي المستخدمين المسجلين حسب الأدوار",
      onlineStatus: "{val} مستخدم متصل"
    },
    newUsers: {
      title: "المستخدمون الجدد",
      tooltip: "اتجاه اكتساب المستخدمين الجدد خلال الأسابيع العشرة الماضية",
      growth: "نمو بنسبة {val}٪ مقارنة بالأسبوع الماضي",
      decline: "انخفاض بنسبة {val}٪ مقارنة بالأسبوع الماضي",
      neutral: "لا تغيير مقارنة بالأسبوع الماضي"
    },
    activeServices: {
      title: "مشاركة الخدمات النشطة",
      tooltip: "المستخدمون الذين يتلقون أو يقدمون خدمات حالياً",
      engagement: "{val}٪ من المستخدمين نشطاء"
    },
    securityAlerts: {
      title: "تنبيهات الأمان",
      tooltip: "تنبيهات النظام والأمان المسجلة لحسابات المستخدمين",
      alertCount: "{val} تنبيه {type}"
    },
    accountStatus: {
      title: "حالة الحساب",
      tooltip: "مقارنة بين الحسابات النشطة والمحظورة لمراقبة صحة النظام وأمانه.",
      active: "نشط",
      blocked: "محظور",
      recentBlocks: "تم حظر {val} حساباً خلال الـ 24 ساعة الماضية",
      secureStatus: "لا توجد خروقات أمنية مؤخراً"
    },
    activityRate: {
      title: "معدل النشاط",
      tooltip: "اتجاه تسجيلات دخول المستخدمين الفريدة خلال الفترة الزمنية المحددة",
      growth: "نمو بنسبة {val}٪ مقارنة بالفترة السابقة",
      decline: "انخفاض بنسبة {val}٪ مقارنة بالفترة السابقة",
      neutral: "لا تغيير مقارنة بالفترة السابقة"
    },
    conversionRate: {
      title: "معدل تحويل المستخدم",
      tooltip: "يتتبع النسبة المئوية للمستخدمين الذين يتحركون خلال دورة الحياة: من التسجيل إلى أول حجز، ومن أول حجز إلى عميل مخلص.",
      tabs: {
        firstBooking: "من زائر إلى عميل",
        repeatBooking: "من عميل إلى مخلص"
      },
      growth: "+{val}٪ مقارنة بالفترة السابقة",
      decline: "-{val}٪ مقارنة بالفترة السابقة"
    },
    accountRatio: {
      title: "الحسابات مقابل المسافرين الفعليين",
      tooltip: "يقارن إجمالي عدد الحسابات المسجلة بعدد المستخدمين الذين أكملوا حجزاً واحداً على الأقل.",
      tabs: {
        thisYear: "هذا العام",
        allTime: "كل الوقت"
      },
      labels: {
        totalAccounts: "إجمالي المسجلين",
        realTravelers: "المسافرون النشطون"
      },
      footerText: "{val}٪ من الحسابات المسجلة هم مسافرون نشطون"
    },
    kycStatus: {
      title: "حالة التحقق من مستندات KYC",
      tooltip: "يعرض حالة التحقق من المستندات التي قدمها الموردون القانونيون",
      tabs: {
        new: "جديد",
        pending: "قيد المراجعة",
        completed: "مكتمل"
      },
      footer: {
        newTotal: "إجمالي المستندات الجديدة: {val}",
        pendingTotal: "المستندات قيد المراجعة: {val}",
        approvalRate: "نسبة الموافقة: {val}",
        rejectionRate: "نسبة الرفض: {val}"
      }
    },
    supplierCapacity: {
      title: "النشاط والسعة الحرة",
      tooltip: "يظهر عدد الموردين النشطين اليوم وكمية السعة الحرة المتاحة عبر فئات الخدمة.",
      tabs: {
        activity: "نشاط الموردين",
        capacity: "السعة الحرة"
      },
      activityChart: "حالة نشاط الموردين",
      freeCapacityChart: "السعة المتاحة حسب الخدمة",
      footer: {
        activeSummary: "الموردون النشطون: {val}",
        totalFreeCapacity: "إجمالي السعة المتاحة: {val}"
      }
    },
    revenue: {
      title: "الخدمات المدرة للإيرادات",
      tooltip: "يظهر مقدار الإيرادات التي حققتها كل فئة من فئات الموردين للشركة في الفترة الزمنية المحددة.",
      footer: {
        amount: "{val} ألف"
      }
    },
    satisfaction: {
      title: "رضا المسافرين",
      tooltip: "متوسط تقييم الرضا لكل فئة خدمة بناءً على ملاحظات العملاء."
    },
    unauth: {
      title: "محاولات الوصول غير المصرح به",
      tooltip: "يظهر عدد محاولات الوصول غير المصرح به التي حدثت في كل مستوى من مستويات الخطورة.",
      unit: "محاولة",
      footer: {
        topSource: "المصدر الأعلى: {val}"
      },
      level: {
        high: "عالي الخطورة",
        sensitive: "حساس",
        low: "منخفض الخطورة"
      }
    },
    requests: {
      title: "الطلبات الرسمية الحالية",
      tooltip: "يعرض عدد الطلبات الرسمية الجارية التي قدمها الموظفون إلى مديريهم المعنيين.",
      unit: "طلب",
      tab: {
        pending: "قيد الانتظار",
        inReview: "قيد المراجعة",
        completed: "مكتمل"
      },
      footer: {
        topTopic: "أكثر نوع طلب: {val}",
        topRecipient: "أكثر مدير مستهدف: {val}"
      }
    },
    employeeDeptDist: {
      title: "توزيع الموظفين حسب القسم",
      tooltip: "يظهر توزيع الموظفين عبر أقسام المؤسسة.",
      tab: {
        all: "جميع الأقسام"
      },
      department: {
        management: "الإدارة",
        support: "الدعم",
        marketing: "التسويق",
        finance: "المالية",
        technical: "التقني"
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

  // ==================== الجداول (عناوين الأعمدة المشتركة) ====================
  table: {
    id: "المعرف",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    membershipTier: "درجة العضوية",
    totalSpent: "إجمالي الإنفاق",
    lastBooking: "آخر حجز",
    accountStatus: "حالة الحساب",
    companyName: "اسم الشركة",
    serviceCategory: "فئة الخدمة",
    manager: "المدير",
    commissionRate: "نسبة العمولة",
    rating: "التقييم",
    contractStatus: "حالة العقد",
    department: "القسم",
    location: "الموقع",
    accessRole: "دور الوصول",
    joinDate: "تاريخ الانضمام",
    status: "الحالة",
    logId: "معرف السجل",
    date: "التاريخ",
    actionType: "نوع الإجراء",
    severity: "الخطورة",
    ipAddress: "عنوان IP",
    description: "الوصف",
    type: "النوع"
  },

  // ==================== القوائم (درجة العضوية، حالة الحساب، القسم، الأدوار) ====================
  membershipTier: {
    bronze: "برونزية",
    silver: "فضية",
    gold: "ذهبية"
  },

  department: {
    management: "الإدارة",
    support: "الدعم",
    marketing: "التسويق",
    finance: "المالية",
    technical: "التقني"
  },

  roles: {
    superAdmin: "مدير عام",
    admin: "مدير",
    financialManager: "مدير مالي",
    support: "دعم فني",
    operationManager: "مدير عمليات",
    contentManager: "مدير محتوى",
    marketingManagement: "مدير تسويق",
    vendors: "مورد",
    technicalAdmin: "مدير تقني",
    auditor: "مدقق"
  }
};

export default ar;