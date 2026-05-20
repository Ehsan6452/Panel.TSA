const tj = {
  // ==================== УМУМӢ ====================
  common: {
    welcome: "Хуш омадед",
    panel: "Панели идоракунӣ",
    loading: "Боргирӣ...",
    error: "Хатогӣ",
    noAccess: "Шумо ба ин саҳифа дастрасӣ надоред",
    logout: "Баромад",
    action: "Амал",
    seeMore: "Бештар бинед",
    seeDetails: "Тафсилотро бинед",
    quickAction: "Дастрасии зуд",
    search: "Ҷустуҷӯ...",
    export: "Содирот",
    noData: "Маълумоте нест",
    rowsPerPage: "Сатрҳо дар як саҳифа",
    prev: "Қаблӣ",
    next: "Баъдӣ",
    users: {
      users: "Корбарон",
      travelers: "Сайёҳон",
      vendors: "Таъминкунандагон",
      employees: "Кормандони",
      admins: "Маъмурон"
    },
    time: {
      daily: "Рӯзона",
      weekly: "Ҳафтаина",
      monthly: "Моҳона",
      quarterly: "Фаслиюна",
      yearly: "Солона"
    },
    services: {
      carRental: "Иҷораи мошин",
      accommodation: "Манзил",
      restaurant: "Ресторан",
      entertainment: "Фарҳангӣ"
    },
    alerts: {
      warning: "Огоҳӣ",
      sensitive: "Ҳассос",
      critical: "Ҳассос"
    },
    status: {
      new: "Нав",
      pending: "Дар интизори баррасӣ",
      completed: "Анҷом ёфт",
      approved: "Тасдиқ шуд",
      rejected: "Рад шуд",
      overview: "Шарҳи умумӣ",
      active: "Фаъол",
      inactive: "Ғайрифаъол",
      suspended: "Боздошта шудааст",
      pendingRenewal: "Дар интизори тамдид"
    }
  },

  // ==================== АУТЕНТИФИКАТСИЯ ====================
  auth: {
    login: "Вуруд",
    username: "Номи корбарӣ",
    password: "Рамз",
    loginButton: "Вуруд ба система",
    logout: "Баромад"
  },

  // ==================== МЕНЮИ ПАҲЛӮӢ ====================
  sidebar: {
    dashboard: "Панели идора",
    users: "Корбарон",
    vendors: "Таъминкунандагон",
    employees: "Кормандони",
    booking: "Фармоиш",
    financial: "Молиявӣ",
    content: "Мундариҷа",
    reports: "Ҳисоботҳо",
    marketing: "Маркетинг",
    pushNotification: "Огоҳиҳо",
    support: "Дастгирӣ",
    systemSetting: "Танзимоти система",
    logSecurity: "Гузоришҳо ва амният"
  },

  // ==================== НОМИ ВАРАҚҲО (такроршаванда) ====================
  tabs: {
    all: "Ҳамаи гузоришҳо",
    security: "Амният",
    completed: "Анҷом ёфт",
    pending: "Дар интизор",
    cancelled: "Бекор шуд",
    activity: "Фаъолият",
    users: "Корбарон",
    travelers: "Сайёҳон",
    vendors: "Таъминкунандагон",
    employees: "Кормандони",
    admins: "Маъмурон",
    accommodation: "Манзил",
    carRental: "Иҷораи мошин",
    restaurant: "Ресторан",
    entertainment: "Фарҳангӣ",
    info: "Маълумот",
    warning: "Огоҳӣ",
    critical: "Ҳассос",
    management: "Идоракунӣ",
    support: "Дастгирӣ",
    marketing: "Маркетинг",
    finance: "Молия",
    technical: "Техникӣ"
  },

  // ==================== ПРОФИЛ (сохтори умумӣ) ====================
  profile: {
    tabs: {
      general: "Умумӣ",
      specific: "Махсус",
      admins: "Маъмурон",
      permissions: "Иҷозатҳо",
      history: "Таърих",
      inventory: "Инвентаризатсия",
      reservations: "Фармоишҳо",
      payments: "Пардохтҳо",
      docs: "Ҳуҷҷатҳо"
    }
  },

  // ==================== САҲИФАҲО ====================
  pages: {
    dashboard: {
      title: "Панели идора"
    },

    // ----- Корбарон -----
    addUser: { title: "Иловаи корбари нав" },
    users: {
      title: "Идоракунии корбарон",
      list: {
        title: "Рӯйхати корбарон"
      },
      history: {
        title: "Таърихи фаъолияти корбар"
      },
      profile: {
        header: {
          userType: "Навъи корбар",
          joinDate: "Санаи ҳамроҳшавӣ:",
          lastActivity: "Охирин фаъолият:",
          noEmail: "Почтаи электронӣ дода нашуд",
          noPhone: "Рақами телефон дода нашуд",
          noName: "Ном дода нашуд",
          types: {
            traveler: "Сайёҳ",
            supplier: "Таъминкунанда",
            employee: "Корманди"
          },
          status: {
            active: "Фаъол",
            suspended: "Боздошта",
            blocked: "Баста"
          },
          actions: {
            callTitle: "Замони телефонӣ",
            emailTitle: "Фиристодани почта",
            deactivateTitle: "Ғайрифаъол кардани корбар",
            editTitle: "Таҳрири корбар"
          }
        },
        errors: {
          loading: "Боргирӣ...",
          notFound: "Маълумот ёфт нашуд"
        },
        general: {
          loadingInfo: "Боргирии маълумот...",
          fields: {
            firstName: "Ном",
            lastName: "Насаб",
            email: "Почтаи электронӣ",
            phoneNumber: "Рақами телефон",
            userType: "Навъи корбар",
            subType: "Зернавъ"
          },
          info: {
            joinDate: "Санаи ҳамроҳшавӣ",
            lastActivity: "Охирин фаъолият"
          },
          actions: {
            forceLogout: "Баромади маҷбурӣ",
            reVerify: "Такрор тасдиқ кардан",
            sendTempPass: "Фиристодани рамзи муваққатӣ"
          },
          sections: {
            recentChats: "Сӯҳбатҳои охир ва тикетҳои фаъол"
          },
          table: {
            id: "ID",
            subject: "Мавзӯъ",
            status: "Ҳолат",
            date: "Сана"
          }
        },
        userSpecificTraveler: {
          loading: "Боргирии маълумоти сайёҳ...",
          stats: {
            rating: "Рейтинги миёна",
            profit: "Фоида (комиссионӣ)",
            favorites: "Хидматҳои дӯстдошта",
            totalBookings: "Шумораи фармоишҳо"
          },
          documents: {
            nationalId: "Шаҳодатнома",
            passport: "Рақами шиноснома",
            dob: "Санаи таваллуд",
            nationality: "Миллият",
            language: "Забони асосӣ",
            specialNeeds: "Эҳтиёҷоти махсус / парҳез"
          },
          titles: {
            companions: "Ҳамроҳон (шахсони таъминшаванда)"
          },
          table: {
            fullName: "Номи пурра",
            relation: "Хешовандӣ",
            documentId: "Рақами ҳуҷҷат (шиноснома/шаҳодатнома)",
            dob: "Санаи таваллуд"
          }
        },
        userSpecificAdmin: {
          loading: "Боргирии маълумоти маъмур...",
          titles: {
            inventory: "Доираи инвентаризатсияи таъиншуда"
          },
          vendor: {
            subtitle: "Намояндаи қонунии барои:",
            viewProfile: "Дидани профили таъминкунанда"
          },
          stats: {
            role: "Нақш ва шӯъба",
            shift: "Навбати корӣ",
            repLetter: "Номаи намояндагӣ",
            allowedIps: "IP-ҳои иҷозатдодашуда (рӯйхати сафед)"
          },
          table: {
            id: "ID маҳсулот",
            name: "Номи маҳсулот/хизмат",
            type: "Навъ",
            status: "Ҳолат"
          }
        },
        permissions: {
          loading: "Боргирии иҷозатҳо...",
          title: "Иҷозатҳо ва назорати дастрасӣ",
          description: "Иҷозатҳои додашуда ба ин корбарро бубинед. Барои тағйир додан, ба панели идоракунии нақшҳо гузаред."
        },
        history: {
          title: "Таърихи фаъолияти корбар"
        },
        reservations: {
          title: "Фармоишҳои сайёҳ"
        }
      }
    },

    // ----- Таъминкунандагон -----
    addVendor: { title: "Иловаи таъминкунандаи нав" },
    vendors: {
      title: "Идоракунии таъминкунандагон",
      list: {
        title: "Рӯйхати таъминкунандагон"
      },
      inventory: {
        title: "Ҳамаи хидматҳо"
      },
      docs: {
        title: "Ҳуҷҷатҳои таъминкунанда"
      },
      profile: {
        general: {
          loadingInfo: "Боргирии маълумоти таъминкунанда...",
          fields: {
            brandName: "Номи бренд",
            formalName: "Номи ҳуқуқии ширкат",
            idCode: "Рақами бақайдгирӣ / ID миллӣ",
            email: "Почтаи электронӣ",
            phoneNumber: "Рақами телефон",
            emergencyPhone: "Телефони фавқулодда",
            website: "Вебсайт",
            userType: "Навъи субъект",
            subType: "Категорияи хидмат",
            status: "Ҳолат"
          },
          info: {
            joinDate: "Санаи ҳамроҳшавӣ",
            lastActivity: "Охирин фаъолият"
          },
          actions: {
            forceLogout: "Баромади маҷбурӣ",
            reVerify: "Такрор тасдиқ кардан",
            sendTempPass: "Фиристодани рамзи муваққатӣ"
          },
          sections: {
            recentTickets: "Тикетҳои охир"
          },
          table: {
            id: "ID",
            subject: "Мавзӯъ",
            status: "Ҳолат",
            date: "Сана"
          }
        },
        specific: {
          common: {
            loading: "Боргирии маълумот...",
            stats: {
              rate: "Рейтинг",
              commission: "Комиссионӣ (Система)",
              allReserve: "Шумораи умумии фармоишҳо"
            },
            titles: {
              activeReserves: "Фармоишҳои фаъол"
            },
            table: {
              id: "ID",
              user: "Мизоҷ",
              date: "Сана",
              status: "Ҳолат",
              price: "Нарх",
              commission: "Комиссионӣ"
            },
            fields: {
              checkIn: "Вақти вуруд",
              checkOut: "Вақти хуруҷ",
              type: "Навъ",
              options: "Имконот ва хусусиятҳо",
              cancelPolicy: {
                title: "Сиёсати бекоркунӣ",
                lessThan24h: "Камтар аз 24 соат пеш",
                lessThan48h: "Камтар аз 48 соат пеш",
                lessThan72h: "Камтар аз 72 соат пеш"
              }
            }
          },
          accommodation: {
            stats: {
              allInventory: "Шумораи умумии ҳуҷраҳо"
            },
            documents: {
              type: "Навъи амвол",
              rate: "Шумораи ситораҳо",
              options: "Шароитҳо"
            },
            table: {
              room: "Ҳуҷра / Люкс"
            }
          },
          carRental: {
            stats: {
              allInventory: "Шумораи умумии мошинҳо"
            },
            documents: {
              type: "Навъи хидмат",
              useLimit: "Маҳдудияти масофа",
              delivery: "Имконоти расонидан / гирифтан"
            },
            table: {
              car: "Мошин / Модел"
            }
          },
          restaurant: {
            stats: {
              allInventory: "Шумораи умумии ҷойҳо"
            },
            documents: {
              type: "Навъи ресторан",
              foodType: "Навъи ошхона",
              openHour: "Соатҳои корӣ",
              onlineServices: "Хидматҳои онлайн",
              takeAway: "Хидмати бурдани хӯрок"
            },
            table: {
              table: "Миз / Минтақа"
            }
          },
          entertainment: {
            stats: {
              allInventory: "Инвентаризатсияи умумӣ"
            },
            documents: {
              type: "Навъи фаъолият",
              openTime: "Соатҳои корӣ",
              openDays: "Рӯзҳои корӣ",
              ageRange: "Талаботи синну сол"
            },
            table: {
              service: "Хидмат / Фаъолият"
            }
          }
        }
      }
    },

    // ----- Кормандони -----
    employee: {
      title: "Кормандони",
      list: {
        title: "Рӯйхати кормандони"
      },
      history: {
        title: "Таърихи фаъолияти корманд"
      },
      docs: {
        title: "Ҳуҷҷатҳо ва шартномаҳо"
      }
    },

    // ----- Саҳифаҳои дигар -----
    booking: { title: "Идоракунии фармоишҳо" },
    financial: { title: "Идоракунии молиявӣ" },
    content: { title: "Идоракунии мундариҷа" },
    reports: { title: "Ҳисоботҳо" },
    marketing: { title: "Маркетинг" },
    pushNotification: { title: "Огоҳиҳои фишурда" },
    support: { title: "Дастгирӣ" },
    systemSetting: { title: "Танзимоти система" },
    logSecurity: { title: "Гузоришҳо ва амният" },

    // ----- Ҳинтҳои дастрасии зуд -----
    permissions: {
      title: "Иҷозатҳо",
      tooltip: "Барои дастрасии зуд ба саҳифаи идоракунии иҷозатҳо клик кунед."
    },
    contracts: {
      title: "Шартномаҳо",
      tooltip: "Барои дастрасии зуд ба саҳифаи идоракунии шартномаҳо клик кунед."
    },
    reservations: {
      title: "Фармоишҳо",
      tooltip: "Барои дастрасии зуд ба саҳифаи идоракунии фармоишҳо клик кунед."
    },
    securityAlerts: {
      title: "Огоҳиҳои амниятӣ",
      tooltip: "Барои дастрасии зуд ба саҳифаи идоракунии огоҳиҳои амниятӣ клик кунед."
    }
  },

  // ==================== ФИЛТРҲО ====================
  filters: {
    all_severity: "Ҳамаи дараҷаҳо",
    severity: {
      info: "Маълумот",
      warning: "Огоҳӣ",
      critical: "Ҳассос"
    }
  },

  // ==================== ТАЪРИХИ ФАЪОЛИЯТ ====================
  history: {
    types: {
      login: "Вуруди корбар",
      profile_update: "Навсозии профил",
      booking: "Амали фармоиш",
      failed_login: "Вуруди номуваффақ",
      payment: "Пардохт"
    },
    severity: {
      info: "Маълумот",
      warning: "Огоҳӣ",
      critical: "Ҳассос"
    }
  },

  // ==================== КАРТҲОИ KPI (Панели идора) ====================
  kpi: {
    totalUsers: {
      title: "Омори корбарон",
      tooltip: "Шумораи умумии корбарони сабтиномшударо аз рӯи нақшҳо нишон медиҳад",
      onlineStatus: "{val} корбар онлайн"
    },
    newUsers: {
      title: "Корбарони нав",
      tooltip: "Тенденсияи ҷалби корбарони нав дар 10 ҳафтаи охир",
      growth: "Афзоиши {val}% нисбат ба ҳафтаи гузашта",
      decline: "Пастшавии {val}% нисбат ба ҳафтаи гузашта",
      neutral: "Нисбат ба ҳафтаи гузашта тағйире нест"
    },
    activeServices: {
      title: "Ҷалби хидматҳои фаъол",
      tooltip: "Корбароне, ки ҳоло хидмат мегиранд ё пешниҳод мекунанд",
      engagement: "{val}% корбарон ҷалб шудаанд"
    },
    securityAlerts: {
      title: "Огоҳиҳои амниятӣ",
      tooltip: "Огоҳиҳои системавӣ ва амниятӣ барои ҳисобҳои корбарӣ сабт шудаанд",
      alertCount: "{val} огоҳии {type}"
    },
    accountStatus: {
      title: "Ҳолати ҳисоб",
      tooltip: "Ҳисобҳои фаъол ва бастаро бо ҳам муқоиса мекунад, то саломатӣ ва амнияти платформаро назорат кунад.",
      active: "Фаъол",
      blocked: "Баста",
      recentBlocks: "Дар 24 соати охир {val} ҳисоб баста шудааст",
      secureStatus: "Охиран вайронкунии амниятӣ рух надодааст"
    },
    activityRate: {
      title: "Сатҳи фаъолият",
      tooltip: "Тенденсияи вуруди корбарони ягона дар давраи интихобшуда",
      growth: "Афзоиши {val}% нисбат ба давраи қаблӣ",
      decline: "Пастшавии {val}% нисбат ба давраи қаблӣ",
      neutral: "Нисбат ба давраи қаблӣ тағйире нест"
    },
    conversionRate: {
      title: "Сатҳи табдили корбар",
      tooltip: "Фоизи корбаронеро, ки дар давраи ҳаёт ҳаракат мекунанд, пайгирӣ мекунад: аз сабтином то фармоиши аввал ва аз фармоиши аввал то мизоҷи вафодор.",
      tabs: {
        firstBooking: "Аз меҳмон ба мизоҷ",
        repeatBooking: "Аз мизоҷ ба вафодор"
      },
      growth: "+{val}% нисбат ба давраи қаблӣ",
      decline: "-{val}% нисбат ба давраи қаблӣ"
    },
    accountRatio: {
      title: "Ҳисобҳо муқобили сайёҳони воқеӣ",
      tooltip: "Шумораи умумии ҳисобҳои сабтиномшударо бо шумораи корбароне, ки ҳадди ақалл як фармоиш анҷом додаанд, муқоиса мекунад.",
      tabs: {
        thisYear: "Соли ҷорӣ",
        allTime: "Ҳамаи вақт"
      },
      labels: {
        totalAccounts: "Умумии сабтиномшудаҳо",
        realTravelers: "Сайёҳони фаъол"
      },
      footerText: "{val}% ҳисобҳои сабтиномшуда сайёҳони фаъоланд"
    },
    kycStatus: {
      title: "Ҳолати тасдиқи ҳуҷҷатҳои KYC",
      tooltip: "Ҳолати тасдиқи ҳуҷҷатҳои пешниҳодкардаи таъминкунандагони ҳуқуқӣ нишон медиҳад",
      tabs: {
        new: "Нав",
        pending: "Дар интизори баррасӣ",
        completed: "Анҷом ёфт"
      },
      footer: {
        newTotal: "Шумораи умумии ҳуҷҷатҳои нав: {val}",
        pendingTotal: "Ҳуҷҷатҳои дар интизори баррасӣ: {val}",
        approvalRate: "Сатҳи тасдиқ: {val}",
        rejectionRate: "Сатҳи рад: {val}"
      }
    },
    supplierCapacity: {
      title: "Фаъолият ва иқтидори озод",
      tooltip: "Нишон медиҳад, ки имрӯз чанд таъминкунанда фаъол аст ва дар категорияҳои хидмат чӣ қадар иқтидори озод мавҷуд аст.",
      tabs: {
        activity: "Фаъолияти таъминкунандагон",
        capacity: "Иқтидори озод"
      },
      activityChart: "Ҳолати фаъолияти таъминкунандагон",
      freeCapacityChart: "Иқтидори мавҷуд аз рӯи хидмат",
      footer: {
        activeSummary: "Таъминкунандагони фаъол: {val}",
        totalFreeCapacity: "Иқтидори умумии мавҷуд: {val}"
      }
    },
    revenue: {
      title: "Хидмати даромаднок",
      tooltip: "Нишон медиҳад, ки ҳар як категорияи таъминкунанда дар давраи интихобшуда барои ширкат чӣ қадар даромад овардааст.",
      footer: {
        amount: "{val} ҳазор"
      }
    },
    satisfaction: {
      title: "Қаноатмандии сайёҳон",
      tooltip: "Рейтинги миёнаи қаноатмандӣ аз рӯи категорияи хидмат дар асоси фикру мулоҳизаҳои мизоҷон."
    },
    unauth: {
      title: "Кӯшишҳои дастрасии беиҷозат",
      tooltip: "Нишон медиҳад, ки дар ҳар сатҳи хавф чанд кӯшиши дастрасии беиҷозат рух додааст.",
      unit: "кӯшиш",
      footer: {
        topSource: "Сарчашмаи асосӣ: {val}"
      },
      level: {
        high: "Хавфи баланд",
        sensitive: "Ҳассос",
        low: "Хавфи паст"
      }
    },
    requests: {
      title: "Дархостҳои расмии ҷорӣ",
      tooltip: "Шумораи дархостҳои расмии давомдоштаро, ки кормандони ба мудирони худ пешниҳод кардаанд, нишон медиҳад.",
      unit: "дархост",
      tab: {
        pending: "Дар интизор",
        inReview: "Дар баррасӣ",
        completed: "Анҷом ёфт"
      },
      footer: {
        topTopic: "Навъи асосии дархост: {val}",
        topRecipient: "Мудири бештар нишонгирифташуда: {val}"
      }
    },
    employeeDeptDist: {
      title: "Тақсими кормандон аз рӯи шӯъба",
      tooltip: "Нишон медиҳад, ки кормандони дар шӯъбаҳои ташкилот чӣ гуна тақсим шудаанд.",
      tab: {
        all: "Ҳамаи шӯъбаҳо"
      },
      department: {
        management: "Маъмурият",
        support: "Дастгирӣ",
        marketing: "Маркетинг",
        finance: "Молия",
        technical: "Техникӣ"
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

  // ==================== ҶАДВАЛҲОИ МАЪЛУМОТ (сарлавҳаҳои умумии сутунҳо) ====================
  table: {
    id: "ID",
    fullName: "Номи пурра",
    email: "Почтаи электронӣ",
    membershipTier: "Сатҳи узвият",
    totalSpent: "Харҷи умумӣ",
    lastBooking: "Охирин фармоиш",
    accountStatus: "Ҳолати ҳисоб",
    companyName: "Номи ширкат",
    serviceCategory: "Категорияи хидмат",
    manager: "Мудир",
    commissionRate: "Меъёри комиссионӣ",
    rating: "Рейтинг",
    contractStatus: "Ҳолати шартнома",
    department: "Шӯъба",
    location: "Ҷойгиршавӣ",
    accessRole: "Нақши дастрасӣ",
    joinDate: "Санаи ҳамроҳшавӣ",
    status: "Ҳолат",
    logId: "ID гузориш",
    date: "Сана",
    actionType: "Навъи амал",
    severity: "Сатҳ",
    ipAddress: "Суроғаи IP",
    description: "Тавсиф",
    type: "Навъ"
  },

  // ==================== РӮЙХАТҲО (узвият, ҳолати ҳисоб, шӯъба, нақшҳо) ====================
  membershipTier: {
    bronze: "Биринҷӣ",
    silver: "Нуқрагӣ",
    gold: "Тиллоӣ"
  },

  department: {
    management: "Маъмурият",
    support: "Дастгирӣ",
    marketing: "Маркетинг",
    finance: "Молия",
    technical: "Техникӣ"
  },

  roles: {
    superAdmin: "Супер маъмур",
    admin: "Маъмур",
    financialManager: "Мудири молиявӣ",
    support: "Дастгирӣ",
    operationManager: "Мудири амалиёт",
    contentManager: "Мудири мундариҷа",
    marketingManagement: "Мудири маркетинг",
    vendors: "Таъминкунанда",
    technicalAdmin: "Маъмури техникӣ",
    auditor: "Аудитор"
  }
};

export default tj;