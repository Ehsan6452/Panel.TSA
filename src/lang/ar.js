const ar = {
  auth: {
    login: "تسجيل الدخول",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    loginButton: "الدخول إلى النظام",
    logout: "تسجيل الخروج"
  },
  profile: {
    tabs: {
      general: "عام",
      specific: "معلومات خاصة",
      permissions: "الصلاحيات",
      history: "السجل",
      inventory: "المخزون",
      reservations: "الحجوزات",
      payments: "المدفوعات",
      docs: "الوثائق"
    },
    header: {
      userType: "نوع المستخدم",
      joinDate: "تاريخ الانضمام:",
      lastActivity: "آخر نشاط:",
      noEmail: "لم يتم تسجيل البريد الإلكتروني",
      noPhone: "لم يتم تسجيل الهاتف",
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
        deactivateTitle: "تعطيل المستخدم"
      }
    },
    errors: {
      loading: "جار التحميل...",
      notFound: "المعلومات غير موجودة"
    }
  },
  sidebar: {
    dashboard: "لوحة التحكم",
    users: "المستخدمون",
    vendors: "الموردون",
    employee:'الموظفون',
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
  pages: {
    dashboard: { title: "لوحة التحكم" },
    users: { title: "إدارة المستخدمين" },
      usersList: { title: "قائمة المستخدمين" },
      usersHistory: { title: "سجل إجراءات المستخدمين" },
    vendors: { title: "إدارة البائعين" },
      vendorsList: { title: "قائمة المورّدين" },
      globalInventory: { title: "جميع الخدمات" },
      vendorsDocs: { title: "وثائق المورّدين" },
    employee: { title: "الموظفون" },
      employeeList: { title: "قائمة الموظفين" },
      employeeHistory: { title: "سجل إجراءات الموظفين" },
      employeeDocs: { title: "الوثائق والعقود" },
    booking: { title: "إدارة الحجز" },
    financial: { title: "الإدارة المالية" },
    content: { title: "إدارة المحتوى" },
    reports: { title: "التقارير" },
    marketing: { title: "التسويق" },
    pushNotification: { title: "إشعارات الدفع" },
    support: { title: "الدعم" },
    systemSetting: { title: "إعدادات النظام" },
    logSecurity: { title: "السجلات والأمان" },
    permissions: {
      title: "الأذونات",
      tooltip: "انقر للوصول بسرعة إلى صفحة إدارة الأذونات."
    },
    contracts: {
      title: "العقود",
      tooltip: "انقر للوصول بسرعة إلى صفحة إدارة العقود."
    },
    reservations: {
      title: "الحجوزات",
      tooltip: "انقر للوصول بسرعة إلى صفحة إدارة الحجوزات."
    },
    securityAlerts: {
      title: "تنبيهات الأمان",
      tooltip: "انقر للوصول بسرعة إلى صفحة إدارة تنبيهات الأمان."
    },
  },
  kpi: {
    totalUsers: {
      title: "إحصائيات المستخدمين",
      tooltip: "إجمالي المستخدمين المسجلين حسب الأدوار",
      onlineStatus: "{val} مستخدم متصل"
    },
    newUsers: {
      title: "المستخدمون الجدد",
      tooltip: "اتجاه تسجيل المستخدمين خلال آخر 10 أسابيع",
      growth: "{val}% نمو عن الأسبوع الماضي",
      decline: "{val}% انخفاض عن الأسبوع الماضي",
      neutral: "بدون تغيير عن الأسبوع الماضي"
    },
    activeServices: {
      title: "نشاط الخدمات",
      tooltip: "المستخدمون الذين يتلقون أو يقدمون خدمات حالياً",
      engagement: "{val}% من المستخدمين نشطون"
    },
    securityAlerts: {
      title: "تنبيهات الأمان",
      tooltip: "التنبيهات الأمنية المسجلة للحسابات",
      alertCount: "{val} حالة {type}"
    },
  },
  table:{
    id: "المعرّف",
    fullName:'الاسم الكامل',
    email:'البريد الإلكتروني',
    membershipTier:'مستوى العضوية',
    totalSpent:'إجمالي الإنفاق',
    lastBooking:'آخر حجز',
    accountStatus:'حالة الحساب',
    companyName:'اسم الشركة',
    serviceCategory:'نوع الخدمة',
    manger:'المدير',
    commissionRate:'نسبة العمولة',
    rating:'التقييم',
    contractStatus:'حالة العقد',
    department:'القسم',
    location:'الموقع',
    accessRole:'مستوى الوصول',
    joinDate:'تاريخ الانضمام',
    status:'الحالة'
  },
  membershipTier: {
    bronze:'برونزي',
    silver:'فضي',
    gold:'ذهبي'
  },
  accountStatus: {
    Active: "نشط",
    Inactive: "غير نشط",
    Suspended: "معلّق"
  },
  department:{
    management:'الإدارة',
    support:'الدعم',
    marketting:'التسويق',
    finance:'المالية',
    technical:'تقني'
  },
  roles:{
    superAdmin:'مدير عام',
    admin:'مدير',
    financialManager:'مدير مالي',
    support:'الدعم',
    operationManager:'مدير العمليات',
    contentManager:'مدير المحتوى',
    marketingManagement:'مدير التسويق',
    vendors:'مورد',
    technicalAdmin:'مدير تقني',
    auditor:'مدقق'
  },
  common: {
    welcome: "مرحباً",
    noAccess: "ليس لديك صلاحية للوصول إلى هذه الصفحة",
    loading: "جار التحميل...",
    error: "خطأ",
    panel: "لوحة الإدارة",
    logout: "تسجيل الخروج",
    action: "إجراء",
    seeMore: "عرض المزيد",
    quickAction: "الوصول السريع",
    users: {
      users: "المستخدمون",
      travelers: "المسافرون",
      vendors: "الموردون",
      employees: "الموظفون"
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
      restaurant: "مطعم",
      entertainment: "الترفيه"
    },
    alerts: {
      warning: "تحذير",
      sensitive: "حساس",
      critical: "خطير"
    },
    status: {
      new: "جديد",
      pending: "قيد المراجعة",
      completed: "مكتمل",
      approved: "تمت الموافقة",
      rejected: "مرفوض",
      overview: "نظرة عامة",
      active: "نشط",
      inactive: "غير نشط"
    },
  },
};

export default ar;
