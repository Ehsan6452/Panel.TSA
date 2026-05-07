const ru = {
  auth: {
    login: "Вход",
    username: "Имя пользователя",
    password: "Пароль",
    loginButton: "Войти в систему",
    logout: "Выход"
  },
  profile: {
    tabs: {
      general: "Общее",
      specific: "Специальные данные",
      permissions: "Разрешения",
      history: "История",
      inventory: "Инвентарь",
      reservations: "Бронирования",
      payments: "Платежи",
      docs: "Документы"
    },
    header: {
      userType: "Тип пользователя",
      joinDate: "Дата регистрации:",
      lastActivity: "Последняя активность:",
      noEmail: "Электронная почта не указана",
      noPhone: "Телефон не указан",
      types: {
        traveler: "Путешественник",
        supplier: "Поставщик",
        employee: "Сотрудник"
      },
      status: {
        active: "Активен",
        suspended: "Приостановлен",
        blocked: "Заблокирован"
      },
      actions: {
        callTitle: "Позвонить",
        emailTitle: "Отправить email",
        deactivateTitle: "Деактивировать пользователя"
      }
    },
    errors: {
      loading: "Загрузка...",
      notFound: "Информация не найдена"
    }
  },
  sidebar: {
    dashboard: "Панель",
    users: "Пользователи",
    vendors: "Поставщики",
    employee:'Сотрудники',
    booking: "Бронирование",
    financial: "Финансы",
    content: "Контент",
    reports: "Отчеты",
    marketing: "Маркетинг",
    pushNotification: "Уведомления",
    support: "Поддержка",
    systemSetting: "Настройки системы",
    logSecurity: "Логи и безопасность"
  },
  pages: {
    dashboard: { title: "Панель управления" },
    users: { title: "Управление пользователями" },
      usersList: { title: "Список пользователей" },
      usersHistory: { title: "История действий пользователей" },
    vendors: { title: "Управление поставщиками" },
      vendorsList: { title: "Список поставщиков" },
      globalInventory: { title: "Все услуги" },
      vendorsDocs: { title: "Документы поставщиков" },
    employee: { title: "Сотрудники" },
      employeeList: { title: "Список сотрудников" },
      employeeHistory: { title: "История действий сотрудников" },
      employeeDocs: { title: "Документы и контракты" },
    booking: { title: "Управление бронированием" },
    financial: { title: "Финансовое управление" },
    reports: { title: "Отчёты" },
    marketing: { title: "Маркетинг" },
    pushNotification: { title: "Push‑уведомления" },
    support: { title: "Поддержка" },
    systemSetting: { title: "Настройки системы" },
    logSecurity: { title: "Логи и безопасность" },
    permissions: {
      title: "Разрешения",
      tooltip: "Нажмите, чтобы быстро перейти на страницу управления разрешениями."
    },
    contracts: {
      title: "Контракты",
      tooltip: "Нажмите, чтобы быстро перейти на страницу управления контрактами."
    },
    reservations: {
      title: "Бронирования",
      tooltip: "Нажмите, чтобы быстро перейти на страницу управления бронированиями."
    },
    securityAlerts: {
      title: "Оповещения безопасности",
      tooltip: "Нажмите, чтобы быстро перейти на страницу управления оповещениями безопасности."
    },

  },
  kpi: {
    totalUsers: {
      title: "Статистика пользователей",
      tooltip: "Количество зарегистрированных пользователей",
      onlineStatus: "{val} пользователей онлайн"
    },
    newUsers: {
      title: "Новые пользователи",
      tooltip: "Рост пользователей за последние 10 недель",
      growth: "Рост {val}% по сравнению с прошлой неделей",
      decline: "Снижение {val}% по сравнению с прошлой неделей",
      neutral: "Без изменений"
    },
    activeServices: {
      title: "Активные услуги",
      tooltip: "Пользователи, получающие или предоставляющие услуги",
      engagement: "{val}% пользователей активны"
    },
    securityAlerts: {
      title: "Предупреждения безопасности",
      tooltip: "Предупреждения системы безопасности",
      alertCount: "{val} {type}"
    },
  },
  table:{
    id: "ID",
    fullName:'Полное имя',
    email:'Электронная почта',
    membershipTier:'Уровень членства',
    totalSpent:'Общие расходы',
    lastBooking:'Последнее бронирование',
    accountStatus:'Статус аккаунта',
    companyName:'Название компании',
    serviceCategory:'Категория услуги',
    manger:'Менеджер',
    commissionRate:'Комиссионная ставка',
    rating:'Рейтинг',
    contractStatus:'Статус договора',
    department:'Отдел',
    location:'Местоположение',
    accessRole:'Уровень доступа',
    joinDate:'Дата присоединения',
    status:'Статус'
  },
  membershipTier: {
    bronze:'Бронзовый',
    silver:'Серебряный',
    gold:'Золотой'
  },
  accountStatus: {
    Active: "Активный",
    Inactive: "Неактивный",
    Suspended: "Заблокирован"
  },
  department:{
    management:'Управление',
    support:'Поддержка',
    marketting:'Маркетинг',
    finance:'Финансы',
    technical:'Технический'
  },
  roles:{
    superAdmin:'Главный администратор',
    admin:'Администратор',
    financialManager:'Финансовый менеджер',
    support:'Поддержка',
    operationManager:'Операционный менеджер',
    contentManager:'Менеджер контента',
    marketingManagement:'Менеджер маркетинга',
    vendors:'Поставщик',
    technicalAdmin:'Технический администратор',
    auditor:'Аудитор'
  },
  common: {
    welcome: "Добро пожаловать",
    noAccess: "У вас нет доступа к этой странице",
    loading: "Загрузка...",
    error: "Ошибка",
    panel: "Панель управления",
    logout: "Выход",
    action: "Действие",
    seeMore: "Подробнее",
    quickAction: "Быстрый доступ",
    users: {
      travelers: "Путешественники",
      users: "пользователи",
      vendors: "Поставщики",
      employees: "Сотрудники"
    },
    time: {
      daily: "Ежедневно",
      weekly: "Еженедельно",
      monthly: "Ежемесячно",
      quarterly: "Ежеквартально",
      yearly: "Ежегодно"
    },
    services: {
      carRental: "Аренда авто",
      accommodation: "Проживание",
      restaurant: "Ресторан",
      entertainment: "Развлечения"
    },
    alerts: {
      warning: "Предупреждение",
      sensitive: "Чувствительный",
      critical: "Критический"
    },
    status: {
      new: "Новый",
      pending: "На рассмотрении",
      completed: "Завершено",
      approved: "Одобрено",
      rejected: "Отклонено",
      overview: "Обзор",
      active: "Активный",
      inactive: "Неактивный"
    },
  }
};

export default ru;
