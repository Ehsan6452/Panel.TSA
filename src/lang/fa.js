const fa = {
  // ==================== سراسری / عمومی ====================
  common: {
    welcome: "خوش آمدید",
    panel: "پنل مدیریت",
    loading: "در حال بارگذاری...",
    error: "خطا",
    noAccess: "شما دسترسی به این صفحه را ندارید",
    logout: "خروج",
    action: "عملیات",
    seeMore: "مشاهده بیشتر",
    seeDetails: "مشاهده جزئیات",
    quickAction: "دسترسی سریع",
    search: "جستجو...",
    export: "خروجی",
    noData: "داده‌ای موجود نیست",
    rowsPerPage: "ردیف در هر صفحه",
    prev: "قبلی",
    next: "بعدی",
    users: {
      users: "کاربران",
      travelers: "مسافران",
      vendors: "تامین‌کنندگان",
      employees: "کارمندان",
      admins: "مدیران"
    },
    time: {
      daily: "روزانه",
      weekly: "هفتگی",
      monthly: "ماهانه",
      quarterly: "فصلی",
      yearly: "سالانه"
    },
    services: {
      carRental: "اجاره خودرو",
      accommodation: "اقامت",
      restaurant: "رستوران",
      entertainment: "سرگرمی"
    },
    alerts: {
      warning: "هشدار",
      sensitive: "حساس",
      critical: "بحرانی"
    },
    status: {
      new: "جدید",
      pending: "در انتظار بررسی",
      completed: "تکمیل شده",
      approved: "تایید شده",
      rejected: "رد شده",
      overview: "نمای کلی",
      active: "فعال",
      inactive: "غیرفعال",
      suspended: "تعلیق شده",
      pendingRenewal: "در انتظار تمدید"
    }
  },

  // ==================== احراز هویت ====================
  auth: {
    login: "ورود",
    username: "نام کاربری",
    password: "رمز عبور",
    loginButton: "ورود به سامانه",
    logout: "خروج"
  },

  // ==================== نوار کناری ====================
  sidebar: {
    dashboard: "داشبورد",
    users: "کاربران",
    vendors: "تامین‌کنندگان",
    employees: "کارمندان",
    booking: "رزرو",
    financial: "مالی",
    content: "محتوایی",
    reports: "گزارشات",
    marketing: "بازاریابی",
    pushNotification: "اعلان‌ها",
    support: "پشتیبانی",
    systemSetting: "تنظیمات سامانه",
    logSecurity: "لاگ‌ها و امنیت"
  },

  // ==================== نام برگه‌ها (قابل استفاده مجدد) ====================
  tabs: {
    all: "تمام لاگ‌ها",
    security: "امنیت",
    completed: "تکمیل شده",
    pending: "در انتظار",
    cancelled: "لغو شده",
    activity: "فعالیت",
    users: "کاربران",
    travelers: "مسافران",
    vendors: "تامین‌کنندگان",
    employees: "کارمندان",
    admins: "مدیران",
    accommodation: "اقامت",
    carRental: "اجاره خودرو",
    restaurant: "رستوران",
    entertainment: "سرگرمی",
    info: "اطلاعات",
    warning: "هشدار",
    critical: "بحرانی",
    management: "مدیریت",
    support: "پشتیبانی",
    marketing: "بازاریابی",
    finance: "مالی",
    technical: "فنی"
  },

  // ==================== پروفایل (ساختار مشترک) ====================
  profile: {
    tabs: {
      general: "عمومی",
      specific: "اختصاصی",
      admins: "مدیران",
      permissions: "دسترسی‌ها",
      history: "تاریخچه",
      inventory: "موجودی",
      reservations: "رزروها",
      payments: "پرداخت‌ها",
      docs: "مدارک"
    }
  },

  // ==================== صفحات ====================
  pages: {
    dashboard: {
      title: "داشبورد"
    },

    // ----- کاربران -----
    addUser: { title: "افزودن کاربر جدید" },
    users: {
      title: "مدیریت کاربران",
      list: {
        title: "لیست کاربران"
      },
      history: {
        title: "تاریخچه فعالیت کاربر"
      },
      profile: {
        header: {
          userType: "نوع کاربر",
          joinDate: "تاریخ عضویت:",
          lastActivity: "آخرین فعالیت:",
          noEmail: "ایمیل ارائه نشده",
          noPhone: "شماره تلفن ارائه نشده",
          noName: "نام ارائه نشده",
          types: {
            traveler: "مسافر",
            supplier: "تامین‌کننده",
            employee: "کارمند"
          },
          status: {
            active: "فعال",
            suspended: "تعلیق",
            blocked: "مسدود"
          },
          actions: {
            callTitle: "تماس تلفنی",
            emailTitle: "ارسال ایمیل",
            deactivateTitle: "غیرفعال کردن کاربر",
            editTitle: "ویرایش کاربر"
          }
        },
        errors: {
          loading: "در حال بارگذاری...",
          notFound: "اطلاعاتی یافت نشد"
        },
        general: {
          loadingInfo: "در حال بارگذاری اطلاعات...",
          fields: {
            firstName: "نام",
            lastName: "نام خانوادگی",
            email: "ایمیل",
            phoneNumber: "شماره تلفن",
            userType: "نوع کاربر",
            subType: "نوع فرعی"
          },
          info: {
            joinDate: "تاریخ عضویت",
            lastActivity: "آخرین فعالیت"
          },
          actions: {
            forceLogout: "خروج اجباری",
            reVerify: "تأیید مجدد",
            sendTempPass: "ارسال رمز موقت"
          },
          sections: {
            recentChats: "چت‌های اخیر و تیکت‌های فعال"
          },
          table: {
            id: "شناسه",
            subject: "موضوع",
            status: "وضعیت",
            date: "تاریخ"
          }
        },
        userSpecificTraveler: {
          loading: "در حال بارگذاری اطلاعات مسافر...",
          stats: {
            rating: "میانگین امتیاز",
            profit: "سود (کارمزد)",
            favorites: "خدمات مورد علاقه",
            totalBookings: "کل رزروها"
          },
          documents: {
            nationalId: "کد ملی",
            passport: "شماره پاسپورت",
            dob: "تاریخ تولد",
            nationality: "ملیت",
            language: "زبان اصلی",
            specialNeeds: "نیازهای ویژه / رژیم غذایی"
          },
          titles: {
            companions: "همراهان (لیست افراد تحت تکفل)"
          },
          table: {
            fullName: "نام کامل",
            relation: "نسبت",
            documentId: "شماره مدرک (پاسپورت/ملی)",
            dob: "تاریخ تولد"
          }
        },
        userSpecificAdmin: {
          loading: "در حال بارگذاری اطلاعات مدیر...",
          titles: {
            inventory: "حوزه موجودی تعیین شده"
          },
          vendor: {
            subtitle: "نماینده قانونی برای:",
            viewProfile: "مشاهده پروفایل تامین‌کننده"
          },
          stats: {
            role: "نقش و دپارتمان",
            shift: "شیفت کاری",
            repLetter: "نامه نمایندگی",
            allowedIps: "آی‌پی‌های مجاز (لیست سفید)"
          },
          table: {
            id: "شناسه محصول",
            name: "نام محصول/خدمت",
            type: "نوع",
            status: "وضعیت"
          }
        },
        permissions: {
          loading: "در حال بارگذاری دسترسی‌ها...",
          title: "دسترسی‌ها و کنترل دسترسی",
          description: "دسترسی‌های اعطا شده به این کاربر را مشاهده می‌کنید. برای اعمال تغییرات، به پنل مدیریت نقش‌ها بروید."
        },
        history: {
          title: "تاریخچه فعالیت کاربر"
        },
        reservations: {
          title: "رزروهای مسافر"
        }
      }
    },

    // ----- تامین‌کنندگان -----
    addVendor: { title: "افزودن تامین‌کننده جدید" },
    vendors: {
      title: "مدیریت تامین‌کنندگان",
      list: {
        title: "لیست تامین‌کنندگان"
      },
      inventory: {
        title: "همه خدمات"
      },
      docs: {
        title: "مدارک تامین‌کننده"
      },
      profile: {
        general: {
          loadingInfo: "در حال بارگذاری اطلاعات تامین‌کننده...",
          fields: {
            brandName: "نام تجاری",
            formalName: "نام قانونی شرکت",
            idCode: "شماره ثبت / کد ملی",
            email: "ایمیل",
            phoneNumber: "شماره تلفن",
            emergencyPhone: "تلفن اضطراری",
            website: "وبسایت",
            userType: "نوع نهاد",
            subType: "دسته بندی خدمات",
            status: "وضعیت"
          },
          info: {
            joinDate: "تاریخ عضویت",
            lastActivity: "آخرین فعالیت"
          },
          actions: {
            forceLogout: "خروج اجباری",
            reVerify: "تأیید مجدد",
            sendTempPass: "ارسال رمز موقت"
          },
          sections: {
            recentTickets: "تیکت‌های اخیر"
          },
          table: {
            id: "شناسه",
            subject: "موضوع",
            status: "وضعیت",
            date: "تاریخ"
          }
        },
        vendorSpecificAccommodations: {
          loading: "در حال بارگذاری اطلاعات اقامت...",
          stats: {
            allInventory: "کل موجودی",
            rate: "امتیاز",
            commission: "کارمزد (سیستم)",
            allReserve: "کل رزروها"
          },
          documents: {
            type: "نوع ملک",
            rate: "تعداد ستاره",
            checkIn: "بازه زمانی ورود",
            checkOut: "بازه زمانی خروج",
            options: "امکانات و گزینه‌ها",
            cancelPolicy: {
              title: "سیاست لغو",
              lessThan24h: "کمتر از 24 ساعت قبل از ورود",
              lessThan48h: "کمتر از 48 ساعت قبل از ورود",
              lessThan72h: "کمتر از 72 ساعت قبل از ورود"
            }
          },
          titles: {
            activeReserves: "رزروهای فعال"
          },
          table: {
            id: "شناسه رزرو",
            user: "میهمان",
            room: "اتاق",
            date: "تاریخ",
            status: "وضعیت",
            price: "قیمت",
            commission: "کارمزد"
          }
        }
      }
    },

    // ----- کارمندان -----
    employee: {
      title: "کارمندان",
      list: {
        title: "لیست کارمندان"
      },
      history: {
        title: "تاریخچه فعالیت کارمند"
      },
      docs: {
        title: "مدارک و قراردادها"
      }
    },

    // ----- سایر صفحات -----
    booking: { title: "مدیریت رزرو" },
    financial: { title: "مدیریت مالی" },
    content: { title: "مدیریت محتوا" },
    reports: { title: "گزارشات" },
    marketing: { title: "بازاریابی" },
    pushNotification: { title: "اعلان‌های فوری" },
    support: { title: "پشتیبانی" },
    systemSetting: { title: "تنظیمات سامانه" },
    logSecurity: { title: "لاگ‌ها و امنیت" },

    // ----- راهنمای ابزار دسترسی سریع -----
    permissions: {
      title: "دسترسی‌ها",
      tooltip: "برای دسترسی سریع به صفحه مدیریت دسترسی‌ها کلیک کنید."
    },
    contracts: {
      title: "قراردادها",
      tooltip: "برای دسترسی سریع به صفحه مدیریت قراردادها کلیک کنید."
    },
    reservations: {
      title: "رزروها",
      tooltip: "برای دسترسی سریع به صفحه مدیریت رزروها کلیک کنید."
    },
    securityAlerts: {
      title: "هشدارهای امنیتی",
      tooltip: "برای دسترسی سریع به صفحه مدیریت هشدارهای امنیتی کلیک کنید."
    }
  },

  // ==================== فیلترها ====================
  filters: {
    all_severity: "همه سطوح",
    severity: {
      info: "اطلاعاتی",
      warning: "هشدار",
      critical: "بحرانی"
    }
  },

  // ==================== تاریخچه فعالیت ====================
  history: {
    types: {
      login: "ورود کاربر",
      profile_update: "به‌روزرسانی پروفایل",
      booking: "اقدام رزرو",
      failed_login: "ورود ناموفق",
      payment: "پرداخت"
    },
    severity: {
      info: "اطلاعاتی",
      warning: "هشدار",
      critical: "بحرانی"
    }
  },

  // ==================== کارت‌های KPI (داشبورد) ====================
  kpi: {
    totalUsers: {
      title: "آمار کاربران",
      tooltip: "نمایش تعداد کل کاربران ثبت‌نام شده بر اساس نقش‌ها",
      onlineStatus: "{val} کاربر آنلاین"
    },
    newUsers: {
      title: "کاربران جدید",
      tooltip: "روند جذب کاربران جدید طی ۱۰ هفته گذشته",
      growth: "رشد {val}٪ نسبت به هفته قبل",
      decline: "کاهش {val}٪ نسبت به هفته قبل",
      neutral: "بدون تغییر نسبت به هفته قبل"
    },
    activeServices: {
      title: "مشارکت در خدمات فعال",
      tooltip: "کاربرانی که در حال حاضر از خدمات استفاده می‌کنند یا ارائه می‌دهند",
      engagement: "{val}٪ از کاربران مشارکت دارند"
    },
    securityAlerts: {
      title: "هشدارهای امنیتی",
      tooltip: "هشدارهای سیستمی و امنیتی ثبت شده برای حساب‌های کاربری",
      alertCount: "{val} هشدار {type}"
    },
    accountStatus: {
      title: "وضعیت حساب",
      tooltip: "مقایسه حساب‌های فعال در مقابل مسدود برای نظارت بر سلامت و امنیت پلتفرم.",
      active: "فعال",
      blocked: "مسدود",
      recentBlocks: "{val} حساب در ۲۴ ساعت گذشته مسدود شده است",
      secureStatus: "اخیراً نقض امنیتی رخ نداده است"
    },
    activityRate: {
      title: "نرخ فعالیت",
      tooltip: "روند ورود کاربران یکتا در بازه زمانی انتخاب شده",
      growth: "رشد {val}٪ نسبت به دوره قبل",
      decline: "کاهش {val}٪ نسبت به دوره قبل",
      neutral: "بدون تغییر نسبت به دوره قبل"
    },
    conversionRate: {
      title: "نرخ تبدیل کاربران",
      tooltip: "درصد کاربرانی که در چرخه عمر حرکت می‌کنند: از ثبت‌نام تا اولین رزرو، و از اولین رزرو به مشتری وفادار.",
      tabs: {
        firstBooking: "از مهمان به مشتری",
        repeatBooking: "از مشتری به وفادار"
      },
      growth: "+{val}٪ نسبت به دوره قبل",
      decline: "-{val}٪ نسبت به دوره قبل"
    },
    accountRatio: {
      title: "حساب‌ها در مقابل مسافران واقعی",
      tooltip: "تعداد کل حساب‌های ثبت‌شده را با تعداد کاربرانی که حداقل یک رزرو انجام داده‌اند مقایسه می‌کند.",
      tabs: {
        thisYear: "سال جاری",
        allTime: "کل زمان"
      },
      labels: {
        totalAccounts: "کل ثبت‌نامی‌ها",
        realTravelers: "مسافران فعال"
      },
      footerText: "{val}٪ از حساب‌های ثبت‌شده، مسافران فعال هستند"
    },
    kycStatus: {
      title: "وضعیت تأیید مدارک KYC",
      tooltip: "وضعیت تأیید مدارک ارسال شده توسط تأمین‌کنندگان حقوقی را نمایش می‌دهد",
      tabs: {
        new: "جدید",
        pending: "در انتظار بررسی",
        completed: "تکمیل شده"
      },
      footer: {
        newTotal: "کل مدارک جدید: {val}",
        pendingTotal: "مدارک در انتظار بررسی: {val}",
        approvalRate: "نرخ تأیید: {val}",
        rejectionRate: "نرخ رد: {val}"
      }
    },
    supplierCapacity: {
      title: "فعالیت و ظرفیت آزاد",
      tooltip: "تعداد تأمین‌کنندگان فعال امروز و میزان ظرفیت آزاد موجود در دسته‌بندی‌های خدمات را نشان می‌دهد.",
      tabs: {
        activity: "فعالیت تأمین‌کنندگان",
        capacity: "ظرفیت آزاد"
      },
      activityChart: "وضعیت فعالیت تأمین‌کنندگان",
      freeCapacityChart: "ظرفیت موجود بر اساس خدمت",
      footer: {
        activeSummary: "تأمین‌کنندگان فعال: {val}",
        totalFreeCapacity: "کل ظرفیت موجود: {val}"
      }
    },
    revenue: {
      title: "خدمات درآمدزا",
      tooltip: "میزان درآمد هر دسته از تأمین‌کنندگان برای شرکت در بازه زمانی انتخاب شده را نشان می‌دهد.",
      footer: {
        amount: "{val} هزار"
      }
    },
    satisfaction: {
      title: "رضایت مسافران",
      tooltip: "میانگین امتیاز رضایت به ازای هر دسته خدماتی بر اساس بازخورد مشتریان."
    },
    unauth: {
      title: "تلاش‌های دسترسی غیرمجاز",
      tooltip: "تعداد تلاش‌های دسترسی غیرمجاز رخ داده در هر سطح ریسک را نشان می‌دهد.",
      unit: "تلاش",
      footer: {
        topSource: "منبع اصلی: {val}"
      },
      level: {
        high: "ریسک بالا",
        sensitive: "حساس",
        low: "ریسک پایین"
      }
    },
    requests: {
      title: "درخواست‌های رسمی جاری",
      tooltip: "تعداد درخواست‌های رسمی در حال انجامی که کارمندان به مدیران مربوطه خود ارائه داده‌اند را نشان می‌دهد.",
      unit: "درخواست",
      tab: {
        pending: "در انتظار",
        inReview: "در حال بررسی",
        completed: "تکمیل شده"
      },
      footer: {
        topTopic: "نوع درخواست اصلی: {val}",
        topRecipient: "مدیر هدف اصلی: {val}"
      }
    },
    employeeDeptDist: {
      title: "توزیع کارمندان بر اساس دپارتمان",
      tooltip: "نحوه توزیع کارمندان در دپارتمان‌های سازمان را نشان می‌دهد.",
      tab: {
        all: "همه دپارتمان‌ها"
      },
      department: {
        management: "مدیریت",
        support: "پشتیبانی",
        marketing: "بازاریابی",
        finance: "مالی",
        technical: "فنی"
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

  // ==================== جداول داده (سرستون‌های مشترک) ====================
  table: {
    id: "شناسه",
    fullName: "نام کامل",
    email: "ایمیل",
    membershipTier: "سطح عضویت",
    totalSpent: "کل هزینه",
    lastBooking: "آخرین رزرو",
    accountStatus: "وضعیت حساب",
    companyName: "نام شرکت",
    serviceCategory: "دسته بندی خدمات",
    manager: "مدیر",
    commissionRate: "نرخ کارمزد",
    rating: "امتیاز",
    contractStatus: "وضعیت قرارداد",
    department: "دپارتمان",
    location: "موقعیت",
    accessRole: "نقش دسترسی",
    joinDate: "تاریخ عضویت",
    status: "وضعیت",
    logId: "شناسه لاگ",
    date: "تاریخ",
    actionType: "نوع عملیات",
    severity: "شدت",
    ipAddress: "آی‌پی",
    description: "توضیحات",
    type: "نوع"
  },

  // ==================== شمارشی‌ها (عضویت، وضعیت حساب، دپارتمان، نقش‌ها) ====================
  membershipTier: {
    bronze: "برنز",
    silver: "نقره",
    gold: "طلا"
  },

  department: {
    management: "مدیریت",
    support: "پشتیبانی",
    marketing: "بازاریابی",
    finance: "مالی",
    technical: "فنی"
  },

  roles: {
    superAdmin: "مدیر ارشد",
    admin: "مدیر",
    financialManager: "مدیر مالی",
    support: "پشتیبانی",
    operationManager: "مدیر عملیات",
    contentManager: "مدیر محتوا",
    marketingManagement: "مدیر بازاریابی",
    vendors: "تأمین‌کننده",
    technicalAdmin: "مدیر فنی",
    auditor: "بازرس"
  }
};

export default fa;