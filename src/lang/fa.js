// src/i18n/fa.js

const fa = {
    auth: {
      login: "ورود",
      username: "نام کاربری",
      password: "رمز عبور",
      loginButton: "ورود به سیستم",
      logout: "خروج"
    },
    profile: {
      tabs: {
        general: "عمومی",
        specific: "اطلاعات اختصاصی",
        permissions: "سطوح دسترسی",
        history: "تاریخچه",
        inventory: "موجودی خدمات",
        reservations: "رزروها",
        payments: "پرداخت‌ها",
        docs: "مدارک"
      },
      header: {
        userType: "نوع کاربری",
        joinDate: "تاریخ عضویت:",
        lastActivity: "آخرین فعالیت:",
        noEmail: "ایمیل ثبت نشده",
        noPhone: "شماره ثبت نشده",
        types: {
            traveler: "مسافر",
            supplier: "تامین‌کننده",
            employee: "کارمند"
        },
        status: {
            active: "فعال",
            suspended: "معلق",
            blocked: "مسدود"
        },
        actions: {
            callTitle: "تماس تلفنی",
            emailTitle: "ارسال ایمیل",
            deactivateTitle: "غیرفعال‌سازی کاربر"
        }
      },
      errors: {
        loading: "در حال بارگذاری...",
        notFound: "اطلاعات یافت نشد"
      }
    },
    sidebar: {
      dashboard: "داشبورد",
      users: "کاربران",
      vendors: "فروشندگان",
      employee:'کارمندان',
      booking: "رزرو",
      financial: "مالی",
      content: "محتوا",
      reports: "گزارش‌ها",
      marketing: "بازاریابی",
      pushNotification: "اعلان‌ها",
      support: "پشتیبانی",
      systemSetting: "تنظیمات سیستم",
      logSecurity: "لاگ و امنیت"
    },
    pages: {
      dashboard: { title: "داشبورد" },
      users: { title: "مدیریت کاربران" },
        usersList:{title:"لیست کاربران"},
        usersHistory:{title:'تاریخچه اقدامان کاربران'},
      vendors: { title: "مدیریت فروشندگان" },
        vendorsList:{title:'لیست تامین کننده ها'},
        globalInventory:{title:'همه خدمات'},
        vendorsDocs:{title:'اسناد تامین کنندگان'},
      employee: {title:"کارمندان",},
        employeeList:{title:"لبست کارمندان"},
        employeeHistory:{title:"تاریخچه اقدامات کارمندان"},
        employeeDocs:{title:"اسناد و قرارداد ها"},
      booking: { title: "مدیریت رزرو" },
      financial: { title: "مدیریت مالی" },
      content: { title: "مدیریت محتوا",},
      reports: { title: "گزارش‌ها" },
      marketing: { title: "بازاریابی" },
      pushNotification: { title: "اعلان‌های پوش" },
      support: { title: "پشتیبانی" },
      systemSetting: { title: "تنظیمات سیستم" },
      logSecurity: { title: "لاگ و امنیت" },
      contracts:{title:"قراردادها", tooltip:'برای دسترسی سریع به صفحه مدیریت قرارداد ها کلیک کنید'},
      permissions:{title:'دسترسی ها', tooltip:'برای دسترسی سریع تر به صفحه مدیریت درستی ها کلیک کنید'},
      reservations:{title:'رزرو ها', tooltip:'برای دسترسی سریع تر به صفحه مدیریت رزرو ها کلیک کنید'},
      securityAlerts:{title:"هشدارهای امنیتی", tooltip:'برای دسترسی سریع به صفحه مدیریت هشدارهای امنیتی کلیک کنید'},
    },
    kpi:
    {
      totalUsers: {
        title: "آمار کاربران",
        tooltip: "نمایش مجموع کاربران ثبت‌نام شده در سیستم به تفکیک نقش‌ها",
        onlineStatus: "{val} کاربر آنلاین"
      },
      newUsers: {
        title: "کاربران جدید",
        tooltip: "روند جذب کاربران جدید در ۱۰ هفته گذشته و مقایسه نرخ رشد",
        growth: "{val}% رشد نسبت به هفته قبل",
        decline: "{val}% افت نسبت به هفته قبل",
        neutral: "بدون تغییر نسبت به هفته قبل"
      },
      activeServices: {
        title: "درگیری در خدمات جاری",
        tooltip: "نسبت کاربرانی که هم‌اکنون در حال دریافت یا ارائه خدمات هستند نسبت به کل کاربران",
        engagement: "{val}% از کل کاربران درگیر هستند"
      },
      securityAlerts: {
        title: "هشدارهای امنیتی",
        tooltip: "تعداد و سطح هشدارهای ثبت شده امنیتی و سیستمی برای حساب‌های کاربری",
        alertCount: "{val} مورد {type}"
      },
      accountStatus: {
        title: "وضعیت حساب کاربری",
        tooltip: "مقایسه حساب‌های فعال و مسدود شده برای پایش سلامت و امنیت پلتفرم.",
        active: "فعال",
        blocked: "مسدود",
        recentBlocks: "{val} حساب در ۲۴ ساعت گذشته مسدود شده‌اند",
        secureStatus: "اخیراً هیچ نقض امنیتی گزارش نشده است"
      },
      activityRate: {
        title: "نرخ فعالیت",
        tooltip: "روند ورود کاربران یکتا در بازه زمانی انتخاب شده",
        growth: "{val}% رشد نسبت به دوره قبل",
        decline: "{val}% کاهش نسبت به دوره قبل",
        neutral: "بدون تغییر نسبت به دوره قبل"
      },
      conversionRate: {
        title: "نرخ تبدیل کاربران",
        tooltip: "درصد کاربرانی را نشان می‌دهد که در چرخه عمر از ثبت‌نام به اولین رزرو و سپس به مشتری وفادار تبدیل می‌شوند.",
        tabs: {
          firstBooking: "کاربر به مشتری",
          repeatBooking: "مشتری به وفادار"
        },
        growth: "+{val}% نسبت به دوره قبل",
        decline: "-{val}% نسبت به دوره قبل"
      },
      accountRatio: {
        title: "حساب‌ها در برابر مسافران واقعی",
        tooltip: "مقایسه تعداد کل حساب‌های ثبت شده با تعداد کاربرانی که حداقل یک رزرو انجام داده‌اند.",
        tabs: {
          thisYear: "سال جاری",
          allTime: "از ابتدا تاکنون"
        },
        labels: {
          totalAccounts: "کل ثبت‌نام‌ها",
          realTravelers: "مسافران فعال"
        },
        footerText: "{val}% از حساب‌های ثبت شده مسافران فعال هستند"
      },
      kycStatus: {
        title: "وضعیت تایید مدارک KYC",
        tooltip: "نمایش وضعیت تایید مدارک ارسالی توسط تامین‌کنندگان حقوقی",
        tabs: {
          new: "جدید",
          pending: "در انتظار بررسی",
          completed: "تکمیل شده"
        },
        footer: {
          newTotal: "مجموع مدارک جدید: {val}",
          pendingTotal: "مدارک در انتظار بررسی: {val}",
          approvalRate: "نرخ تایید: {val}",
          rejectionRate: "نرخ رد: {val}"
        }
      },
      supplierCapacity: {
        title: "فعالیت و ظرفیت آزاد",
        tooltip: "نشان می‌دهد چه تعداد تامین‌کننده امروز فعال هستند و چه میزان ظرفیت آزاد در دسته‌های خدمات وجود دارد.",
        tabs: {
          activity: "فعالیت تامین‌کنندگان",
          capacity: "ظرفیت آزاد"
        },
        activityChart: "وضعیت فعالیت تامین‌کنندگان",
        freeCapacityChart: "ظرفیت در دسترس بر اساس خدمات",
        footer: {
          activeSummary: "تامین‌کنندگان فعال: {val}",
          totalFreeCapacity: "کل ظرفیت در دسترس: {val}"
        }
      },
      revenue: {
        title: "خدمات درآمدزا",
        tooltip: "نشان می‌دهد هر دسته از تامین‌کنندگان در بازه زمانی انتخاب شده چه میزان درآمد برای شرکت ایجاد کرده‌اند.",
        footer: {
          amount: "{val} K"
        }
      },
      satisfaction: {
        title: "رضایت مسافران",
        tooltip: "میانگین امتیاز رضایت برای هر دسته خدمات بر اساس بازخورد مشتریان."
      },
      unauth: {
        title: "تلاش‌های دسترسی غیرمجاز",
        tooltip: "نشان می‌دهد چه تعداد اقدام دسترسی غیرمجاز در هر سطح ریسک رخ داده است.",
        unit: "تلاش",

        footer: {
          topSource: "بیشترین منبع: {val}"
        },

        level: {
          high: "ریسک بالا",
          sensitive: "حساس",
          low: "ریسک پایین"
        }
      },
      requests: {
        title: "درخواست‌های رسمی جاری",
        tooltip: "تعداد درخواست‌های رسمی در حال انجام که کارکنان به مدیران خود ارسال کرده‌اند را نمایش می‌دهد.",
        unit: "درخواست",

        tab: {
          pending: "در انتظار",
          inReview: "در حال بررسی",
          completed: "تکمیل شده"
        },

        footer: {
          topTopic: "بیشترین نوع درخواست: {val}",
          topRecipient: "مدیری که بیشترین درخواست به او ارسال شده: {val}"
        }
      },
      employeeDeptDist: {
        title: "توزیع کارکنان بر اساس دپارتمان",
        tooltip: "نشان می‌دهد کارکنان در بخش‌های مختلف سازمان چگونه توزیع شده‌اند.",

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
      },
    },
    table:{
      id:'شناسه',
      fullName:'نام',
      email:'ایمیل',
      membershipTier:'سطح عضویت',
      totalSpent:'مجموع هزینه',
      lastBooking:'آخرین رزور',
      accountStatus:'وضعیت اکانت',
      companyName:'نام شرکت',
      serviceCategory:'نوع خدمات',
      manger:'مدیر',
      commissionRate:'نرخ کمیسیون',
      rating:'نمره',
      contractStatus:'وضعیت قرارداد',
      department:'دپارتمان',
      location:'مکان',
      accessRole:'سطح دسترسی',
      joinDate:'تاریخ استخدام',
      status:'وضعیت'
    },
    membershipTier: {
      bronze:'برنزی',
      silver:'نقره ای',
      gold:'طلایی'
    },
    accountStatus: {
      Active: "فعال",
      Inactive: "غیرفعال",
      Suspended: "مسدود"
    },
    department:{
      management:'مدیریت',
      support:'پشتیبانی',
      marketting:'بازاریابی',
      finance:'مالی',
      technical:'فنی',
    },
    roles:{
      superAdmin:'مدیر کل',
      admin:'ادمین',
      financialManager:'مدیر مالی',
      support:'پشتیبانی',
      operationManager:'مدیر اجرایی',
      contentManager:'مدیر محتوا',
      marketingManagement:'مدیر بازاریابی',
      vendors:'تامین کننده',
      technicalAdmin:'ادمین فنی',
      auditor:'ناظر',
    },
    common: {
      welcome: "خوش آمدید",
      noAccess: "شما به این صفحه دسترسی ندارید",
      loading: "در حال بارگذاری...",
      error: "خطا",
      panel: "پنل مدیریت",
      logout: "خروج از حساب کاربری",
      action:"عملیات",
      seeMore:"مشاهده بیشتر",
      quickAction:"دسترسی سریع",
      users:{
        travelers : 'گردشگران',
        users:'کاربران',
        vendors: 'تامین کنندگان',
        employees:'کارمندان'
      },
      time: {
        daily: "روزانه",
        weekly: "هفتگی",
        monthly: "ماهانه",
        yearly: "سالانه",
        quarterly: "فصلی",
      },
      services: {
        carRental: "اجاره خودرو",
        accommodation: "اقامت",
        restaurant: "رستوران",
        entertainment: "مراکز تفریحی"
      },
      alerts: {
        warning: "اخطار",
        sensitive: "حساس",
        critical: "خطرناک"
      },
      status: {
        new: "جدید",
        pending: "در انتظار بررسی",
        completed: "تکمیل شده",
        approved: "تایید شده",
        rejected: "رد شده",
        overview: "نمای کلی",
        active: "فعال",
        inactive: "غیرفعال"
      },
    }
  };

export default fa;
