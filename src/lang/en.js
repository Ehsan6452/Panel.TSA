const en = {
  auth: {
    login: "Login",
    username: "Username",
    password: "Password",
    loginButton: "Login to system",
    logout: "Logout"
  },
  sidebar: {
    dashboard: "Dashboard",
    users: "Users",
    vendors: "Vendors",
    employee:'Employees',
    booking: "Booking",
    financial: "Financial",
    content: "Content",
    reports: "Reports",
    marketing: "Marketing",
    pushNotification: "Notifications",
    support: "Support",
    systemSetting: "System Settings",
    logSecurity: "Logs & Security"
  },
  profile: {
    tabs: {
      general: "General",
      specific: "Specific",
      admins:"Admins",
      permissions: "Permissions",
      history: "History",
      inventory: "Inventory",
      reservations: "Reservations",
      payments: "Payments",
      docs: "Documents"
    },
  },
  pages: {
    dashboard: { title: "Dashboard" },
    users: {
      title: "User Management",
      profile: {
        header: {
          userType: "User Type",
          joinDate: "Join Date:",
          lastActivity: "Last Activity:",
          noEmail: "Email not provided",
          noPhone: "Phone number not provided",
          types: {
            traveler: "Traveler",
            supplier: "Supplier",
            employee: "Employee"
          },
          status: {
            active: "Active",
            suspended: "Suspended",
            blocked: "Blocked"
          },
          actions: {
            callTitle: "Phone Call",
            emailTitle: "Send Email",
            deactivateTitle: "Deactivate User"
          }
        },
        errors: {
          loading: "Loading...",
          notFound: "Information not found"
        },
        general: {
          loadingInfo: "Loading information...",
          table: {
            id: "ID",
            subject: "Subject",
            status: "Status",
            date: "Date"
          },
          fields: {
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email",
            phoneNumber: "Phone Number",
            userType: "User Type",
            subType: "Sub Type"
          },
          info: {
            joinDate: "Join Date",
            lastActivity: "Last Activity"
          },
          actions: {
            forceLogout: "Force Logout",
            reVerify: "Re-Verify",
            sendTempPass: "Send Temp Pass"
          },
          sections: {
            recentChats: "Recent Chats & Active Tickets"
          }
        },
        userSpecificTraveler: {
          loading: "Loading traveler data...",
          stats: {
              rating: "Average Rating",
              profit: "Profit (Commission)",
              favorites: "Favorite Services",
              totalBookings: "Total Bookings"
          },
          documents: {
              nationalId: "National ID",
              passport: "Passport Number",
              dob: "Date of Birth",
              nationality: "Nationality",
              language: "Primary Language",
              specialNeeds: "Special Needs / Diet"
          },
          titles: {
              companions: "Companions (Dependents List)"
          },
          table: {
              fullName: "Full Name",
              relation: "Relation",
              documentId: "Document ID (Passport/National)",
              dob: "Date of Birth"
          }
        },
        userSpecificAdmin: {
          loading: "Loading admin data...",
          
          titles: {
            inventory: "Assigned Inventory Scope"
          },
          
          vendor: {
            subtitle: "Legal Representative For:",
            viewProfile: "View Vendor Profile"
          },
          
          stats: {
            role: "Role & Department",
            shift: "Working Shift",
            repLetter: "Letter of Representation",
            allowedIps: "Allowed IPs (Whitelist)"
          },
          
          table: {
            id: "Product ID",
            name: "Product/Service Name",
            type: "Type",
            status: "Status"
          }
        },
        "permissions": {
          "loading": "Loading permissions...",
          "title": "Permissions & Access Control",
          "description": "View the assigned permissions for this user. To modify, navigate to the Roles management panel."
        },
        history: {
          title: "User Activity History"
        },
        reservations:{
          title:"Traveler Reservations"
        }
      },
      list: {
        title: "Users List"
      },
      history: {
        title: "User Activity History"
      }
    }, 
    vendors: { 
      title: "Vendor Management",
      profile: { 
        general : {
          "loadingInfo": "Loading vendor information...",
          "fields": {
            "brandName": "Brand Name",
            "formalName": "Legal Company Name",
            "idCode": "Registration ID / National ID",
            "email": "Email",
            "phoneNumber": "Phone Number",
            "emergencyPhone": "Emergency Phone",
            "website": "Website",
            "userType": "Entity Type",
            "subType": "Service Category",
            "status": "Status"
          },
          "info": {
            "joinDate": "Join Date",
            "lastActivity": "Last Activity"
          },
          "actions": {
            "forceLogout": "Force Logout",
            "reVerify": "Re-Verify",
            "sendTempPass": "Send Temporary Password"
          },
          "sections": {
            "recentTickets": "Recent Tickets"
          },
          "table": {
            "id": "ID",
            "subject": "Subject",
            "status": "Status",
            "date": "Date"
          }
        },
      },
      List: { title: "Suppliers List" },
      Inventory: { title: "All Services" },
      Docs: { title: "Vendor Documents" },
    },
    employee: { title: "Employees" },
      employeeList: { title: "Employees List" },
      employeeHistory: { title: "Employee Activity History" },
      employeeDocs: { title: "Documents & Contracts" },
    booking: { title: "Booking Management" },
    financial: { title: "Financial Management" },
    content: { title: "Content Management" },
    reports: { title: "Reports" },
    marketing: { title: "Marketing" },
    pushNotification: { title: "Push Notifications" },
    support: { title: "Support" },
    systemSetting: { title: "System Settings" },
    logSecurity: { title: "Logs & Security" },
    permissions: {
      title: "Permissions",
      tooltip: "Click to quickly access the permissions management page."
    },
    contracts: {
      title: "Contracts",
      tooltip: "Click to quickly access the contracts management page."
    },
    reservations: {
      title: "Reservations",
      tooltip: "Click to quickly access the reservations management page."
    },
    securityAlerts: {
      title: "Security Alerts",
      tooltip: "Click to quickly access the security alerts management page."
    },
  },
  "tabs": {
    "all": "All Logs",
    "security": "Security",
    "completed": "Completed",
    "pending": "Pending",
    "cancelled": "Cancelled",
    "activity": "Activity",
    users:'users',
    travelers: "Travelers",
    vendors: "Vendors",
    employees: "Employees",
    admins: "Admins"
  },
  "filters": {
    "all_severity": "All Severities",
    "severity": {
      "info": "Info",
      "warning": "Warning",
      "critical": "Critical"
      },
  },
  "history": {
    "types": {
      "login": "User Login",
      "profile_update": "Profile Update",
      "booking": "Booking Action",
      "failed_login": "Failed Login",
      "payment": "Payment"
    },
    "severity": {
      "info": "Info",
      "warning": "Warning",
      "critical": "Critical"
    },
  },
  kpi: {
    totalUsers: {
      title: "User Statistics",
      tooltip: "Displays total registered users categorized by roles",
      onlineStatus: "{val} users online"
    },
    newUsers: {
      title: "New Users",
      tooltip: "Trend of new user acquisition over the past 10 weeks",
      growth: "{val}% growth compared to last week",
      decline: "{val}% decline compared to last week",
      neutral: "No change compared to last week"
    },
    activeServices: {
      title: "Active Service Engagement",
      tooltip: "Users currently receiving or providing services",
      engagement: "{val}% of users engaged"
    },
    securityAlerts: {
      title: "Security Alerts",
      tooltip: "Recorded system and security alerts for user accounts",
      alertCount: "{val} {type} alerts"
    },
    accountStatus: {
      title: "Account Status",
      tooltip: "Compares active vs. blocked accounts to monitor platform health and security.",
      active: "Active",
      blocked: "Blocked",
      recentBlocks: "{val} accounts blocked in the last 24h",
      secureStatus: "No security breaches recently"
    },
    activityRate: {
      title: "Activity Rate",
      tooltip: "Trend of unique user logins over the selected time period",
      growth: "{val}% growth compared to previous period",
      decline: "{val}% decline compared to previous period",
      neutral: "No change compared to previous period"
    },
    conversionRate: {
      title: "User Conversion Rate",
      tooltip: "Tracks the percentage of users moving through the lifecycle: from registration to first booking, and from first booking to loyal customer.",
      tabs: {
        firstBooking: "Guest to Customer",  // کاربر به مشتری (رزرو اول)
        repeatBooking: "Customer to Loyal"  // مشتری به وفادار (رزرو مجدد)
      },
      growth: "+{val}% compared to previous period",
      decline: "-{val}% compared to previous period"
    },
    accountRatio: {
      title: "Accounts vs. Real Travelers",
      tooltip: "Compares the total number of registered accounts with the number of users who have completed at least one booking.",
      tabs: {
        thisYear: "This Year",
        allTime: "All Time"
      },
      labels: {
        totalAccounts: "Total Registered",
        realTravelers: "Active Travelers"
      },
      footerText: "{val}% of registered accounts are active travelers"
    },
    kycStatus: {
      title: "KYC Document Verification Status",
      tooltip: "Displays the verification status of documents submitted by legal suppliers",
      tabs: {
        new: "New",
        pending: "Pending Review",
        completed: "Completed",
      },
      footer: {
        newTotal: "Total new documents: {val}",
        pendingTotal: "Documents pending review: {val}",
        approvalRate: "Approval rate: {val}",
        rejectionRate: "Rejection rate: {val}",
      },
    },
    supplierCapacity: {
      title: "Activity & Free Capacity",
      tooltip: "Shows how many suppliers are active today and how much free capacity is available across service categories.",
      tabs: {
        activity: "Supplier Activity",
        capacity: "Free Capacity"
      },
      activityChart: "Supplier Activity Status",
      freeCapacityChart: "Available Capacity by Service",
      footer: {
        activeSummary: "Active suppliers: {val}",
        totalFreeCapacity: "Total available capacity: {val}"
      }
    },
    revenue: {
      title: "Revenue-Generating Service",
      tooltip: "Shows how much revenue each supplier category generated for the company in the selected time period.",
      footer: {
        amount: "{val} K"
      }
    },
    satisfaction: {
      title: "Traveler Satisfaction",
      tooltip: "Average satisfaction rating per service category based on customer feedback."
    },
    unauth: {
      title: "Unauthorized Access Attempts",
      tooltip: "Shows how many unauthorized access actions occurred in each risk level.",
      unit: "attempts",

      footer: {
        topSource: "Top source: {val}"
      },

      level: {
        high: "High Risk",
        sensitive: "Sensitive",
        low: "Low Risk"
      }
    },
    requests: {
      title: "Current Official Requests",
      tooltip: "Displays the number of ongoing official requests employees have submitted to their respective managers.",
      unit: "requests",

      tab: {
        pending: "Pending",
        inReview: "In Review",
        completed: "Completed"
      },

      footer: {
        topTopic: "Top request type: {val}",
        topRecipient: "Most targeted manager: {val}"
      }
    },
    employeeDeptDist: {
      title: "Employee Distribution by Department",
      tooltip: "Shows how employees are distributed across the organization's departments.",

      tab: {
        all: "All Departments"
      },

      department: {
        management: "Management",
        support: "Support",
        marketing: "Marketing",
        finance: "Finance",
        technical: "Technical"
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
  table:{
    id: "ID",
    fullName:'Full Name',
    email:'Email',
    membershipTier:'Membership Tier',
    totalSpent:'Total Spent',
    lastBooking:'Last Booking',
    accountStatus:'Account Status',
    companyName:'Company Name',
    serviceCategory:'Service Category',
    manger:'Manager',
    commissionRate:'Commission Rate',
    rating:'Rating',
    contractStatus:'Contract Status',
    department:'Department',
    location:'Location',
    accessRole:'Access Role',
    joinDate:'Join Date',
    status:'Status',
    "logId": "Log ID",
    "date": "Date",
    "actionType": "Action Type",
    "severity": "Severity",
    "ipAddress": "IP Address",
    "description": "Description"
  },
  membershipTier: {
    bronze:'Bronze',
    silver:'Silver',
    gold:'Gold'
  },
  accountStatus: {
    Active: "Active",
    Inactive: "Inactive",
    Suspended: "Suspended"
  },
  department:{
    management:'Management',
    support:'Support',
    marketting:'Marketing',
    finance:'Finance',
    technical:'Technical'
  },
  roles:{
    superAdmin:'Super Admin',
    admin:'Admin',
    financialManager:'Financial Manager',
    support:'Support',
    operationManager:'Operations Manager',
    contentManager:'Content Manager',
    marketingManagement:'Marketing Manager',
    vendors:'Vendor',
    technicalAdmin:'Technical Admin',
    auditor:'Auditor'
  },
  common: {
    welcome: "Welcome",
    noAccess: "You do not have access to this page",
    loading: "Loading...",
    error: "Error",
    panel: "Admin Panel",
    logout: "Logout",
    action: "Action",
    seeMore: "See More",
    quickAction: "Quick Access",
    "search": "Search...",
    "export": "Export",
    "noData": "No data available",
    "rowsPerPage": "Rows per page",
    "prev": "Previous",
    "next": "Next",
    "action": "Action",
    "seeMore": "See Details",
    users: {
      users:'users',
      travelers: "Travelers",
      vendors: "Vendors",
      employees: "Employees",
      admins: "Admins"
    },
    time: {
      daily: "Daily",
      weekly: "Weekly",
      monthly: "Monthly",
      yearly: "Yearly",
      quarterly: "Quarterly",
      yearly: "Yearly"
    },
    services: {
      carRental: "Car Rental",
      accommodation: "Accommodation",
      restaurant: "Restaurant",
      entertainment: "Entertainment"
    },
    alerts: {
      warning: "Warning",
      sensitive: "Sensitive",
      critical: "Critical"
    },
    status: {
      new: "New",
      pending: "Pending Review",
      completed: "Completed",
      approved: "Approved",
      rejected: "Rejected",
      overview: "Overview",
      active: "Active",
      inactive: "Inactive"
    }, 
  }
};

export default en;
