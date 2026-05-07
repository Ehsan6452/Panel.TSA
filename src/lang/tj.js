const tj = {
  auth: {
    login: "Вуруд",
    username: "Номи корбар",
    password: "Рамз",
    loginButton: "Ворид шудан ба система",
    logout: "Баромад"
  },
  profile: {
    tabs: {
      general: "Умумӣ",
      specific: "Маълумоти махсус",
      permissions: "Иҷозатҳо",
      history: "Таърих",
      inventory: "Инвентар",
      reservations: "Бронкунӣ",
      payments: "Пардохтҳо",
      docs: "Ҳуҷҷатҳо"
    },
    header: {
      userType: "Навъи корбар",
      joinDate: "Санаи ҳамроҳшавӣ:",
      lastActivity: "Охирин фаъолият:",
      noEmail: "Почтаи электронӣ сабт нашудааст",
      noPhone: "Телефон сабт нашудааст",
      types: {
        traveler: "Сайёҳ",
        supplier: "Таъминкунанда",
        employee: "Корманд"
      },
      status: {
        active: "Фаъол",
        suspended: "Боздошта",
        blocked: "Маҳкамшуда"
      },
      actions: {
        callTitle: "Занг задан",
        emailTitle: "Фиристодани почтаи электронӣ",
        deactivateTitle: "Ғайрифаъол кардани корбар"
      }
    },
    errors: {
      loading: "Боркунӣ...",
      notFound: "Маълумот ёфт нашуд"
    }
  },
  sidebar: {
    dashboard: "Панел",
    users: "Корбарон",
    vendors: "Таъминкунандагон",
    employee:'Кормандон',
    booking: "Бронкунӣ",
    financial: "Молия",
    content: "Мундариҷа",
    reports: "Ҳисоботҳо",
    marketing: "Маркетинг",
    pushNotification: "Огоҳиномаҳо",
    support: "Дастгирӣ",
    systemSetting: "Танзимоти система",
    logSecurity: "Лог ва амният"
  },
  pages: {
    dashboard: { title: "Панели идоракунӣ" },
    users: { title: "Идоракунии корбарон" },
      usersList: { title: "Рӯйхати корбарон" },
      usersHistory: { title: "Таърихи амалҳои корбарон" },
    vendors: { title: "Идоракунии таъминкунандагон" },
      vendorsList: { title: "Рӯйхати таъминкунандагон" },
      globalInventory: { title: "Ҳамаи хизматҳо" },
      vendorsDocs: { title: "Ҳуҷҷатҳои таъминкунандагон" },
    employee: { title: "Кормандон" },
      employeeList: { title: "Рӯйхати кормандон" },
      employeeHistory: { title: "Таърихи амалҳои кормандон" },
      employeeDocs: { title: "Ҳуҷҷатҳо ва шартномаҳо" },
    booking: { title: "Идоракунии бронкунӣ" },
    financial: { title: "Идоракунии молиявӣ" },
    content: { title: "Идоракунии мундариҷа" },
    reports: { title: "Ҳисоботҳо" },
    marketing: { title: "Маркетинг" },
    pushNotification: { title: "Огоҳиномаҳо" },
    support: { title: "Дастгирӣ" },
    systemSetting: { title: "Танзимоти система" },
    logSecurity: { title: "Лог ва амният" },
    permissions: {
      title: "Иҷозатҳо",
      tooltip: "Барои дастрасии зуд ба саҳифаи идоракунии иҷозатҳо клик кунед."
    },
    contracts: {
      title: "Шартномаҳо",
      tooltip: "Барои дастрасии зуд ба саҳифаи идоракунии шартномаҳо клик кунед."
    },
    reservations: {
      title: "Бронҳо",
      tooltip: "Барои дастрасии зуд ба саҳифаи идоракунии бронҳо клик кунед."
    },
    securityAlerts: {
      title: "Огоҳии амниятӣ",
      tooltip: "Барои дастрасии зуд ба саҳифаи идоракунии огоҳии амниятӣ клик кунед."
    },
  },
  kpi: {
    totalUsers: {
      title: "Омори корбарон",
      tooltip: "Шумораи умумии корбарони сабтшуда",
      onlineStatus: "{val} корбар онлайн"
    },
    newUsers: {
      title: "Корбарони нав",
      tooltip: "Афзоиши корбарон дар 10 ҳафтаи охир",
      growth: "{val}% афзоиш нисбат ба ҳафтаи гузашта",
      decline: "{val}% коҳиш нисбат ба ҳафтаи гузашта",
      neutral: "Тағйирот нест"
    },
    activeServices: {
      title: "Хидматҳои фаъол",
      tooltip: "Корбароне, ки айни ҳол хидмат мегиранд ё медиҳанд",
      engagement: "{val}% корбар фаъол аст"
    },
    securityAlerts: {
      title: "Огоҳии амният",
      tooltip: "Огоҳии амниятии система",
      alertCount: "{val} {type}"
    },
  },
  table:{
    id:'ID',
    fullName:'Ном',
    email:'Почтаи электронӣ',
    membershipTier:'Сатҳи узвият',
    totalSpent:'Ҳамагӣ хароҷот',
    lastBooking:'Охирин брон',
    accountStatus:'Ҳолати ҳисоб',
    companyName:'Номи ширкат',
    serviceCategory:'Навъи хизматрасонӣ',
    manger:'Менеҷер',
    commissionRate:'Меъёри комиссия',
    rating:'Рейтинг',
    contractStatus:'Ҳолати шартнома',
    department:'Шуъба',
    location:'Макони ҷойгиршавӣ',
    accessRole:'Сатҳи дастрасӣ',
    joinDate:'Санаи ҳамроҳшавӣ',
    status:'Ҳолат'
  },
  pages: {
    dashboard: { title: "Панели идоракунӣ" },
    users: { title: "Идоракунии корбарон" },
    permissions: { title: "Иҷозатҳо" },
    vendors: { title: "Идоракунии фурӯшандагон" },
    contracts: { title: "Шартномаҳо" },
    booking: { title: "Идоракунии брон" },
    reservations: { title: "Бронҳо" },
    financial: { title: "Идоракунии молиявӣ" },
    content: { title: "Идоракунии мундариҷа" },
    reports: { title: "Ҳисоботҳо" },
    marketing: { title: "Маркетинг" },
    pushNotification: { title: "Огоҳиномаҳои push" },
    support: { title: "Дастгирӣ" },
    systemSetting: { title: "Танзимоти система" },
    logSecurity: { title: "Лог ва амният" },
    securityAlerts: { title: "Огоҳии амниятӣ" },
    permissions: {
      title: "Иҷозатҳо",
      tooltip: "Барои дастрасии зуд ба саҳифаи идоракунии иҷозатҳо клик кунед."
    },
    contracts: {
      title: "Шартномаҳо",
      tooltip: "Барои дастрасии зуд ба саҳифаи идоракунии шартномаҳо клик кунед."
    },
    reservations: {
      title: "Бронҳо",
      tooltip: "Барои дастрасии зуд ба саҳифаи идоракунии бронҳо клик кунед."
    },
    securityAlerts: {
      title: "Огоҳии амниятӣ",
      tooltip: "Барои дастрасии зуд ба саҳифаи идоракунии огоҳии амниятӣ клик кунед."
    },
  },
  membershipTier: {
    bronze:'Бронзӣ',
    silver:'Нуқраӣ',
    gold:'Тиллоӣ'
  },
  accountStatus: {
    Active: "Фаъол",
    Inactive: "Ғайрифаъол",
    Suspended: "Боздошта"
  },
  department:{
    management:'Идоракунӣ',
    support:'Дастгирӣ',
    marketting:'Маркетинг',
    finance:'Молия',
    technical:'Техникӣ'
  },
  roles:{
    superAdmin:'Админи асосӣ',
    admin:'Админ',
    financialManager:'Менеҷери молиявӣ',
    support:'Дастгирӣ',
    operationManager:'Менеҷери амалиёт',
    contentManager:'Менеҷери мундариҷа',
    marketingManagement:'Менеҷери маркетинг',
    vendors:'Таъминкунанда',
    technicalAdmin:'Админи техникӣ',
    auditor:'Аудитор'
  },
  common: {
    welcome: "Хуш омадед",
    noAccess: "Шумо ба ин саҳифа дастрасӣ надоред",
    loading: "Боркунӣ...",
    error: "Хато",
    panel: "Панели идоракунӣ",
    logout: "Баромад",
    action: "Амалиёт",
    seeMore: "Бештар",
    quickAction: "Дастрасии зуд",
    users: {
      travelers: "Сайёҳон",
      users: "корбарон",
      vendors: "Таъминкунандагон",
      employees: "Кормандон"
    },
    time: {
      daily: "Рӯзона",
      weekly: "Ҳафтаина",
      monthly: "Моҳона",
      quarterly: "Семоҳа",
      yearly: "Солона"
    },
    services: {
      carRental: "Иҷораи мошин",
      accommodation: "Иқомат",
      restaurant: "Тарабхона",
      entertainment: "Фароғат"
    },
    alerts: {
      warning: "Огоҳӣ",
      sensitive: "Ҳассос",
      critical: "Ҷиддӣ"
    },
    status: {
      new: "Нав",
      pending: "Дар интизори баррасӣ",
      completed: "Анҷом дода шуд",
      approved: "Тасдиқ шуд",
      rejected: "Рад шуд",
      overview: "Шарҳи умумӣ",
      active: "Фаъол",
      inactive: "Ғайрифаъол"
    },
  }
};

export default tj;
