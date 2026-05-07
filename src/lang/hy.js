const hy = {
  auth: {
    login: "Մուտք",
    username: "Օգտվողի անուն",
    password: "Գաղտնաբառ",
    loginButton: "Մուտք գործել համակարգ",
    logout: "Ելք"
  },
  profile: {
    tabs: {
      general: "Ընդհանուր",
      specific: "Հատուկ տվյալներ",
      permissions: "Թույլտվություններ",
      history: "Պատմություն",
      inventory: "Պաշար",
      reservations: "Ամրագրումներ",
      payments: "Վճարումներ",
      docs: "Փաստաթղթեր"
    },
    header: {
      userType: "Օգտատիրոջ տեսակ",
      joinDate: "Միանալու ամսաթիվ:",
      lastActivity: "Վերջին ակտիվություն:",
      noEmail: "Էլ. փոստ գրանցված չէ",
      noPhone: "Հեռախոս գրանցված չէ",
      types: {
        traveler: "Ճանապարհորդ",
        supplier: "Մատակարար",
        employee: "Աշխատակից"
      },
      status: {
        active: "Ակտիվ",
        suspended: "Կասեցված",
        blocked: "Արգելափակված"
      },
      actions: {
        callTitle: "Զանգահարել",
        emailTitle: "Ուղարկել էլ. նամակ",
        deactivateTitle: "Անջատել օգտատիրոջը"
      }
    },
    errors: {
      loading: "Բեռնվում է...",
      notFound: "Տեղեկատվությունը չի գտնվել"
    }
  },
  sidebar: {
    dashboard: "Վահանակ",
    users: "Օգտվողներ",
    vendors: "Մատակարարներ",
    employee:'Աշխատակիցներ',
    booking: "Ամրագրումներ",
    financial: "Ֆինանսներ",
    content: "Բովանդակություն",
    reports: "Հաշվետվություններ",
    marketing: "Մարքեթինգ",
    pushNotification: "Ծանուցումներ",
    support: "Աջակցություն",
    systemSetting: "Համակարգի կարգավորումներ",
    logSecurity: "Լոգեր և անվտանգություն"
  },
  pages: {
    dashboard: { title: "Վահանակ" },
    users: { title: "Օգտատերերի կառավարում" },
      usersList: { title: "Օգտատերերի ցուցակ" },
      usersHistory: { title: "Օգտատերերի գործողությունների պատմություն" },
    vendors: { title: "Վաճառողների կառավարում" },
      vendorsList: { title: "Մատակարարների ցուցակ" },
      globalInventory: { title: "Բոլոր ծառայությունները" },
      vendorsDocs: { title: "Մատակարարների փաստաթղթեր" },
    employee: { title: "Աշխատակիցներ" },
      employeeList: { title: "Աշխատակիցների ցուցակ" },
      employeeHistory: { title: "Աշխատակիցների գործողությունների պատմություն" },
      employeeDocs: { title: "Փաստաթղթեր և պայմանագրեր" },
    booking: { title: "Ամրագրման կառավարում" },
    financial: { title: "Ֆինանսական կառավարում" },
    content: { title: "Բովանդակության կառավարում" },
    reports: { title: "Հաշվետվություններ" },
    marketing: { title: "Մարքեթինգ" },
    pushNotification: { title: "Push ծանուցումներ" },
    support: { title: "Աջակցություն" },
    systemSetting: { title: "Համակարգի կարգավորումներ" },
    logSecurity: { title: "Լոգեր և անվտանգություն" },
    permissions: {
      title: "Թույլտվություններ",
      tooltip: "Սեղմեք՝ թույլտվությունների կառավարման էջ արագ անցնելու համար։"
    },
    contracts: {
      title: "Պայմանագրեր",
      tooltip: "Սեղմեք՝ պայմանագրերի կառավարման էջ արագ անցնելու համար։"
    },
    reservations: {
      title: "Ամրագրումներ",
      tooltip: "Սեղմեք՝ ամրագրումների կառավարման էջ արագ անցնելու համար։"
    },
    securityAlerts: {
      title: "Անվտանգության ահազանգեր",
      tooltip: "Սեղմեք՝ անվտանգության ահազանգերի կառավարման էջ արագ անցնելու համար։"
    },
  },
  kpi: {
    totalUsers: {
      title: "Օգտվողների վիճակագրություն",
      tooltip: "Գրանցված օգտվողների ընդհանուր քանակը ըստ դերերի",
      onlineStatus: "{val} օգտվող առցանց"
    },
    newUsers: {
      title: "Նոր օգտվողներ",
      tooltip: "Վերջին 10 շաբաթների նոր օգտվողների աճ",
      growth: "{val}% աճ նախորդ շաբաթվա համեմատ",
      decline: "{val}% նվազում նախորդ շաբաթվա համեմատ",
      neutral: "Փոփոխություն չկա"
    },
    activeServices: {
      title: "Ակտիվ ծառայություններ",
      tooltip: "Օգտվողներ, որոնք ներկայումս օգտագործում կամ տրամադրում են ծառայություններ",
      engagement: "{val}% օգտվող ակտիվ է"
    },
    securityAlerts: {
      title: "Անվտանգության ահազանգեր",
      tooltip: "Գրանցված անվտանգության ահազանգեր",
      alertCount: "{val} {type}"
    },
  },
  table:{
    id: "ID",
    fullName:'Ամբողջական անուն',
    email:'Էլ․ փոստ',
    membershipTier:'Անդամակցության մակարդակ',
    totalSpent:'Ընդհանուր ծախս',
    lastBooking:'Վերջին ամրագրում',
    accountStatus:'Հաշվի կարգավիճակ',
    companyName:'Ընկերության անուն',
    serviceCategory:'Ծառայության տեսակ',
    manger:'Մենեջեր',
    commissionRate:'Միջնորդավճարի տոկոս',
    rating:'Գնահատական',
    contractStatus:'Պայմանագրի կարգավիճակ',
    department:'Բաժին',
    location:'Վայր',
    accessRole:'Մուտքի իրավունք',
    joinDate:'Միանալու ամսաթիվ',
    status:'Կարգավիճակ'
  },
  membershipTier: {
    bronze:'Բրոնզե',
    silver:'Արծաթե',
    gold:'Ոսկե'
  },
  accountStatus: {
    Active: "Ակտիվ",
    Inactive: "Անգործուն",
    Suspended: "Կասեցված"
  },
  department:{
    management:'Կառավարում',
    support:'Աջակցություն',
    marketting:'Մարքեթինգ',
    finance:'Ֆինանսներ',
    technical:'Տեխնիկական'
  },
  roles:{
    superAdmin:'Գլխավոր ադմին',
    admin:'Ադմին',
    financialManager:'Ֆինանսական մենեջեր',
    support:'Աջակցություն',
    operationManager:'Օպերացիոն մենեջեր',
    contentManager:'Բովանդակության մենեջեր',
    marketingManagement:'Մարքեթինգի մենեջեր',
    vendors:'Մատակարար',
    technicalAdmin:'Տեխնիկական ադմին',
    auditor:'Աուդիտոր'
  },
  common: {
    welcome: "Բարի գալուստ",
    noAccess: "Դուք չունեք մուտք այս էջին",
    loading: "Բեռնվում է...",
    error: "Սխալ",
    panel: "Կառավարման վահանակ",
    logout: "Ելք",
    action: "Գործողություն",
    seeMore: "Ավելին",
    quickAction: "Արագ մուտք",
    users: {
      travelers: "Ճանապարհորդներ",
      users: "օգտատերեր",
      vendors: "Մատակարարներ",
      employees: "Աշխատակիցներ"
    },
    time: {
      daily: "Օրական",
      weekly: "Շաբաթական",
      monthly: "Ամսական",
      quarterly: "Եռամսյակային",
      yearly: "Տարեկան"
    },
    services: {
      carRental: "Ավտոմեքենայի վարձույթ",
      accommodation: "Կացություն",
      restaurant: "Ռեստորան",
      entertainment: "Ժամանց"
    },
    alerts: {
      warning: "Զգուշացում",
      sensitive: "Զգայուն",
      critical: "Կրիտիկական"
    },
    status: {
      new: "Նոր",
      pending: "Սպասում է ստուգման",
      completed: "Ավարտված",
      approved: "Հաստատված",
      rejected: "Մերժված",
      overview: "Ընդհանուր տեսք",
      active: "Ակտիվ",
      inactive: "Անգործուն"
    },
  }
};

export default hy;
