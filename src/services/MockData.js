export const mockUsers = [
  {
    id: 1,
    username: 'superadmin',
    password: '123456',
    role: 'superAdmin',
    name: 'مدیر ارشد',
    email: 'superadmin@example.com',
    extraPermissions: {}
  },
  {
    id: 2,
    username: 'admin',
    password: '123456',
    role: 'admin',
    name: 'ادمین',
    email: 'admin@example.com',
    extraPermissions: {
      // مثال: ادمین به صورت پیش‌فرض دسترسی نداره، ولی بهش دسترسی ویژه دادیم
      reports: { view: true, },
      support: { view: true, }
    }
  },
  {
    id: 3,
    username: 'financial',
    password: '123456',
    role: 'financialManager',
    name: 'مدیر مالی',
    email: 'financial@example.com',
    extraPermissions: {
      // مثال: مدیر مالی به صورت پیش‌فرض نمی‌تونه delete کنه، ولی بهش دادیم
      financial: { delete: true }
    }
  },
  {
    id: 4,
    username: 'support',
    password: '123456',
    role: 'support',
    name: 'پشتیبان',
    email: 'support@example.com',
    extraPermissions: {}
  },
  {
    id: 5,
    username: 'agent',
    password: '123456',
    role: 'agent',
    name: 'نماینده',
    email: 'agent@example.com',
    extraPermissions: {
      // مثال: agent به صورت پیش‌فرض هیچ دسترسی نداره، ولی بهش دسترسی محدود دادیم
      booking: { view: true },
      support: { view: true }
    }
  },
  {
    id: 6,
    username: 'operation',
    password: '123456',
    role: 'operationManager',
    name: 'مدیر عملیات',
    email: 'operation@example.com',
    extraPermissions: {}
  },
  {
    id: 7,
    username: 'content',
    password: '123456',
    role: 'contentManager',
    name: 'مدیر محتوا',
    email: 'content@example.com',
    extraPermissions: {}
  },
  {
    id: 8,
    username: 'marketing',
    password: '123456',
    role: 'marketingManagement',
    name: 'مدیر بازاریابی',
    email: 'marketing@example.com',
    extraPermissions: {}
  },
  {
    id: 9,
    username: 'vendor',
    password: '123456',
    role: 'vendors',
    name: 'فروشنده',
    email: 'vendor@example.com',
    extraPermissions: {
      // مثال: vendor فقط booking خودش رو می‌بینه، ولی بهش دسترسی گزارش دادیم
      reports: { view: true }
    }
  },
  {
    id: 10,
    username: 'technical',
    password: '123456',
    role: 'technicalAdmin',
    name: 'ادمین فنی',
    email: 'technical@example.com',
    extraPermissions: {}
  },
  {
    id: 11,
    username: 'auditor',
    password: '123456',
    role: 'auditor',
    name: 'حسابرس',
    email: 'auditor@example.com',
    extraPermissions: {
      // مثال: auditor فقط log می‌بینه، ولی بهش دسترسی گزارش‌های مالی دادیم
      financial: { view: true },
      reports: { view: true }
    }
  }
];

// User API
export const USER_LIST_MOCK= [
  {
    "tab": "users",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "email", "title": "email" },
      { "key": "membershipTier", "title": "membershipTier", "translatable": true, "namespace": "membershipTier" },
      { "key": "totalSpent", "title": "totalSpent" },
      { "key": "lastBooking", "title": "lastBooking" },
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "USR-938471", "fullName": "Aria Rostami", "email": "aria.r@example.com", "membershipTier": "gold", "totalSpent": "$45,200", "lastBooking": "2026-04-02", "accountStatus": "active" },
      { "id": "USR-539454", "fullName": "Sara Ahmadi", "email": "sara.a@example.com", "membershipTier": "gold", "totalSpent": "$12,450", "lastBooking": "2026-03-28", "accountStatus": "active" },
      { "id": "USR-345325", "fullName": "Kamran Tehrani", "email": "k.tehrani@example.com", "membershipTier": "silver", "totalSpent": "$1,850", "lastBooking": "2026-03-15", "accountStatus": "inactive" },
      { "id": "USR-893452", "fullName": "Neda Moradi", "email": "neda.m@example.com", "membershipTier": "bronze", "totalSpent": "$8,900", "lastBooking": "2026-04-05", "accountStatus": "active" },
      { "id": "USR-998354", "fullName": "Ali Hosseini", "email": "ali.h@example.com", "membershipTier": "gold", "totalSpent": "$950", "lastBooking": "2026-02-10", "accountStatus": "active" },
      { "id": "USR-234143", "fullName": "Yasaman Nouri", "email": "yasi.n@example.com", "membershipTier": "gold", "totalSpent": "$62,000", "lastBooking": "2026-04-01", "accountStatus": "active" },
      { "id": "USR-238742", "fullName": "Reza Karimi", "email": "r.karimi@example.com", "membershipTier": "gold", "totalSpent": "$2,100", "lastBooking": "2026-01-22", "accountStatus": "suspended" },
      { "id": "USR-896324", "fullName": "Mina Shafiei", "email": "mina.s@example.com", "membershipTier": "silver", "totalSpent": "$15,300", "lastBooking": "2026-03-10", "accountStatus": "active" },
      { "id": "USR-896435", "fullName": "Babak Zand", "email": "babak.z@example.com", "membershipTier": "silver", "totalSpent": "$88,500", "lastBooking": "2026-04-06", "accountStatus": "active" },
      { "id": "USR-453244", "fullName": "Leila Farahani", "email": "l.farahani@example.com", "membershipTier": "gold", "totalSpent": "$450", "lastBooking": "2025-12-05", "accountStatus": "inactive" }
    ]
  },
  {
    "tab": "admins",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "email", "title": "email" },
      { "key": "membershipTier", "title": "membershipTier", "translatable": true, "namespace": "membershipTier" },
      { "key": "totalSpent", "title": "totalSpent" },
      { "key": "lastBooking", "title": "lastBooking" },
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "USR-938471", "fullName": "Aria Rostami", "email": "aria.r@example.com", "membershipTier": "gold", "totalSpent": "$45,200", "lastBooking": "2026-04-02", "accountStatus": "active" },
      { "id": "USR-345325", "fullName": "Kamran Tehrani", "email": "k.tehrani@example.com", "membershipTier": "silver", "totalSpent": "$1,850", "lastBooking": "2026-03-15", "accountStatus": "inactive" },
      { "id": "USR-998354", "fullName": "Ali Hosseini", "email": "ali.h@example.com", "membershipTier": "gold", "totalSpent": "$950", "lastBooking": "2026-02-10", "accountStatus": "active" },
      { "id": "USR-238742", "fullName": "Reza Karimi", "email": "r.karimi@example.com", "membershipTier": "gold", "totalSpent": "$2,100", "lastBooking": "2026-01-22", "accountStatus": "suspended" },
      { "id": "USR-896435", "fullName": "Babak Zand", "email": "babak.z@example.com", "membershipTier": "silver", "totalSpent": "$88,500", "lastBooking": "2026-04-06", "accountStatus": "active" },
    ]
  },
  {
    "tab": "travelers",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "email", "title": "email" },
      { "key": "membershipTier", "title": "membershipTier", "translatable": true, "namespace": "membershipTier" },
      { "key": "totalSpent", "title": "totalSpent" },
      { "key": "lastBooking", "title": "lastBooking" },
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "USR-539454", "fullName": "Sara Ahmadi", "email": "sara.a@example.com", "membershipTier": "gold", "totalSpent": "$12,450", "lastBooking": "2026-03-28", "accountStatus": "active" },
      { "id": "USR-893452", "fullName": "Neda Moradi", "email": "neda.m@example.com", "membershipTier": "bronze", "totalSpent": "$8,900", "lastBooking": "2026-04-05", "accountStatus": "active" },
      { "id": "USR-234143", "fullName": "Yasaman Nouri", "email": "yasi.n@example.com", "membershipTier": "gold", "totalSpent": "$62,000", "lastBooking": "2026-04-01", "accountStatus": "active" },
      { "id": "USR-896324", "fullName": "Mina Shafiei", "email": "mina.s@example.com", "membershipTier": "silver", "totalSpent": "$15,300", "lastBooking": "2026-03-10", "accountStatus": "active" },
      { "id": "USR-453244", "fullName": "Leila Farahani", "email": "l.farahani@example.com", "membershipTier": "gold", "totalSpent": "$450", "lastBooking": "2025-12-05", "accountStatus": "inactive" }
    ]
  },
]

export const USER_ALL_HISTORY_MOCK = [
  {
    tab: "all",
    columns: [
      { key: "id", title: "id" },
      { key: "date", title: "date" },
      { key: "type", title: "type" },
      { key: "severity", title: "severity", translatable: true, namespace: "history.severity" },
      { key: "ip", title: "ipAddress" },
      { key: "desc", title: "description" },
    ],
    data: [
      { id: "log-101", date: "2024-03-10 08:30:00", type: "login_success", severity: "info", ip: "192.168.1.10", desc: "User logged in successfully from Chrome/Windows." },
      { id: "log-102", date: "2024-03-12 14:45:00", type: "password_change", severity: "warning", ip: "192.168.1.10", desc: "User changed their password." },
      { id: "log-103", date: "2024-03-15 09:20:00", type: "profile_update", severity: "info", ip: "10.0.0.5", desc: "Updated phone number and address." },
      { id: "log-201", date: "2024-04-01 10:15:00", type: "login_failed", severity: "critical", ip: "185.10.20.5", desc: "Failed login attempt (Incorrect Password)." },
      { id: "log-202", date: "2024-04-01 10:20:00", type: "login_success", severity: "info", ip: "185.10.20.5", desc: "User logged in successfully from Firefox/Linux." },
      { id: "log-301", date: "2024-04-05 16:40:00", type: "document_upload", severity: "info", ip: "89.32.14.77", desc: "Uploaded identity verification documents." },
      { id: "log-302", date: "2024-04-06 11:10:00", type: "status_change", severity: "info", ip: "System", desc: "Account status changed to 'Verified'." },
      { id: "log-401", date: "2024-04-08 09:00:00", type: "permission_change", severity: "warning", ip: "System", desc: "Admin granted 'manage_content' permission." },
      { id: "log-402", date: "2024-04-08 09:30:00", type: "login_success", severity: "info", ip: "172.16.254.1", desc: "Logged in via SSO." },
      { id: "log-501", date: "2024-03-20 20:15:00", type: "device_verification", severity: "info", ip: "91.200.12.3", desc: "New device verified via Email code." },
      { id: "log-502", date: "2024-03-25 21:05:00", type: "settings_update", severity: "info", ip: "91.200.12.3", desc: "Updated notification preferences." },
      { id: "log-601", date: "2024-04-10 14:20:00", type: "password_reset_request", severity: "warning", ip: "104.28.10.4", desc: "Requested a password reset link." },
      { id: "log-602", date: "2024-04-10 14:25:00", type: "password_change", severity: "info", ip: "104.28.10.4", desc: "Successfully reset password." },
      { id: "log-701", date: "2024-04-12 08:45:00", type: "email_update", severity: "warning", ip: "192.168.100.22", desc: "Primary email address changed." },
      { id: "log-702", date: "2024-04-12 08:47:00", type: "email_verified", severity: "info", ip: "192.168.100.22", desc: "New email address verified." },
      { id: "log-801", date: "2024-04-02 19:30:00", type: "2fa_enabled", severity: "warning", ip: "8.8.8.8", desc: "Two-Factor Authentication enabled via Authenticator App." },
      { id: "log-802", date: "2024-04-14 10:00:00", type: "login_success", severity: "info", ip: "8.8.8.8", desc: "Logged in successfully with 2FA." },
      { id: "log-901", date: "2024-03-28 11:20:00", type: "api_key_generated", severity: "warning", ip: "151.101.65.140", desc: "Generated a new API token for integration." },
      { id: "log-902", date: "2024-04-15 09:15:00", type: "api_usage", severity: "info", ip: "151.101.65.140", desc: "API rate limit reached (Warning)." },
      { id: "log-1001", date: "2024-04-11 23:50:00", type: "login_failed", severity: "critical", ip: "45.33.22.11", desc: "Multiple failed login attempts." },
      { id: "log-1002", date: "2024-04-11 23:55:00", type: "account_locked", severity: "critical", ip: "System", desc: "Account locked automatically due to suspicious activity." },
      { id: "log-1003", date: "2024-04-12 10:00:00", type: "account_unlocked", severity: "warning", ip: "System", desc: "Admin unlocked the account." },
    ],
  },
  {
    tab: "info",
    columns: [
      { key: "id", title: "id" },
      { key: "date", title: "date" },
      { key: "type", title: "type" },
      { key: "severity", title: "severity", translatable: true, namespace: "history.severity" },
      { key: "ip", title: "ipAddress" },
      { key: "desc", title: "description" },
    ],
    data: [
      { id: "log-101", date: "2024-03-10 08:30:00", type: "login_success", severity: "info", ip: "192.168.1.10", desc: "User logged in successfully from Chrome/Windows." },
      { id: "log-103", date: "2024-03-15 09:20:00", type: "profile_update", severity: "info", ip: "10.0.0.5", desc: "Updated phone number and address." },
      { id: "log-202", date: "2024-04-01 10:20:00", type: "login_success", severity: "info", ip: "185.10.20.5", desc: "User logged in successfully from Firefox/Linux." },
      { id: "log-301", date: "2024-04-05 16:40:00", type: "document_upload", severity: "info", ip: "89.32.14.77", desc: "Uploaded identity verification documents." },
      { id: "log-302", date: "2024-04-06 11:10:00", type: "status_change", severity: "info", ip: "System", desc: "Account status changed to 'Verified'." },
      { id: "log-402", date: "2024-04-08 09:30:00", type: "login_success", severity: "info", ip: "172.16.254.1", desc: "Logged in via SSO." },
      { id: "log-501", date: "2024-03-20 20:15:00", type: "device_verification", severity: "info", ip: "91.200.12.3", desc: "New device verified via Email code." },
      { id: "log-502", date: "2024-03-25 21:05:00", type: "settings_update", severity: "info", ip: "91.200.12.3", desc: "Updated notification preferences." },
      { id: "log-602", date: "2024-04-10 14:25:00", type: "password_change", severity: "info", ip: "104.28.10.4", desc: "Successfully reset password." },
      { id: "log-702", date: "2024-04-12 08:47:00", type: "email_verified", severity: "info", ip: "192.168.100.22", desc: "New email address verified." },
      { id: "log-802", date: "2024-04-14 10:00:00", type: "login_success", severity: "info", ip: "8.8.8.8", desc: "Logged in successfully with 2FA." },
      { id: "log-902", date: "2024-04-15 09:15:00", type: "api_usage", severity: "info", ip: "151.101.65.140", desc: "API rate limit reached (Warning)." },
    ],
  },
  {
    tab: "warning",
    columns: [
      { key: "id", title: "id" },
      { key: "date", title: "date" },
      { key: "type", title: "type" },
      { key: "severity", title: "severity", translatable: true, namespace: "history.severity" },
      { key: "ip", title: "ipAddress" },
      { key: "desc", title: "description" },
    ],
    data: [
      { id: "log-102", date: "2024-03-12 14:45:00", type: "password_change", severity: "warning", ip: "192.168.1.10", desc: "User changed their password." },
      { id: "log-401", date: "2024-04-08 09:00:00", type: "permission_change", severity: "warning", ip: "System", desc: "Admin granted 'manage_content' permission." },
      { id: "log-601", date: "2024-04-10 14:20:00", type: "password_reset_request", severity: "warning", ip: "104.28.10.4", desc: "Requested a password reset link." },
      { id: "log-701", date: "2024-04-12 08:45:00", type: "email_update", severity: "warning", ip: "192.168.100.22", desc: "Primary email address changed." },
      { id: "log-801", date: "2024-04-02 19:30:00", type: "2fa_enabled", severity: "warning", ip: "8.8.8.8", desc: "Two-Factor Authentication enabled via Authenticator App." },
      { id: "log-901", date: "2024-03-28 11:20:00", type: "api_key_generated", severity: "warning", ip: "151.101.65.140", desc: "Generated a new API token for integration." },
      { id: "log-1003", date: "2024-04-12 10:00:00", type: "account_unlocked", severity: "warning", ip: "System", desc: "Admin unlocked the account." },
    ],
  },
  {
    tab: "critical",
    columns: [
      { key: "id", title: "id" },
      { key: "date", title: "date" },
      { key: "type", title: "type" },
      { key: "severity", title: "severity", translatable: true, namespace: "history.severity" },
      { key: "ip", title: "ipAddress" },
      { key: "desc", title: "description" },
    ],
    data: [
      { id: "log-201", date: "2024-04-01 10:15:00", type: "login_failed", severity: "critical", ip: "185.10.20.5", desc: "Failed login attempt (Incorrect Password)." },
      { id: "log-1001", date: "2024-04-11 23:50:00", type: "login_failed", severity: "critical", ip: "45.33.22.11", desc: "Multiple failed login attempts." },
      { id: "log-1002", date: "2024-04-11 23:55:00", type: "account_locked", severity: "critical", ip: "System", desc: "Account locked automatically due to suspicious activity." },
    ],
  },
];

// Vendor API
export const VENDOR_LIST_MOCK = [
  {
    "tab": "vendors",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "companyName", "title": "companyName" },
      { "key": "serviceCategory", "title": "serviceCategory", "translatable": true, "namespace": "common.services" },
      { "key": "manager", "title": "manager" },
      { "key": "commissionRate", "title": "commissionRate" },
      { "key": "rating", "title": "rating" },
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "VND-1001", "companyName": "Kish Marina Hotel", "serviceCategory": "accommodation", "manager": "Hassan Jafari", "commissionRate": "15%", "rating": "4.8", "contractStatus": "active" },
      { "id": "VND-1002", "companyName": "Darvishi Hotel", "serviceCategory": "accommodation", "manager": "Mehran Safa", "commissionRate": "12%", "rating": "4.5", "contractStatus": "active" },
      { "id": "VND-1003", "companyName": "Espinas Palace", "serviceCategory": "accommodation", "manager": "Shiva Soltani", "commissionRate": "15%", "rating": "4.9", "contractStatus": "active" },
      { "id": "VND-1004", "companyName": "Parsian Azadi Hotel", "serviceCategory": "accommodation", "manager": "Reza Moghaddam", "commissionRate": "14%", "rating": "4.7", "contractStatus": "active" },
      { "id": "VND-1005", "companyName": "Persepolis International Hotel", "serviceCategory": "accommodation", "manager": "Niloofar Karimi", "commissionRate": "16%", "rating": "4.6", "contractStatus": "pendingRenewal" },

      { "id": "VND-2001", "companyName": "Gulf Helicopters", "serviceCategory": "carRental", "manager": "Saeed Rad", "commissionRate": "10%", "rating": "4.9", "contractStatus": "active" },
      { "id": "VND-2002", "companyName": "Mahan Air", "serviceCategory": "carRental", "manager": "Azadeh Movahed", "commissionRate": "8%", "rating": "4.2", "contractStatus": "active" },
      { "id": "VND-2003", "companyName": "VIP Fleet Services", "serviceCategory": "carRental", "manager": "Omid Ramezani", "commissionRate": "18%", "rating": "4.6", "contractStatus": "active" },
      { "id": "VND-2004", "companyName": "TAP Persia Rent", "serviceCategory": "carRental", "manager": "Amir Hosseini", "commissionRate": "12%", "rating": "4.4", "contractStatus": "active" },
      { "id": "VND-2005", "companyName": "Luxury Wheels", "serviceCategory": "carRental", "manager": "Maryam Sadeghi", "commissionRate": "20%", "rating": "4.8", "contractStatus": "suspended" },

      { "id": "VND-3001", "companyName": "Caspian Jet", "serviceCategory": "restaurant", "manager": "Samira Zare", "commissionRate": "10%", "rating": "5.0", "contractStatus": "active" },
      { "id": "VND-3002", "companyName": "Dizi House", "serviceCategory": "restaurant", "manager": "Mohsen Nouri", "commissionRate": "8%", "rating": "4.3", "contractStatus": "active" },
      { "id": "VND-3003", "companyName": "Gilaneh Traditional Restaurant", "serviceCategory": "restaurant", "manager": "Nasim Alavi", "commissionRate": "9%", "rating": "4.7", "contractStatus": "active" },
      { "id": "VND-3004", "companyName": "Sky Lounge", "serviceCategory": "restaurant", "manager": "Farhad Niknam", "commissionRate": "12%", "rating": "4.5", "contractStatus": "pendingRenewal" },
      { "id": "VND-3005", "companyName": "Seafood Market", "serviceCategory": "restaurant", "manager": "Shahab Moradi", "commissionRate": "11%", "rating": "4.4", "contractStatus": "active" },

      { "id": "VND-4001", "companyName": "Luxe Yacht Charters", "serviceCategory": "entertainment", "manager": "Farzad Kian", "commissionRate": "20%", "rating": "4.7", "contractStatus": "pendingRenewal" },
      { "id": "VND-4002", "companyName": "Desert Safari Pro", "serviceCategory": "entertainment", "manager": "Kaveh Radmanesh", "commissionRate": "25%", "rating": "4.3", "contractStatus": "suspended" },
      { "id": "VND-4003", "companyName": "Qeshm Air", "serviceCategory": "entertainment", "manager": "Pouya Naderi", "commissionRate": "7%", "rating": "4.0", "contractStatus": "active" },
      { "id": "VND-4004", "companyName": "Tehran Paintball Club", "serviceCategory": "entertainment", "manager": "Behnam Tajik", "commissionRate": "15%", "rating": "4.6", "contractStatus": "active" },
      { "id": "VND-4005", "companyName": "Night Sky Observatory", "serviceCategory": "entertainment", "manager": "Roxana Miri", "commissionRate": "13%", "rating": "4.9", "contractStatus": "active" }
    ]
  },
  {
    "tab": "accommodation",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "companyName", "title": "companyName" },
      { "key": "serviceCategory", "title": "serviceCategory", "translatable": true, "namespace": "common.services" },
      { "key": "manager", "title": "manager" },
      { "key": "commissionRate", "title": "commissionRate" },
      { "key": "rating", "title": "rating" },
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "VND-1001", "companyName": "Kish Marina Hotel", "serviceCategory": "accommodation", "manager": "Hassan Jafari", "commissionRate": "15%", "rating": "4.8", "contractStatus": "active" },
      { "id": "VND-1002", "companyName": "Darvishi Hotel", "serviceCategory": "accommodation", "manager": "Mehran Safa", "commissionRate": "12%", "rating": "4.5", "contractStatus": "active" },
      { "id": "VND-1003", "companyName": "Espinas Palace", "serviceCategory": "accommodation", "manager": "Shiva Soltani", "commissionRate": "15%", "rating": "4.9", "contractStatus": "active" },
      { "id": "VND-1004", "companyName": "Parsian Azadi Hotel", "serviceCategory": "accommodation", "manager": "Reza Moghaddam", "commissionRate": "14%", "rating": "4.7", "contractStatus": "active" },
      { "id": "VND-1005", "companyName": "Persepolis International Hotel", "serviceCategory": "accommodation", "manager": "Niloofar Karimi", "commissionRate": "16%", "rating": "4.6", "contractStatus": "pendingRenewal" },
    ]
  },
  {
    "tab": "carRental",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "companyName", "title": "companyName" },
      { "key": "serviceCategory", "title": "serviceCategory", "translatable": true, "namespace": "common.services" },
      { "key": "manager", "title": "manager" },
      { "key": "commissionRate", "title": "commissionRate" },
      { "key": "rating", "title": "rating" },
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "VND-2001", "companyName": "Gulf Helicopters", "serviceCategory": "carRental", "manager": "Saeed Rad", "commissionRate": "10%", "rating": "4.9", "contractStatus": "active" },
      { "id": "VND-2002", "companyName": "Mahan Air", "serviceCategory": "carRental", "manager": "Azadeh Movahed", "commissionRate": "8%", "rating": "4.2", "contractStatus": "active" },
      { "id": "VND-2003", "companyName": "VIP Fleet Services", "serviceCategory": "carRental", "manager": "Omid Ramezani", "commissionRate": "18%", "rating": "4.6", "contractStatus": "active" },
      { "id": "VND-2004", "companyName": "TAP Persia Rent", "serviceCategory": "carRental", "manager": "Amir Hosseini", "commissionRate": "12%", "rating": "4.4", "contractStatus": "active" },
      { "id": "VND-2005", "companyName": "Luxury Wheels", "serviceCategory": "carRental", "manager": "Maryam Sadeghi", "commissionRate": "20%", "rating": "4.8", "contractStatus": "suspended" },
    ]
  },
  {
    "tab": "restaurant",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "companyName", "title": "companyName" },
      { "key": "serviceCategory", "title": "serviceCategory", "translatable": true, "namespace": "common.services" },
      { "key": "manager", "title": "manager" },
      { "key": "commissionRate", "title": "commissionRate" },
      { "key": "rating", "title": "rating" },
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "VND-3001", "companyName": "Caspian Jet", "serviceCategory": "restaurant", "manager": "Samira Zare", "commissionRate": "10%", "rating": "5.0", "contractStatus": "active" },
      { "id": "VND-3002", "companyName": "Dizi House", "serviceCategory": "restaurant", "manager": "Mohsen Nouri", "commissionRate": "8%", "rating": "4.3", "contractStatus": "active" },
      { "id": "VND-3003", "companyName": "Gilaneh Traditional Restaurant", "serviceCategory": "restaurant", "manager": "Nasim Alavi", "commissionRate": "9%", "rating": "4.7", "contractStatus": "active" },
      { "id": "VND-3004", "companyName": "Sky Lounge", "serviceCategory": "restaurant", "manager": "Farhad Niknam", "commissionRate": "12%", "rating": "4.5", "contractStatus": "pendingRenewal" },
      { "id": "VND-3005", "companyName": "Seafood Market", "serviceCategory": "restaurant", "manager": "Shahab Moradi", "commissionRate": "11%", "rating": "4.4", "contractStatus": "active" },
    ]
  },
  {
    "tab": "entertainment",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "companyName", "title": "companyName" },
      { "key": "serviceCategory", "title": "serviceCategory", "translatable": true, "namespace": "common.services" },
      { "key": "manager", "title": "manager" },
      { "key": "commissionRate", "title": "commissionRate" },
      { "key": "rating", "title": "rating" },
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "VND-4001", "companyName": "Luxe Yacht Charters", "serviceCategory": "entertainment", "manager": "Farzad Kian", "commissionRate": "20%", "rating": "4.7", "contractStatus": "pendingRenewal" },
      { "id": "VND-4002", "companyName": "Desert Safari Pro", "serviceCategory": "entertainment", "manager": "Kaveh Radmanesh", "commissionRate": "25%", "rating": "4.3", "contractStatus": "suspended" },
      { "id": "VND-4003", "companyName": "Qeshm Air", "serviceCategory": "entertainment", "manager": "Pouya Naderi", "commissionRate": "7%", "rating": "4.0", "contractStatus": "active" },
      { "id": "VND-4004", "companyName": "Tehran Paintball Club", "serviceCategory": "entertainment", "manager": "Behnam Tajik", "commissionRate": "15%", "rating": "4.6", "contractStatus": "active" },
      { "id": "VND-4005", "companyName": "Night Sky Observatory", "serviceCategory": "entertainment", "manager": "Roxana Miri", "commissionRate": "13%", "rating": "4.9", "contractStatus": "active" }
    ]
  },
]

export const GLOBAL_INVENTORY_MOCK = [
  {
    category: "accommodation",
    data: [
      {
        id: "PRD-ACC-001",
        vendorId: "VND-2345",
        vendorName: "Kish Marina Hotel",
        vendorRating: 4.8,
        basicInfo: {
          name: "Ocean Dream Suite",
          serviceCategory: "accommodation",
          type: "suite",
          images: [],
          isActive: true,
          tags: ["luxury", "ocean view"]
        },
        specificInfo: {
          accommodation: {
            capacity: 4,
            bedType: "Two Double Beds",
            view: "Ocean",
            amenities: ["Wi-Fi", "Breakfast"]
          }
        },
        pricing: {
          pricePerUnit: 5500000,
          currency: "IRR",
          availableUnits: 3,
          totalUnits: 5
        },
        rating: 4.8
      },
      {
        id: "PRD-ACC-002",
        vendorId: "VND-5454",
        vendorName: "Darvishi Hotel",
        vendorRating: 4.5,
        basicInfo: {
          name: "Classic Villa",
          serviceCategory: "accommodation",
          type: "villa",
          images: [],
          isActive: true,
          tags: ["luxury", "garden view"]
        },
        specificInfo: {
          accommodation: {
            capacity: 6,
            bedType: "Three Double Beds",
            view: "Garden",
            amenities: ["Wi-Fi", "Breakfast", "Private Pool"]
          }
        },
        pricing: {
          pricePerUnit: 8500000,
          currency: "IRR",
          availableUnits: 2,
          totalUnits: 3
        },
        rating: 4.6
      },
      {
        id: "PRD-ACC-003",
        vendorId: "VND-5554",
        vendorName: "Espinas Palace",
        vendorRating: 4.9,
        basicInfo: {
          name: "Royal Penthouse",
          serviceCategory: "accommodation",
          type: "suite",
          images: [],
          isActive: true,
          tags: ["luxury", "penthouse"]
        },
        specificInfo: {
          accommodation: {
            capacity: 6,
            bedType: "Three King Beds",
            view: "Panoramic",
            amenities: ["Wi-Fi", "Breakfast", "Private Pool", "Butler"]
          }
        },
        pricing: {
          pricePerUnit: 18500000,
          currency: "IRR",
          availableUnits: 1,
          totalUnits: 1
        },
        rating: 5.0
      }
    ]
  },
  {
    category: "carRental",
    data: [
      {
        id: "PRD-CAR-001",
        vendorId: "VND-5445",
        vendorName: "Gulf Helicopters",
        vendorRating: 4.9,
        basicInfo: {
          name: "BMW 740i",
          serviceCategory: "carRental",
          type: "luxury",
          images: [],
          isActive: true,
          tags: ["luxury", "business"]
        },
        specificInfo: {
          carRental: {
            brand: "BMW",
            model: "740i",
            year: 2024,
            transmission: "Automatic",
            seats: 5,
            fuelType: "Gasoline"
          }
        },
        pricing: {
          pricePerUnit: 5200000,
          currency: "IRR",
          availableUnits: 1,
          totalUnits: 1
        },
        rating: 4.9
      },
      {
        id: "PRD-CAR-002",
        vendorId: "VND-5544",
        vendorName: "VIP Fleet Services",
        vendorRating: 4.6,
        basicInfo: {
          name: "Mercedes S-Class",
          serviceCategory: "carRental",
          type: "luxury",
          images: [],
          isActive: true,
          tags: ["luxury", "executive"]
        },
        specificInfo: {
          carRental: {
            brand: "Mercedes-Benz",
            model: "S500",
            year: 2024,
            transmission: "Automatic",
            seats: 5,
            fuelType: "Gasoline"
          }
        },
        pricing: {
          pricePerUnit: 4500000,
          currency: "IRR",
          availableUnits: 2,
          totalUnits: 2
        },
        rating: 4.8
      }
    ]
  },
  {
    category: "restaurant",
    data: [
      {
        id: "PRD-RES-001",
        vendorId: "VND-3001",
        vendorName: "Caspian Jet",
        vendorRating: 5.0,
        basicInfo: {
          name: "Executive VIP Table",
          serviceCategory: "restaurant",
          type: "vip_table",
          images: [],
          isActive: true,
          tags: ["vip", "business"]
        },
        specificInfo: {
          restaurant: {
            tableType: "Executive VIP",
            capacity: 8,
            mealType: ["Lunch", "Dinner"]
          }
        },
        pricing: {
          pricePerUnit: 0,
          currency: "IRR",
          availableUnits: 1,
          totalUnits: 2,
          note: "Price based on menu order"
        },
        rating: 4.8
      }
    ]
  },
  {
    category: "entertainment",
    data: [
      {
        id: "PRD-ENT-001",
        vendorId: "VND-4545",
        vendorName: "Luxe Yacht Charters",
        vendorRating: 4.7,
        basicInfo: {
          name: "Sunset Yacht Cruise",
          serviceCategory: "entertainment",
          type: "cruise",
          images: [],
          isActive: true,
          tags: ["luxury", "sunset"]
        },
        specificInfo: {
          entertainment: {
            entertainmentType: "Yacht Cruise",
            durationMinutes: 120,
            minAge: 12
          }
        },
        pricing: {
          pricePerUnit: 1200000,
          currency: "IRR",
          availableUnits: 4,
          totalUnits: 10
        },
        rating: 4.9
      }
    ]
  }
];

export const GLOBAL_DOCUMENTS_MOCK = [
  {
    category: "contracts",
    data: [
      {
        id: "DOC-1001",
        vendorId: "VND-2345",
        vendorName: "Kish Marina Hotel",
        vendorRating: 4.8,
        name: "Cooperation Agreement 2025.pdf",
        type: "contract",
        category: "contracts",
        size: "2.4 MB",
        uploadDate: "2025-01-15",
        expiryDate: "2026-01-14",
        status: "active",
        icon: "📄",
        uploadedBy: "Hassan Jafari",
        description: "Annual cooperation agreement between Kish Marina Hotel and platform"
      },
      {
        id: "DOC-1002",
        vendorId: "VND-5454",
        vendorName: "Darvishi Hotel",
        vendorRating: 4.5,
        name: "Hotel Partnership Agreement.pdf",
        type: "contract",
        category: "contracts",
        size: "2.2 MB",
        uploadDate: "2024-11-20",
        expiryDate: "2025-11-19",
        status: "active",
        icon: "📋",
        uploadedBy: "Mehran Safa",
        description: "Partnership agreement between Darvishi Hotel and platform"
      },
      {
        id: "DOC-1003",
        vendorId: "VND-5445",
        vendorName: "Gulf Helicopters",
        vendorRating: 4.9,
        name: "Helicopter Charter Agreement.pdf",
        type: "contract",
        category: "contracts",
        size: "4.1 MB",
        uploadDate: "2025-01-10",
        expiryDate: "2026-01-09",
        status: "active",
        icon: "✈️",
        uploadedBy: "Saeed Rad",
        description: "Main charter agreement for helicopter services"
      },
      {
        id: "DOC-1004",
        vendorId: "VND-3001",
        vendorName: "Caspian Jet",
        vendorRating: 5.0,
        name: "Restaurant Commission Agreement.pdf",
        type: "contract",
        category: "contracts",
        size: "1.4 MB",
        uploadDate: "2025-01-20",
        expiryDate: "2025-12-31",
        status: "active",
        icon: "🍽️",
        uploadedBy: "Samira Zare",
        description: "Commission agreement for restaurant reservations"
      },
      {
        id: "DOC-1005",
        vendorId: "VND-4545",
        vendorName: "Luxe Yacht Charters",
        vendorRating: 4.7,
        name: "Yacht Charter Agreement.pdf",
        type: "contract",
        category: "contracts",
        size: "3.8 MB",
        uploadDate: "2025-02-01",
        expiryDate: "2026-01-31",
        status: "active",
        icon: "⛵",
        uploadedBy: "Farzad Kian",
        description: "Master yacht charter agreement for all vessels"
      }
    ]
  },
  {
    category: "legal_docs",
    data: [
      {
        id: "DOC-2001",
        vendorId: "VND-2345",
        vendorName: "Kish Marina Hotel",
        vendorRating: 4.8,
        name: "Business License - Kish Marina Hotel.jpg",
        type: "legal",
        category: "legal_docs",
        size: "1.2 MB",
        uploadDate: "2024-06-01",
        expiryDate: "2026-05-31",
        status: "active",
        icon: "🏪",
        uploadedBy: "Hassan Jafari",
        description: "Official business license issued by Kish Free Zone Organization"
      },
      {
        id: "DOC-2002",
        vendorId: "VND-5445",
        vendorName: "Gulf Helicopters",
        vendorRating: 4.9,
        name: "Air Operator Certificate.pdf",
        type: "legal",
        category: "legal_docs",
        size: "5.2 MB",
        uploadDate: "2024-10-01",
        expiryDate: "2026-09-30",
        status: "active",
        icon: "✈️",
        uploadedBy: "Saeed Rad",
        description: "Official air operator certificate from Civil Aviation Organization"
      },
      {
        id: "DOC-2003",
        vendorId: "VND-4545",
        vendorName: "Luxe Yacht Charters",
        vendorRating: 4.7,
        name: "Maritime License.pdf",
        type: "legal",
        category: "legal_docs",
        size: "2.1 MB",
        uploadDate: "2024-09-15",
        expiryDate: "2026-09-14",
        status: "active",
        icon: "⚓",
        uploadedBy: "Farzad Kian",
        description: "Maritime operating license from Ports and Maritime Organization"
      }
    ]
  },
  {
    category: "certificates",
    data: [
      {
        id: "DOC-3001",
        vendorId: "VND-2345",
        vendorName: "Kish Marina Hotel",
        vendorRating: 4.8,
        name: "Hotel Star Rating Certificate.pdf",
        type: "certificate",
        category: "certificates",
        size: "1.5 MB",
        uploadDate: "2024-08-10",
        expiryDate: "2026-08-09",
        status: "active",
        icon: "⭐",
        uploadedBy: "Reza Mohammadi",
        description: "Official 5-star rating certificate from Tourism Organization"
      },
      {
        id: "DOC-3002",
        vendorId: "VND-5445",
        vendorName: "Gulf Helicopters",
        vendorRating: 4.9,
        name: "ISO 9001 Certification.pdf",
        type: "certificate",
        category: "certificates",
        size: "1.8 MB",
        uploadDate: "2024-12-10",
        expiryDate: "2026-12-09",
        status: "active",
        icon: "✅",
        uploadedBy: "Nasrin Akbari",
        description: "ISO 9001:2024 quality management certification"
      },
      {
        id: "DOC-3003",
        vendorId: "VND-3001",
        vendorName: "Caspian Jet",
        vendorRating: 5.0,
        name: "Halal Certification.jpg",
        type: "certificate",
        category: "certificates",
        size: "654 KB",
        uploadDate: "2024-11-01",
        expiryDate: "2025-10-31",
        status: "expiring_soon",
        icon: "🕌",
        uploadedBy: "Mohsen Tarkash",
        description: "Halal food preparation and serving certification"
      }
    ]
  },
  {
    category: "insurance",
    data: [
      {
        id: "DOC-4001",
        vendorId: "VND-2345",
        vendorName: "Kish Marina Hotel",
        vendorRating: 4.8,
        name: "Property Insurance Policy.pdf",
        type: "insurance",
        category: "insurance",
        size: "3.2 MB",
        uploadDate: "2024-12-01",
        expiryDate: "2025-11-30",
        status: "active",
        icon: "🛡️",
        uploadedBy: "Mahsa Rafiei",
        description: "Comprehensive property insurance for hotel building and assets"
      },
      {
        id: "DOC-4002",
        vendorId: "VND-5445",
        vendorName: "Gulf Helicopters",
        vendorRating: 4.9,
        name: "Aviation Insurance Policy.pdf",
        type: "insurance",
        category: "insurance",
        size: "6.5 MB",
        uploadDate: "2025-01-20",
        expiryDate: "2026-01-19",
        status: "active",
        icon: "🛩️",
        uploadedBy: "Saeed Rad",
        description: "Comprehensive aviation insurance for fleet"
      },
      {
        id: "DOC-4003",
        vendorId: "VND-3001",
        vendorName: "Caspian Jet",
        vendorRating: 5.0,
        name: "Restaurant Liability Insurance.pdf",
        type: "insurance",
        category: "insurance",
        size: "1.8 MB",
        uploadDate: "2025-01-10",
        expiryDate: "2026-01-09",
        status: "active",
        icon: "🛡️",
        uploadedBy: "Samira Zare",
        description: "Public liability insurance for restaurant operations"
      }
    ]
  }
];
// Employee API
export const EMPLOYEE_LIST_MOCK = [
  {
    "tab": "employees",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "department", "title": "department", "translatable": true, "namespace": "department" },
      { "key": "location", "title": "location" },
      { "key": "accessRole", "title": "accessRole", "translatable": true, "namespace": "roles" },
      { "key": "joinDate", "title": "joinDate" },
      { "key": "status", "title": "status", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "EMP-4567", "fullName": "Ehsan Mohammadi", "department": "management", "location": "Kish HQ", "accessRole": "superAdmin", "joinDate": "2024-05-10", "status": "active" },
      { "id": "EMP-7890", "fullName": "Narges Karimi", "department": "management", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2023-11-01", "status": "active" },
      { "id": "EMP-1234", "fullName": "Behnam Ahmadi", "department": "management", "location": "Dubai Office", "accessRole": "superAdmin", "joinDate": "2024-09-15", "status": "active" },
      { "id": "EMP-5678", "fullName": "Laleh Forouhar", "department": "management", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2025-01-10", "status": "active" },
      { "id": "EMP-9012", "fullName": "Hamid Rezaei", "department": "management", "location": "Remote", "accessRole": "operationManager", "joinDate": "2024-07-20", "status": "active" },

      { "id": "EMP-5656", "fullName": "Navid Shirazi", "department": "support", "location": "Dubai Office", "accessRole": "admin", "joinDate": "2025-03-10", "status": "active" },
      { "id": "EMP-6655", "fullName": "Parisa Vahidi", "department": "support", "location": "Kish HQ", "accessRole": "admin", "joinDate": "2025-11-05", "status": "inactive" },
      { "id": "EMP-7777", "fullName": "Mehdi Tajik", "department": "support", "location": "Tehran Branch", "accessRole": "support", "joinDate": "2025-06-15", "status": "active" },
      { "id": "EMP-8888", "fullName": "Sara Mohseni", "department": "support", "location": "Remote", "accessRole": "support", "joinDate": "2026-01-25", "status": "active" },
      { "id": "EMP-9999", "fullName": "Ali Rahimi", "department": "support", "location": "Kish HQ", "accessRole": "admin", "joinDate": "2025-09-12", "status": "active" },

      { "id": "EMP-4545", "fullName": "Shadi Rezaei", "department": "marketing", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2025-01-15", "status": "active" },
      { "id": "EMP-6556", "fullName": "Samaneh Rad", "department": "marketing", "location": "Tehran Branch", "accessRole": "contentManager", "joinDate": "2026-01-20", "status": "active" },
      { "id": "EMP-1111", "fullName": "Kaveh Moradi", "department": "marketing", "location": "Kish HQ", "accessRole": "contentManager", "joinDate": "2025-04-01", "status": "active" },
      { "id": "EMP-2222", "fullName": "Nadia Hosseini", "department": "marketing", "location": "Remote", "accessRole": "operationManager", "joinDate": "2025-08-18", "status": "active" },
      { "id": "EMP-3333", "fullName": "Omid Jafari", "department": "marketing", "location": "Dubai Office", "accessRole": "technicalAdmin", "joinDate": "2025-11-30", "status": "active" },

      { "id": "EMP-5454", "fullName": "Mohsen Alavi", "department": "finance", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2024-08-01", "status": "active" },
      { "id": "EMP-6565", "fullName": "Zahra Ebrahimi", "department": "finance", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2024-06-20", "status": "active" },
      { "id": "EMP-4444", "fullName": "Reza Noori", "department": "finance", "location": "Tehran Branch", "accessRole": "financialManager", "joinDate": "2025-02-14", "status": "active" },
      { "id": "EMP-5555", "fullName": "Mona Ghaffari", "department": "finance", "location": "Remote", "accessRole": "admin", "joinDate": "2025-05-22", "status": "active" },
      { "id": "EMP-6666", "fullName": "Sina Khodadadi", "department": "finance", "location": "Kish HQ", "accessRole": "technicalAdmin", "joinDate": "2024-12-10", "status": "inactive" },

      { "id": "EMP-5566", "fullName": "Milad Ghasemi", "department": "technical", "location": "Remote", "accessRole": "vendors", "joinDate": "2024-12-01", "status": "active" },
      { "id": "EMP-5665", "fullName": "Farhad Majidi", "department": "technical", "location": "Kish HQ", "accessRole": "contentManager", "joinDate": "2025-05-18", "status": "active" },
      { "id": "EMP-7770", "fullName": "Pegah Azimi", "department": "technical", "location": "Tehran Branch", "accessRole": "admin", "joinDate": "2025-07-07", "status": "active" },
      { "id": "EMP-8881", "fullName": "Arash Bahrami", "department": "technical", "location": "Dubai Office", "accessRole": "vendors", "joinDate": "2025-10-19", "status": "active" },
      { "id": "EMP-9992", "fullName": "Elham Rasti", "department": "technical", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2026-02-01", "status": "active" }
    ]
  },
  {
    "tab": "management",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "department", "title": "department", "translatable": true, "namespace": "department" },
      { "key": "location", "title": "location" },
      { "key": "accessRole", "title": "accessRole", "translatable": true, "namespace": "roles" },
      { "key": "joinDate", "title": "joinDate" },
      { "key": "status", "title": "status", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "EMP-4567", "fullName": "Ehsan Mohammadi", "department": "management", "location": "Kish HQ", "accessRole": "superAdmin", "joinDate": "2024-05-10", "status": "active" },
      { "id": "EMP-7890", "fullName": "Narges Karimi", "department": "management", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2023-11-01", "status": "active" },
      { "id": "EMP-1234", "fullName": "Behnam Ahmadi", "department": "management", "location": "Dubai Office", "accessRole": "superAdmin", "joinDate": "2024-09-15", "status": "active" },
      { "id": "EMP-5678", "fullName": "Laleh Forouhar", "department": "management", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2025-01-10", "status": "active" },
      { "id": "EMP-9012", "fullName": "Hamid Rezaei", "department": "management", "location": "Remote", "accessRole": "operationManager", "joinDate": "2024-07-20", "status": "active" },
    ]
  },
  {
    "tab": "support",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "department", "title": "department", "translatable": true, "namespace": "department" },
      { "key": "location", "title": "location" },
      { "key": "accessRole", "title": "accessRole", "translatable": true, "namespace": "roles" },
      { "key": "joinDate", "title": "joinDate" },
      { "key": "status", "title": "status", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "EMP-5656", "fullName": "Navid Shirazi", "department": "support", "location": "Dubai Office", "accessRole": "admin", "joinDate": "2025-03-10", "status": "active" },
      { "id": "EMP-6655", "fullName": "Parisa Vahidi", "department": "support", "location": "Kish HQ", "accessRole": "admin", "joinDate": "2025-11-05", "status": "inactive" },
      { "id": "EMP-7777", "fullName": "Mehdi Tajik", "department": "support", "location": "Tehran Branch", "accessRole": "support", "joinDate": "2025-06-15", "status": "active" },
      { "id": "EMP-8888", "fullName": "Sara Mohseni", "department": "support", "location": "Remote", "accessRole": "support", "joinDate": "2026-01-25", "status": "active" },
      { "id": "EMP-9999", "fullName": "Ali Rahimi", "department": "support", "location": "Kish HQ", "accessRole": "admin", "joinDate": "2025-09-12", "status": "active" },
    ]
  },
  {
    "tab": "marketing",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "department", "title": "department", "translatable": true, "namespace": "department" },
      { "key": "location", "title": "location" },
      { "key": "accessRole", "title": "accessRole", "translatable": true, "namespace": "roles" },
      { "key": "joinDate", "title": "joinDate" },
      { "key": "status", "title": "status", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "EMP-4545", "fullName": "Shadi Rezaei", "department": "marketing", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2025-01-15", "status": "active" },
      { "id": "EMP-6556", "fullName": "Samaneh Rad", "department": "marketing", "location": "Tehran Branch", "accessRole": "contentManager", "joinDate": "2026-01-20", "status": "active" },
      { "id": "EMP-1111", "fullName": "Kaveh Moradi", "department": "marketing", "location": "Kish HQ", "accessRole": "contentManager", "joinDate": "2025-04-01", "status": "active" },
      { "id": "EMP-2222", "fullName": "Nadia Hosseini", "department": "marketing", "location": "Remote", "accessRole": "operationManager", "joinDate": "2025-08-18", "status": "active" },
      { "id": "EMP-3333", "fullName": "Omid Jafari", "department": "marketing", "location": "Dubai Office", "accessRole": "technicalAdmin", "joinDate": "2025-11-30", "status": "active" },
      ]
  },
  {
    "tab": "finance",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "department", "title": "department", "translatable": true, "namespace": "department" },
      { "key": "location", "title": "location" },
      { "key": "accessRole", "title": "accessRole", "translatable": true, "namespace": "roles" },
      { "key": "joinDate", "title": "joinDate" },
      { "key": "status", "title": "status", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "EMP-5454", "fullName": "Mohsen Alavi", "department": "finance", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2024-08-01", "status": "active" },
      { "id": "EMP-6565", "fullName": "Zahra Ebrahimi", "department": "finance", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2024-06-20", "status": "active" },
      { "id": "EMP-4444", "fullName": "Reza Noori", "department": "finance", "location": "Tehran Branch", "accessRole": "financialManager", "joinDate": "2025-02-14", "status": "active" },
      { "id": "EMP-5555", "fullName": "Mona Ghaffari", "department": "finance", "location": "Remote", "accessRole": "admin", "joinDate": "2025-05-22", "status": "active" },
      { "id": "EMP-6666", "fullName": "Sina Khodadadi", "department": "finance", "location": "Kish HQ", "accessRole": "technicalAdmin", "joinDate": "2024-12-10", "status": "inactive" },
    ]
  },
  {
    "tab": "technical",
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "department", "title": "department", "translatable": true, "namespace": "department" },
      { "key": "location", "title": "location" },
      { "key": "accessRole", "title": "accessRole", "translatable": true, "namespace": "roles" },
      { "key": "joinDate", "title": "joinDate" },
      { "key": "status", "title": "status", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "EMP-5566", "fullName": "Milad Ghasemi", "department": "technical", "location": "Remote", "accessRole": "vendors", "joinDate": "2024-12-01", "status": "active" },
      { "id": "EMP-5665", "fullName": "Farhad Majidi", "department": "technical", "location": "Kish HQ", "accessRole": "contentManager", "joinDate": "2025-05-18", "status": "active" },
      { "id": "EMP-7770", "fullName": "Pegah Azimi", "department": "technical", "location": "Tehran Branch", "accessRole": "admin", "joinDate": "2025-07-07", "status": "active" },
      { "id": "EMP-8881", "fullName": "Arash Bahrami", "department": "technical", "location": "Dubai Office", "accessRole": "vendors", "joinDate": "2025-10-19", "status": "active" },
      { "id": "EMP-9992", "fullName": "Elham Rasti", "department": "technical", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2026-02-01", "status": "active" }
    ]
  },
]

//User Profile MOCK
export const USER_PROFILE_MOCK = [
  {
    "id": "USR-938471",
    "personalInfo": {
      "name": "Aria Rostami",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "aria.r@example.com",
      "phone": "09120000001"
    },
    "systemData": {
      "userType": "users",
      "subType": "admin",
      "status": "active",
      "createdAt": "1402/03/12",
      "lastActivity": "1405/01/02 10:22:00"
    }
  },
  {
    "id": "USR-539454",
    "personalInfo": {
      name:"Sara Ahmadi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "sara.a@example.com",
      "phone": "09120000002"
    },
    "systemData": {
      "userType": "users",
      "subType": "traveler",
      "status": "active",
      "createdAt": "1401/11/20",
      "lastActivity": "1405/01/28 12:15:00"
    }
  },
  {
    "id": "USR-345325",
    "personalInfo": {
      name: "Kamran Tehrani",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "k.tehrani@example.com",
      "phone": "09120000003"
    },
    "systemData": {
      "userType": "users",
      "subType": "admin",
      "status": "inactive",
      "createdAt": "1400/10/01",
      "lastActivity": "1404/12/15 08:45:00"
    }
  },
  {
    "id": "USR-893452",
    "personalInfo": {
      name : "Neda Moradi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "neda.m@example.com",
      "phone": "09120000004"
    },
    "systemData": {
      "userType": "users",
      "subType": "traveler",
      "status": "active",
      "createdAt": "1402/01/18",
      "lastActivity": "1405/01/05 09:00:00"
    }
  },
  {
    "id": "USR-998354",
    "personalInfo": {
      name : "Ali Hosseini",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "ali.h@example.com",
      "phone": "09120000005"
    },
    "systemData": {
      "userType": "users",
      "subType": "admin",
      "status": "active",
      "createdAt": "1402/04/22",
      "lastActivity": "1405/01/10 16:10:00"
    }
  },
  {
    "id": "USR-234143",
    "personalInfo": {
      name: "Yasaman Nouri",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "yasi.n@example.com",
      "phone": "09120000006"
    },
    "systemData": {
      "userType": "users",
      "subType": "traveler",
      "status": "active",
      "createdAt": "1402/06/01",
      "lastActivity": "1405/01/01 11:15:00"
    }
  },
  {
    "id": "USR-238742",
    "personalInfo": {
      name : "Reza Karimi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "r.karimi@example.com",
      "phone": "09120000007"
    },
    "systemData": {
      "userType": "users",
      "subType": "admin",
      "status": "suspended",
      "createdAt": "1401/07/12",
      "lastActivity": "1404/12/22 19:30:00"
    }
  },
  {
    "id": "USR-896324",
    "personalInfo": {
      name : "Mina Shafiei",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "mina.s@example.com",
      "phone": "09120000008"
    },
    "systemData": {
      "userType": "users",
      "subType": "traveler",
      "status": "active",
      "createdAt": "1400/09/05",
      "lastActivity": "1405/01/10 09:55:00"
    }
  },
  {
    "id": "USR-896435",
    "personalInfo": {
      name :"Babak Zand",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "babak.z@example.com",
      "phone": "09120000009"
    },
    "systemData": {
      "userType": "users",
      "subType": "admin",
      "status": "active",
      "createdAt": "1403/01/10",
      "lastActivity": "1405/01/06 18:40:00"
    }
  },
  {
    "id": "USR-453244",
    "personalInfo": {
      name: "Leila Farahani",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "l.farahani@example.com",
      "phone": "09120000010"
    },
    "systemData": {
      "userType": "users",
      "subType": "traveler",
      "status": "inactive",
      "createdAt": "1400/03/22",
      "lastActivity": "1404/10/22 08:00:00"
    }
  }
]

export const USER_GENERAL_MOCK = [
  {
    "id": "USR-938471",
    "personalInfo": {
      "firstName": "Aria",
      "lastName": "Rostami",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "aria.r@example.com",
      "emailVerified": true,
      "phone": "09120000001",
      "phoneVerified": true
    },
    "systemData": {
      "userType": "users",
      "subType": "admins",
      "status": "active",
      "createdAt": "1402/03/12",
      "lastActivity": "1405/01/02 10:22:00"
    },
    "recentTickets": [
      { "id": "TCK-1001", "title": "System upgrade access", "status": "Closed", "date": "1404/12/28" }
    ]
  },
  {
    "id": "USR-539454",
    "personalInfo": {
      "firstName": "Sara",
      "lastName": "Ahmadi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "sara.a@example.com",
      "emailVerified": true,
      "phone": "09120000002",
      "phoneVerified": false
    },
    "systemData": {
      "userType": "users",
      "subType": "traveler",
      "status": "active",
      "createdAt": "1401/11/20",
      "lastActivity": "1405/01/28 12:15:00"
    },
    "recentTickets": [
      { "id": "TCK-1052", "title": "Flight cancellation request", "status": "Open", "date": "1405/01/26" },
      { "id": "CHT-5021", "title": "Baggage allowance inquiry", "status": "Closed", "date": "1405/01/20" }
    ]
  },
  {
    "id": "USR-345325",
    "personalInfo": {
      "firstName": "Kamran",
      "lastName": "Tehrani",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "k.tehrani@example.com",
      "emailVerified": false,
      "phone": "09120000003",
      "phoneVerified": true
    },
    "systemData": {
      "userType": "users",
      "subType": "admins",
      "status": "inactive",
      "createdAt": "1400/10/01",
      "lastActivity": "1404/12/15 08:45:00"
    },
    "recentTickets": []
  },
  {
    "id": "USR-893452",
    "personalInfo": {
      "firstName": "Neda",
      "lastName": "Moradi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "neda.m@example.com",
      "emailVerified": true,
      "phone": "09120000004",
      "phoneVerified": true
    },
    "systemData": {
      "userType": "users",
      "subType": "traveler",
      "status": "active",
      "createdAt": "1402/01/18",
      "lastActivity": "1405/01/05 09:00:00"
    },
    "recentTickets": [
      { "id": "TCK-1088", "title": "Hotel booking confirmation", "status": "Pending", "date": "1405/01/04" }
    ]
  },
  {
    "id": "USR-998354",
    "personalInfo": {
      "firstName": "Ali",
      "lastName": "Hosseini",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "ali.h@example.com",
      "emailVerified": true,
      "phone": "09120000005",
      "phoneVerified": false
    },
    "systemData": {
      "userType": "users",
      "subType": "admins",
      "status": "active",
      "createdAt": "1402/04/22",
      "lastActivity": "1405/01/10 16:10:00"
    },
    "recentTickets": [
      { "id": "TCK-1102", "title": "Dashboard error report", "status": "Closed", "date": "1405/01/08" }
    ]
  },
  {
    "id": "USR-234143",
    "personalInfo": {
      "firstName": "Yasaman",
      "lastName": "Nouri",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "yasi.n@example.com",
      "emailVerified": true,
      "phone": "09120000006",
      "phoneVerified": false
    },
    "systemData": {
      "userType": "users",
      "subType": "traveler",
      "status": "active",
      "createdAt": "1402/06/01",
      "lastActivity": "1405/01/01 11:15:00"
    },
    "recentTickets": [
      { "id": "TCK-1024", "title": "Issue with flight booking", "status": "Open", "date": "1405/01/20" },
      { "id": "CHT-5012", "title": "Live chat support", "status": "Pending", "date": "1405/01/25" }
    ]
  },
  {
    "id": "USR-238742",
    "personalInfo": {
      "firstName": "Reza",
      "lastName": "Karimi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "r.karimi@example.com",
      "emailVerified": false,
      "phone": "09120000007",
      "phoneVerified": false
    },
    "systemData": {
      "userType": "users",
      "subType": "admins",
      "status": "suspended",
      "createdAt": "1401/07/12",
      "lastActivity": "1404/12/22 19:30:00"
    },
    "recentTickets": []
  },
  {
    "id": "USR-896324",
    "personalInfo": {
      "firstName": "Mina",
      "lastName": "Shafiei",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "mina.s@example.com",
      "emailVerified": true,
      "phone": "09120000008",
      "phoneVerified": true
    },
    "systemData": {
      "userType": "users",
      "subType": "traveler",
      "status": "active",
      "createdAt": "1400/09/05",
      "lastActivity": "1405/01/10 09:55:00"
    },
    "recentTickets": [
      { "id": "TCK-0999", "title": "Refund status update", "status": "Open", "date": "1405/01/09" },
      { "id": "TCK-0845", "title": "Visa application help", "status": "Closed", "date": "1404/11/15" }
    ]
  },
  {
    "id": "USR-896435",
    "personalInfo": {
      "firstName": "Babak",
      "lastName": "Zand",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "babak.z@example.com",
      "emailVerified": true,
      "phone": "09120000009",
      "phoneVerified": true
    },
    "systemData": {
      "userType": "users",
      "subType": "admins",
      "status": "active",
      "createdAt": "1403/01/10",
      "lastActivity": "1405/01/06 18:40:00"
    },
    "recentTickets": [
      { "id": "TCK-1120", "title": "Server log analysis", "status": "Closed", "date": "1405/01/05" }
    ]
  },
  {
    "id": "USR-453244",
    "personalInfo": {
      "firstName": "Leila",
      "lastName": "Farahani",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "l.farahani@example.com",
      "emailVerified": false,
      "phone": "09120000010",
      "phoneVerified": false
    },
    "systemData": {
      "userType": "users",
      "subType": "traveler",
      "status": "inactive",
      "createdAt": "1400/03/22",
      "lastActivity": "1404/10/22 08:00:00"
    },
    "recentTickets": []
  }
];

export const USER_SPECIFIC_TRAVELER_MOCK = [
  {
    id: "USR-539454", // Sara Ahmadi
    stats: {
      rating: "4.8 / 5.0",
      profit: "$1,450",
      favorites: ["Flight", "Luxury Hotel", "Transfer"],
      totalBookings: 34
    },
    documents: {
      nationalId: "0123456789",
      passport: "A98765432",
      dob: "1985-08-22",
      nationality: "Iranian",
      language: "English / Persian",
      specialNeeds: "Vegetarian"
    },
    companions: [
      { id: 1, fullName: "Ali Ahmadi", relation: "Spouse", documentId: "A12345678", dob: "1982-05-10" },
      { id: 2, fullName: "Nima Ahmadi", relation: "Child", documentId: "0011223344", dob: "2015-11-02" }
    ]
  },
  {
    id: "USR-893452", // Neda Moradi
    stats: {
      rating: "4.2 / 5.0",
      profit: "$820",
      favorites: ["Train", "Hostel", "Tour"],
      totalBookings: 12
    },
    documents: {
      nationalId: "1234567890",
      passport: "B12345678",
      dob: "1992-03-14",
      nationality: "Iranian",
      language: "Persian / French",
      specialNeeds: "None"
    },
    companions: []
  },
  {
    id: "USR-234143", // Yasaman Nouri
    stats: {
      rating: "4.9 / 5.0",
      profit: "$3,200",
      favorites: ["Flight", "Resort", "Car Rental"],
      totalBookings: 56
    },
    documents: {
      nationalId: "2345678901",
      passport: "C23456789",
      dob: "1988-11-05",
      nationality: "Iranian",
      language: "English / German",
      specialNeeds: "Halal"
    },
    companions: [
      { id: 3, fullName: "Sina Nouri", relation: "Sibling", documentId: "C98765432", dob: "1990-01-20" }
    ]
  },
  {
    id: "USR-896324", // Mina Shafiei
    stats: {
      rating: "4.5 / 5.0",
      profit: "$2,100",
      favorites: ["Flight", "Boutique Hotel"],
      totalBookings: 28
    },
    documents: {
      nationalId: "3456789012",
      passport: null, // ممکن است پاسپورت نداشته باشد
      dob: "1975-07-30",
      nationality: "Iranian",
      language: "Persian",
      specialNeeds: "Wheelchair assistance"
    },
    companions: [
      { id: 4, fullName: "Hamid Shafiei", relation: "Spouse", documentId: "3451122334", dob: "1972-04-15" },
      { id: 5, fullName: "Parsa Shafiei", relation: "Child", documentId: "3459988776", dob: "2005-09-12" },
      { id: 6, fullName: "Tara Shafiei", relation: "Child", documentId: "3455544332", dob: "2008-12-01" }
    ]
  },
  {
    id: "USR-453244", // Leila Farahani (Inactive)
    stats: {
      rating: "3.5 / 5.0",
      profit: "$120",
      favorites: ["Bus", "Budget Hotel"],
      totalBookings: 2
    },
    documents: {
      nationalId: "4567890123",
      passport: "E45678901",
      dob: "1995-10-10",
      nationality: "Iranian",
      language: "Persian / Turkish",
      specialNeeds: "None"
    },
    companions: []
  }
];

export const USER_SPECIFIC_ADMIN_MOCK = [
  {
    Id: "USR-938471", // Aria Rostami
    vendor: {
      name: "Parsian International Hotel",
      vendorId: "VND-88392",
    },
    stats: {
      role: "VIP Reservation Manager",
      shift: ["Night Shift", "23:00 - 07:00"],
      repLetter: "Verified ✓",
    },
    security: {
      allowedIps: "192.168.1.100, 10.0.0.5",
    },
    inventory: [
      { id: 'PRD-101', name: 'Royal VIP Suite', type: 'Accommodation', status: 'Active' },
      { id: 'PRD-102', name: 'Double Room (Sea View)', type: 'Accommodation', status: 'Maintenance' },
      { id: 'PRD-103', name: 'Airport Transfer (Benz S)', type: 'Service', status: 'Active' },
    ]
  },
  {
    Id: "USR-345325", // Kamran Tehrani
    vendor: {
      name: "Iran Air Airlines",
      vendorId: "VND-23411",
    },
    stats: {
      role: "Flight Inventory Controller",
      shift: ["Morning Shift", "07:00 - 15:00"],
      repLetter: "Pending",
    },
    security: {
      allowedIps: "172.16.20.55",
    },
    inventory: [
      { id: 'PRD-201', name: 'Tehran-Mashhad First Class', type: 'Flight', status: 'Active' },
      { id: 'PRD-202', name: 'Tehran-Istanbul Economy', type: 'Flight', status: 'Active' },
    ]
  },
  {
    Id: "USR-998354", // Ali Hosseini
    vendor: {
      name: "Espinas Palace Hotel",
      vendorId: "VND-55423",
    },
    stats: {
      role: "Sales & Operation Admin",
      shift: ["Evening Shift", "15:00 - 23:00"],
      repLetter: "Verified ✓",
    },
    security: {
      allowedIps: "10.10.10.1, 10.10.10.2",
    },
    inventory: [
      { id: 'PRD-301', name: 'Presidential Suite', type: 'Accommodation', status: 'Active' },
      { id: 'PRD-302', name: 'Standard Twin Room', type: 'Accommodation', status: 'Active' },
      { id: 'PRD-303', name: 'Conference Hall B', type: 'Facility', status: 'Maintenance' },
    ]
  },
  {
    Id: "USR-238742", // Reza Karimi (suspended)
    vendor: {
      name: "Seir o Safar Bus Co.",
      vendorId: "VND-11298",
    },
    stats: {
      role: "Ticketing Supervisor",
      shift: ["Morning Shift", "08:00 - 16:00"],
      repLetter: "Rejected ✗",
    },
    security: {
      allowedIps: "192.168.100.12",
    },
    inventory: [
      { id: 'PRD-401', name: 'VIP Bus 25-Seat (Tehran-Shiraz)', type: 'Transport', status: 'Suspended' },
      { id: 'PRD-402', name: 'Regular Bus 44-Seat (Tehran-Isfahan)', type: 'Transport', status: 'Suspended' },
    ]
  },
  {
    Id: "USR-896435", // Babak Zand
    vendor: {
      name: "Alibaba Travel Agency",
      vendorId: "VND-99887",
    },
    stats: {
      role: "System Administrator",
      shift: ["Flexible", "24/7 On-call"],
      repLetter: "Verified ✓",
    },
    security: {
      allowedIps: "Any",
    },
    inventory: [
      { id: 'PRD-501', name: 'Kish Island Summer Tour', type: 'Tour', status: 'Active' },
      { id: 'PRD-502', name: 'Dubai 4-Nights Package', type: 'Tour', status: 'Active' },
      { id: 'PRD-503', name: 'Visa Processing Service', type: 'Service', status: 'Active' },
    ]
  }
];

export const USER_PERMISSIONS_MOCK = [
  {
    id: "USR-938471",
    permissions: [
      {
        id: "financial",
        title: "Financial & Accounting",
        subPermissions: [
          { id: "fin_view", title: "View Invoices", isGranted: true },
          { id: "fin_create", title: "Create Transactions", isGranted: true },
          { id: "fin_delete", title: "Delete Transactions", isGranted: true },
        ]
      },
      {
        id: "users",
        title: "User Management",
        subPermissions: [
          { id: "usr_view", title: "View Users List", isGranted: true },
          { id: "usr_edit", title: "Edit User Profiles", isGranted: false },
          { id: "usr_ban", title: "Ban/Suspend Users", isGranted: false },
        ]
      },
      {
        id: "inventory",
        title: "Inventory Control",
        subPermissions: [
          { id: "inv_read", title: "View Products", isGranted: true },
          { id: "inv_write", title: "Add/Edit Products", isGranted: true },
          { id: "inv_delete", title: "Remove Products", isGranted: true },
        ]
      }
    ]
  },
  {
    id: "USR-539454",
    permissions: [
      {
        id: "financial",
        title: "Financial & Accounting",
        subPermissions: [
          { id: "fin_view", title: "View Invoices", isGranted: true },
          { id: "fin_create", title: "Create Transactions", isGranted: false },
          { id: "fin_delete", title: "Delete Transactions", isGranted: false },
        ]
      },
      {
        id: "users",
        title: "User Management",
        subPermissions: [
          { id: "usr_view", title: "View Users List", isGranted: false },
          { id: "usr_edit", title: "Edit User Profiles", isGranted: false },
          { id: "usr_ban", title: "Ban/Suspend Users", isGranted: false },
        ]
      },
      {
        id: "inventory",
        title: "Inventory Control",
        subPermissions: [
          { id: "inv_read", title: "View Products", isGranted: true },
          { id: "inv_write", title: "Add/Edit Products", isGranted: false },
          { id: "inv_delete", title: "Remove Products", isGranted: false },
        ]
      }
    ]
  },
  {
    id: "USR-345325",
    permissions: [
      {
        id: "financial",
        title: "Financial & Accounting",
        subPermissions: [
          { id: "fin_view", title: "View Invoices", isGranted: true },
          { id: "fin_create", title: "Create Transactions", isGranted: true },
          { id: "fin_delete", title: "Delete Transactions", isGranted: false },
        ]
      },
      {
        id: "users",
        title: "User Management",
        subPermissions: [
          { id: "usr_view", title: "View Users List", isGranted: true },
          { id: "usr_edit", title: "Edit User Profiles", isGranted: true },
          { id: "usr_ban", title: "Ban/Suspend Users", isGranted: true },
        ]
      },
      {
        id: "inventory",
        title: "Inventory Control",
        subPermissions: [
          { id: "inv_read", title: "View Products", isGranted: true },
          { id: "inv_write", title: "Add/Edit Products", isGranted: true },
          { id: "inv_delete", title: "Remove Products", isGranted: false },
        ]
      }
    ]
  },
  {
    id: "USR-893452",
    permissions: [
      {
        id: "financial",
        title: "Financial & Accounting",
        subPermissions: [
          { id: "fin_view", title: "View Invoices", isGranted: false },
          { id: "fin_create", title: "Create Transactions", isGranted: false },
          { id: "fin_delete", title: "Delete Transactions", isGranted: false },
        ]
      },
      {
        id: "users",
        title: "User Management",
        subPermissions: [
          { id: "usr_view", title: "View Users List", isGranted: true },
          { id: "usr_edit", title: "Edit User Profiles", isGranted: false },
          { id: "usr_ban", title: "Ban/Suspend Users", isGranted: false },
        ]
      },
      {
        id: "inventory",
        title: "Inventory Control",
        subPermissions: [
          { id: "inv_read", title: "View Products", isGranted: false },
          { id: "inv_write", title: "Add/Edit Products", isGranted: false },
          { id: "inv_delete", title: "Remove Products", isGranted: false },
        ]
      }
    ]
  },
  {
    id: "USR-998354",
    permissions: [
      {
        id: "financial",
        title: "Financial & Accounting",
        subPermissions: [
          { id: "fin_view", title: "View Invoices", isGranted: true },
          { id: "fin_create", title: "Create Transactions", isGranted: true },
          { id: "fin_delete", title: "Delete Transactions", isGranted: true },
        ]
      },
      {
        id: "users",
        title: "User Management",
        subPermissions: [
          { id: "usr_view", title: "View Users List", isGranted: true },
          { id: "usr_edit", title: "Edit User Profiles", isGranted: true },
          { id: "usr_ban", title: "Ban/Suspend Users", isGranted: true },
        ]
      },
      {
        id: "inventory",
        title: "Inventory Control",
        subPermissions: [
          { id: "inv_read", title: "View Products", isGranted: true },
          { id: "inv_write", title: "Add/Edit Products", isGranted: true },
          { id: "inv_delete", title: "Remove Products", isGranted: true },
        ]
      }
    ]
  },
  {
    id: "USR-234143",
    permissions: [
      {
        id: "financial",
        title: "Financial & Accounting",
        subPermissions: [
          { id: "fin_view", title: "View Invoices", isGranted: true },
          { id: "fin_create", title: "Create Transactions", isGranted: false },
          { id: "fin_delete", title: "Delete Transactions", isGranted: false },
        ]
      },
      {
        id: "users",
        title: "User Management",
        subPermissions: [
          { id: "usr_view", title: "View Users List", isGranted: true },
          { id: "usr_edit", title: "Edit User Profiles", isGranted: true },
          { id: "usr_ban", title: "Ban/Suspend Users", isGranted: false },
        ]
      },
      {
        id: "inventory",
        title: "Inventory Control",
        subPermissions: [
          { id: "inv_read", title: "View Products", isGranted: true },
          { id: "inv_write", title: "Add/Edit Products", isGranted: false },
          { id: "inv_delete", title: "Remove Products", isGranted: false },
        ]
      }
    ]
  },
  {
    id: "USR-238742",
    permissions: [
      {
        id: "financial",
        title: "Financial & Accounting",
        subPermissions: [
          { id: "fin_view", title: "View Invoices", isGranted: false },
          { id: "fin_create", title: "Create Transactions", isGranted: false },
          { id: "fin_delete", title: "Delete Transactions", isGranted: false },
        ]
      },
      {
        id: "users",
        title: "User Management",
        subPermissions: [
          { id: "usr_view", title: "View Users List", isGranted: true },
          { id: "usr_edit", title: "Edit User Profiles", isGranted: false },
          { id: "usr_ban", title: "Ban/Suspend Users", isGranted: false },
        ]
      },
      {
        id: "inventory",
        title: "Inventory Control",
        subPermissions: [
          { id: "inv_read", title: "View Products", isGranted: true },
          { id: "inv_write", title: "Add/Edit Products", isGranted: true },
          { id: "inv_delete", title: "Remove Products", isGranted: false },
        ]
      }
    ]
  },
  {
    id: "USR-896324",
    permissions: [
      {
        id: "financial",
        title: "Financial & Accounting",
        subPermissions: [
          { id: "fin_view", title: "View Invoices", isGranted: true },
          { id: "fin_create", title: "Create Transactions", isGranted: true },
          { id: "fin_delete", title: "Delete Transactions", isGranted: false },
        ]
      },
      {
        id: "users",
        title: "User Management",
        subPermissions: [
          { id: "usr_view", title: "View Users List", isGranted: true },
          { id: "usr_edit", title: "Edit User Profiles", isGranted: true },
          { id: "usr_ban", title: "Ban/Suspend Users", isGranted: false },
        ]
      },
      {
        id: "inventory",
        title: "Inventory Control",
        subPermissions: [
          { id: "inv_read", title: "View Products", isGranted: true },
          { id: "inv_write", title: "Add/Edit Products", isGranted: false },
          { id: "inv_delete", title: "Remove Products", isGranted: false },
        ]
      }
    ]
  },
  {
    id: "USR-896435",
    permissions: [
      {
        id: "financial",
        title: "Financial & Accounting",
        subPermissions: [
          { id: "fin_view", title: "View Invoices", isGranted: true },
          { id: "fin_create", title: "Create Transactions", isGranted: true },
          { id: "fin_delete", title: "Delete Transactions", isGranted: true },
        ]
      },
      {
        id: "users",
        title: "User Management",
        subPermissions: [
          { id: "usr_view", title: "View Users List", isGranted: true },
          { id: "usr_edit", title: "Edit User Profiles", isGranted: true },
          { id: "usr_ban", title: "Ban/Suspend Users", isGranted: true },
        ]
      },
      {
        id: "inventory",
        title: "Inventory Control",
        subPermissions: [
          { id: "inv_read", title: "View Products", isGranted: true },
          { id: "inv_write", title: "Add/Edit Products", isGranted: true },
          { id: "inv_delete", title: "Remove Products", isGranted: true },
        ]
      }
    ]
  },
  {
    id: "USR-453244",
    permissions: [
      {
        id: "financial",
        title: "Financial & Accounting",
        subPermissions: [
          { id: "fin_view", title: "View Invoices", isGranted: false },
          { id: "fin_create", title: "Create Transactions", isGranted: false },
          { id: "fin_delete", title: "Delete Transactions", isGranted: false },
        ]
      },
      {
        id: "users",
        title: "User Management",
        subPermissions: [
          { id: "usr_view", title: "View Users List", isGranted: false },
          { id: "usr_edit", title: "Edit User Profiles", isGranted: false },
          { id: "usr_ban", title: "Ban/Suspend Users", isGranted: false },
        ]
      },
      {
        id: "inventory",
        title: "Inventory Control",
        subPermissions: [
          { id: "inv_read", title: "View Products", isGranted: false },
          { id: "inv_write", title: "Add/Edit Products", isGranted: false },
          { id: "inv_delete", title: "Remove Products", isGranted: false },
        ]
      }
    ]
  }
];

export const USER_HISTORY_MOCK = [
  {
    "id": "USR-938471",
    history: [
      {
        id: "log-101",
        date: "2024-03-10 08:30:00",
        type: "login_success",
        severity: "info",
        ip: "192.168.1.10",
        desc: "User logged in successfully from Chrome/Windows."
      },
      {
        id: "log-102",
        date: "2024-03-12 14:45:00",
        type: "password_change",
        severity: "warning",
        ip: "192.168.1.10",
        desc: "User changed their password."
      },
      {
        id: "log-103",
        date: "2024-03-15 09:20:00",
        type: "profile_update",
        severity: "info",
        ip: "10.0.0.5",
        desc: "Updated phone number and address."
      }
    ]
  },
  {
    "id": "USR-539454",
    history: [
      {
        id: "log-201",
        date: "2024-04-01 10:15:00",
        type: "login_failed",
        severity: "critical",
        ip: "185.10.20.5",
        desc: "Failed login attempt (Incorrect Password)."
      },
      {
        id: "log-202",
        date: "2024-04-01 10:20:00",
        type: "login_success",
        severity: "info",
        ip: "185.10.20.5",
        desc: "User logged in successfully from Firefox/Linux."
      }
    ]
  },
  {
    "id": "USR-345325",
    history: [
      {
        id: "log-301",
        date: "2024-04-05 16:40:00",
        type: "document_upload",
        severity: "info",
        ip: "89.32.14.77",
        desc: "Uploaded identity verification documents."
      },
      {
        id: "log-302",
        date: "2024-04-06 11:10:00",
        type: "status_change",
        severity: "info",
        ip: "System",
        desc: "Account status changed to 'Verified'."
      }
    ]
  },
  {
    "id": "USR-893452",
    history: [
      {
        id: "log-401",
        date: "2024-04-08 09:00:00",
        type: "permission_change",
        severity: "warning",
        ip: "System",
        desc: "Admin granted 'manage_content' permission."
      },
      {
        id: "log-402",
        date: "2024-04-08 09:30:00",
        type: "login_success",
        severity: "info",
        ip: "172.16.254.1",
        desc: "Logged in via SSO."
      }
    ]
  },
  {
    "id": "USR-998354",
    history: [
      {
        id: "log-501",
        date: "2024-03-20 20:15:00",
        type: "device_verification",
        severity: "info",
        ip: "91.200.12.3",
        desc: "New device verified via Email code."
      },
      {
        id: "log-502",
        date: "2024-03-25 21:05:00",
        type: "settings_update",
        severity: "info",
        ip: "91.200.12.3",
        desc: "Updated notification preferences."
      }
    ]
  },
  {
    "id": "USR-234143",
    history: [
      {
        id: "log-601",
        date: "2024-04-10 14:20:00",
        type: "password_reset_request",
        severity: "warning",
        ip: "104.28.10.4",
        desc: "Requested a password reset link."
      },
      {
        id: "log-602",
        date: "2024-04-10 14:25:00",
        type: "password_change",
        severity: "info",
        ip: "104.28.10.4",
        desc: "Successfully reset password."
      }
    ]
  },
  {
    "id": "USR-238742",
    history: [
      {
        id: "log-701",
        date: "2024-04-12 08:45:00",
        type: "email_update",
        severity: "warning",
        ip: "192.168.100.22",
        desc: "Primary email address changed."
      },
      {
        id: "log-702",
        date: "2024-04-12 08:47:00",
        type: "email_verified",
        severity: "info",
        ip: "192.168.100.22",
        desc: "New email address verified."
      }
    ]
  },
  {
    "id": "USR-896324",
    history: [
      {
        id: "log-801",
        date: "2024-04-02 19:30:00",
        type: "2fa_enabled",
        severity: "warning",
        ip: "8.8.8.8",
        desc: "Two-Factor Authentication enabled via Authenticator App."
      },
      {
        id: "log-802",
        date: "2024-04-14 10:00:00",
        type: "login_success",
        severity: "info",
        ip: "8.8.8.8",
        desc: "Logged in successfully with 2FA."
      }
    ]
  },
  {
    "id": "USR-896435",
    history: [
      {
        id: "log-901",
        date: "2024-03-28 11:20:00",
        type: "api_key_generated",
        severity: "warning",
        ip: "151.101.65.140",
        desc: "Generated a new API token for integration."
      },
      {
        id: "log-902",
        date: "2024-04-15 09:15:00",
        type: "api_usage",
        severity: "info",
        ip: "151.101.65.140",
        desc: "API rate limit reached (Warning)."
      }
    ]
  },
  {
    "id": "USR-453244",
    history: [
      {
        id: "log-1001",
        date: "2024-04-11 23:50:00",
        type: "login_failed",
        severity: "critical",
        ip: "45.33.22.11",
        desc: "Multiple failed login attempts."
      },
      {
        id: "log-1002",
        date: "2024-04-11 23:55:00",
        type: "account_locked",
        severity: "critical",
        ip: "System",
        desc: "Account locked automatically due to suspicious activity."
      },
      {
        id: "log-1003",
        date: "2024-04-12 10:00:00",
        type: "account_unlocked",
        severity: "warning",
        ip: "System",
        desc: "Admin unlocked the account."
      }
    ]
  }
];

export const USER_RESERVATIONS_MOCK = [
  {
    "id": "USR-539454",
    reservations: [
      { id: "RES-101", ref: "AC-5849", date: "2024-05-10", serviceType: "accommodation", status: "completed", amount: "$500" },
      { id: "RES-102", ref: "CR-9932", date: "2024-05-12", serviceType: "carRental", status: "completed", amount: "$150" },
      { id: "RES-103", ref: "RS-1102", date: "2024-06-20", serviceType: "restaurant", status: "cancelled", amount: "$80" }
    ]
  },
  {
    "id": "USR-893452",
    reservations: [
      { id: "RES-201", ref: "EN-4453", date: "2024-07-01", serviceType: "entertainment", status: "completed", amount: "$120" },
      { id: "RES-202", ref: "AC-1234", date: "2024-08-12", serviceType: "accommodation", status: "pending", amount: "$300" }
    ]
  },
  {
    "id": "USR-234143",
    reservations: [
      { id: "RES-301", ref: "CR-8821", date: "2024-04-05", serviceType: "carRental", status: "cancelled", amount: "$220" },
      { id: "RES-302", ref: "AC-9001", date: "2024-09-15", serviceType: "accommodation", status: "pending", amount: "$850" },
      { id: "RES-303", ref: "EN-3321", date: "2024-09-18", serviceType: "entertainment", status: "pending", amount: "$95" }
    ]
  },
  {
    "id": "USR-896324",
    reservations: [
      { id: "RES-401", ref: "RS-5544", date: "2024-03-10", serviceType: "restaurant", status: "completed", amount: "$110" },
      { id: "RES-402", ref: "EN-7765", date: "2024-03-12", serviceType: "entertainment", status: "completed", amount: "$60" },
      { id: "RES-403", ref: "AC-2233", date: "2024-03-15", serviceType: "accommodation", status: "completed", amount: "$420" },
      { id: "RES-404", ref: "CR-1199", date: "2024-03-18", serviceType: "carRental", status: "completed", amount: "$180" }
    ]
  },
  {
    "id": "USR-453244",
    reservations: [
      { id: "RES-501", ref: "AC-6655", date: "2024-10-05", serviceType: "accommodation", status: "pending", amount: "$600" },
      { id: "RES-502", ref: "RS-3344", date: "2024-10-07", serviceType: "restaurant", status: "pending", amount: "$150" }
    ]
  }
];

//Vendor Profile MOCK
export const VENDOR_PROFILE_MOCK = [
  {
    "id": "VND-2345",
    "personalInfo": {
      name : "Kish Marina Hotel",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "kish.marina@example.com",
      "phone": "09350000001"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "accommodation",
      "status": "active",
      "createdAt": "1402/02/11",
      "lastActivity": "1405/01/10 11:00:00"
    }
  },
  {
    "id": "VND-5445",
    "personalInfo": {
      name: "Gulf Helicopters",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "gulf.heli@example.com",
      "phone": "09350000002"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "carRental",
      "status": "active",
      "createdAt": "1401/11/25",
      "lastActivity": "1405/01/14 09:45:00"
    }
  },
  {
    "id": "VND-4554",
    "personalInfo": {
      name: "Mahan Air",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "mahan.air@example.com",
      "phone": "09350000003"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "carRental",
      "status": "active",
      "createdAt": "1400/04/14",
      "lastActivity": "1404/12/20 18:00:00"
    }
  },
  {
    "id": "VND-4545",
    "personalInfo": {
      name : "Luxe YachtCharters",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "luxe.yacht@example.com",
      "phone": "09350000004"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "entertainment",
      "status": "pending",
      "createdAt": "1402/06/03",
      "lastActivity": "1405/01/02 14:20:00"
    }
  },
  {
    "id": "VND-5454",
    "personalInfo": {
      name: "Darvishi Hotel",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "darvishi.hotel@example.com",
      "phone": "09350000005"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "accommodation",
      "status": "active",
      "createdAt": "1401/02/22",
      "lastActivity": "1405/01/18 17:30:00"
    }
  },
  {
    "id": "VND-5544",
    "personalInfo": {
      name: "VIP FleetServices",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "vip.fleet@example.com",
      "phone": "09350000006"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "carRental",
      "status": "active",
      "createdAt": "1401/08/10",
      "lastActivity": "1405/01/08 13:40:00"
    }
  },
  {
    "id": "VND-4455",
    "personalInfo": {
      name: "Desert SafariPro",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "desert.safari@example.com",
      "phone": "09350000007"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "entertainment",
      "status": "suspended",
      "createdAt": "1400/06/15",
      "lastActivity": "1404/11/12 08:20:00"
    }
  },
  {
    "id": "VND-5554",
    "personalInfo": {
      name: "Espinas Palace",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "espinas.palace@example.com",
      "phone": "09350000008"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "accommodation",
      "status": "active",
      "createdAt": "1402/01/01",
      "lastActivity": "1405/01/12 10:15:00"
    }
  },
  {
    "id": "VND-5545",
    "personalInfo": {
      name: "Qeshm Air",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "qeshm.air@example.com",
      "phone": "09350000009"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "entertainment",
      "status": "active",
      "createdAt": "1401/04/03",
      "lastActivity": "1405/01/16 19:00:00"
    }
  },
  {
    "id": "VND-5455",
    "personalInfo": {
      name: "Caspian Jet",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "caspian.jet@example.com",
      "phone": "09350000010"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "restaurant",
      "status": "active",
      "createdAt": "1402/07/12",
      "lastActivity": "1405/01/19 11:35:00"
    }
  },
  {
    "id": "VND-3001",
    "personalInfo": {
      "name": "Caspian Jet",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "caspian.jet@example.com",
      "phone": "09350000010"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "restaurant",
      "status": "active",
      "createdAt": "1402/07/12",
      "lastActivity": "1405/01/19 11:35:00"
    }
  } 
];

export const VENDOR_GENERAL_MOCK = [
  {
    "id": "VND-2345",
    "personalInfo": {
      "name": "Kish Marina Hotel",
      "formalName": "کیش مارینا هتل (سهامی خاص)",
      "idCode": "14001234567",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "kish.marina@example.com",
      "emailVerified": true,
      "phone": "09350000001",
      "phoneVerified": true,
      "emergencyPhone": "09350000002",
    },
    "systemData": {
      "userType": "supplier",
      "subType": "accommodation",
      "status": "active",
      "createdAt": "1402/02/11",
      "lastActivity": "1405/01/10 11:00:00"
    },
    "recentTickets": [
      { "id": "TCK-1001", "title": "درخواست افزایش ظرفیت رزرو", "status": "Closed", "date": "1404/12/28" },
      { "id": "TCK-1005", "title": "مشکل در آپلود تصاویر هتل", "status": "In Progress", "date": "1405/01/05" }
    ]
  },
  {
    "id": "VND-5445",
    "personalInfo": {
      "name": "Gulf Helicopters",
      "formalName": "گلف هلیکوپترز (شرکت خدمات هوایی)",
      "idCode": "14009876543",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "gulf.heli@example.com",
      "emailVerified": true,
      "phone": "09350000002",
      "phoneVerified": false,
      "emergencyPhone": "09350000003",
    },
    "systemData": {
      "userType": "supplier",
      "subType": "carRental",
      "status": "active",
      "createdAt": "1401/11/25",
      "lastActivity": "1405/01/14 09:45:00"
    },
    "recentTickets": [
      { "id": "TCK-1010", "title": "تمدید مجوز عملیاتی", "status": "Open", "date": "1405/01/07" }
    ]
  },
  {
    "id": "VND-4554",
    "personalInfo": {
      "name": "Mahan Air",
      "formalName": "ماهان ایر (شرکت هواپیمایی)",
      "idCode": "14005556677",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "mahan.air@example.com",
      "emailVerified": true,
      "phone": "09350000003",
      "phoneVerified": true,
      "emergencyPhone": "09350000004",
    },
    "systemData": {
      "userType": "supplier",
      "subType": "carRental",
      "status": "active",
      "createdAt": "1400/04/14",
      "lastActivity": "1404/12/20 18:00:00"
    },
    "recentTickets": [
      { "id": "TCK-1015", "title": "گزارش تخلف در سرویس", "status": "Closed", "date": "1404/12/15" },
      { "id": "TCK-1020", "title": "درخواست تغییر نرخ کمیسیون", "status": "Pending", "date": "1405/01/02" }
    ]
  },
  {
    "id": "VND-4545",
    "personalInfo": {
      "name": "Luxe Yacht Charters",
      "formalName": "لکس یاکت چارترز (خدمات تفریحات دریایی)",
      "idCode": "14001122334",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "luxe.yacht@example.com",
      "emailVerified": false,
      "phone": "09350000004",
      "phoneVerified": true,
      "emergencyPhone": "09350000005",
    },
    "systemData": {
      "userType": "supplier",
      "subType": "entertainment",
      "status": "pending",
      "createdAt": "1402/06/03",
      "lastActivity": "1405/01/02 14:20:00"
    },
    "recentTickets": [
      { "id": "TCK-1025", "title": "بروزرسانی بیمه نامه", "status": "Closed", "date": "1404/12/29" }
    ]
  },
  {
    "id": "VND-5454",
    "personalInfo": {
      "name": "Darvishi Hotel",
      "formalName": "هتل درویشی (شعبه مرکزی)",
      "idCode": "14004455667",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "darvishi.hotel@example.com",
      "emailVerified": true,
      "phone": "09350000005",
      "phoneVerified": true,
      "emergencyPhone": "09350000006",
    },
    "systemData": {
      "userType": "supplier",
      "subType": "accommodation",
      "status": "active",
      "createdAt": "1401/02/22",
      "lastActivity": "1405/01/18 17:30:00"
    },
    "recentTickets": [
      { "id": "TCK-1030", "title": "مشکل در سیستم رزرو آنلاین", "status": "In Progress", "date": "1405/01/10" }
    ]
  },
  {
    "id": "VND-5544",
    "personalInfo": {
      "name": "VIP Fleet Services",
      "formalName": "وی‌آی‌پی فلیت سرویس (خدمات ناوگان ویژه)",
      "idCode": "14007891234",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "vip.fleet@example.com",
      "emailVerified": true,
      "phone": "09350000006",
      "phoneVerified": false,
      "emergencyPhone": "09350000007",
    },
    "systemData": {
      "userType": "supplier",
      "subType": "carRental",
      "status": "active",
      "createdAt": "1401/08/10",
      "lastActivity": "1405/01/08 13:40:00"
    },
    "recentTickets": [
      { "id": "TCK-1035", "title": "درخواست اضافه کردن خودرو جدید", "status": "Open", "date": "1405/01/12" }
    ]
  },
  {
    "id": "VND-4455",
    "personalInfo": {
      "name": "Desert Safari Pro",
      "formalName": "دزرت سفاری پرو (تورهای کویر)",
      "idCode": "14003334455",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "desert.safari@example.com",
      "emailVerified": true,
      "phone": "09350000007",
      "phoneVerified": true,
      "emergencyPhone": "09350000008",
    },
    "systemData": {
      "userType": "supplier",
      "subType": "entertainment",
      "status": "suspended",
      "createdAt": "1400/06/15",
      "lastActivity": "1404/11/12 08:20:00"
    },
    "recentTickets": [
      { "id": "TCK-1040", "title": "ابلاغیه تعلیق موقت", "status": "Closed", "date": "1404/11/10" },
      { "id": "TCK-1045", "title": "درخواست اعتراض", "status": "Pending", "date": "1404/11/15" }
    ]
  },
  {
    "id": "VND-5554",
    "personalInfo": {
      "name": "Espinas Palace",
      "formalName": "اسپیناس پالاس (هتل ۵ ستاره)",
      "idCode": "14009988776",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "espinas.palace@example.com",
      "emailVerified": true,
      "phone": "09350000008",
      "phoneVerified": true,
      "emergencyPhone": "09350000009",
    },
    "systemData": {
      "userType": "supplier",
      "subType": "accommodation",
      "status": "active",
      "createdAt": "1402/01/01",
      "lastActivity": "1405/01/12 10:15:00"
    },
    "recentTickets": [
      { "id": "TCK-1050", "title": "درخواست همکاری ویژه", "status": "Closed", "date": "1405/01/01" }
    ]
  },
  {
    "id": "VND-5545",
    "personalInfo": {
      "name": "Qeshm Air",
      "formalName": "قشم ایر (خدمات هوایی و تفریحی)",
      "idCode": "14002223344",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "qeshm.air@example.com",
      "emailVerified": false,
      "phone": "09350000009",
      "phoneVerified": true,
      "emergencyPhone": "09350000010",
    },
    "systemData": {
      "userType": "supplier",
      "subType": "entertainment",
      "status": "active",
      "createdAt": "1401/04/03",
      "lastActivity": "1405/01/16 19:00:00"
    },
    "recentTickets": [
      { "id": "TCK-1055", "title": "بروزرسانی گواهینامه ایمنی", "status": "In Progress", "date": "1405/01/14" }
    ]
  },
  {
    "id": "VND-5455",
    "personalInfo": {
      "name": "Caspian Jet",
      "formalName": "کاسپین جت (رستوران ملل)",
      "idCode": "14006667788",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "caspian.jet@example.com",
      "emailVerified": true,
      "phone": "09350000010",
      "phoneVerified": false,
      "emergencyPhone": "09350000011",
    },
    "systemData": {
      "userType": "supplier",
      "subType": "restaurant",
      "status": "active",
      "createdAt": "1402/07/12",
      "lastActivity": "1405/01/19 11:35:00"
    },
    "recentTickets": [
      { "id": "TCK-1060", "title": "ثبت شکایت از مشتری", "status": "Open", "date": "1405/01/18" }
    ]
  },
  {
    "id": "VND-3001",
    "personalInfo": {
      "name": "Caspian Jet",
      "formalName": "کاسپین جت (رستوران ملل)",
      "idCode": "14006667788",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "caspian.jet@example.com",
      "emailVerified": true,
      "phone": "09350000010",
      "phoneVerified": true,
      "emergencyPhone": "09350000011"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "restaurant",
      "status": "active",
      "createdAt": "1402/07/12",
      "lastActivity": "1405/01/19 11:35:00"
    },
    "recentTickets": [
      { "id": "TCK-1060", "title": "ثبت شکایت از مشتری", "status": "Open", "date": "1405/01/18" },
      { "id": "TCK-1065", "title": "درخواست تغییر منوی دیجیتال", "status": "Closed", "date": "1405/01/15" }
    ]
  }
];

export const VENDOR_specific_ACCOMMODATION_MOCK = [
  {
    id: "VND-2345", // Kish Marina Hotel
    state: {
      allInventory: 42,
      rate: 4.8,
      commission: 145200,
      allReserve: 187
    },
    documents: {
      type: "Beachfront Resort",
      Rate: "5 Star",
      options: ["Free Wi-Fi", "Outdoor Pool", "Spa", "Parking", "Restaurant", "Gym", "24/7 Reception"],
      checkIn: ["14:00", "00:00"],  // from 14:00 to midnight (next day)
      checkOut: ["00:00", "12:00"], // from midnight to 12:00
      cancelPolicy: {
        lessThan24h: "100% of first night",
        lessThan48h: "50% of total stay",
        lessThan72h: "25% of total stay"
      }
    },
    activeReserves: [
      {
        id: "RES-101",
        user: "Aria Rostami",
        room: "Deluxe Ocean View",
        date: "2025-05-20",
        status: "Confirmed",
        price: 450,
        commission: 67.5
      },
      {
        id: "RES-102",
        user: "Sara Ahmadi",
        room: "Executive Suite",
        date: "2025-05-22",
        status: "Checked In",
        price: 720,
        commission: 108
      },
      {
        id: "RES-103",
        user: "Kamran Tehrani",
        room: "Standard Double",
        date: "2025-05-25",
        status: "Pending",
        price: 280,
        commission: 42
      }
    ]
  },
  {
    id: "VND-5454", // Darvishi Hotel
    state: {
      allInventory: 28,
      rate: 4.5,
      commission: 88450,
      allReserve: 112
    },
    documents: {
      type: "Boutique Hotel",
      Rate: "4 Star",
      options: ["Free Wi-Fi", "Indoor Pool", "Restaurant", "Parking", "Airport Shuttle", "Business Center"],
      checkIn: ["14:00", "22:00"],
      checkOut: ["07:00", "12:00"],
      cancelPolicy: {
        lessThan24h: "Full charge (1 night)",
        lessThan48h: "50% of total",
        lessThan72h: "Free cancellation"
      }
    },
    activeReserves: [
      {
        id: "RES-201",
        user: "Neda Moradi",
        room: "Twin Room",
        date: "2025-05-18",
        status: "Confirmed",
        price: 210,
        commission: 31.5
      },
      {
        id: "RES-202",
        user: "Ali Hosseini",
        room: "King Suite",
        date: "2025-05-21",
        status: "Confirmed",
        price: 390,
        commission: 58.5
      }
    ]
  },
  {
    id: "VND-5554", // Espinas Palace
    state: {
      allInventory: 120,
      rate: 4.9,
      commission: 312000,
      allReserve: 405
    },
    documents: {
      type: "Luxury Palace Hotel",
      Rate: "5 Star",
      options: ["Free Wi-Fi", "Two Pools", "Spa & Wellness", "Fine Dining", "Valet Parking", "Concierge", "Rooftop Lounge", "Meeting Rooms"],
      checkIn: ["15:00", "02:00"],
      checkOut: ["00:00", "12:00"],
      cancelPolicy: {
        lessThan24h: "100% of total stay",
        lessThan48h: "75% of total stay",
        lessThan72h: "50% of total stay"
      }
    },
    activeReserves: [
      {
        id: "RES-301",
        user: "Yasaman Nouri",
        room: "Presidential Suite",
        date: "2025-05-19",
        status: "Checked In",
        price: 1850,
        commission: 277.5
      },
      {
        id: "RES-302",
        user: "Reza Karimi",
        room: "Deluxe King",
        date: "2025-05-23",
        status: "Confirmed",
        price: 540,
        commission: 81
      },
      {
        id: "RES-303",
        user: "Mina Shafiei",
        room: "Family Connecting Room",
        date: "2025-05-26",
        status: "Pending",
        price: 670,
        commission: 100.5
      },
      {
        id: "RES-304",
        user: "Babak Zand",
        room: "Standard Double",
        date: "2025-05-27",
        status: "Pending",
        price: 300,
        commission: 45
      }
    ]
  }
];

export const VENDOR_SPECIFIC_CARRENTAL_MOCK = [
  {
    id: "VND-5445", // Gulf Helicopters
    state: {
      allInventory: 28,       // total vehicles in system
      rate: 4.9,             // average traveler rating (out of 5)
      commission: 98450,     // total commission earned for the system (in USD/local currency)
      allReserve: 156        // total reservations made through the system
    },
    documents: {
      type: "Luxury Helicopter Charter",
      checkIn: ["08:00", "20:00"],
      checkOut: ["08:00", "20:00"],
      cancelPolicy: {
        lessThan24h: "100% of total charter cost",
        lessThan48h: "75% of total charter cost",
        lessThan72h: "50% of total charter cost"
      },
      options: ["Child seat", "For disabled people", "Wi-Fi on board", "Refreshments", "Flight documentation"],
      useLimit: "250 km per day (additional $5/km)",
      delivery: {
        hotel: true,
        airport: true,
        office: true
      }
    },
    activeReserves: [
      {
        id: "RENT-101",
        user: "Aria Rostami",
        car: "Bell 429",
        date: "2025-05-21",
        status: "Confirmed",
        price: 3200,
        commission: 480
      },
      {
        id: "RENT-102",
        user: "Sara Ahmadi",
        car: "Airbus H125",
        date: "2025-05-23",
        status: "Checked In",
        price: 2800,
        commission: 420
      }
    ]
  },
  {
    id: "VND-4554", // Mahan Air
    state: {
      allInventory: 42,
      rate: 4.2,
      commission: 62400,
      allReserve: 98
    },
    documents: {
      type: "Airline & Charter Service",
      checkIn: ["06:00", "22:00"],
      checkOut: ["06:00", "22:00"],
      cancelPolicy: {
        lessThan24h: "100% of ticket price",
        lessThan48h: "50% of ticket price",
        lessThan72h: "25% of ticket price"
      },
      options: ["Child seat", "Extra baggage", "Meal service", "Priority boarding", "Wheelchair assistance"],
      useLimit: "No limit (based on flight route)",
      delivery: {
        hotel: false,
        airport: true,
        office: true
      }
    },
    activeReserves: [
      {
        id: "RENT-201",
        user: "Kamran Tehrani",
        car: "Boeing 737",
        date: "2025-05-19",
        status: "Confirmed",
        price: 8500,
        commission: 425
      },
      {
        id: "RENT-202",
        user: "Neda Moradi",
        car: "Airbus A320",
        date: "2025-05-26",
        status: "Pending",
        price: 7200,
        commission: 360
      }
    ]
  },
  {
    id: "VND-5544", // VIP Fleet Services
    state: {
      allInventory: 65,
      rate: 4.6,
      commission: 142300,
      allReserve: 245
    },
    documents: {
      type: "Premium Car & Limousine Service",
      checkIn: ["00:00", "23:59"], // 24/7
      checkOut: ["00:00", "23:59"],
      cancelPolicy: {
        lessThan24h: "100% of daily rate",
        lessThan48h: "75% of daily rate",
        lessThan72h: "Free cancellation"
      },
      options: ["Child seat", "For disabled people", "Wi-Fi", "Water & snacks", "Phone charger", "Luggage assistance"],
      useLimit: "300 km per day (additional $0.5/km)",
      delivery: {
        hotel: true,
        airport: true,
        office: true
      }
    },
    activeReserves: [
      {
        id: "RENT-301",
        user: "Yasaman Nouri",
        car: "Mercedes S-Class",
        date: "2025-05-20",
        status: "Checked In",
        price: 450,
        commission: 67.5
      },
      {
        id: "RENT-302",
        user: "Reza Karimi",
        car: "BMW 7 Series",
        date: "2025-05-22",
        status: "Confirmed",
        price: 420,
        commission: 63
      },
      {
        id: "RENT-303",
        user: "Mina Shafiei",
        car: "Tesla Model S",
        date: "2025-05-25",
        status: "Pending",
        price: 550,
        commission: 82.5
      }
    ]
  }
];

export const VENDOR_SPECIFIC_RESTAURANT_MOCK = [
  {
    id: "VND-3001", // Caspian Jet
    state: {
      allInventory: 120,
      rate: 5.0,
      commission: 18750,
      allReserve: 342
    },
    documents: {
      type: ["Fine Dining", "International Cuisine"],
      foodType: ["Iranian", "Continental", "Seafood"],
      openTime: {
        openHour: "12:00",
        closeHour: "23:00"
      },
      onlineServices: {
        reserveTable: true,
        reserveFood: true
      },
      takeAway: true
    },
    activeReserves: [
      {
        id: "RES-301",
        user: "Aria Rostami",
        table: "Table 12 (Window)",
        date: "2025-05-20 20:00",
        status: "Confirmed",
        price: 180,
        commission: 27
      },
      {
        id: "RES-302",
        user: "Sara Ahmadi",
        table: "VIP Room",
        date: "2025-05-21 21:30",
        status: "Checked In",
        price: 450,
        commission: 67.5
      },
      {
        id: "RES-303",
        user: "Kamran Tehrani",
        table: "Table 5",
        date: "2025-05-22 19:00",
        status: "Pending",
        price: 120,
        commission: 18
      }
    ]
  },
  {
    id: "VND-3002", // Dizi House
    state: {
      allInventory: 65,
      rate: 4.3,
      commission: 8620,
      allReserve: 178
    },
    documents: {
      type: ["Traditional", "Casual Dining"],
      foodType: ["Iranian", "Stew (Dizi/Khoresht)"],
      openTime: {
        openHour: "11:00",
        closeHour: "22:00"
      },
      onlineServices: {
        reserveTable: true,
        reserveFood: false
      },
      takeAway: true
    },
    activeReserves: [
      {
        id: "RES-311",
        user: "Neda Moradi",
        table: "Family Section",
        date: "2025-05-19 13:00",
        status: "Completed",
        price: 85,
        commission: 12.75
      },
      {
        id: "RES-312",
        user: "Ali Hosseini",
        table: "Table 8",
        date: "2025-05-21 20:30",
        status: "Confirmed",
        price: 110,
        commission: 16.5
      }
    ]
  },
  {
    id: "VND-3003", // Gilaneh Traditional Restaurant
    state: {
      allInventory: 90,
      rate: 4.7,
      commission: 14320,
      allReserve: 256
    },
    documents: {
      type: ["Traditional", "Family Style"],
      foodType: ["Iranian", "Caspian (Gilani)"],
      openTime: {
        openHour: "12:00",
        closeHour: "23:30"
      },
      onlineServices: {
        reserveTable: true,
        reserveFood: true
      },
      takeAway: false
    },
    activeReserves: [
      {
        id: "RES-321",
        user: "Yasaman Nouri",
        table: "Terrace",
        date: "2025-05-22 21:00",
        status: "Confirmed",
        price: 250,
        commission: 37.5
      },
      {
        id: "RES-322",
        user: "Reza Karimi",
        table: "Table 3",
        date: "2025-05-20 14:30",
        status: "Checked In",
        price: 95,
        commission: 14.25
      },
      {
        id: "RES-323",
        user: "Mina Shafiei",
        table: "Private Room",
        date: "2025-05-23 20:00",
        status: "Pending",
        price: 320,
        commission: 48
      }
    ]
  },
  {
    id: "VND-3004", // Sky Lounge
    state: {
      allInventory: 200,
      rate: 4.5,
      commission: 28400,
      allReserve: 510
    },
    documents: {
      type: ["Lounge Bar", "Fine Dining"],
      foodType: ["International", "Fusion", "Vegetarian Options"],
      openTime: {
        openHour: "16:00",
        closeHour: "02:00"
      },
      onlineServices: {
        reserveTable: true,
        reserveFood: true
      },
      takeAway: false
    },
    activeReserves: [
      {
        id: "RES-331",
        user: "Babak Zand",
        table: "Booth 7",
        date: "2025-05-21 22:00",
        status: "Confirmed",
        price: 200,
        commission: 30
      },
      {
        id: "RES-332",
        user: "Leila Farahani",
        table: "Rooftop Table 2",
        date: "2025-05-22 23:30",
        status: "Pending",
        price: 280,
        commission: 42
      }
    ]
  },
  {
    id: "VND-3005", // Seafood Market
    state: {
      allInventory: 85,
      rate: 4.4,
      commission: 21600,
      allReserve: 298
    },
    documents: {
      type: ["Seafood Specialty", "Casual"],
      foodType: ["Seafood", "Mediterranean"],
      openTime: {
        openHour: "11:30",
        closeHour: "22:30"
      },
      onlineServices: {
        reserveTable: true,
        reserveFood: true
      },
      takeAway: true
    },
    activeReserves: [
      {
        id: "RES-341",
        user: "Aria Rostami",
        table: "Table 9 (Ocean View)",
        date: "2025-05-20 19:00",
        status: "Confirmed",
        price: 160,
        commission: 24
      },
      {
        id: "RES-342",
        user: "Sara Ahmadi",
        table: "Bar Area",
        date: "2025-05-23 21:15",
        status: "Checked In",
        price: 75,
        commission: 11.25
      },
      {
        id: "RES-343",
        user: "Neda Moradi",
        table: "Family Table 4",
        date: "2025-05-24 13:30",
        status: "Pending",
        price: 140,
        commission: 21
      }
    ]
  }
];

export const VENDOR_specific_ENTERTAMENT_MOCK = [
  {
    "id": "VND-4545",
    "state": {
      "allInventory": 12,
      "rate": 4.7,
      "commission": 248000,
      "allReserve": 86
    },
    "document": {
      "type": "Luxury Yacht Charter & Water Sports",
      "openTime": {
        "openHour": "09:00",
        "closeHour": "20:00"
      },
      "openDay": {
        "saturday": true,
        "sunday": true,
        "monday": true,
        "tuesday": true,
        "wednesday": true,
        "thursday": true,
        "friday": true
      },
      "ageRange": {
        "from": 16,
        "to": 99
      }
    },
    "activeReserves": [
      {
        "id": "ENT-101",
        "user": "Aria Rostami",
        "service": "Sunset Yacht Cruise",
        "date": "2025-05-22",
        "status": "Confirmed",
        "price": 1200,
        "commission": 240
      },
      {
        "id": "ENT-102",
        "user": "Sara Ahmadi",
        "service": "Full Day Private Charter",
        "date": "2025-05-24",
        "status": "Checked In",
        "price": 3800,
        "commission": 760
      },
      {
        "id": "ENT-103",
        "user": "Kamran Tehrani",
        "service": "Jet Ski Rental",
        "date": "2025-05-23",
        "status": "Pending",
        "price": 350,
        "commission": 70
      }
    ]
  }
];

export const VENDOR_PROFILE_ADMINS_MOCK = [
  {
    id: 'VND-2345', // Kish Marina Hotel
    owner: {
      id: 'USR-987123',
      fullName: 'Hassan Jafari',
      email: 'h.jafari@kishmarina.com',
      phone: '+98 913 111 2233',
      role: 'Owner',
      avatar: ''
    },
    admins: [
      {
        tab: 'reception',
        columns: [
          { "key": "id", "title": "id" },
          { "key": "fullName", "title": "fullName" },
          { "key": "email", "title": "email" },
          { "key": "role", "title": "role", "translatable": true, "namespace": "adminsRole" },
          { "key": "lastActivity", "title": "lastActivity" },
          { "key": "accountStatus", "title": "status", "translatable": true, "namespace": "common.status" }
        ],
        data: [
          { id: 'ADM-101', fullName: 'Neda Karimi', email: 'n.karimi@kishmarina.com', role: 'reception', lastActivity: '2026-05-19 14:23', accountStatus: 'active' },
          { id: 'ADM-102', fullName: 'Saman Tehrani', email: 's.tehrani@kishmarina.com', role: 'reception', lastActivity: '2026-05-18 09:12', accountStatus: 'active' },
          { id: 'ADM-103', fullName: 'Laleh Ahmadi', email: 'l.ahmadi@kishmarina.com', role: 'reception_trainee', lastActivity: '2026-05-17 16:45', accountStatus: 'inactive' }
        ]
      },
      {
        tab: 'finance',
        columns: [
          { "key": "id", "title": "id" },
          { "key": "fullName", "title": "fullName" },
          { "key": "email", "title": "email" },
          { "key": "role", "title": "role", "translatable": true, "namespace": "adminsRole" },
          { "key": "lastActivity", "title": "lastActivity" },
          { "key": "accountStatus", "title": "status", "translatable": true, "namespace": "common.status" }
        ],
        data: [
          { id: 'ADM-201', fullName: 'Mahsa Rafiei', email: 'm.rafiei@kishmarina.com', role: 'finance_manager', lastActivity: '2026-05-19 11:05', accountStatus: 'active' },
          { id: 'ADM-202', fullName: 'Ali Nikfar', email: 'a.nikfar@kishmarina.com', role: 'accountant', lastActivity: '2026-05-18 14:30', accountStatus: 'active' }
        ]
      },
      {
        tab: 'operations',
        columns: [
          { "key": "id", "title": "id" },
          { "key": "fullName", "title": "fullName" },
          { "key": "email", "title": "email" },
          { "key": "role", "title": "role", "translatable": true, "namespace": "adminsRole" },
          { "key": "lastActivity", "title": "lastActivity" },
          { "key": "accountStatus", "title": "status", "translatable": true, "namespace": "common.status" }
        ],
        data: [
          { id: 'ADM-301', fullName: 'Reza Mohammadi', email: 'r.mohammadi@kishmarina.com', role: 'operation_manager', lastActivity: '2026-05-19 08:47', accountStatus: 'active' },
          { id: 'ADM-302', fullName: 'Sara Ebrahimi', email: 's.ebrahimi@kishmarina.com', role: 'shift_supervisor', lastActivity: '2026-05-18 22:15', accountStatus: 'active' },
          { id: 'ADM-303', fullName: 'Amir Ghasemi', email: 'a.ghasemi@kishmarina.com', role: 'technician', lastActivity: '2026-05-16 10:20', accountStatus: 'suspended' }
        ]
      }
    ]
  },

  {
    id: 'VND-5445', // Gulf Helicopters
    owner: {
      id: 'USR-456789',
      fullName: 'Saeed Rad',
      email: 'saeed.rad@gulfheli.com',
      phone: '+98 912 555 6677',
      role: 'CEO',
      avatar: ''
    },
    admins: [
      {
        tab: 'reception',
        columns: [
          { "key": "id", "title": "id" },
          { "key": "fullName", "title": "fullName" },
          { "key": "email", "title": "email" },
          { "key": "role", "title": "role", "translatable": true, "namespace": "adminsRole" },
          { "key": "lastActivity", "title": "lastActivity" },
          { "key": "accountStatus", "title": "status", "translatable": true, "namespace": "common.status" }
        ],
        data: [
          { id: 'ADM-110', fullName: 'Zahra Moradi', email: 'z.moradi@gulfheli.com', role: 'reception', lastActivity: '2026-05-19 13:10', accountStatus: 'active' },
          { id: 'ADM-111', fullName: 'Hamed Salari', email: 'h.salari@gulfheli.com', role: 'reception', lastActivity: '2026-05-17 12:45', accountStatus: 'inactive' }
        ]
      },
      {
        tab: 'driver',
        columns: [
          { "key": "id", "title": "id" },
          { "key": "fullName", "title": "fullName" },
          { "key": "email", "title": "email" },
          { "key": "role", "title": "role", "translatable": true, "namespace": "adminsRole" },
          { "key": "lastActivity", "title": "lastActivity" },
          { "key": "accountStatus", "title": "status", "translatable": true, "namespace": "common.status" }
        ],
        data: [
          { id: 'ADM-210', fullName: 'Captain Mahmoud Salimi', email: 'm.salimi@gulfheli.com', role: 'chief_pilot', lastActivity: '2026-05-19 07:30', accountStatus: 'active' },
          { id: 'ADM-211', fullName: 'Farhad Jalili', email: 'f.jalili@gulfheli.com', role: 'dispatcher', lastActivity: '2026-05-18 18:20', accountStatus: 'active' },
          { id: 'ADM-212', fullName: 'Nasrin Akbari', email: 'n.akbari@gulfheli.com', role: 'maintenance_engineer', lastActivity: '2026-05-19 09:15', accountStatus: 'active' }
        ]
      }
    ]
  },

  {
    id: 'VND-4545', // Luxe Yacht Charters
    owner: {
      id: 'USR-321654',
      fullName: 'Farzad Kian',
      email: 'farzad@luxeyacht.com',
      phone: '+98 914 888 9900',
      role: 'Owner',
      avatar: ''
    },
    admins: [
      {
        tab: 'management',
        columns: [
          { "key": "id", "title": "id" },
          { "key": "fullName", "title": "fullName" },
          { "key": "email", "title": "email" },
          { "key": "role", "title": "role", "translatable": true, "namespace": "adminsRole" },
          { "key": "lastActivity", "title": "lastActivity" },
          { "key": "accountStatus", "title": "status", "translatable": true, "namespace": "common.status" }
        ],
        data: [
          { id: 'ADM-401', fullName: 'Nima Akhavan', email: 'n.akhavan@luxeyacht.com', role: 'fleet_manager', lastActivity: '2026-05-18 20:15', accountStatus: 'active' },
          { id: 'ADM-402', fullName: 'Maryam Noori', email: 'm.noori@luxeyacht.com', role: 'booking_specialist', lastActivity: '2026-05-19 12:00', accountStatus: 'active' },
          { id: 'ADM-403', fullName: 'Omid Rezaei', email: 'o.rezaei@luxeyacht.com', role: 'customer_relations', lastActivity: '2026-05-15 10:30', accountStatus: 'pending' }
        ]
      }
    ]
  },

  {
    id: 'VND-5454', // Darvishi Hotel
    owner: {
      id: 'USR-789012',
      fullName: 'Mehran Safa',
      email: 'm.safa@darvishihotel.com',
      phone: '+98 915 222 3344',
      role: 'Executive Manager',
      avatar: ''
    },
    admins: [
      {
        tab: 'reservations',
        columns: [
          { "key": "id", "title": "id" },
          { "key": "fullName", "title": "fullName" },
          { "key": "email", "title": "email" },
          { "key": "role", "title": "role", "translatable": true, "namespace": "adminsRole" },
          { "key": "lastActivity", "title": "lastActivity" },
          { "key": "accountStatus", "title": "status", "translatable": true, "namespace": "common.status" }
        ],
        data: [
          { id: 'ADM-501', fullName: 'Shadi Pakzad', email: 's.pakzad@darvishihotel.com', role: 'reservation_head', lastActivity: '2026-05-19 10:45', accountStatus: 'active' },
          { id: 'ADM-502', fullName: 'Arman Ebrahimi', email: 'a.ebrahimi@darvishihotel.com', role: 'reservation_agent', lastActivity: '2026-05-18 16:30', accountStatus: 'active' }
        ]
      },
      {
        tab: 'housekeeping',
        columns: [
          { "key": "id", "title": "id" },
          { "key": "fullName", "title": "fullName" },
          { "key": "email", "title": "email" },
          { "key": "role", "title": "role", "translatable": true, "namespace": "adminsRole" },
          { "key": "lastActivity", "title": "lastActivity" },
          { "key": "accountStatus", "title": "status", "translatable": true, "namespace": "common.status" }
        ],
        data: [
          { id: 'ADM-601', fullName: 'Golnaz Fathi', email: 'g.fathi@darvishihotel.com', role: 'housekeeping_manager', lastActivity: '2026-05-19 08:20', accountStatus: 'active' },
          { id: 'ADM-602', fullName: 'Behnam Taghavi', email: 'b.taghavi@darvishihotel.com', role: 'supervisor', lastActivity: '2026-05-17 14:00', accountStatus: 'suspended' }
        ]
      }
    ]
  },

  {
    id: 'VND-3001', // Caspian Jet
    owner: {
      id: 'USR-654321',
      fullName: 'Samira Zare',
      email: 'samira@caspianjet.com',
      phone: '+98 911 777 8899',
      role: 'CEO',
      avatar: ''
    },
    admins: [
      {
        tab: 'reception',
        columns: [
          { "key": "id", "title": "id" },
          { "key": "fullName", "title": "fullName" },
          { "key": "email", "title": "email" },
          { "key": "role", "title": "role", "translatable": true, "namespace": "adminsRole" },
          { "key": "lastActivity", "title": "lastActivity" },
          { "key": "accountStatus", "title": "status", "translatable": true, "namespace": "common.status" }
        ],
        data: [
          { id: 'ADM-701', fullName: 'Mohsen Tarkash', email: 'm.tarkash@caspianjet.com', role: 'operations_manager', lastActivity: '2026-05-19 13:55', accountStatus: 'active' },
          { id: 'ADM-702', fullName: 'Leila Rashidi', email: 'l.rashidi@caspianjet.com', role: 'chef', lastActivity: '2026-05-18 21:30', accountStatus: 'active' },
          { id: 'ADM-703', fullName: 'Hossein Parvizi', email: 'h.parvizi@caspianjet.com', role: 'logistics', lastActivity: '2026-05-16 11:10', accountStatus: 'inactive' }
        ]
      }
    ]
  }
];

export const VENDOR_PROFILE_INVENTORY_MOCK = [
  {
    id: "VND-2345", // Kish Marina Hotel
    inventory: [
      {
        tab: "suite",
        data: [
          {
            id: "PRD-ACC-001",
            basicInfo: {
              name: "Ocean Dream Suite",
              serviceCategory: "accommodation",
              type: "suite",
              images: [],
              isActive: true,
              tags: ["luxury", "ocean view"]
            },
            specificInfo: {
              accommodation: {
                capacity: 4,
                bedType: "Two Double Beds",
                view: "Ocean",
                amenities: ["Wi-Fi", "Breakfast", "Mini Bar", "TV", "Air Conditioning"]
              }
            },
            pricing: { pricePerUnit: 5500000, currency: "IRR", availableUnits: 3, totalUnits: 5 },
            rating: 4.8
          },
          {
            id: "PRD-ACC-004",
            basicInfo: {
              name: "Royal Penthouse",
              serviceCategory: "accommodation",
              type: "suite",
              images: [],
              isActive: true,
              tags: ["luxury", "penthouse", "private pool"]
            },
            specificInfo: {
              accommodation: {
                capacity: 6,
                bedType: "Three King Beds",
                view: "Panoramic City",
                amenities: ["Wi-Fi", "Breakfast", "Private Pool", "Butler Service", "Jacuzzi"]
              }
            },
            pricing: { pricePerUnit: 18500000, currency: "IRR", availableUnits: 1, totalUnits: 1 },
            rating: 5.0
          },
          {
            id: "PRD-ACC-005",
            basicInfo: {
              name: "Honeymoon Suite",
              serviceCategory: "accommodation",
              type: "suite",
              images: [],
              isActive: true,
              tags: ["romantic", "ocean view", "luxury"]
            },
            specificInfo: {
              accommodation: {
                capacity: 2,
                bedType: "King Bed",
                view: "Ocean",
                amenities: ["Wi-Fi", "Breakfast", "Champagne", "Spa Access", "Private Balcony"]
              }
            },
            pricing: { pricePerUnit: 8900000, currency: "IRR", availableUnits: 2, totalUnits: 3 },
            rating: 4.9
          }
        ]
      },
      {
        tab: "standard",
        data: [
          {
            id: "PRD-ACC-002",
            basicInfo: {
              name: "Standard Room",
              serviceCategory: "accommodation",
              type: "standard",
              images: [],
              isActive: true,
              tags: ["economy", "city view"]
            },
            specificInfo: {
              accommodation: {
                capacity: 2,
                bedType: "Double Bed",
                view: "City",
                amenities: ["Wi-Fi", "TV", "Air Conditioning"]
              }
            },
            pricing: { pricePerUnit: 1800000, currency: "IRR", availableUnits: 8, totalUnits: 10 },
            rating: 4.2
          },
          {
            id: "PRD-ACC-006",
            basicInfo: {
              name: "Twin Standard Room",
              serviceCategory: "accommodation",
              type: "standard",
              images: [],
              isActive: true,
              tags: ["economy", "family"]
            },
            specificInfo: {
              accommodation: {
                capacity: 2,
                bedType: "Two Single Beds",
                view: "City",
                amenities: ["Wi-Fi", "TV", "Air Conditioning", "Work Desk"]
              }
            },
            pricing: { pricePerUnit: 1650000, currency: "IRR", availableUnits: 5, totalUnits: 8 },
            rating: 4.1
          },
          {
            id: "PRD-ACC-007",
            basicInfo: {
              name: "Standard Plus",
              serviceCategory: "accommodation",
              type: "standard",
              images: [],
              isActive: true,
              tags: ["economy", "upgraded"]
            },
            specificInfo: {
              accommodation: {
                capacity: 3,
                bedType: "Double Bed + Single",
                view: "City",
                amenities: ["Wi-Fi", "TV", "Air Conditioning", "Mini Fridge"]
              }
            },
            pricing: { pricePerUnit: 2100000, currency: "IRR", availableUnits: 4, totalUnits: 6 },
            rating: 4.3
          }
        ]
      },
      {
        tab: "villa",
        data: [
          {
            id: "PRD-ACC-003",
            basicInfo: {
              name: "Private Villa",
              serviceCategory: "accommodation",
              type: "villa",
              images: [],
              isActive: false,
              tags: ["luxury", "private", "pool"]
            },
            specificInfo: {
              accommodation: {
                capacity: 8,
                bedType: "Four Double Beds",
                view: "Garden",
                amenities: ["Wi-Fi", "Breakfast", "Private Pool", "Kitchen", "BBQ Area"]
              }
            },
            pricing: { pricePerUnit: 12500000, currency: "IRR", availableUnits: 1, totalUnits: 1 },
            rating: 5.0
          },
          {
            id: "PRD-ACC-008",
            basicInfo: {
              name: "Beachfront Villa",
              serviceCategory: "accommodation",
              type: "villa",
              images: [],
              isActive: true,
              tags: ["luxury", "beachfront", "private"]
            },
            specificInfo: {
              accommodation: {
                capacity: 6,
                bedType: "Three King Beds",
                view: "Beach",
                amenities: ["Wi-Fi", "Breakfast", "Private Pool", "Kitchen", "Direct Beach Access"]
              }
            },
            pricing: { pricePerUnit: 15900000, currency: "IRR", availableUnits: 2, totalUnits: 2 },
            rating: 4.9
          },
          {
            id: "PRD-ACC-009",
            basicInfo: {
              name: "Garden Villa",
              serviceCategory: "accommodation",
              type: "villa",
              images: [],
              isActive: true,
              tags: ["luxury", "garden view", "family"]
            },
            specificInfo: {
              accommodation: {
                capacity: 5,
                bedType: "Two Double Beds + Single",
                view: "Garden",
                amenities: ["Wi-Fi", "Breakfast", "Private Garden", "Kitchen", "Parking"]
              }
            },
            pricing: { pricePerUnit: 9800000, currency: "IRR", availableUnits: 3, totalUnits: 4 },
            rating: 4.7
          }
        ]
      }
    ]
  },
  {
    id: "VND-5445", // Gulf Helicopters
    inventory: [
      {
        tab: "sedan",
        data: [
          {
            id: "PRD-CAR-001",
            basicInfo: {
              name: "Toyota Corolla 2023",
              serviceCategory: "carRental",
              type: "sedan",
              images: [],
              isActive: true,
              tags: ["economy", "fuel efficient"]
            },
            specificInfo: {
              carRental: {
                brand: "Toyota",
                model: "Corolla",
                year: 2023,
                transmission: "Automatic",
                seats: 5,
                fuelType: "Gasoline"
              }
            },
            pricing: { pricePerUnit: 850000, currency: "IRR", availableUnits: 4, totalUnits: 6 },
            rating: 4.7
          },
          {
            id: "PRD-CAR-004",
            basicInfo: {
              name: "Honda Civic 2024",
              serviceCategory: "carRental",
              type: "sedan",
              images: [],
              isActive: true,
              tags: ["sporty", "premium sedan"]
            },
            specificInfo: {
              carRental: {
                brand: "Honda",
                model: "Civic",
                year: 2024,
                transmission: "Automatic",
                seats: 5,
                fuelType: "Gasoline"
              }
            },
            pricing: { pricePerUnit: 950000, currency: "IRR", availableUnits: 3, totalUnits: 5 },
            rating: 4.8
          },
          {
            id: "PRD-CAR-005",
            basicInfo: {
              name: "Hyundai Elantra 2023",
              serviceCategory: "carRental",
              type: "sedan",
              images: [],
              isActive: true,
              tags: ["economy", "modern"]
            },
            specificInfo: {
              carRental: {
                brand: "Hyundai",
                model: "Elantra",
                year: 2023,
                transmission: "Automatic",
                seats: 5,
                fuelType: "Gasoline"
              }
            },
            pricing: { pricePerUnit: 780000, currency: "IRR", availableUnits: 5, totalUnits: 8 },
            rating: 4.6
          }
        ]
      },
      {
        tab: "suv",
        data: [
          {
            id: "PRD-CAR-002",
            basicInfo: {
              name: "Haima S5",
              serviceCategory: "carRental",
              type: "suv",
              images: [],
              isActive: true,
              tags: ["family", "spacious"]
            },
            specificInfo: {
              carRental: {
                brand: "Haima",
                model: "S5",
                year: 2022,
                transmission: "Manual",
                seats: 5,
                fuelType: "Gasoline"
              }
            },
            pricing: { pricePerUnit: 650000, currency: "IRR", availableUnits: 2, totalUnits: 4 },
            rating: 4.3
          },
          {
            id: "PRD-CAR-006",
            basicInfo: {
              name: "Hyundai Santa Fe 2024",
              serviceCategory: "carRental",
              type: "suv",
              images: [],
              isActive: true,
              tags: ["luxury suv", "family"]
            },
            specificInfo: {
              carRental: {
                brand: "Hyundai",
                model: "Santa Fe",
                year: 2024,
                transmission: "Automatic",
                seats: 7,
                fuelType: "Gasoline"
              }
            },
            pricing: { pricePerUnit: 1950000, currency: "IRR", availableUnits: 2, totalUnits: 3 },
            rating: 4.9
          },
          {
            id: "PRD-CAR-007",
            basicInfo: {
              name: "Kia Sportage 2023",
              serviceCategory: "carRental",
              type: "suv",
              images: [],
              isActive: true,
              tags: ["compact suv", "modern"]
            },
            specificInfo: {
              carRental: {
                brand: "Kia",
                model: "Sportage",
                year: 2023,
                transmission: "Automatic",
                seats: 5,
                fuelType: "Gasoline"
              }
            },
            pricing: { pricePerUnit: 1100000, currency: "IRR", availableUnits: 3, totalUnits: 5 },
            rating: 4.7
          }
        ]
      },
      {
        tab: "luxury",
        data: [
          {
            id: "PRD-CAR-003",
            basicInfo: {
              name: "Chery Tiggo 8 Pro",
              serviceCategory: "carRental",
              type: "luxury",
              images: [],
              isActive: false,
              tags: ["luxury suv", "premium"]
            },
            specificInfo: {
              carRental: {
                brand: "Chery",
                model: "Tiggo 8 Pro",
                year: 2024,
                transmission: "Automatic",
                seats: 7,
                fuelType: "Gasoline"
              }
            },
            pricing: { pricePerUnit: 1450000, currency: "IRR", availableUnits: 0, totalUnits: 2 },
            rating: 4.9
          },
          {
            id: "PRD-CAR-008",
            basicInfo: {
              name: "Mercedes-Benz S500",
              serviceCategory: "carRental",
              type: "luxury",
              images: [],
              isActive: true,
              tags: ["luxury", "executive"]
            },
            specificInfo: {
              carRental: {
                brand: "Mercedes-Benz",
                model: "S500",
                year: 2024,
                transmission: "Automatic",
                seats: 5,
                fuelType: "Gasoline"
              }
            },
            pricing: { pricePerUnit: 4500000, currency: "IRR", availableUnits: 1, totalUnits: 2 },
            rating: 5.0
          },
          {
            id: "PRD-CAR-009",
            basicInfo: {
              name: "BMW 740i",
              serviceCategory: "carRental",
              type: "luxury",
              images: [],
              isActive: true,
              tags: ["luxury", "business"]
            },
            specificInfo: {
              carRental: {
                brand: "BMW",
                model: "740i",
                year: 2024,
                transmission: "Automatic",
                seats: 5,
                fuelType: "Gasoline"
              }
            },
            pricing: { pricePerUnit: 5200000, currency: "IRR", availableUnits: 1, totalUnits: 1 },
            rating: 4.9
          }
        ]
      }
    ]
  },
  {
    id: "VND-4545", // Luxe Yacht Charters
    inventory: [
      {
        tab: "cinema",
        data: [
          {
            id: "PRD-ENT-001",
            basicInfo: {
              name: "IMAX Cinema Ticket",
              serviceCategory: "entertainment",
              type: "cinema",
              images: [],
              isActive: true,
              tags: ["cinema", "imax", "movie"]
            },
            specificInfo: {
              entertainment: {
                entertainmentType: "IMAX Cinema",
                durationMinutes: 120,
                minAge: 12,
                physicalIntensity: "Low"
              }
            },
            pricing: { pricePerUnit: 180000, currency: "IRR", availableUnits: 45, totalUnits: 120 },
            rating: 4.6
          },
          {
            id: "PRD-ENT-004",
            basicInfo: {
              name: "3D Cinema VIP Experience",
              serviceCategory: "entertainment",
              type: "cinema",
              images: [],
              isActive: true,
              tags: ["cinema", "vip", "3d"]
            },
            specificInfo: {
              entertainment: {
                entertainmentType: "3D Cinema",
                durationMinutes: 130,
                minAge: 12,
                physicalIntensity: "Low",
                equipmentProvided: ["3D Glasses", "VIP Seat", "Snacks"]
              }
            },
            pricing: { pricePerUnit: 350000, currency: "IRR", availableUnits: 20, totalUnits: 50 },
            rating: 4.8
          },
          {
            id: "PRD-ENT-005",
            basicInfo: {
              name: "Classic Movie Night",
              serviceCategory: "entertainment",
              type: "cinema",
              images: [],
              isActive: true,
              tags: ["cinema", "classic", "retro"]
            },
            specificInfo: {
              entertainment: {
                entertainmentType: "Classic Cinema",
                durationMinutes: 150,
                minAge: 10,
                physicalIntensity: "Low"
              }
            },
            pricing: { pricePerUnit: 120000, currency: "IRR", availableUnits: 60, totalUnits: 100 },
            rating: 4.4
          }
        ]
      },
      {
        tab: "desert_tour",
        data: [
          {
            id: "PRD-ENT-002",
            basicInfo: {
              name: "Desert Safari Tour",
              serviceCategory: "entertainment",
              type: "desert_tour",
              images: [],
              isActive: true,
              tags: ["adventure", "desert", "safari"]
            },
            specificInfo: {
              entertainment: {
                entertainmentType: "Desert Safari",
                durationMinutes: 480,
                minAge: 18,
                physicalIntensity: "Medium",
                equipmentProvided: ["Water", "Hat", "Shoes"]
              }
            },
            pricing: { pricePerUnit: 850000, currency: "IRR", availableUnits: 8, totalUnits: 20 },
            rating: 4.9
          },
          {
            id: "PRD-ENT-006",
            basicInfo: {
              name: "Overnight Desert Camping",
              serviceCategory: "entertainment",
              type: "desert_tour",
              images: [],
              isActive: true,
              tags: ["adventure", "camping", "overnight"]
            },
            specificInfo: {
              entertainment: {
                entertainmentType: "Desert Camping",
                durationMinutes: 1440,
                minAge: 18,
                physicalIntensity: "Medium",
                equipmentProvided: ["Tent", "Sleeping Bag", "Food", "Water"]
              }
            },
            pricing: { pricePerUnit: 1850000, currency: "IRR", availableUnits: 5, totalUnits: 15 },
            rating: 4.8
          },
          {
            id: "PRD-ENT-007",
            basicInfo: {
              name: "Sunset Desert Photography Tour",
              serviceCategory: "entertainment",
              type: "desert_tour",
              images: [],
              isActive: true,
              tags: ["photography", "sunset", "desert"]
            },
            specificInfo: {
              entertainment: {
                entertainmentType: "Photography Tour",
                durationMinutes: 240,
                minAge: 16,
                physicalIntensity: "Low",
                equipmentProvided: ["Water", "Snacks", "Guide"]
              }
            },
            pricing: { pricePerUnit: 620000, currency: "IRR", availableUnits: 10, totalUnits: 20 },
            rating: 4.7
          }
        ]
      },
      {
        tab: "water_park",
        data: [
          {
            id: "PRD-ENT-003",
            basicInfo: {
              name: "Water Park Day Pass",
              serviceCategory: "entertainment",
              type: "water_park",
              images: [],
              isActive: false,
              tags: ["water park", "family", "fun"]
            },
            specificInfo: {
              entertainment: {
                entertainmentType: "Water Park",
                durationMinutes: 360,
                minAge: 6,
                physicalIntensity: "High"
              }
            },
            pricing: { pricePerUnit: 450000, currency: "IRR", availableUnits: 0, totalUnits: 500 },
            rating: 4.4
          },
          {
            id: "PRD-ENT-008",
            basicInfo: {
              name: "Water Park VIP Cabana",
              serviceCategory: "entertainment",
              type: "water_park",
              images: [],
              isActive: true,
              tags: ["water park", "vip", "luxury"]
            },
            specificInfo: {
              entertainment: {
                entertainmentType: "Water Park",
                durationMinutes: 480,
                minAge: 0,
                physicalIntensity: "Medium",
                equipmentProvided: ["Private Cabana", "Towel Service", "Food & Drinks"]
              }
            },
            pricing: { pricePerUnit: 1250000, currency: "IRR", availableUnits: 8, totalUnits: 12 },
            rating: 4.7
          },
          {
            id: "PRD-ENT-009",
            basicInfo: {
              name: "Water Park Season Pass",
              serviceCategory: "entertainment",
              type: "water_park",
              images: [],
              isActive: true,
              tags: ["water park", "season pass", "unlimited"]
            },
            specificInfo: {
              entertainment: {
                entertainmentType: "Water Park",
                durationMinutes: 0,
                minAge: 6,
                physicalIntensity: "High"
              }
            },
            pricing: { pricePerUnit: 2800000, currency: "IRR", availableUnits: 50, totalUnits: 200 },
            rating: 4.6
          }
        ]
      }
    ]
  },
  {
    id: "VND-5454", // Darvishi Hotel
    inventory: [
      {
        tab: "suite",
        data: [
          {
            id: "PRD-ACC-001",
            basicInfo: {
              name: "Ocean Dream Suite",
              serviceCategory: "accommodation",
              type: "suite",
              images: [],
              isActive: true,
              tags: ["luxury", "ocean view"]
            },
            specificInfo: {
              accommodation: {
                capacity: 4,
                bedType: "Two Double Beds",
                view: "Ocean",
                amenities: ["Wi-Fi", "Breakfast", "Mini Bar", "TV", "Air Conditioning"]
              }
            },
            pricing: { pricePerUnit: 5500000, currency: "IRR", availableUnits: 3, totalUnits: 5 },
            rating: 4.8
          },
          {
            id: "PRD-ACC-010",
            basicInfo: {
              name: "Business Suite",
              serviceCategory: "accommodation",
              type: "suite",
              images: [],
              isActive: true,
              tags: ["business", "executive"]
            },
            specificInfo: {
              accommodation: {
                capacity: 2,
                bedType: "King Bed",
                view: "City",
                amenities: ["Wi-Fi", "Breakfast", "Work Desk", "Meeting Room Access"]
              }
            },
            pricing: { pricePerUnit: 6200000, currency: "IRR", availableUnits: 2, totalUnits: 4 },
            rating: 4.6
          },
          {
            id: "PRD-ACC-011",
            basicInfo: {
              name: "Family Suite",
              serviceCategory: "accommodation",
              type: "suite",
              images: [],
              isActive: true,
              tags: ["family", "spacious"]
            },
            specificInfo: {
              accommodation: {
                capacity: 6,
                bedType: "Two Double Beds + Sofa Bed",
                view: "City",
                amenities: ["Wi-Fi", "Breakfast", "Kitchenette", "Kids Play Area"]
              }
            },
            pricing: { pricePerUnit: 7200000, currency: "IRR", availableUnits: 2, totalUnits: 3 },
            rating: 4.7
          }
        ]
      },
      {
        tab: "standard",
        data: [
          {
            id: "PRD-ACC-002",
            basicInfo: {
              name: "Standard Room",
              serviceCategory: "accommodation",
              type: "standard",
              images: [],
              isActive: true,
              tags: ["economy", "city view"]
            },
            specificInfo: {
              accommodation: {
                capacity: 2,
                bedType: "Double Bed",
                view: "City",
                amenities: ["Wi-Fi", "TV", "Air Conditioning"]
              }
            },
            pricing: { pricePerUnit: 1800000, currency: "IRR", availableUnits: 8, totalUnits: 10 },
            rating: 4.2
          },
          {
            id: "PRD-ACC-012",
            basicInfo: {
              name: "Standard Single Room",
              serviceCategory: "accommodation",
              type: "standard",
              images: [],
              isActive: true,
              tags: ["economy", "single"]
            },
            specificInfo: {
              accommodation: {
                capacity: 1,
                bedType: "Single Bed",
                view: "City",
                amenities: ["Wi-Fi", "TV", "Air Conditioning"]
              }
            },
            pricing: { pricePerUnit: 1200000, currency: "IRR", availableUnits: 4, totalUnits: 6 },
            rating: 4.0
          },
          {
            id: "PRD-ACC-013",
            basicInfo: {
              name: "Standard Triple Room",
              serviceCategory: "accommodation",
              type: "standard",
              images: [],
              isActive: true,
              tags: ["economy", "group"]
            },
            specificInfo: {
              accommodation: {
                capacity: 3,
                bedType: "Three Single Beds",
                view: "City",
                amenities: ["Wi-Fi", "TV", "Air Conditioning"]
              }
            },
            pricing: { pricePerUnit: 2300000, currency: "IRR", availableUnits: 3, totalUnits: 4 },
            rating: 4.1
          }
        ]
      },
      {
        tab: "villa",
        data: [
          {
            id: "PRD-ACC-003",
            basicInfo: {
              name: "Private Villa",
              serviceCategory: "accommodation",
              type: "villa",
              images: [],
              isActive: false,
              tags: ["luxury", "private", "pool"]
            },
            specificInfo: {
              accommodation: {
                capacity: 8,
                bedType: "Four Double Beds",
                view: "Garden",
                amenities: ["Wi-Fi", "Breakfast", "Private Pool", "Kitchen", "BBQ Area"]
              }
            },
            pricing: { pricePerUnit: 12500000, currency: "IRR", availableUnits: 1, totalUnits: 1 },
            rating: 5.0
          },
          {
            id: "PRD-ACC-014",
            basicInfo: {
              name: "Classic Villa",
              serviceCategory: "accommodation",
              type: "villa",
              images: [],
              isActive: true,
              tags: ["classic", "garden view"]
            },
            specificInfo: {
              accommodation: {
                capacity: 6,
                bedType: "Three Double Beds",
                view: "Garden",
                amenities: ["Wi-Fi", "Breakfast", "Garden Access", "Parking"]
              }
            },
            pricing: { pricePerUnit: 8500000, currency: "IRR", availableUnits: 2, totalUnits: 3 },
            rating: 4.6
          },
          {
            id: "PRD-ACC-015",
            basicInfo: {
              name: "Premium Villa with Jacuzzi",
              serviceCategory: "accommodation",
              type: "villa",
              images: [],
              isActive: true,
              tags: ["luxury", "jacuzzi", "romantic"]
            },
            specificInfo: {
              accommodation: {
                capacity: 4,
                bedType: "Two King Beds",
                view: "Garden",
                amenities: ["Wi-Fi", "Breakfast", "Private Jacuzzi", "Kitchen"]
              }
            },
            pricing: { pricePerUnit: 14200000, currency: "IRR", availableUnits: 1, totalUnits: 2 },
            rating: 4.9
          }
        ]
      }
    ]
  },
  {
    id: "VND-3001", // Caspian Jet
    inventory: [
      {
        tab: "vip_table",
        data: [
          {
            id: "PRD-RES-001",
            basicInfo: {
              name: "VIP Table",
              serviceCategory: "restaurant",
              type: "vip_table",
              images: [],
              isActive: true,
              tags: ["vip", "luxury dining"]
            },
            specificInfo: {
              restaurant: {
                tableType: "VIP",
                capacity: 6,
                mealType: ["Lunch", "Dinner"]
              }
            },
            pricing: { pricePerUnit: 0, currency: "IRR", availableUnits: 2, totalUnits: 4, note: "Price based on menu order" },
            rating: 4.9
          },
          {
            id: "PRD-RES-004",
            basicInfo: {
              name: "Executive VIP Table",
              serviceCategory: "restaurant",
              type: "vip_table",
              images: [],
              isActive: true,
              tags: ["vip", "business", "premium"]
            },
            specificInfo: {
              restaurant: {
                tableType: "Executive VIP",
                capacity: 8,
                mealType: ["Lunch", "Dinner", "Business Meeting"]
              }
            },
            pricing: { pricePerUnit: 0, currency: "IRR", availableUnits: 1, totalUnits: 2, note: "Price based on menu order" },
            rating: 4.8
          },
          {
            id: "PRD-RES-005",
            basicInfo: {
              name: "Family VIP Table",
              serviceCategory: "restaurant",
              type: "vip_table",
              images: [],
              isActive: true,
              tags: ["vip", "family"]
            },
            specificInfo: {
              restaurant: {
                tableType: "Family VIP",
                capacity: 10,
                mealType: ["Lunch", "Dinner", "Family Events"]
              }
            },
            pricing: { pricePerUnit: 0, currency: "IRR", availableUnits: 2, totalUnits: 3, note: "Price based on menu order" },
            rating: 4.7
          }
        ]
      },
      {
        tab: "private_room",
        data: [
          {
            id: "PRD-RES-002",
            basicInfo: {
              name: "Private Room",
              serviceCategory: "restaurant",
              type: "private_room",
              images: [],
              isActive: true,
              tags: ["private", "celebration"]
            },
            specificInfo: {
              restaurant: {
                tableType: "Private Room",
                capacity: 12,
                mealType: ["Lunch", "Dinner", "Celebration"]
              }
            },
            pricing: { pricePerUnit: 2500000, currency: "IRR", availableUnits: 1, totalUnits: 1 },
            rating: 4.7
          },
          {
            id: "PRD-RES-006",
            basicInfo: {
              name: "Premium Private Room",
              serviceCategory: "restaurant",
              type: "private_room",
              images: [],
              isActive: true,
              tags: ["private", "luxury", "meeting"]
            },
            specificInfo: {
              restaurant: {
                tableType: "Premium Private Room",
                capacity: 20,
                mealType: ["Lunch", "Dinner", "Wedding", "Corporate Event"]
              }
            },
            pricing: { pricePerUnit: 4500000, currency: "IRR", availableUnits: 1, totalUnits: 1 },
            rating: 4.9
          },
          {
            id: "PRD-RES-007",
            basicInfo: {
              name: "Small Private Room",
              serviceCategory: "restaurant",
              type: "private_room",
              images: [],
              isActive: true,
              tags: ["private", "intimate"]
            },
            specificInfo: {
              restaurant: {
                tableType: "Small Private Room",
                capacity: 6,
                mealType: ["Lunch", "Dinner", "Business Lunch"]
              }
            },
            pricing: { pricePerUnit: 1500000, currency: "IRR", availableUnits: 2, totalUnits: 2 },
            rating: 4.6
          }
        ]
      },
      {
        tab: "terrace",
        data: [
          {
            id: "PRD-RES-003",
            basicInfo: {
              name: "Rooftop Garden Terrace",
              serviceCategory: "restaurant",
              type: "terrace",
              images: [],
              isActive: false,
              tags: ["terrace", "rooftop", "romantic"]
            },
            specificInfo: {
              restaurant: {
                tableType: "Terrace",
                capacity: 4,
                mealType: ["Dinner", "Coffee Shop"]
              }
            },
            pricing: { pricePerUnit: 0, currency: "IRR", availableUnits: 0, totalUnits: 3 },
            rating: 4.5
          },
          {
            id: "PRD-RES-008",
            basicInfo: {
              name: "Open Air Terrace",
              serviceCategory: "restaurant",
              type: "terrace",
              images: [],
              isActive: true,
              tags: ["terrace", "open air", "casual"]
            },
            specificInfo: {
              restaurant: {
                tableType: "Open Air Terrace",
                capacity: 8,
                mealType: ["Lunch", "Dinner", "Coffee Shop"]
              }
            },
            pricing: { pricePerUnit: 0, currency: "IRR", availableUnits: 4, totalUnits: 6, note: "Price based on menu order" },
            rating: 4.6
          },
          {
            id: "PRD-RES-009",
            basicInfo: {
              name: "Panoramic Terrace",
              serviceCategory: "restaurant",
              type: "terrace",
              images: [],
              isActive: true,
              tags: ["terrace", "city view", "romantic"]
            },
            specificInfo: {
              restaurant: {
                tableType: "Panoramic Terrace",
                capacity: 6,
                mealType: ["Dinner", "Sunset Special"]
              }
            },
            pricing: { pricePerUnit: 0, currency: "IRR", availableUnits: 3, totalUnits: 5, note: "Price based on menu order" },
            rating: 4.8
          }
        ]
      }
    ]
  }
];

export const VENDOR_PROFILE_RESERVES_MOCK = [
  {
    id: "VND-2345", // Kish Marina Hotel - Accommodation
    reservations: [
      {
        tab: "all",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "guestName", title: "Guest Name" },
          { key: "room", title: "Room" },
          { key: "checkIn", title: "Check-in" },
          { key: "checkOut", title: "Check-out" },
          { key: "guests", title: "Guests" },
          { key: "totalPrice", title: "Total Price" },
          { key: "status", title: "Status", translatable: true, namespace: "reservationStatus" },
          { key: "createdAt", title: "Booked On" }
        ],
        data: [
          { id: "RES-1001", guestName: "Aria Rostami", room: "Ocean Dream Suite", checkIn: "2025-06-15", checkOut: "2025-06-18", guests: 2, totalPrice: "16,500,000", status: "confirmed", createdAt: "2025-05-01" },
          { id: "RES-1002", guestName: "Sara Ahmadi", room: "Standard Room", checkIn: "2025-06-20", checkOut: "2025-06-22", guests: 2, totalPrice: "3,600,000", status: "pending", createdAt: "2025-05-15" },
          { id: "RES-1003", guestName: "Kamran Tehrani", room: "Private Villa", checkIn: "2025-06-10", checkOut: "2025-06-15", guests: 4, totalPrice: "62,500,000", status: "confirmed", createdAt: "2025-04-20" },
          { id: "RES-1004", guestName: "Neda Moradi", room: "Standard Room", checkIn: "2025-06-25", checkOut: "2025-06-27", guests: 1, totalPrice: "3,600,000", status: "refused", createdAt: "2025-05-10" },
          { id: "RES-1005", guestName: "Ali Hosseini", room: "Royal Penthouse", checkIn: "2025-07-01", checkOut: "2025-07-05", guests: 4, totalPrice: "74,000,000", status: "cancelled", createdAt: "2025-04-25" },
          { id: "RES-1006", guestName: "Yasaman Nouri", room: "Honeymoon Suite", checkIn: "2025-05-10", checkOut: "2025-05-15", guests: 2, totalPrice: "44,500,000", status: "completed", createdAt: "2025-03-01" },
          { id: "RES-1007", guestName: "Reza Karimi", room: "Ocean Dream Suite", checkIn: "2025-05-20", checkOut: "2025-05-25", guests: 3, totalPrice: "27,500,000", status: "completed", createdAt: "2025-04-01" },
          { id: "RES-1008", guestName: "Mina Shafiei", room: "Standard Plus", checkIn: "2025-07-10", checkOut: "2025-07-12", guests: 2, totalPrice: "4,200,000", status: "pending", createdAt: "2025-05-18" }
        ]
      },
      {
        tab: "pending",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "guestName", title: "Guest Name" },
          { key: "room", title: "Room" },
          { key: "checkIn", title: "Check-in" },
          { key: "checkOut", title: "Check-out" },
          { key: "guests", title: "Guests" },
          { key: "totalPrice", title: "Total Price" },
          { key: "createdAt", title: "Booked On" }
        ],
        data: [
          { id: "RES-1002", guestName: "Sara Ahmadi", room: "Standard Room", checkIn: "2025-06-20", checkOut: "2025-06-22", guests: 2, totalPrice: "3,600,000", createdAt: "2025-05-15" },
          { id: "RES-1008", guestName: "Mina Shafiei", room: "Standard Plus", checkIn: "2025-07-10", checkOut: "2025-07-12", guests: 2, totalPrice: "4,200,000", createdAt: "2025-05-18" },
          { id: "RES-1009", guestName: "Babak Zand", room: "Business Suite", checkIn: "2025-07-15", checkOut: "2025-07-17", guests: 1, totalPrice: "12,400,000", createdAt: "2025-05-20" }
        ]
      },
      {
        tab: "confirmed",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "guestName", title: "Guest Name" },
          { key: "room", title: "Room" },
          { key: "checkIn", title: "Check-in" },
          { key: "checkOut", title: "Check-out" },
          { key: "guests", title: "Guests" },
          { key: "totalPrice", title: "Total Price" }
        ],
        data: [
          { id: "RES-1001", guestName: "Aria Rostami", room: "Ocean Dream Suite", checkIn: "2025-06-15", checkOut: "2025-06-18", guests: 2, totalPrice: "16,500,000" },
          { id: "RES-1003", guestName: "Kamran Tehrani", room: "Private Villa", checkIn: "2025-06-10", checkOut: "2025-06-15", guests: 4, totalPrice: "62,500,000" },
          { id: "RES-1010", guestName: "Leila Farahani", room: "Garden Villa", checkIn: "2025-06-22", checkOut: "2025-06-25", guests: 5, totalPrice: "25,500,000" }
        ]
      },
      {
        tab: "refused",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "guestName", title: "Guest Name" },
          { key: "room", title: "Room" },
          { key: "checkIn", title: "Check-in" },
          { key: "checkOut", title: "Check-out" },
          { key: "reason", title: "Refusal Reason" }
        ],
        data: [
          { id: "RES-1004", guestName: "Neda Moradi", room: "Standard Room", checkIn: "2025-06-25", checkOut: "2025-06-27", reason: "Overbooking" },
          { id: "RES-1011", guestName: "Hossein Parvizi", room: "Ocean Dream Suite", checkIn: "2025-07-05", checkOut: "2025-07-08", reason: "Payment verification failed" },
          { id: "RES-1012", guestName: "Mohsen Alavi", room: "Family Suite", checkIn: "2025-07-12", checkOut: "2025-07-15", reason: "Guest requested cancellation after refusal period" }
        ]
      },
      {
        tab: "cancelled",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "guestName", title: "Guest Name" },
          { key: "room", title: "Room" },
          { key: "checkIn", title: "Check-in" },
          { key: "checkOut", title: "Check-out" },
          { key: "cancelledAt", title: "Cancelled On" }
        ],
        data: [
          { id: "RES-1005", guestName: "Ali Hosseini", room: "Royal Penthouse", checkIn: "2025-07-01", checkOut: "2025-07-05", cancelledAt: "2025-06-01" },
          { id: "RES-1013", guestName: "Shadi Rezaei", room: "Standard Room", checkIn: "2025-06-28", checkOut: "2025-06-30", cancelledAt: "2025-05-25" },
          { id: "RES-1014", guestName: "Navid Shirazi", room: "Honeymoon Suite", checkIn: "2025-07-20", checkOut: "2025-07-25", cancelledAt: "2025-06-10" }
        ]
      },
      {
        tab: "past",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "guestName", title: "Guest Name" },
          { key: "room", title: "Room" },
          { key: "checkIn", title: "Check-in" },
          { key: "checkOut", title: "Check-out" },
          { key: "totalPrice", title: "Total Price" },
          { key: "status", title: "Final Status", translatable: true, namespace: "reservationStatus" }
        ],
        data: [
          { id: "RES-1006", guestName: "Yasaman Nouri", room: "Honeymoon Suite", checkIn: "2025-05-10", checkOut: "2025-05-15", totalPrice: "44,500,000", status: "completed" },
          { id: "RES-1007", guestName: "Reza Karimi", room: "Ocean Dream Suite", checkIn: "2025-05-20", checkOut: "2025-05-25", totalPrice: "27,500,000", status: "completed" },
          { id: "RES-1015", guestName: "Zahra Ebrahimi", room: "Private Villa", checkIn: "2025-04-15", checkOut: "2025-04-20", totalPrice: "62,500,000", status: "completed" }
        ]
      }
    ]
  },
  {
    id: "VND-5445", // Gulf Helicopters - Car Rental
    reservations: [
      {
        tab: "all",
        columns: [
          { key: "id", title: "Booking ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "carModel", title: "Car Model" },
          { key: "pickupDate", title: "Pickup Date" },
          { key: "returnDate", title: "Return Date" },
          { key: "pickupLocation", title: "Pickup Location" },
          { key: "totalPrice", title: "Total Price" },
          { key: "status", title: "Status", translatable: true, namespace: "reservationStatus" },
          { key: "bookedAt", title: "Booked On" }
        ],
        data: [
          { id: "RENT-2001", customerName: "Aria Rostami", carModel: "Toyota Corolla 2023", pickupDate: "2025-06-20", returnDate: "2025-06-25", pickupLocation: "Tehran Office", totalPrice: "4,250,000", status: "confirmed", bookedAt: "2025-05-01" },
          { id: "RENT-2002", customerName: "Sara Ahmadi", carModel: "Hyundai Elantra 2023", pickupDate: "2025-06-22", returnDate: "2025-06-24", pickupLocation: "Airport", totalPrice: "1,560,000", status: "pending", bookedAt: "2025-05-15" },
          { id: "RENT-2003", customerName: "Kamran Tehrani", carModel: "BMW 740i", pickupDate: "2025-06-10", returnDate: "2025-06-15", pickupLocation: "Kish Office", totalPrice: "26,000,000", status: "confirmed", bookedAt: "2025-04-20" },
          { id: "RENT-2004", customerName: "Neda Moradi", carModel: "Haima S5", pickupDate: "2025-06-25", returnDate: "2025-06-27", pickupLocation: "Shiraz Office", totalPrice: "1,300,000", status: "refused", bookedAt: "2025-05-10" },
          { id: "RENT-2005", customerName: "Ali Hosseini", carModel: "Mercedes-Benz S500", pickupDate: "2025-07-01", returnDate: "2025-07-05", pickupLocation: "Airport", totalPrice: "18,000,000", status: "cancelled", bookedAt: "2025-04-25" },
          { id: "RENT-2006", customerName: "Yasaman Nouri", carModel: "Kia Sportage 2023", pickupDate: "2025-05-10", returnDate: "2025-05-15", pickupLocation: "Isfahan Office", totalPrice: "5,500,000", status: "completed", bookedAt: "2025-03-01" },
          { id: "RENT-2007", customerName: "Reza Karimi", carModel: "Honda Civic 2024", pickupDate: "2025-05-20", returnDate: "2025-05-25", pickupLocation: "Mashhad Office", totalPrice: "4,750,000", status: "completed", bookedAt: "2025-04-01" },
          { id: "RENT-2008", customerName: "Mina Shafiei", carModel: "Hyundai Santa Fe 2024", pickupDate: "2025-07-10", returnDate: "2025-07-15", pickupLocation: "Airport", totalPrice: "9,750,000", status: "pending", bookedAt: "2025-05-18" }
        ]
      },
      {
        tab: "pending",
        columns: [
          { key: "id", title: "Booking ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "carModel", title: "Car Model" },
          { key: "pickupDate", title: "Pickup Date" },
          { key: "returnDate", title: "Return Date" },
          { key: "totalPrice", title: "Total Price" },
          { key: "bookedAt", title: "Booked On" }
        ],
        data: [
          { id: "RENT-2002", customerName: "Sara Ahmadi", carModel: "Hyundai Elantra 2023", pickupDate: "2025-06-22", returnDate: "2025-06-24", totalPrice: "1,560,000", bookedAt: "2025-05-15" },
          { id: "RENT-2008", customerName: "Mina Shafiei", carModel: "Hyundai Santa Fe 2024", pickupDate: "2025-07-10", returnDate: "2025-07-15", totalPrice: "9,750,000", bookedAt: "2025-05-18" },
          { id: "RENT-2009", customerName: "Babak Zand", carModel: "Chery Tiggo 8 Pro", pickupDate: "2025-07-12", returnDate: "2025-07-16", totalPrice: "5,800,000", bookedAt: "2025-05-20" }
        ]
      },
      {
        tab: "confirmed",
        columns: [
          { key: "id", title: "Booking ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "carModel", title: "Car Model" },
          { key: "pickupDate", title: "Pickup Date" },
          { key: "returnDate", title: "Return Date" },
          { key: "pickupLocation", title: "Pickup Location" },
          { key: "totalPrice", title: "Total Price" }
        ],
        data: [
          { id: "RENT-2001", customerName: "Aria Rostami", carModel: "Toyota Corolla 2023", pickupDate: "2025-06-20", returnDate: "2025-06-25", pickupLocation: "Tehran Office", totalPrice: "4,250,000" },
          { id: "RENT-2003", customerName: "Kamran Tehrani", carModel: "BMW 740i", pickupDate: "2025-06-10", returnDate: "2025-06-15", pickupLocation: "Kish Office", totalPrice: "26,000,000" },
          { id: "RENT-2010", customerName: "Leila Farahani", carModel: "Mercedes-Benz S500", pickupDate: "2025-06-25", returnDate: "2025-06-30", pickupLocation: "Airport", totalPrice: "22,500,000" }
        ]
      },
      {
        tab: "refused",
        columns: [
          { key: "id", title: "Booking ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "carModel", title: "Car Model" },
          { key: "pickupDate", title: "Pickup Date" },
          { key: "returnDate", title: "Return Date" },
          { key: "reason", title: "Refusal Reason" }
        ],
        data: [
          { id: "RENT-2004", customerName: "Neda Moradi", carModel: "Haima S5", pickupDate: "2025-06-25", returnDate: "2025-06-27", reason: "Driver's license invalid" },
          { id: "RENT-2011", customerName: "Mohsen Tarkash", carModel: "Hyundai Elantra 2023", pickupDate: "2025-07-05", returnDate: "2025-07-08", reason: "Car unavailable" },
          { id: "RENT-2012", customerName: "Leila Rashidi", carModel: "Honda Civic 2024", pickupDate: "2025-07-12", returnDate: "2025-07-15", reason: "Payment failed" }
        ]
      },
      {
        tab: "cancelled",
        columns: [
          { key: "id", title: "Booking ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "carModel", title: "Car Model" },
          { key: "pickupDate", title: "Pickup Date" },
          { key: "returnDate", title: "Return Date" },
          { key: "cancelledAt", title: "Cancelled On" }
        ],
        data: [
          { id: "RENT-2005", customerName: "Ali Hosseini", carModel: "Mercedes-Benz S500", pickupDate: "2025-07-01", returnDate: "2025-07-05", cancelledAt: "2025-06-01" },
          { id: "RENT-2013", customerName: "Hossein Parvizi", carModel: "Kia Sportage 2023", pickupDate: "2025-06-28", returnDate: "2025-06-30", cancelledAt: "2025-05-25" },
          { id: "RENT-2014", customerName: "Navid Shirazi", carModel: "BMW 740i", pickupDate: "2025-07-20", returnDate: "2025-07-25", cancelledAt: "2025-06-10" }
        ]
      },
      {
        tab: "past",
        columns: [
          { key: "id", title: "Booking ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "carModel", title: "Car Model" },
          { key: "pickupDate", title: "Pickup Date" },
          { key: "returnDate", title: "Return Date" },
          { key: "totalPrice", title: "Total Price" }
        ],
        data: [
          { id: "RENT-2006", customerName: "Yasaman Nouri", carModel: "Kia Sportage 2023", pickupDate: "2025-05-10", returnDate: "2025-05-15", totalPrice: "5,500,000" },
          { id: "RENT-2007", customerName: "Reza Karimi", carModel: "Honda Civic 2024", pickupDate: "2025-05-20", returnDate: "2025-05-25", totalPrice: "4,750,000" },
          { id: "RENT-2015", customerName: "Zahra Ebrahimi", carModel: "Mercedes-Benz S500", pickupDate: "2025-04-10", returnDate: "2025-04-15", totalPrice: "22,500,000" }
        ]
      }
    ]
  },
  {
    id: "VND-4545", // Luxe Yacht Charters - Entertainment
    reservations: [
      {
        tab: "all",
        columns: [
          { key: "id", title: "Booking ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "activityName", title: "Activity" },
          { key: "sessionDate", title: "Session Date" },
          { key: "sessionTime", title: "Session Time" },
          { key: "participants", title: "Participants" },
          { key: "totalPrice", title: "Total Price" },
          { key: "status", title: "Status", translatable: true, namespace: "reservationStatus" },
          { key: "bookedAt", title: "Booked On" }
        ],
        data: [
          { id: "ENT-3001", customerName: "Aria Rostami", activityName: "Sunset Yacht Cruise", sessionDate: "2025-06-20", sessionTime: "17:00", participants: 4, totalPrice: "4,800,000", status: "confirmed", bookedAt: "2025-05-01" },
          { id: "ENT-3002", customerName: "Sara Ahmadi", activityName: "Full Day Private Charter", sessionDate: "2025-06-22", sessionTime: "09:00", participants: 8, totalPrice: "15,200,000", status: "pending", bookedAt: "2025-05-15" },
          { id: "ENT-3003", customerName: "Kamran Tehrani", activityName: "Jet Ski Rental", sessionDate: "2025-06-15", sessionTime: "14:00", participants: 2, totalPrice: "700,000", status: "confirmed", bookedAt: "2025-04-20" },
          { id: "ENT-3004", customerName: "Neda Moradi", activityName: "Scuba Diving", sessionDate: "2025-06-25", sessionTime: "10:00", participants: 2, totalPrice: "1,600,000", status: "refused", bookedAt: "2025-05-10" },
          { id: "ENT-3005", customerName: "Ali Hosseini", activityName: "IMAX Cinema Ticket", sessionDate: "2025-07-01", sessionTime: "20:00", participants: 2, totalPrice: "360,000", status: "cancelled", bookedAt: "2025-04-25" },
          { id: "ENT-3006", customerName: "Yasaman Nouri", activityName: "Desert Safari", sessionDate: "2025-05-10", sessionTime: "16:00", participants: 3, totalPrice: "2,550,000", status: "completed", bookedAt: "2025-03-01" },
          { id: "ENT-3007", customerName: "Reza Karimi", activityName: "Water Park Day Pass", sessionDate: "2025-05-20", sessionTime: "10:00", participants: 4, totalPrice: "1,800,000", status: "completed", bookedAt: "2025-04-01" },
          { id: "ENT-3008", customerName: "Mina Shafiei", activityName: "Sunset Yacht Cruise", sessionDate: "2025-07-10", sessionTime: "17:00", participants: 6, totalPrice: "7,200,000", status: "pending", bookedAt: "2025-05-18" }
        ]
      },
      {
        tab: "pending",
        columns: [
          { key: "id", title: "Booking ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "activityName", title: "Activity" },
          { key: "sessionDate", title: "Session Date" },
          { key: "participants", title: "Participants" },
          { key: "totalPrice", title: "Total Price" },
          { key: "bookedAt", title: "Booked On" }
        ],
        data: [
          { id: "ENT-3002", customerName: "Sara Ahmadi", activityName: "Full Day Private Charter", sessionDate: "2025-06-22", participants: 8, totalPrice: "15,200,000", bookedAt: "2025-05-15" },
          { id: "ENT-3008", customerName: "Mina Shafiei", activityName: "Sunset Yacht Cruise", sessionDate: "2025-07-10", participants: 6, totalPrice: "7,200,000", bookedAt: "2025-05-18" },
          { id: "ENT-3009", customerName: "Babak Zand", activityName: "Scuba Diving", sessionDate: "2025-07-12", participants: 4, totalPrice: "3,200,000", bookedAt: "2025-05-20" }
        ]
      },
      {
        tab: "confirmed",
        columns: [
          { key: "id", title: "Booking ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "activityName", title: "Activity" },
          { key: "sessionDate", title: "Session Date" },
          { key: "sessionTime", title: "Session Time" },
          { key: "participants", title: "Participants" },
          { key: "totalPrice", title: "Total Price" }
        ],
        data: [
          { id: "ENT-3001", customerName: "Aria Rostami", activityName: "Sunset Yacht Cruise", sessionDate: "2025-06-20", sessionTime: "17:00", participants: 4, totalPrice: "4,800,000" },
          { id: "ENT-3003", customerName: "Kamran Tehrani", activityName: "Jet Ski Rental", sessionDate: "2025-06-15", sessionTime: "14:00", participants: 2, totalPrice: "700,000" },
          { id: "ENT-3010", customerName: "Leila Farahani", activityName: "Desert Safari", sessionDate: "2025-06-25", sessionTime: "16:00", participants: 5, totalPrice: "4,250,000" }
        ]
      },
      {
        tab: "refused",
        columns: [
          { key: "id", title: "Booking ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "activityName", title: "Activity" },
          { key: "sessionDate", title: "Session Date" },
          { key: "reason", title: "Refusal Reason" }
        ],
        data: [
          { id: "ENT-3004", customerName: "Neda Moradi", activityName: "Scuba Diving", sessionDate: "2025-06-25", reason: "Medical conditions not suitable" },
          { id: "ENT-3011", customerName: "Mohsen Tarkash", activityName: "Sunset Yacht Cruise", sessionDate: "2025-07-05", reason: "Minimum participants not met" },
          { id: "ENT-3012", customerName: "Leila Rashidi", activityName: "Jet Ski Rental", sessionDate: "2025-07-12", reason: "Weather conditions unsafe" }
        ]
      },
      {
        tab: "cancelled",
        columns: [
          { key: "id", title: "Booking ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "activityName", title: "Activity" },
          { key: "sessionDate", title: "Session Date" },
          { key: "cancelledAt", title: "Cancelled On" }
        ],
        data: [
          { id: "ENT-3005", customerName: "Ali Hosseini", activityName: "IMAX Cinema Ticket", sessionDate: "2025-07-01", cancelledAt: "2025-06-01" },
          { id: "ENT-3013", customerName: "Hossein Parvizi", activityName: "Water Park Day Pass", sessionDate: "2025-06-28", cancelledAt: "2025-05-25" },
          { id: "ENT-3014", customerName: "Navid Shirazi", activityName: "Full Day Private Charter", sessionDate: "2025-07-20", cancelledAt: "2025-06-10" }
        ]
      },
      {
        tab: "past",
        columns: [
          { key: "id", title: "Booking ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "activityName", title: "Activity" },
          { key: "sessionDate", title: "Session Date" },
          { key: "participants", title: "Participants" },
          { key: "totalPrice", title: "Total Price" }
        ],
        data: [
          { id: "ENT-3006", customerName: "Yasaman Nouri", activityName: "Desert Safari", sessionDate: "2025-05-10", participants: 3, totalPrice: "2,550,000" },
          { id: "ENT-3007", customerName: "Reza Karimi", activityName: "Water Park Day Pass", sessionDate: "2025-05-20", participants: 4, totalPrice: "1,800,000" },
          { id: "ENT-3015", customerName: "Zahra Ebrahimi", activityName: "Sunset Yacht Cruise", sessionDate: "2025-04-15", participants: 5, totalPrice: "6,000,000" }
        ]
      }
    ]
  },
  {
    id: "VND-5454", // Darvishi Hotel - Accommodation
    reservations: [
      {
        tab: "all",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "guestName", title: "Guest Name" },
          { key: "room", title: "Room" },
          { key: "checkIn", title: "Check-in" },
          { key: "checkOut", title: "Check-out" },
          { key: "guests", title: "Guests" },
          { key: "totalPrice", title: "Total Price" },
          { key: "status", title: "Status", translatable: true, namespace: "reservationStatus" },
          { key: "createdAt", title: "Booked On" }
        ],
        data: [
          { id: "RES-4001", guestName: "Aria Rostami", room: "Classic Villa", checkIn: "2025-06-15", checkOut: "2025-06-18", guests: 3, totalPrice: "25,500,000", status: "confirmed", createdAt: "2025-05-01" },
          { id: "RES-4002", guestName: "Sara Ahmadi", room: "Standard Room", checkIn: "2025-06-20", checkOut: "2025-06-22", guests: 2, totalPrice: "3,600,000", status: "pending", createdAt: "2025-05-15" },
          { id: "RES-4003", guestName: "Kamran Tehrani", room: "Premium Villa", checkIn: "2025-06-10", checkOut: "2025-06-15", guests: 4, totalPrice: "71,000,000", status: "confirmed", createdAt: "2025-04-20" },
          { id: "RES-4004", guestName: "Neda Moradi", room: "Standard Single", checkIn: "2025-06-25", checkOut: "2025-06-27", guests: 1, totalPrice: "2,400,000", status: "refused", createdAt: "2025-05-10" },
          { id: "RES-4005", guestName: "Ali Hosseini", room: "Business Suite", checkIn: "2025-07-01", checkOut: "2025-07-05", guests: 2, totalPrice: "24,800,000", status: "cancelled", createdAt: "2025-04-25" },
          { id: "RES-4006", guestName: "Yasaman Nouri", room: "Family Suite", checkIn: "2025-05-10", checkOut: "2025-05-15", guests: 6, totalPrice: "36,000,000", status: "completed", createdAt: "2025-03-01" },
          { id: "RES-4007", guestName: "Reza Karimi", room: "Standard Triple", checkIn: "2025-05-20", checkOut: "2025-05-25", guests: 3, totalPrice: "11,500,000", status: "completed", createdAt: "2025-04-01" },
          { id: "RES-4008", guestName: "Mina Shafiei", room: "Classic Villa", checkIn: "2025-07-10", checkOut: "2025-07-12", guests: 4, totalPrice: "17,000,000", status: "pending", createdAt: "2025-05-18" }
        ]
      },
      {
        tab: "pending",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "guestName", title: "Guest Name" },
          { key: "room", title: "Room" },
          { key: "checkIn", title: "Check-in" },
          { key: "checkOut", title: "Check-out" },
          { key: "guests", title: "Guests" },
          { key: "totalPrice", title: "Total Price" },
          { key: "createdAt", title: "Booked On" }
        ],
        data: [
          { id: "RES-4002", guestName: "Sara Ahmadi", room: "Standard Room", checkIn: "2025-06-20", checkOut: "2025-06-22", guests: 2, totalPrice: "3,600,000", createdAt: "2025-05-15" },
          { id: "RES-4008", guestName: "Mina Shafiei", room: "Classic Villa", checkIn: "2025-07-10", checkOut: "2025-07-12", guests: 4, totalPrice: "17,000,000", createdAt: "2025-05-18" },
          { id: "RES-4009", guestName: "Babak Zand", room: "Standard Room", checkIn: "2025-07-15", checkOut: "2025-07-17", guests: 2, totalPrice: "3,600,000", createdAt: "2025-05-20" }
        ]
      },
      {
        tab: "confirmed",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "guestName", title: "Guest Name" },
          { key: "room", title: "Room" },
          { key: "checkIn", title: "Check-in" },
          { key: "checkOut", title: "Check-out" },
          { key: "guests", title: "Guests" },
          { key: "totalPrice", title: "Total Price" }
        ],
        data: [
          { id: "RES-4001", guestName: "Aria Rostami", room: "Classic Villa", checkIn: "2025-06-15", checkOut: "2025-06-18", guests: 3, totalPrice: "25,500,000" },
          { id: "RES-4003", guestName: "Kamran Tehrani", room: "Premium Villa", checkIn: "2025-06-10", checkOut: "2025-06-15", guests: 4, totalPrice: "71,000,000" },
          { id: "RES-4010", guestName: "Leila Farahani", room: "Family Suite", checkIn: "2025-06-22", checkOut: "2025-06-25", guests: 5, totalPrice: "36,000,000" }
        ]
      },
      {
        tab: "refused",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "guestName", title: "Guest Name" },
          { key: "room", title: "Room" },
          { key: "checkIn", title: "Check-in" },
          { key: "checkOut", title: "Check-out" },
          { key: "reason", title: "Refusal Reason" }
        ],
        data: [
          { id: "RES-4004", guestName: "Neda Moradi", room: "Standard Single", checkIn: "2025-06-25", checkOut: "2025-06-27", reason: "Overbooking" },
          { id: "RES-4011", guestName: "Mohsen Alavi", room: "Premium Villa", checkIn: "2025-07-05", checkOut: "2025-07-08", reason: "Payment verification failed" },
          { id: "RES-4012", guestName: "Shadi Rezaei", room: "Standard Room", checkIn: "2025-07-12", checkOut: "2025-07-15", reason: "Invalid ID provided" }
        ]
      },
      {
        tab: "cancelled",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "guestName", title: "Guest Name" },
          { key: "room", title: "Room" },
          { key: "checkIn", title: "Check-in" },
          { key: "checkOut", title: "Check-out" },
          { key: "cancelledAt", title: "Cancelled On" }
        ],
        data: [
          { id: "RES-4005", guestName: "Ali Hosseini", room: "Business Suite", checkIn: "2025-07-01", checkOut: "2025-07-05", cancelledAt: "2025-06-01" },
          { id: "RES-4013", guestName: "Hossein Parvizi", room: "Standard Triple", checkIn: "2025-06-28", checkOut: "2025-06-30", cancelledAt: "2025-05-25" },
          { id: "RES-4014", guestName: "Navid Shirazi", room: "Classic Villa", checkIn: "2025-07-20", checkOut: "2025-07-25", cancelledAt: "2025-06-10" }
        ]
      },
      {
        tab: "past",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "guestName", title: "Guest Name" },
          { key: "room", title: "Room" },
          { key: "checkIn", title: "Check-in" },
          { key: "checkOut", title: "Check-out" },
          { key: "totalPrice", title: "Total Price" },
          { key: "status", title: "Final Status", translatable: true, namespace: "reservationStatus" }
        ],
        data: [
          { id: "RES-4006", guestName: "Yasaman Nouri", room: "Family Suite", checkIn: "2025-05-10", checkOut: "2025-05-15", totalPrice: "36,000,000", status: "completed" },
          { id: "RES-4007", guestName: "Reza Karimi", room: "Standard Triple", checkIn: "2025-05-20", checkOut: "2025-05-25", totalPrice: "11,500,000", status: "completed" },
          { id: "RES-4015", guestName: "Zahra Ebrahimi", room: "Premium Villa", checkIn: "2025-04-15", checkOut: "2025-04-20", totalPrice: "71,000,000", status: "completed" }
        ]
      }
    ]
  },
  {
    id: "VND-3001", // Caspian Jet - Restaurant
    reservations: [
      {
        tab: "all",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "tableType", title: "Table Type" },
          { key: "reservationDate", title: "Reservation Date" },
          { key: "reservationTime", title: "Time" },
          { key: "guests", title: "Guests" },
          { key: "specialRequests", title: "Special Requests" },
          { key: "status", title: "Status", translatable: true, namespace: "reservationStatus" },
          { key: "createdAt", title: "Booked On" }
        ],
        data: [
          { id: "RES-5001", customerName: "Aria Rostami", tableType: "VIP", reservationDate: "2025-06-20", reservationTime: "20:00", guests: 4, specialRequests: "Window seat", status: "confirmed", createdAt: "2025-05-01" },
          { id: "RES-5002", customerName: "Sara Ahmadi", tableType: "Private Room", reservationDate: "2025-06-22", reservationTime: "19:30", guests: 8, specialRequests: "Birthday celebration", status: "pending", createdAt: "2025-05-15" },
          { id: "RES-5003", customerName: "Kamran Tehrani", tableType: "Executive VIP", reservationDate: "2025-06-15", reservationTime: "21:00", guests: 6, specialRequests: "Business meeting", status: "confirmed", createdAt: "2025-04-20" },
          { id: "RES-5004", customerName: "Neda Moradi", tableType: "Terrace", reservationDate: "2025-06-25", reservationTime: "13:00", guests: 2, specialRequests: "Vegetarian menu", status: "refused", createdAt: "2025-05-10" },
          { id: "RES-5005", customerName: "Ali Hosseini", tableType: "VIP", reservationDate: "2025-07-01", reservationTime: "20:30", guests: 4, specialRequests: "Anniversary", status: "cancelled", createdAt: "2025-04-25" },
          { id: "RES-5006", customerName: "Yasaman Nouri", tableType: "Small Private Room", reservationDate: "2025-05-10", reservationTime: "19:00", guests: 5, specialRequests: "Family dinner", status: "completed", createdAt: "2025-03-01" },
          { id: "RES-5007", customerName: "Reza Karimi", tableType: "Panoramic Terrace", reservationDate: "2025-05-20", reservationTime: "21:00", guests: 2, specialRequests: "Romantic setup", status: "completed", createdAt: "2025-04-01" },
          { id: "RES-5008", customerName: "Mina Shafiei", tableType: "Family VIP", reservationDate: "2025-07-10", reservationTime: "13:30", guests: 8, specialRequests: "Kids menu", status: "pending", createdAt: "2025-05-18" }
        ]
      },
      {
        tab: "pending",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "tableType", title: "Table Type" },
          { key: "reservationDate", title: "Reservation Date" },
          { key: "reservationTime", title: "Time" },
          { key: "guests", title: "Guests" },
          { key: "specialRequests", title: "Special Requests" },
          { key: "createdAt", title: "Booked On" }
        ],
        data: [
          { id: "RES-5002", customerName: "Sara Ahmadi", tableType: "Private Room", reservationDate: "2025-06-22", reservationTime: "19:30", guests: 8, specialRequests: "Birthday celebration", createdAt: "2025-05-15" },
          { id: "RES-5008", customerName: "Mina Shafiei", tableType: "Family VIP", reservationDate: "2025-07-10", reservationTime: "13:30", guests: 8, specialRequests: "Kids menu", createdAt: "2025-05-18" },
          { id: "RES-5009", customerName: "Babak Zand", tableType: "VIP", reservationDate: "2025-07-12", reservationTime: "20:00", guests: 4, specialRequests: "None", createdAt: "2025-05-20" }
        ]
      },
      {
        tab: "confirmed",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "tableType", title: "Table Type" },
          { key: "reservationDate", title: "Reservation Date" },
          { key: "reservationTime", title: "Time" },
          { key: "guests", title: "Guests" },
          { key: "specialRequests", title: "Special Requests" }
        ],
        data: [
          { id: "RES-5001", customerName: "Aria Rostami", tableType: "VIP", reservationDate: "2025-06-20", reservationTime: "20:00", guests: 4, specialRequests: "Window seat" },
          { id: "RES-5003", customerName: "Kamran Tehrani", tableType: "Executive VIP", reservationDate: "2025-06-15", reservationTime: "21:00", guests: 6, specialRequests: "Business meeting" },
          { id: "RES-5010", customerName: "Leila Farahani", tableType: "Panoramic Terrace", reservationDate: "2025-06-25", reservationTime: "20:30", guests: 4, specialRequests: "Birthday" }
        ]
      },
      {
        tab: "refused",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "tableType", title: "Table Type" },
          { key: "reservationDate", title: "Reservation Date" },
          { key: "reservationTime", title: "Time" },
          { key: "reason", title: "Refusal Reason" }
        ],
        data: [
          { id: "RES-5004", customerName: "Neda Moradi", tableType: "Terrace", reservationDate: "2025-06-25", reservationTime: "13:00", reason: "Terrace closed due to weather" },
          { id: "RES-5011", customerName: "Mohsen Tarkash", tableType: "Private Room", reservationDate: "2025-07-05", reservationTime: "20:00", reason: "Minimum spend not met" },
          { id: "RES-5012", customerName: "Leila Rashidi", tableType: "VIP", reservationDate: "2025-07-12", reservationTime: "21:30", reason: "Overbooking" }
        ]
      },
      {
        tab: "cancelled",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "tableType", title: "Table Type" },
          { key: "reservationDate", title: "Reservation Date" },
          { key: "reservationTime", title: "Time" },
          { key: "cancelledAt", title: "Cancelled On" }
        ],
        data: [
          { id: "RES-5005", customerName: "Ali Hosseini", tableType: "VIP", reservationDate: "2025-07-01", reservationTime: "20:30", cancelledAt: "2025-06-01" },
          { id: "RES-5013", customerName: "Hossein Parvizi", tableType: "Family VIP", reservationDate: "2025-06-28", reservationTime: "19:00", cancelledAt: "2025-05-25" },
          { id: "RES-5014", customerName: "Navid Shirazi", tableType: "Panoramic Terrace", reservationDate: "2025-07-20", reservationTime: "21:00", cancelledAt: "2025-06-10" }
        ]
      },
      {
        tab: "past",
        columns: [
          { key: "id", title: "Reservation ID" },
          { key: "customerName", title: "Customer Name" },
          { key: "tableType", title: "Table Type" },
          { key: "reservationDate", title: "Reservation Date" },
          { key: "reservationTime", title: "Time" },
          { key: "guests", title: "Guests" }
        ],
        data: [
          { id: "RES-5006", customerName: "Yasaman Nouri", tableType: "Small Private Room", reservationDate: "2025-05-10", reservationTime: "19:00", guests: 5 },
          { id: "RES-5007", customerName: "Reza Karimi", tableType: "Panoramic Terrace", reservationDate: "2025-05-20", reservationTime: "21:00", guests: 2 },
          { id: "RES-5015", customerName: "Zahra Ebrahimi", tableType: "Executive VIP", reservationDate: "2025-04-15", reservationTime: "20:00", guests: 8 }
        ]
      }
    ]
  }
];

export const VENDOR_PROFILE_PAYMENTS_MOCK = [
  {
    id: "VND-2345", // Kish Marina Hotel - Accommodation
    payments: [
      {
        tab: "customer_payments",
        columns: [
          { key: "id", title: "Payment ID" },
          { key: "date", title: "Date" },
          { key: "customerName", title: "Customer" },
          { key: "serviceName", title: "Service" },
          { key: "reservationId", title: "Reservation ID" },
          { key: "totalAmount", title: "Total Amount" },
          { key: "commission", title: "Commission" },
          { key: "netAmount", title: "Net to Vendor" },
          { key: "status", title: "Status", translatable: true, namespace: "paymentStatus" },
          { key: "paymentMethod", title: "Payment Method" }
        ],
        data: [
          { id: "PAY-1001", date: "2025-05-01", customerName: "Aria Rostami", serviceName: "Ocean Dream Suite", reservationId: "RES-1001", totalAmount: "16,500,000", commission: "2,475,000", netAmount: "14,025,000", status: "completed", paymentMethod: "Credit Card" },
          { id: "PAY-1002", date: "2025-05-15", customerName: "Sara Ahmadi", serviceName: "Standard Room", reservationId: "RES-1002", totalAmount: "3,600,000", commission: "540,000", netAmount: "3,060,000", status: "pending", paymentMethod: "Online Banking" },
          { id: "PAY-1003", date: "2025-04-20", customerName: "Kamran Tehrani", serviceName: "Private Villa", reservationId: "RES-1003", totalAmount: "62,500,000", commission: "9,375,000", netAmount: "53,125,000", status: "completed", paymentMethod: "Wallet" },
          { id: "PAY-1004", date: "2025-05-10", customerName: "Neda Moradi", serviceName: "Standard Room", reservationId: "RES-1004", totalAmount: "3,600,000", commission: "540,000", netAmount: "3,060,000", status: "refunded", paymentMethod: "Credit Card" },
          { id: "PAY-1005", date: "2025-04-25", customerName: "Ali Hosseini", serviceName: "Royal Penthouse", reservationId: "RES-1005", totalAmount: "74,000,000", commission: "11,100,000", netAmount: "62,900,000", status: "failed", paymentMethod: "Online Banking" },
          { id: "PAY-1006", date: "2025-03-01", customerName: "Yasaman Nouri", serviceName: "Honeymoon Suite", reservationId: "RES-1006", totalAmount: "44,500,000", commission: "6,675,000", netAmount: "37,825,000", status: "completed", paymentMethod: "Credit Card" },
          { id: "PAY-1007", date: "2025-04-01", customerName: "Reza Karimi", serviceName: "Ocean Dream Suite", reservationId: "RES-1007", totalAmount: "27,500,000", commission: "4,125,000", netAmount: "23,375,000", status: "completed", paymentMethod: "Wallet" },
          { id: "PAY-1008", date: "2025-05-18", customerName: "Mina Shafiei", serviceName: "Standard Plus", reservationId: "RES-1008", totalAmount: "4,200,000", commission: "630,000", netAmount: "3,570,000", status: "pending", paymentMethod: "Credit Card" }
        ]
      },
      {
        tab: "vendor_settlements",
        columns: [
          { key: "id", title: "Settlement ID" },
          { key: "settlementDate", title: "Settlement Date" },
          { key: "periodStart", title: "Period Start" },
          { key: "periodEnd", title: "Period End" },
          { key: "totalReservations", title: "Total Reservations" },
          { key: "totalAmount", title: "Total Amount" },
          { key: "totalCommission", title: "Total Commission" },
          { key: "netPayout", title: "Net Payout" },
          { key: "status", title: "Status", translatable: true, namespace: "settlementStatus" },
          { key: "paymentMethod", title: "Payment Method" }
        ],
        data: [
          { id: "SET-1001", settlementDate: "2025-04-05", periodStart: "2025-03-01", periodEnd: "2025-03-31", totalReservations: 8, totalAmount: "187,500,000", totalCommission: "28,125,000", netPayout: "159,375,000", status: "paid", paymentMethod: "Bank Transfer" },
          { id: "SET-1002", settlementDate: "2025-05-05", periodStart: "2025-04-01", periodEnd: "2025-04-30", totalReservations: 12, totalAmount: "312,800,000", totalCommission: "46,920,000", netPayout: "265,880,000", status: "processing", paymentMethod: "Bank Transfer" },
          { id: "SET-1003", settlementDate: null, periodStart: "2025-05-01", periodEnd: "2025-05-31", totalReservations: 5, totalAmount: "94,800,000", totalCommission: "14,220,000", netPayout: "80,580,000", status: "pending", paymentMethod: null },
          { id: "SET-1004", settlementDate: "2025-03-05", periodStart: "2025-02-01", periodEnd: "2025-02-28", totalReservations: 6, totalAmount: "142,000,000", totalCommission: "21,300,000", netPayout: "120,700,000", status: "paid", paymentMethod: "Card to Card" }
        ]
      }
    ]
  },
  {
    id: "VND-5445", // Gulf Helicopters - Car Rental
    payments: [
      {
        tab: "customer_payments",
        columns: [
          { key: "id", title: "Payment ID" },
          { key: "date", title: "Date" },
          { key: "customerName", title: "Customer" },
          { key: "serviceName", title: "Service" },
          { key: "reservationId", title: "Reservation ID" },
          { key: "totalAmount", title: "Total Amount" },
          { key: "commission", title: "Commission" },
          { key: "netAmount", title: "Net to Vendor" },
          { key: "status", title: "Status", translatable: true, namespace: "paymentStatus" },
          { key: "paymentMethod", title: "Payment Method" }
        ],
        data: [
          { id: "PAY-2001", date: "2025-05-01", customerName: "Aria Rostami", serviceName: "Toyota Corolla 2023", reservationId: "RENT-2001", totalAmount: "4,250,000", commission: "425,000", netAmount: "3,825,000", status: "completed", paymentMethod: "Credit Card" },
          { id: "PAY-2002", date: "2025-05-15", customerName: "Sara Ahmadi", serviceName: "Hyundai Elantra 2023", reservationId: "RENT-2002", totalAmount: "1,560,000", commission: "156,000", netAmount: "1,404,000", status: "pending", paymentMethod: "Online Banking" },
          { id: "PAY-2003", date: "2025-04-20", customerName: "Kamran Tehrani", serviceName: "BMW 740i", reservationId: "RENT-2003", totalAmount: "26,000,000", commission: "2,600,000", netAmount: "23,400,000", status: "completed", paymentMethod: "Wallet" },
          { id: "PAY-2004", date: "2025-05-10", customerName: "Neda Moradi", serviceName: "Haima S5", reservationId: "RENT-2004", totalAmount: "1,300,000", commission: "130,000", netAmount: "1,170,000", status: "refunded", paymentMethod: "Credit Card" },
          { id: "PAY-2005", date: "2025-04-25", customerName: "Ali Hosseini", serviceName: "Mercedes-Benz S500", reservationId: "RENT-2005", totalAmount: "18,000,000", commission: "1,800,000", netAmount: "16,200,000", status: "failed", paymentMethod: "Online Banking" },
          { id: "PAY-2006", date: "2025-03-01", customerName: "Yasaman Nouri", serviceName: "Kia Sportage 2023", reservationId: "RENT-2006", totalAmount: "5,500,000", commission: "550,000", netAmount: "4,950,000", status: "completed", paymentMethod: "Credit Card" },
          { id: "PAY-2007", date: "2025-04-01", customerName: "Reza Karimi", serviceName: "Honda Civic 2024", reservationId: "RENT-2007", totalAmount: "4,750,000", commission: "475,000", netAmount: "4,275,000", status: "completed", paymentMethod: "Wallet" },
          { id: "PAY-2008", date: "2025-05-18", customerName: "Mina Shafiei", serviceName: "Hyundai Santa Fe 2024", reservationId: "RENT-2008", totalAmount: "9,750,000", commission: "975,000", netAmount: "8,775,000", status: "pending", paymentMethod: "Credit Card" }
        ]
      },
      {
        tab: "vendor_settlements",
        columns: [
          { key: "id", title: "Settlement ID" },
          { key: "settlementDate", title: "Settlement Date" },
          { key: "periodStart", title: "Period Start" },
          { key: "periodEnd", title: "Period End" },
          { key: "totalReservations", title: "Total Reservations" },
          { key: "totalAmount", title: "Total Amount" },
          { key: "totalCommission", title: "Total Commission" },
          { key: "netPayout", title: "Net Payout" },
          { key: "status", title: "Status", translatable: true, namespace: "settlementStatus" },
          { key: "paymentMethod", title: "Payment Method" }
        ],
        data: [
          { id: "SET-2001", settlementDate: "2025-04-05", periodStart: "2025-03-01", periodEnd: "2025-03-31", totalReservations: 15, totalAmount: "95,500,000", totalCommission: "9,550,000", netPayout: "85,950,000", status: "paid", paymentMethod: "Bank Transfer" },
          { id: "SET-2002", settlementDate: "2025-05-05", periodStart: "2025-04-01", periodEnd: "2025-04-30", totalReservations: 12, totalAmount: "82,300,000", totalCommission: "8,230,000", netPayout: "74,070,000", status: "processing", paymentMethod: "Bank Transfer" },
          { id: "SET-2003", settlementDate: null, periodStart: "2025-05-01", periodEnd: "2025-05-31", totalReservations: 6, totalAmount: "48,500,000", totalCommission: "4,850,000", netPayout: "43,650,000", status: "pending", paymentMethod: null }
        ]
      }
    ]
  },
  {
    id: "VND-4545", // Luxe Yacht Charters - Entertainment
    payments: [
      {
        tab: "customer_payments",
        columns: [
          { key: "id", title: "Payment ID" },
          { key: "date", title: "Date" },
          { key: "customerName", title: "Customer" },
          { key: "serviceName", title: "Service" },
          { key: "reservationId", title: "Reservation ID" },
          { key: "totalAmount", title: "Total Amount" },
          { key: "commission", title: "Commission" },
          { key: "netAmount", title: "Net to Vendor" },
          { key: "status", title: "Status", translatable: true, namespace: "paymentStatus" },
          { key: "paymentMethod", title: "Payment Method" }
        ],
        data: [
          { id: "PAY-3001", date: "2025-05-01", customerName: "Aria Rostami", serviceName: "Sunset Yacht Cruise", reservationId: "ENT-3001", totalAmount: "4,800,000", commission: "960,000", netAmount: "3,840,000", status: "completed", paymentMethod: "Credit Card" },
          { id: "PAY-3002", date: "2025-05-15", customerName: "Sara Ahmadi", serviceName: "Full Day Private Charter", reservationId: "ENT-3002", totalAmount: "15,200,000", commission: "3,040,000", netAmount: "12,160,000", status: "pending", paymentMethod: "Online Banking" },
          { id: "PAY-3003", date: "2025-04-20", customerName: "Kamran Tehrani", serviceName: "Jet Ski Rental", reservationId: "ENT-3003", totalAmount: "700,000", commission: "140,000", netAmount: "560,000", status: "completed", paymentMethod: "Wallet" },
          { id: "PAY-3004", date: "2025-05-10", customerName: "Neda Moradi", serviceName: "Scuba Diving", reservationId: "ENT-3004", totalAmount: "1,600,000", commission: "320,000", netAmount: "1,280,000", status: "refunded", paymentMethod: "Credit Card" },
          { id: "PAY-3005", date: "2025-04-25", customerName: "Ali Hosseini", serviceName: "IMAX Cinema Ticket", reservationId: "ENT-3005", totalAmount: "360,000", commission: "72,000", netAmount: "288,000", status: "failed", paymentMethod: "Online Banking" },
          { id: "PAY-3006", date: "2025-03-01", customerName: "Yasaman Nouri", serviceName: "Desert Safari", reservationId: "ENT-3006", totalAmount: "2,550,000", commission: "510,000", netAmount: "2,040,000", status: "completed", paymentMethod: "Credit Card" },
          { id: "PAY-3007", date: "2025-04-01", customerName: "Reza Karimi", serviceName: "Water Park Day Pass", reservationId: "ENT-3007", totalAmount: "1,800,000", commission: "360,000", netAmount: "1,440,000", status: "completed", paymentMethod: "Wallet" },
          { id: "PAY-3008", date: "2025-05-18", customerName: "Mina Shafiei", serviceName: "Sunset Yacht Cruise", reservationId: "ENT-3008", totalAmount: "7,200,000", commission: "1,440,000", netAmount: "5,760,000", status: "pending", paymentMethod: "Credit Card" }
        ]
      },
      {
        tab: "vendor_settlements",
        columns: [
          { key: "id", title: "Settlement ID" },
          { key: "settlementDate", title: "Settlement Date" },
          { key: "periodStart", title: "Period Start" },
          { key: "periodEnd", title: "Period End" },
          { key: "totalReservations", title: "Total Reservations" },
          { key: "totalAmount", title: "Total Amount" },
          { key: "totalCommission", title: "Total Commission" },
          { key: "netPayout", title: "Net Payout" },
          { key: "status", title: "Status", translatable: true, namespace: "settlementStatus" },
          { key: "paymentMethod", title: "Payment Method" }
        ],
        data: [
          { id: "SET-3001", settlementDate: "2025-04-05", periodStart: "2025-03-01", periodEnd: "2025-03-31", totalReservations: 12, totalAmount: "28,500,000", totalCommission: "5,700,000", netPayout: "22,800,000", status: "paid", paymentMethod: "Bank Transfer" },
          { id: "SET-3002", settlementDate: null, periodStart: "2025-04-01", periodEnd: "2025-04-30", totalReservations: 10, totalAmount: "32,800,000", totalCommission: "6,560,000", netPayout: "26,240,000", status: "pending", paymentMethod: null },
          { id: "SET-3003", settlementDate: "2025-05-10", periodStart: "2025-05-01", periodEnd: "2025-05-31", totalReservations: 4, totalAmount: "12,700,000", totalCommission: "2,540,000", netPayout: "10,160,000", status: "processing", paymentMethod: "Bank Transfer" }
        ]
      }
    ]
  },
  {
    id: "VND-5454", // Darvishi Hotel - Accommodation
    payments: [
      {
        tab: "customer_payments",
        columns: [
          { key: "id", title: "Payment ID" },
          { key: "date", title: "Date" },
          { key: "customerName", title: "Customer" },
          { key: "serviceName", title: "Service" },
          { key: "reservationId", title: "Reservation ID" },
          { key: "totalAmount", title: "Total Amount" },
          { key: "commission", title: "Commission" },
          { key: "netAmount", title: "Net to Vendor" },
          { key: "status", title: "Status", translatable: true, namespace: "paymentStatus" },
          { key: "paymentMethod", title: "Payment Method" }
        ],
        data: [
          { id: "PAY-4001", date: "2025-05-01", customerName: "Aria Rostami", serviceName: "Classic Villa", reservationId: "RES-4001", totalAmount: "25,500,000", commission: "3,060,000", netAmount: "22,440,000", status: "completed", paymentMethod: "Credit Card" },
          { id: "PAY-4002", date: "2025-05-15", customerName: "Sara Ahmadi", serviceName: "Standard Room", reservationId: "RES-4002", totalAmount: "3,600,000", commission: "432,000", netAmount: "3,168,000", status: "pending", paymentMethod: "Online Banking" },
          { id: "PAY-4003", date: "2025-04-20", customerName: "Kamran Tehrani", serviceName: "Premium Villa", reservationId: "RES-4003", totalAmount: "71,000,000", commission: "8,520,000", netAmount: "62,480,000", status: "completed", paymentMethod: "Wallet" },
          { id: "PAY-4004", date: "2025-05-10", customerName: "Neda Moradi", serviceName: "Standard Single", reservationId: "RES-4004", totalAmount: "2,400,000", commission: "288,000", netAmount: "2,112,000", status: "refunded", paymentMethod: "Credit Card" },
          { id: "PAY-4005", date: "2025-04-25", customerName: "Ali Hosseini", serviceName: "Business Suite", reservationId: "RES-4005", totalAmount: "24,800,000", commission: "2,976,000", netAmount: "21,824,000", status: "failed", paymentMethod: "Online Banking" },
          { id: "PAY-4006", date: "2025-03-01", customerName: "Yasaman Nouri", serviceName: "Family Suite", reservationId: "RES-4006", totalAmount: "36,000,000", commission: "4,320,000", netAmount: "31,680,000", status: "completed", paymentMethod: "Credit Card" },
          { id: "PAY-4007", date: "2025-04-01", customerName: "Reza Karimi", serviceName: "Standard Triple", reservationId: "RES-4007", totalAmount: "11,500,000", commission: "1,380,000", netAmount: "10,120,000", status: "completed", paymentMethod: "Wallet" },
          { id: "PAY-4008", date: "2025-05-18", customerName: "Mina Shafiei", serviceName: "Classic Villa", reservationId: "RES-4008", totalAmount: "17,000,000", commission: "2,040,000", netAmount: "14,960,000", status: "pending", paymentMethod: "Credit Card" }
        ]
      },
      {
        tab: "vendor_settlements",
        columns: [
          { key: "id", title: "Settlement ID" },
          { key: "settlementDate", title: "Settlement Date" },
          { key: "periodStart", title: "Period Start" },
          { key: "periodEnd", title: "Period End" },
          { key: "totalReservations", title: "Total Reservations" },
          { key: "totalAmount", title: "Total Amount" },
          { key: "totalCommission", title: "Total Commission" },
          { key: "netPayout", title: "Net Payout" },
          { key: "status", title: "Status", translatable: true, namespace: "settlementStatus" },
          { key: "paymentMethod", title: "Payment Method" }
        ],
        data: [
          { id: "SET-4001", settlementDate: "2025-04-05", periodStart: "2025-03-01", periodEnd: "2025-03-31", totalReservations: 10, totalAmount: "185,000,000", totalCommission: "22,200,000", netPayout: "162,800,000", status: "paid", paymentMethod: "Bank Transfer" },
          { id: "SET-4002", settlementDate: "2025-05-05", periodStart: "2025-04-01", periodEnd: "2025-04-30", totalReservations: 14, totalAmount: "210,500,000", totalCommission: "25,260,000", netPayout: "185,240,000", status: "processing", paymentMethod: "Bank Transfer" },
          { id: "SET-4003", settlementDate: null, periodStart: "2025-05-01", periodEnd: "2025-05-31", totalReservations: 6, totalAmount: "88,700,000", totalCommission: "10,644,000", netPayout: "78,056,000", status: "pending", paymentMethod: null }
        ]
      }
    ]
  },
  {
    id: "VND-3001", // Caspian Jet - Restaurant
    payments: [
      {
        tab: "customer_payments",
        columns: [
          { key: "id", title: "Payment ID" },
          { key: "date", title: "Date" },
          { key: "customerName", title: "Customer" },
          { key: "serviceName", title: "Service" },
          { key: "reservationId", title: "Reservation ID" },
          { key: "totalAmount", title: "Total Amount" },
          { key: "commission", title: "Commission" },
          { key: "netAmount", title: "Net to Vendor" },
          { key: "status", title: "Status", translatable: true, namespace: "paymentStatus" },
          { key: "paymentMethod", title: "Payment Method" }
        ],
        data: [
          { id: "PAY-5001", date: "2025-05-01", customerName: "Aria Rostami", serviceName: "VIP Table", reservationId: "RES-5001", totalAmount: "2,800,000", commission: "280,000", netAmount: "2,520,000", status: "completed", paymentMethod: "Credit Card" },
          { id: "PAY-5002", date: "2025-05-15", customerName: "Sara Ahmadi", serviceName: "Private Room", reservationId: "RES-5002", totalAmount: "4,500,000", commission: "450,000", netAmount: "4,050,000", status: "pending", paymentMethod: "Online Banking" },
          { id: "PAY-5003", date: "2025-04-20", customerName: "Kamran Tehrani", serviceName: "Executive VIP", reservationId: "RES-5003", totalAmount: "3,200,000", commission: "320,000", netAmount: "2,880,000", status: "completed", paymentMethod: "Wallet" },
          { id: "PAY-5004", date: "2025-05-10", customerName: "Neda Moradi", serviceName: "Terrace", reservationId: "RES-5004", totalAmount: "1,200,000", commission: "120,000", netAmount: "1,080,000", status: "refunded", paymentMethod: "Credit Card" },
          { id: "PAY-5005", date: "2025-04-25", customerName: "Ali Hosseini", serviceName: "VIP Table", reservationId: "RES-5005", totalAmount: "2,800,000", commission: "280,000", netAmount: "2,520,000", status: "failed", paymentMethod: "Online Banking" },
          { id: "PAY-5006", date: "2025-03-01", customerName: "Yasaman Nouri", serviceName: "Small Private Room", reservationId: "RES-5006", totalAmount: "2,500,000", commission: "250,000", netAmount: "2,250,000", status: "completed", paymentMethod: "Credit Card" },
          { id: "PAY-5007", date: "2025-04-01", customerName: "Reza Karimi", serviceName: "Panoramic Terrace", reservationId: "RES-5007", totalAmount: "1,800,000", commission: "180,000", netAmount: "1,620,000", status: "completed", paymentMethod: "Wallet" },
          { id: "PAY-5008", date: "2025-05-18", customerName: "Mina Shafiei", serviceName: "Family VIP", reservationId: "RES-5008", totalAmount: "3,500,000", commission: "350,000", netAmount: "3,150,000", status: "pending", paymentMethod: "Credit Card" }
        ]
      },
      {
        tab: "vendor_settlements",
        columns: [
          { key: "id", title: "Settlement ID" },
          { key: "settlementDate", title: "Settlement Date" },
          { key: "periodStart", title: "Period Start" },
          { key: "periodEnd", title: "Period End" },
          { key: "totalReservations", title: "Total Reservations" },
          { key: "totalAmount", title: "Total Amount" },
          { key: "totalCommission", title: "Total Commission" },
          { key: "netPayout", title: "Net Payout" },
          { key: "status", title: "Status", translatable: true, namespace: "settlementStatus" },
          { key: "paymentMethod", title: "Payment Method" }
        ],
        data: [
          { id: "SET-5001", settlementDate: "2025-04-05", periodStart: "2025-03-01", periodEnd: "2025-03-31", totalReservations: 25, totalAmount: "62,500,000", totalCommission: "6,250,000", netPayout: "56,250,000", status: "paid", paymentMethod: "Bank Transfer" },
          { id: "SET-5002", settlementDate: null, periodStart: "2025-04-01", periodEnd: "2025-04-30", totalReservations: 20, totalAmount: "55,800,000", totalCommission: "5,580,000", netPayout: "50,220,000", status: "pending", paymentMethod: null },
          { id: "SET-5003", settlementDate: "2025-05-10", periodStart: "2025-05-01", periodEnd: "2025-05-31", totalReservations: 8, totalAmount: "24,500,000", totalCommission: "2,450,000", netPayout: "22,050,000", status: "processing", paymentMethod: "Card to Card" }
        ]
      }
    ]
  }
];

export const VENDOR_PROFILE_HISTORY_MOCK = [
  {
    id: "VND-2345", // Kish Marina Hotel
    history: {
      tab: "all",
      columns: [
        { key: "id", title: "Log ID" },
        { key: "date", title: "Date & Time" },
        { key: "adminName", title: "Admin Name" },
        { key: "adminRole", title: "Admin Role", translatable: true, namespace: "adminsRole" },
        { key: "type", title: "Action Type", translatable: true, namespace: "historyTypes" },
        { key: "severity", title: "Severity", translatable: true, namespace: "severity" },
        { key: "ip", title: "IP Address" },
        { key: "desc", title: "Description" },
        { key: "targetType", title: "Target Type" },
        { key: "targetId", title: "Target ID" }
      ],
      data: [
        {
          id: "LOG-1001",
          date: "2025-05-20 09:15:00",
          adminId: "ADM-101",
          adminName: "Neda Karimi",
          adminRole: "reception",
          type: "reservation_status_change",
          severity: "info",
          ip: "192.168.1.45",
          desc: "Changed reservation RES-1001 status from 'pending' to 'confirmed'",
          targetType: "reservation",
          targetId: "RES-1001"
        },
        {
          id: "LOG-1002",
          date: "2025-05-20 10:30:00",
          adminId: "ADM-102",
          adminName: "Saman Tehrani",
          adminRole: "reception",
          type: "customer_check_in",
          severity: "info",
          ip: "192.168.1.46",
          desc: "Checked in guest Aria Rostami to room Ocean Dream Suite",
          targetType: "reservation",
          targetId: "RES-1001"
        },
        {
          id: "LOG-1003",
          date: "2025-05-19 14:20:00",
          adminId: "ADM-201",
          adminName: "Mahsa Rafiei",
          adminRole: "finance_manager",
          type: "price_update",
          severity: "warning",
          ip: "192.168.1.50",
          desc: "Updated price of 'Royal Penthouse' from 16,500,000 to 18,500,000",
          targetType: "product",
          targetId: "PRD-ACC-004",
          changes: { oldValue: "16,500,000", newValue: "18,500,000" }
        },
        {
          id: "LOG-1004",
          date: "2025-05-19 11:45:00",
          adminId: "ADM-101",
          adminName: "Neda Karimi",
          adminRole: "reception",
          type: "reservation_cancellation",
          severity: "warning",
          ip: "192.168.1.45",
          desc: "Cancelled reservation RES-1012 by customer request",
          targetType: "reservation",
          targetId: "RES-1012"
        },
        {
          id: "LOG-1005",
          date: "2025-05-18 08:30:00",
          adminId: "ADM-301",
          adminName: "Reza Mohammadi",
          adminRole: "operation_manager",
          type: "login_success",
          severity: "info",
          ip: "10.0.0.15",
          desc: "Logged in successfully from Chrome/Windows",
          targetType: "user",
          targetId: "ADM-301"
        },
        {
          id: "LOG-1006",
          date: "2025-05-17 16:20:00",
          adminId: "ADM-302",
          adminName: "Sara Ebrahimi",
          adminRole: "shift_supervisor",
          type: "inventory_update",
          severity: "info",
          ip: "192.168.1.60",
          desc: "Updated room status: Room 205 marked as 'maintenance'",
          targetType: "inventory",
          targetId: "RM-205"
        },
        {
          id: "LOG-1007",
          date: "2025-05-17 09:00:00",
          adminId: "ADM-201",
          adminName: "Mahsa Rafiei",
          adminRole: "finance_manager",
          type: "commission_rate_change",
          severity: "critical",
          ip: "192.168.1.50",
          desc: "Changed commission rate from 15% to 12%",
          targetType: "vendor",
          targetId: "VND-2345"
        },
        {
          id: "LOG-1008",
          date: "2025-05-16 22:15:00",
          adminId: "ADM-302",
          adminName: "Sara Ebrahimi",
          adminRole: "shift_supervisor",
          type: "logout",
          severity: "info",
          ip: "192.168.1.60",
          desc: "Logged out from system",
          targetType: "user",
          targetId: "ADM-302"
        },
        {
          id: "LOG-1009",
          date: "2025-05-16 14:00:00",
          adminId: "ADM-103",
          adminName: "Laleh Ahmadi",
          adminRole: "reception_trainee",
          type: "failed_login",
          severity: "warning",
          ip: "192.168.1.47",
          desc: "Failed login attempt - incorrect password",
          targetType: "user",
          targetId: "ADM-103"
        },
        {
          id: "LOG-1010",
          date: "2025-05-15 11:30:00",
          adminId: "ADM-301",
          adminName: "Reza Mohammadi",
          adminRole: "operation_manager",
          type: "product_creation",
          severity: "info",
          ip: "10.0.0.15",
          desc: "Added new product 'Deluxe Family Room'",
          targetType: "product",
          targetId: "PRD-ACC-016"
        },
        {
          id: "LOG-1011",
          date: "2025-05-14 09:45:00",
          adminId: "ADM-101",
          adminName: "Neda Karimi",
          adminRole: "reception",
          type: "customer_check_out",
          severity: "info",
          ip: "192.168.1.45",
          desc: "Checked out guest Kamran Tehrani from room Private Villa",
          targetType: "reservation",
          targetId: "RES-1003"
        },
        {
          id: "LOG-1012",
          date: "2025-05-13 15:20:00",
          adminId: "ADM-202",
          adminName: "Ali Nikfar",
          adminRole: "accountant",
          type: "invoice_generated",
          severity: "info",
          ip: "192.168.1.51",
          desc: "Generated monthly invoice for March 2025",
          targetType: "invoice",
          targetId: "INV-2025-03"
        }
      ]
    }
  },
  {
    id: "VND-5445", // Gulf Helicopters
    history: {
      tab: "all",
      columns: [
        { key: "id", title: "Log ID" },
        { key: "date", title: "Date & Time" },
        { key: "adminName", title: "Admin Name" },
        { key: "adminRole", title: "Admin Role", translatable: true, namespace: "adminsRole" },
        { key: "type", title: "Action Type", translatable: true, namespace: "historyTypes" },
        { key: "severity", title: "Severity", translatable: true, namespace: "severity" },
        { key: "ip", title: "IP Address" },
        { key: "desc", title: "Description" },
        { key: "targetType", title: "Target Type" },
        { key: "targetId", title: "Target ID" }
      ],
      data: [
        {
          id: "LOG-2001",
          date: "2025-05-20 08:00:00",
          adminId: "ADM-210",
          adminName: "Captain Mahmoud Salimi",
          adminRole: "chief_pilot",
          type: "login_success",
          severity: "info",
          ip: "10.0.0.20",
          desc: "Logged in successfully from Safari/Mac",
          targetType: "user",
          targetId: "ADM-210"
        },
        {
          id: "LOG-2002",
          date: "2025-05-19 17:30:00",
          adminId: "ADM-211",
          adminName: "Farhad Jalili",
          adminRole: "dispatcher",
          type: "reservation_status_change",
          severity: "info",
          ip: "192.168.2.30",
          desc: "Changed flight reservation RENT-2001 status from 'pending' to 'confirmed'",
          targetType: "reservation",
          targetId: "RENT-2001"
        },
        {
          id: "LOG-2003",
          date: "2025-05-19 10:15:00",
          adminId: "ADM-212",
          adminName: "Nasrin Akbari",
          adminRole: "maintenance_engineer",
          type: "maintenance_record",
          severity: "warning",
          ip: "192.168.2.31",
          desc: "Scheduled maintenance for helicopter Bell 429 on 2025-05-25",
          targetType: "asset",
          targetId: "AST-429"
        },
        {
          id: "LOG-2004",
          date: "2025-05-18 14:00:00",
          adminId: "ADM-110",
          adminName: "Zahra Moradi",
          adminRole: "reception",
          type: "price_update",
          severity: "info",
          ip: "192.168.2.10",
          desc: "Updated price of 'Toyota Corolla 2023' from 780,000 to 850,000",
          targetType: "product",
          targetId: "PRD-CAR-001"
        },
        {
          id: "LOG-2005",
          date: "2025-05-17 09:30:00",
          adminId: "ADM-210",
          adminName: "Captain Mahmoud Salimi",
          adminRole: "chief_pilot",
          type: "logout",
          severity: "info",
          ip: "10.0.0.20",
          desc: "Logged out from system",
          targetType: "user",
          targetId: "ADM-210"
        },
        {
          id: "LOG-2006",
          date: "2025-05-16 20:00:00",
          adminId: "ADM-211",
          adminName: "Farhad Jalili",
          adminRole: "dispatcher",
          type: "failed_login",
          severity: "warning",
          ip: "192.168.2.30",
          desc: "Failed login attempt - account locked after 3 attempts",
          targetType: "user",
          targetId: "ADM-211"
        }
      ]
    }
  },
  {
    id: "VND-4545", // Luxe Yacht Charters
    history: {
      tab: "all",
      columns: [
        { key: "id", title: "Log ID" },
        { key: "date", title: "Date & Time" },
        { key: "adminName", title: "Admin Name" },
        { key: "adminRole", title: "Admin Role", translatable: true, namespace: "adminsRole" },
        { key: "type", title: "Action Type", translatable: true, namespace: "historyTypes" },
        { key: "severity", title: "Severity", translatable: true, namespace: "severity" },
        { key: "ip", title: "IP Address" },
        { key: "desc", title: "Description" },
        { key: "targetType", title: "Target Type" },
        { key: "targetId", title: "Target ID" }
      ],
      data: [
        {
          id: "LOG-3001",
          date: "2025-05-20 11:00:00",
          adminId: "ADM-401",
          adminName: "Nima Akhavan",
          adminRole: "fleet_manager",
          type: "login_success",
          severity: "info",
          ip: "192.168.3.10",
          desc: "Logged in successfully from Chrome/Windows",
          targetType: "user",
          targetId: "ADM-401"
        },
        {
          id: "LOG-3002",
          date: "2025-05-19 15:45:00",
          adminId: "ADM-402",
          adminName: "Maryam Noori",
          adminRole: "booking_specialist",
          type: "reservation_creation",
          severity: "info",
          ip: "192.168.3.11",
          desc: "Created new booking ENT-3010 for customer Leila Farahani",
          targetType: "reservation",
          targetId: "ENT-3010"
        },
        {
          id: "LOG-3003",
          date: "2025-05-18 09:20:00",
          adminId: "ADM-403",
          adminName: "Omid Rezaei",
          adminRole: "customer_relations",
          type: "complaint_registered",
          severity: "critical",
          ip: "192.168.3.12",
          desc: "Registered customer complaint regarding Jet Ski service",
          targetType: "reservation",
          targetId: "ENT-3003"
        },
        {
          id: "LOG-3004",
          date: "2025-05-17 13:00:00",
          adminId: "ADM-401",
          adminName: "Nima Akhavan",
          adminRole: "fleet_manager",
          type: "maintenance_record",
          severity: "warning",
          ip: "192.168.3.10",
          desc: "Yacht 'Luxe Star' scheduled for annual maintenance",
          targetType: "asset",
          targetId: "YHT-001"
        }
      ]
    }
  },
  {
    id: "VND-5454", // Darvishi Hotel
    history: {
      tab: "all",
      columns: [
        { key: "id", title: "Log ID" },
        { key: "date", title: "Date & Time" },
        { key: "adminName", title: "Admin Name" },
        { key: "adminRole", title: "Admin Role", translatable: true, namespace: "adminsRole" },
        { key: "type", title: "Action Type", translatable: true, namespace: "historyTypes" },
        { key: "severity", title: "Severity", translatable: true, namespace: "severity" },
        { key: "ip", title: "IP Address" },
        { key: "desc", title: "Description" },
        { key: "targetType", title: "Target Type" },
        { key: "targetId", title: "Target ID" }
      ],
      data: [
        {
          id: "LOG-4001",
          date: "2025-05-20 07:30:00",
          adminId: "ADM-501",
          adminName: "Shadi Pakzad",
          adminRole: "reservation_head",
          type: "login_success",
          severity: "info",
          ip: "10.0.0.30",
          desc: "Logged in successfully from Firefox/Windows",
          targetType: "user",
          targetId: "ADM-501"
        },
        {
          id: "LOG-4002",
          date: "2025-05-19 22:00:00",
          adminId: "ADM-601",
          adminName: "Golnaz Fathi",
          adminRole: "housekeeping_manager",
          type: "room_status_update",
          severity: "info",
          ip: "192.168.4.20",
          desc: "Marked 15 rooms as 'cleaned' for next day",
          targetType: "batch",
          targetId: "BATCH-2025-05-20"
        },
        {
          id: "LOG-4003",
          date: "2025-05-19 16:30:00",
          adminId: "ADM-502",
          adminName: "Arman Ebrahimi",
          adminRole: "reservation_agent",
          type: "reservation_cancellation",
          severity: "warning",
          ip: "192.168.4.11",
          desc: "Cancelled reservation RES-4013 due to no-show",
          targetType: "reservation",
          targetId: "RES-4013"
        },
        {
          id: "LOG-4004",
          date: "2025-05-18 11:00:00",
          adminId: "ADM-501",
          adminName: "Shadi Pakzad",
          adminRole: "reservation_head",
          type: "price_update",
          severity: "info",
          ip: "10.0.0.30",
          desc: "Updated weekend pricing for 'Family Suite'",
          targetType: "product",
          targetId: "PRD-ACC-011"
        }
      ]
    }
  },
  {
    id: "VND-3001", // Caspian Jet
    history: {
      tab: "all",
      columns: [
        { key: "id", title: "Log ID" },
        { key: "date", title: "Date & Time" },
        { key: "adminName", title: "Admin Name" },
        { key: "adminRole", title: "Admin Role", translatable: true, namespace: "adminsRole" },
        { key: "type", title: "Action Type", translatable: true, namespace: "historyTypes" },
        { key: "severity", title: "Severity", translatable: true, namespace: "severity" },
        { key: "ip", title: "IP Address" },
        { key: "desc", title: "Description" },
        { key: "targetType", title: "Target Type" },
        { key: "targetId", title: "Target ID" }
      ],
      data: [
        {
          id: "LOG-5001",
          date: "2025-05-20 09:00:00",
          adminId: "ADM-701",
          adminName: "Mohsen Tarkash",
          adminRole: "operations_manager",
          type: "login_success",
          severity: "info",
          ip: "10.0.0.40",
          desc: "Logged in successfully from Chrome/Windows",
          targetType: "user",
          targetId: "ADM-701"
        },
        {
          id: "LOG-5002",
          date: "2025-05-19 20:30:00",
          adminId: "ADM-702",
          adminName: "Leila Rashidi",
          adminRole: "chef",
          type: "menu_update",
          severity: "info",
          ip: "192.168.5.10",
          desc: "Updated seasonal menu - added summer specials",
          targetType: "menu",
          targetId: "MENU-Summer2025"
        },
        {
          id: "LOG-5003",
          date: "2025-05-18 14:15:00",
          adminId: "ADM-703",
          adminName: "Hossein Parvizi",
          adminRole: "logistics",
          type: "inventory_update",
          severity: "warning",
          ip: "192.168.5.11",
          desc: "Low stock alert: Salmon fish quantity below minimum threshold",
          targetType: "ingredient",
          targetId: "ING-045"
        },
        {
          id: "LOG-5004",
          date: "2025-05-17 12:00:00",
          adminId: "ADM-701",
          adminName: "Mohsen Tarkash",
          adminRole: "operations_manager",
          type: "staff_schedule_change",
          severity: "info",
          ip: "10.0.0.40",
          desc: "Modified staff schedule for weekend shift",
          targetType: "schedule",
          targetId: "SCH-2025-05-24"
        }
      ]
    }
  }
];

export const VENDOR_PROFILE_DOCUMENTS_MOCK = [
  {
    id: "VND-2345", // Kish Marina Hotel
    documents: [
      {
        tab: "contracts",
        data: [
          {
            id: "DOC-1001",
            name: "Cooperation Agreement 2025.pdf",
            type: "contract",
            category: "contracts",
            size: "2.4 MB",
            uploadDate: "2025-01-15",
            expiryDate: "2026-01-14",
            status: "active",
            thumbnail: null,
            icon: "📄",
            uploadedBy: "Hassan Jafari",
            description: "Annual cooperation agreement between Kish Marina Hotel and platform"
          },
          {
            id: "DOC-1002",
            name: "Commission Rate Amendment.pdf",
            type: "contract",
            category: "contracts",
            size: "856 KB",
            uploadDate: "2025-03-20",
            expiryDate: "2025-12-31",
            status: "active",
            thumbnail: null,
            icon: "📑",
            uploadedBy: "Mahsa Rafiei",
            description: "Amendment changing commission rate from 15% to 12%"
          },
          {
            id: "DOC-1003",
            name: "Terms and Conditions - Signed.pdf",
            type: "contract",
            category: "contracts",
            size: "1.8 MB",
            uploadDate: "2024-12-10",
            expiryDate: "2025-12-09",
            status: "expiring_soon",
            thumbnail: null,
            icon: "📜",
            uploadedBy: "Hassan Jafari",
            description: "Signed terms and conditions for platform partnership"
          }
        ]
      },
      {
        tab: "legal_docs",
        data: [
          {
            id: "DOC-1004",
            name: "Business License - Kish Marina Hotel.jpg",
            type: "legal",
            category: "legal_docs",
            size: "1.2 MB",
            uploadDate: "2024-06-01",
            expiryDate: "2026-05-31",
            status: "active",
            thumbnail: null,
            icon: "🏪",
            uploadedBy: "Hassan Jafari",
            description: "Official business license issued by Kish Free Zone Organization"
          },
          {
            id: "DOC-1005",
            name: "Tax Registration Certificate.pdf",
            type: "legal",
            category: "legal_docs",
            size: "945 KB",
            uploadDate: "2024-06-01",
            expiryDate: null,
            status: "active",
            thumbnail: null,
            icon: "📊",
            uploadedBy: "Mahsa Rafiei",
            description: "National tax ID registration certificate"
          },
          {
            id: "DOC-1006",
            name: "Articles of Association.pdf",
            type: "legal",
            category: "legal_docs",
            size: "3.1 MB",
            uploadDate: "2024-05-20",
            expiryDate: null,
            status: "active",
            thumbnail: null,
            icon: "📘",
            uploadedBy: "Hassan Jafari",
            description: "Company articles of association and shareholder structure"
          }
        ]
      },
      {
        tab: "industry_certs",
        data: [
          {
            id: "DOC-1007",
            name: "Hotel Star Rating Certificate.pdf",
            type: "certificate",
            category: "industry_certs",
            size: "1.5 MB",
            uploadDate: "2024-08-10",
            expiryDate: "2026-08-09",
            status: "active",
            thumbnail: null,
            icon: "⭐",
            uploadedBy: "Reza Mohammadi",
            description: "Official 5-star rating certificate from Tourism Organization"
          },
          {
            id: "DOC-1008",
            name: "Food Safety License.jpg",
            type: "certificate",
            category: "industry_certs",
            size: "876 KB",
            uploadDate: "2024-09-05",
            expiryDate: "2025-09-04",
            status: "expiring_soon",
            thumbnail: null,
            icon: "🍽️",
            uploadedBy: "Sara Ebrahimi",
            description: "Food safety and hygiene certificate for restaurant and kitchen"
          },
          {
            id: "DOC-1009",
            name: "Fire Safety Compliance.pdf",
            type: "certificate",
            category: "industry_certs",
            size: "2.1 MB",
            uploadDate: "2024-11-20",
            expiryDate: "2026-11-19",
            status: "active",
            thumbnail: null,
            icon: "🔥",
            uploadedBy: "Reza Mohammadi",
            description: "Fire safety inspection and compliance certificate"
          },
          {
            id: "DOC-1010",
            name: "Environmental Health Certificate.pdf",
            type: "certificate",
            category: "industry_certs",
            size: "678 KB",
            uploadDate: "2024-07-15",
            expiryDate: "2025-07-14",
            status: "expiring_soon",
            thumbnail: null,
            icon: "🌿",
            uploadedBy: "Sara Ebrahimi",
            description: "Environmental health and sanitation certificate"
          }
        ]
      },
      {
        tab: "insurance",
        data: [
          {
            id: "DOC-1011",
            name: "Property Insurance Policy.pdf",
            type: "insurance",
            category: "insurance",
            size: "3.2 MB",
            uploadDate: "2024-12-01",
            expiryDate: "2025-11-30",
            status: "active",
            thumbnail: null,
            icon: "🛡️",
            uploadedBy: "Mahsa Rafiei",
            description: "Comprehensive property insurance for hotel building and assets"
          },
          {
            id: "DOC-1012",
            name: "Liability Insurance.pdf",
            type: "insurance",
            category: "insurance",
            size: "1.9 MB",
            uploadDate: "2024-12-01",
            expiryDate: "2025-11-30",
            status: "active",
            thumbnail: null,
            icon: "⚖️",
            uploadedBy: "Mahsa Rafiei",
            description: "Third-party liability insurance for guests and visitors"
          }
        ]
      }
    ]
  },
  {
    id: "VND-5445", // Gulf Helicopters
    documents: [
      {
        tab: "contracts",
        data: [
          {
            id: "DOC-2001",
            name: "Helicopter Charter Agreement.pdf",
            type: "contract",
            category: "contracts",
            size: "4.1 MB",
            uploadDate: "2025-01-10",
            expiryDate: "2026-01-09",
            status: "active",
            thumbnail: null,
            icon: "✈️",
            uploadedBy: "Saeed Rad",
            description: "Main charter agreement for helicopter services"
          },
          {
            id: "DOC-2002",
            name: "Maintenance Contract.pdf",
            type: "contract",
            category: "contracts",
            size: "2.3 MB",
            uploadDate: "2025-02-15",
            expiryDate: "2025-08-14",
            status: "active",
            thumbnail: null,
            icon: "🔧",
            uploadedBy: "Captain Mahmoud Salimi",
            description: "Maintenance service contract with authorized service center"
          }
        ]
      },
      {
        tab: "legal_docs",
        data: [
          {
            id: "DOC-2003",
            name: "Air Operator Certificate.pdf",
            type: "legal",
            category: "legal_docs",
            size: "5.2 MB",
            uploadDate: "2024-10-01",
            expiryDate: "2026-09-30",
            status: "active",
            thumbnail: null,
            icon: "✈️",
            uploadedBy: "Saeed Rad",
            description: "Official air operator certificate from Civil Aviation Organization"
          },
          {
            id: "DOC-2004",
            name: "Commercial License.pdf",
            type: "legal",
            category: "legal_docs",
            size: "1.1 MB",
            uploadDate: "2024-05-01",
            expiryDate: null,
            status: "active",
            thumbnail: null,
            icon: "🏢",
            uploadedBy: "Saeed Rad",
            description: "Commercial license for helicopter charter services"
          }
        ]
      },
      {
        tab: "industry_certs",
        data: [
          {
            id: "DOC-2005",
            name: "ISO 9001 Certification.pdf",
            type: "certificate",
            category: "industry_certs",
            size: "1.8 MB",
            uploadDate: "2024-12-10",
            expiryDate: "2026-12-09",
            status: "active",
            thumbnail: null,
            icon: "✅",
            uploadedBy: "Nasrin Akbari",
            description: "ISO 9001:2024 quality management certification"
          },
          {
            id: "DOC-2006",
            name: "Safety Management System.pdf",
            type: "certificate",
            category: "industry_certs",
            size: "3.4 MB",
            uploadDate: "2024-11-05",
            expiryDate: "2025-11-04",
            status: "active",
            thumbnail: null,
            icon: "🦺",
            uploadedBy: "Captain Mahmoud Salimi",
            description: "Safety management system manual and certification"
          }
        ]
      },
      {
        tab: "insurance",
        data: [
          {
            id: "DOC-2007",
            name: "Aviation Insurance Policy.pdf",
            type: "insurance",
            category: "insurance",
            size: "6.5 MB",
            uploadDate: "2025-01-20",
            expiryDate: "2026-01-19",
            status: "active",
            thumbnail: null,
            icon: "🛩️",
            uploadedBy: "Saeed Rad",
            description: "Comprehensive aviation insurance for fleet"
          }
        ]
      }
    ]
  },
  {
    id: "VND-4545", // Luxe Yacht Charters
    documents: [
      {
        tab: "contracts",
        data: [
          {
            id: "DOC-3001",
            name: "Yacht Charter Agreement.pdf",
            type: "contract",
            category: "contracts",
            size: "3.8 MB",
            uploadDate: "2025-02-01",
            expiryDate: "2026-01-31",
            status: "active",
            thumbnail: null,
            icon: "⛵",
            uploadedBy: "Farzad Kian",
            description: "Master yacht charter agreement for all vessels"
          }
        ]
      },
      {
        tab: "legal_docs",
        data: [
          {
            id: "DOC-3002",
            name: "Maritime License.pdf",
            type: "legal",
            category: "legal_docs",
            size: "2.1 MB",
            uploadDate: "2024-09-15",
            expiryDate: "2026-09-14",
            status: "active",
            thumbnail: null,
            icon: "⚓",
            uploadedBy: "Farzad Kian",
            description: "Maritime operating license from Ports and Maritime Organization"
          }
        ]
      },
      {
        tab: "industry_certs",
        data: [
          {
            id: "DOC-3003",
            name: "Safety Certificate - Luxe Star.pdf",
            type: "certificate",
            category: "industry_certs",
            size: "1.4 MB",
            uploadDate: "2025-03-10",
            expiryDate: "2026-03-09",
            status: "active",
            thumbnail: null,
            icon: "🛟",
            uploadedBy: "Nima Akhavan",
            description: "Annual safety inspection certificate for Luxe Star yacht"
          }
        ]
      },
      {
        tab: "insurance",
        data: [
          {
            id: "DOC-3004",
            name: "Marine Insurance Policy.pdf",
            type: "insurance",
            category: "insurance",
            size: "4.2 MB",
            uploadDate: "2025-01-05",
            expiryDate: "2026-01-04",
            status: "active",
            thumbnail: null,
            icon: "🌊",
            uploadedBy: "Farzad Kian",
            description: "Marine insurance covering all charter operations"
          }
        ]
      }
    ]
  },
  {
    id: "VND-5454", // Darvishi Hotel
    documents: [
      {
        tab: "contracts",
        data: [
          {
            id: "DOC-4001",
            name: "Hotel Partnership Agreement.pdf",
            type: "contract",
            category: "contracts",
            size: "2.2 MB",
            uploadDate: "2024-11-20",
            expiryDate: "2025-11-19",
            status: "active",
            thumbnail: null,
            icon: "📋",
            uploadedBy: "Mehran Safa",
            description: "Partnership agreement between Darvishi Hotel and platform"
          }
        ]
      },
      {
        tab: "legal_docs",
        data: [
          {
            id: "DOC-4002",
            name: "Hotel Operating License.jpg",
            type: "legal",
            category: "legal_docs",
            size: "1.5 MB",
            uploadDate: "2024-04-10",
            expiryDate: "2026-04-09",
            status: "active",
            thumbnail: null,
            icon: "🏨",
            uploadedBy: "Mehran Safa",
            description: "Official hotel operating license from municipality"
          }
        ]
      },
      {
        tab: "industry_certs",
        data: [
          {
            id: "DOC-4003",
            name: "Tourism Rating Certificate.pdf",
            type: "certificate",
            category: "industry_certs",
            size: "1.2 MB",
            uploadDate: "2024-07-01",
            expiryDate: "2026-06-30",
            status: "active",
            thumbnail: null,
            icon: "🏆",
            uploadedBy: "Shadi Pakzad",
            description: "4-star hotel rating certificate"
          },
          {
            id: "DOC-4004",
            name: "Hygiene Grade A Certificate.pdf",
            type: "certificate",
            category: "industry_certs",
            size: "876 KB",
            uploadDate: "2024-10-15",
            expiryDate: "2025-10-14",
            status: "active",
            thumbnail: null,
            icon: "🧼",
            uploadedBy: "Golnaz Fathi",
            description: "Grade A hygiene certificate from Ministry of Health"
          }
        ]
      },
      {
        tab: "insurance",
        data: [
          {
            id: "DOC-4005",
            name: "Hotel Insurance Policy.pdf",
            type: "insurance",
            category: "insurance",
            size: "3.5 MB",
            uploadDate: "2024-12-01",
            expiryDate: "2025-11-30",
            status: "active",
            thumbnail: null,
            icon: "🏥",
            uploadedBy: "Mahsa Rafiei",
            description: "Comprehensive hotel insurance covering building, guests and staff"
          }
        ]
      }
    ]
  },
  {
    id: "VND-3001", // Caspian Jet
    documents: [
      {
        tab: "contracts",
        data: [
          {
            id: "DOC-5001",
            name: "Restaurant Commission Agreement.pdf",
            type: "contract",
            category: "contracts",
            size: "1.4 MB",
            uploadDate: "2025-01-20",
            expiryDate: "2025-12-31",
            status: "active",
            thumbnail: null,
            icon: "🍽️",
            uploadedBy: "Samira Zare",
            description: "Commission agreement for restaurant reservations"
          }
        ]
      },
      {
        tab: "legal_docs",
        data: [
          {
            id: "DOC-5002",
            name: "Food Business License.pdf",
            type: "legal",
            category: "legal_docs",
            size: "892 KB",
            uploadDate: "2024-08-10",
            expiryDate: "2026-08-09",
            status: "active",
            thumbnail: null,
            icon: "📝",
            uploadedBy: "Samira Zare",
            description: "Food business operating license from municipality"
          }
        ]
      },
      {
        tab: "industry_certs",
        data: [
          {
            id: "DOC-5003",
            name: "Food Safety Certificate.pdf",
            type: "certificate",
            category: "industry_certs",
            size: "1.1 MB",
            uploadDate: "2024-09-05",
            expiryDate: "2025-09-04",
            status: "expiring_soon",
            thumbnail: null,
            icon: "🥗",
            uploadedBy: "Leila Rashidi",
            description: "HACCP food safety management certification"
          },
          {
            id: "DOC-5004",
            name: "Halal Certification.jpg",
            type: "certificate",
            category: "industry_certs",
            size: "654 KB",
            uploadDate: "2024-11-01",
            expiryDate: "2025-10-31",
            status: "active",
            thumbnail: null,
            icon: "🕌",
            uploadedBy: "Mohsen Tarkash",
            description: "Halal food preparation and serving certification"
          }
        ]
      },
      {
        tab: "insurance",
        data: [
          {
            id: "DOC-5005",
            name: "Restaurant Liability Insurance.pdf",
            type: "insurance",
            category: "insurance",
            size: "1.8 MB",
            uploadDate: "2025-01-10",
            expiryDate: "2026-01-09",
            status: "active",
            thumbnail: null,
            icon: "🛡️",
            uploadedBy: "Samira Zare",
            description: "Public liability insurance for restaurant operations"
          }
        ]
      }
    ]
  }
];
//Employee Profile MOCK
export const EMPLOYEE_PROFILE_MOCK = [
  {
    "id": "EMP-4567",
    "personalInfo": {
      "firstName": "Ehsan",
      "lastName": "Mohammadi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "ehsan.m@example.com",
      "phone": "09210000001"
    },
    "systemData": {
      "userType": "employee",
      "subType": "management",
      "status": "active",
      "createdAt": "1403/02/21",
      "lastActivity": "1405/01/20 09:30:00"
    }
  },
  {
    "id": "EMP-4545",
    "personalInfo": {
      "firstName": "Shadi",
      "lastName": "Rezaei",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "shadi.r@example.com",
      "phone": "09210000002"
    },
    "systemData": {
      "userType": "employee",
      "subType": "marketting",
      "status": "active",
      "createdAt": "1403/11/25",
      "lastActivity": "1405/01/18 14:10:00"
    }
  },
  {
    "id": "EMP-5454",
    "personalInfo": {
      "firstName": "Mohsen",
      "lastName": "Alavi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "mohsen.a@example.com",
      "phone": "09210000003"
    },
    "systemData": {
      "userType": "employee",
      "subType": "finance",
      "status": "active",
      "createdAt": "1403/05/10",
      "lastActivity": "1405/01/14 11:00:00"
    }
  },
  {
    "id": "EMP-6565",
    "personalInfo": {
      "firstName": "Zahra",
      "lastName": "Ebrahimi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "zahra.e@example.com",
      "phone": "09210000004"
    },
    "systemData": {
      "userType": "employee",
      "subType": "finance",
      "status": "active",
      "createdAt": "1403/04/30",
      "lastActivity": "1405/01/12 16:20:00"
    }
  },
  {
    "id": "EMP-5656",
    "personalInfo": {
      "firstName": "Navid",
      "lastName": "Shirazi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "navid.s@example.com",
      "phone": "09210000005"
    },
    "systemData": {
      "userType": "employee",
      "subType": "support",
      "status": "active",
      "createdAt": "1403/12/20",
      "lastActivity": "1405/01/19 10:50:00"
    }
  },
  {
    "id": "EMP-6655",
    "personalInfo": {
      "firstName": "Parisa",
      "lastName": "Vahidi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "parisa.v@example.com",
      "phone": "09210000006"
    },
    "systemData": {
      "userType": "employee",
      "subType": "support",
      "status": "inactive",
      "createdAt": "1404/08/14",
      "lastActivity": "1404/11/22 09:00:00"
    }
  },
  {
    "id": "EMP-5566",
    "personalInfo": {
      "firstName": "Milad",
      "lastName": "Ghasemi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "milad.g@example.com",
      "phone": "09210000007"
    },
    "systemData": {
      "userType": "employee",
      "subType": "technical",
      "status": "active",
      "createdAt": "1403/09/10",
      "lastActivity": "1405/01/21 18:25:00"
    }
  },
  {
    "id": "EMP-6556",
    "personalInfo": {
      "firstName": "Samaneh",
      "lastName": "Rad",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "samaneh.r@example.com",
      "phone": "09210000008"
    },
    "systemData": {
      "userType": "employee",
      "subType": "marketting",
      "status": "active",
      "createdAt": "1404/11/01",
      "lastActivity": "1405/01/16 12:30:00"
    }
  },
  {
    "id": "EMP-5665",
    "personalInfo": {
      "firstName": "Farhad",
      "lastName": "Majidi",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "farhad.m@example.com",
      "phone": "09210000009"
    },
    "systemData": {
      "userType": "employee",
      "subType": "technical",
      "status": "active",
      "createdAt": "1403/02/28",
      "lastActivity": "1405/01/20 17:45:00"
    }
  },
  {
    "id": "EMP-5556",
    "personalInfo": {
      "firstName": "Roya",
      "lastName": "Kamali",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "roya.k@example.com",
      "phone": "09210000010"
    },
    "systemData": {
      "userType": "employee",
      "subType": "support",
      "status": "inactive",
      "createdAt": "1404/11/22",
      "lastActivity": "1404/12/29 09:40:00"
    }
  }
];

//main Dashboard Mock Data

export const KPICARDS_MOCK = [
{
  id: "TotalUsers",
  header: {
    titleKey: "kpi.totalUsers.title",
    tooltipKey: "kpi.totalUsers.tooltip"
  },
  tabs: [
    { id: "travelers", labelKey: "common.users.travelers" },
    { id: "vendors", labelKey: "common.users.vendors" },
    { id: "employees", labelKey: "common.users.employees" }
  ],
  data: {
    travelers: {
      type: "number",
      value: 24500,
      footer: {
        status: "success",
        color: "#3b82f6",
        textKey: "kpi.totalUsers.onlineStatus",
        textVal: 142
      }
    },
    vendors: {
      type: "number",
      value: 1250,
      footer: {
        status: "warning",
        color: "#3b82f6",
        textKey: "kpi.totalUsers.onlineStatus",
        textVal: 18
      }
    },
    employees: {
      type: "number",
      value: 45,
      footer: {
        status: "success",
        color: "#3b82f6",
        textKey: "kpi.totalUsers.onlineStatus",
        textVal: 38
      }
    }
  }
},
{
  id: "NewUsers",
  header: {
    titleKey: "kpi.newUsers.title",
    tooltipKey: "kpi.newUsers.tooltip"
  },
  tabs: [
    { id: "travelers", labelKey: "common.users.travelers" },
    { id: "vendors", labelKey: "common.users.vendors" }
  ],
  data: {
    travelers: {
      type: "chart",
      chartType: "bar",
      value: [120, 150, 130, 180, 210, 190, 240, 260, 290, 320], 
      footer: [
        {
          status: "success",
          color: "#3b82f6",
          textKey: "kpi.newUsers.growth",
          textVal: "10.3"
        }
      ]
    },
    vendors: {
      type: "chart",
      chartType: "bar",
      value: [10, 15, 12, 18, 20, 19, 25, 22, 20, 18],
      footer: [
        {
          status: "danger",
          color: "#3b82f6",
          textKey: "kpi.newUsers.decline",
          textVal: "-10"
        }
      ]
    }
  }
},
{
  id: "ActiveServices",
  header: {
    titleKey: "kpi.activeServices.title",
    tooltipKey: "kpi.activeServices.tooltip"
  },
  tabs: [
    { id: "travelers", labelKey: "common.users.travelers" },
    { id: "vendors", labelKey: "common.users.vendors" }
  ],
  data: {
    travelers: {
      type: "chart",
      chartType: "pie",
      value: [
        { nameKey: "common.services.carRental", value: 45 },
        { nameKey: "common.services.accommodation", value: 120 },
        { nameKey: "common.services.restaurant", value: 80 },
        { nameKey: "common.services.entertainment", value: 35 }
      ],
      footer: [
        {
          status: "success",
          color: "#3b82f6",
          textKey: "kpi.activeServices.engagement",
          textVal: "11.5"
        }
      ]
    },
    vendors: {
      type: "chart",
      chartType: "pie",
      value: [
        { nameKey: "common.services.carRental", value: 12 },
        { nameKey: "common.services.accommodation", value: 40 },
        { nameKey: "common.services.restaurant", value: 60 },
        { nameKey: "common.services.entertainment", value: 5 }
      ],
      footer: [
        {
          status: "success",
          color: "#3b82f6",
          textKey: "kpi.activeServices.engagement",
          textVal: "8.2"
        }
      ]
    }
  }
},
{
  id: "SecurityAlerts",
  header: {
    titleKey: "kpi.securityAlerts.title",
    tooltipKey: "kpi.securityAlerts.tooltip"
  },
  tabs: [
    { id: "travelers", labelKey: "common.users.travelers" },
    { id: "vendors", labelKey: "common.users.vendors" },
    { id: "employees", labelKey: "common.users.employees" }
  ],
  data: {
    travelers: {
      type: "number",
      value: 45, 
      footer: [
        {
          status: "warning",
          color: "#3b82f6",
          textKey: "kpi.securityAlerts.alertCount",
          textVal: "30",
          typeKey: "common.alerts.warning" 
        },
        {
          status: "danger",
          color: "#3b82f6",
          textKey: "kpi.securityAlerts.alertCount",
          textVal: "15",
          typeKey: "common.alerts.critical"
        }
      ]
    },
    vendors: {
      type: "number",
      value: 12, 
      footer: [
        {
          status: "warning",
          color: "#3b82f6",
          textKey: "kpi.securityAlerts.alertCount",
          textVal: "10",
          typeKey: "common.alerts.warning" 
        },
        {
          status: "danger",
          color: "#3b82f6",
          textKey: "kpi.securityAlerts.alertCount",
          textVal: "2",
          typeKey: "common.alerts.critical"
        }
      ]
    },
    employees: {
      type: "number",
      value: 2,
      footer: [
        {
          status: "warning",
          color: "#3b82f6",
          textKey: "kpi.securityAlerts.alertCount",
          textVal: "2",
          typeKey: "common.alerts.sensitive"
        }
      ]
    }
  }
}
];

export const QUICKVIEW_MOCK = [
  {
    "tab": "users",
    path:'users',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "email", "title": "email" },
      { "key": "membershipTier", "title": "membershipTier", "translatable": true, "namespace": "membershipTier" },
      { "key": "totalSpent", "title": "totalSpent" },
      { "key": "lastBooking", "title": "lastBooking" },
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "USR-938471", "fullName": "Aria Rostami", "email": "aria.r@example.com", "membershipTier": "gold", "totalSpent": "$45,200", "lastBooking": "2026-04-02", "accountStatus": "active" },
      { "id": "USR-539454", "fullName": "Sara Ahmadi", "email": "sara.a@example.com", "membershipTier": "gold", "totalSpent": "$12,450", "lastBooking": "2026-03-28", "accountStatus": "active" },
      { "id": "USR-345325", "fullName": "Kamran Tehrani", "email": "k.tehrani@example.com", "membershipTier": "silver", "totalSpent": "$1,850", "lastBooking": "2026-03-15", "accountStatus": "inactive" },
      { "id": "USR-893452", "fullName": "Neda Moradi", "email": "neda.m@example.com", "membershipTier": "bronze", "totalSpent": "$8,900", "lastBooking": "2026-04-05", "accountStatus": "active" },
      { "id": "USR-998354", "fullName": "Ali Hosseini", "email": "ali.h@example.com", "membershipTier": "gold", "totalSpent": "$950", "lastBooking": "2026-02-10", "accountStatus": "active" },
    ]
  },
  {
    "tab": "vendors",
    path:'vendors',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "companyName", "title": "companyName" },
      { "key": "serviceCategory", "title": "serviceCategory", "translatable": true, "namespace": "common.services" },
      { "key": "manager", "title": "manager" },
      { "key": "commissionRate", "title": "commissionRate" },
      { "key": "rating", "title": "rating" },
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "VND-2345", "companyName": "Kish Marina Hotel", "serviceCategory": "accommodation", "manager": "Hassan Jafari", "commissionRate": "15%", "rating": "4.8", "contractStatus": "active" },
      { "id": "VND-5445", "companyName": "Gulf Helicopters", "serviceCategory": "carRental", "manager": "Saeed Rad", "commissionRate": "10%", "rating": "4.9", "contractStatus": "active" },
      { "id": "VND-4545", "companyName": "Luxe Yacht Charters", "serviceCategory": "entertainment", "manager": "Farzad Kian", "commissionRate": "20%", "rating": "4.7", "contractStatus": "pendingRenewal" },
      { "id": "VND-5454", "companyName": "Darvishi Hotel", "serviceCategory": "accommodation", "manager": "Mehran Safa", "commissionRate": "12%", "rating": "4.5", "contractStatus": "active" },
      { "id": "VND-3001", "companyName": "Caspian Jet", "serviceCategory": "restaurant", "manager": "Samira Zare", "commissionRate": "10%", "rating": "5.0", "contractStatus": "active" },
    ]
  },
  {
    "tab": "employees",
    path:'employees',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "department", "title": "department", "translatable": true, "namespace": "department" },
      { "key": "location", "title": "location" },
      { "key": "accessRole", "title": "accessRole", "translatable": true, "namespace": "roles" },
      { "key": "joinDate", "title": "joinDate" },
      { "key": "status", "title": "status", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "EMP-4567", "fullName": "Ehsan Mohammadi", "department": "management", "location": "Kish HQ", "accessRole": "superAdmin", "joinDate": "2024-05-10", "status": "active" },
      { "id": "EMP-4545", "fullName": "Shadi Rezaei", "department": "marketting", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2025-01-15", "status": "active" },
      { "id": "EMP-5454", "fullName": "Mohsen Alavi", "department": "finance", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2024-08-01", "status": "active" },
      { "id": "EMP-6565", "fullName": "Zahra Ebrahimi", "department": "finance", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2024-06-20", "status": "active" },
      { "id": "EMP-5656", "fullName": "Navid Shirazi", "department": "support", "location": "Dubai Office", "accessRole": "admin", "joinDate": "2025-03-10", "status": "active" },
    ]
  }
]

export const QUICKACTION_MOCK =
[
  "permissions", "reservations", "securityAlerts", "contracts"
];

// User Dashboard Mock Data

export const USER_KPICARDS_MOCK = [
{
  id: "UserActivityRate",
  header: {
    titleKey: "kpi.activityRate.title",
    tooltipKey: "kpi.activityRate.tooltip"
  },
  tabs: [
    { id: "daily", labelKey: "common.time.daily" },
    { id: "weekly", labelKey: "common.time.weekly" },
    { id: "monthly", labelKey: "common.time.monthly" }
  ],
  data: {
    daily: {
      type: "chart",
      chartType: "line",
      value: [1240, 1350, 1100, 1650, 1820, 2100, 2350], 
      footer: [
        {
          status: "success",
          color: "#3b82f6",
          textKey: "kpi.activityRate.growth",
          textVal: "11.9"
        }
      ]
    },
    weekly: {
      type: "chart",
      chartType: "line",
      value: [8400, 8900, 8200, 9500, 10200, 11500, 12800],
      footer: [
        {
          status: "success",
          color: "#3b82f6",
          textKey: "kpi.activityRate.growth",
          textVal: "15.4"
        }
      ]
    },
    monthly: {
      type: "chart",
      chartType: "line",
      value: [32000, 35500, 31000, 29000, 38000, 42000, 47500],
      footer: [
        {
          status: "danger",
          color: "#3b82f6",
          textKey: "kpi.activityRate.decline",
          textVal: "-2.1"
        }
      ]
    }
  }
},
{
  id: "UserAccountStatus",
  header: {
    titleKey: "kpi.accountStatus.title",
    tooltipKey: "kpi.accountStatus.tooltip"
  },
  tabs: [
    { id: "travelers", labelKey: "common.users.travelers" },
    { id: "admins", labelKey: "common.users.admins" }
  ],
  data: {
    travelers: {
      type: "chart",
      chartType: "pie",
      value: [
        { nameKey: "kpi.accountStatus.active", value: 8450, color: "#10b981" },
        { nameKey: "kpi.accountStatus.blocked", value: 1240, color: "#ef4444" }
      ],
      footer: [
        {
          status: "warning",
          color: "#3b82f6",
          textKey: "kpi.accountStatus.recentBlocks",
          textVal: "45"
        }
      ]
    },
    admins: {
      type: "chart",
      chartType: "pie",
      value: [
        { nameKey: "kpi.accountStatus.active", value: 30, color: "#10b981" },
        { nameKey: "kpi.accountStatus.blocked", value: 5, color: "#ef4444" }
      ],
      footer: [
        {
          status: "success",
          color: "#3b82f6",
          textKey: "kpi.accountStatus.secureStatus",
          textVal: "0"
        }
      ]
    }
  }
},
{
  id: "UserConversionRate",
  header: {
    titleKey: "kpi.conversionRate.title",
    tooltipKey: "kpi.conversionRate.tooltip"
  },
  tabs: [
    { id: "firstBooking", labelKey: "kpi.conversionRate.tabs.firstBooking" },
    { id: "repeatBooking", labelKey: "kpi.conversionRate.tabs.repeatBooking" }
  ],
  data: {
    firstBooking: {
      type: "chart",
      chartType: "area",
      value: [12.5, 13.0, 14.2, 13.8, 16.5, 18.2, 21.4], 
      footer: [
        {
          status: "success",
          color: "#3b82f6",
          textKey: "kpi.conversionRate.growth",
          textVal: "3.2" 
        }
      ]
    },
    repeatBooking: {
      type: "chart",
      chartType: "area",
      value: [5.1, 5.5, 6.2, 5.8, 7.4, 8.9, 11.0],
      footer: [
        {
          status: "success",
          color: "#3b82f6",
          textKey: "kpi.conversionRate.growth",
          textVal: "2.1" 
        }
      ]
    }
  }
},
{
  id: "AccountToTravelerRatio",
  header: {
    titleKey: "kpi.accountRatio.title",
    tooltipKey: "kpi.accountRatio.tooltip"
  },
  tabs: [
    { id: "thisYear", labelKey: "kpi.accountRatio.tabs.thisYear" },
    { id: "allTime", labelKey: "kpi.accountRatio.tabs.allTime" }
  ],
  data: {
    thisYear: {
      type: "chart",
      chartType: "pie",
      // مقایسه کل اکانت‌های ساخته شده امسال با مسافران واقعی
      value: [
        { nameKey: "kpi.accountRatio.labels.totalAccounts", value: 12500, color: "#94a3b8" }, // رنگ خنثی برای کل
        { nameKey: "kpi.accountRatio.labels.realTravelers", value: 8200, color: "#10b981" }   // رنگ سبز برای مسافران واقعی
      ],
      footer: [
        {
          status: "info",
          color: "#3b82f6",
          textKey: "kpi.accountRatio.footerText",
          textVal: "65.6" // 65.6 درصد از اکانت‌های امسال مسافر شده‌اند
        }
      ]
    },
    allTime: {
      type: "chart",
      chartType: "pie",
      // مقایسه کل اکانت‌های ساخته شده از ابتدا با مسافران واقعی
      value: [
        { nameKey: "kpi.accountRatio.labels.totalAccounts", value: 45000, color: "#94a3b8" },
        { nameKey: "kpi.accountRatio.labels.realTravelers", value: 21500, color: "#10b981" }
      ],
      footer: [
        {
          status: "info",
          color: "#3b82f6",
          textKey: "kpi.accountRatio.footerText",
          textVal: "47.7" 
        }
      ]
    }
  }
}
];

export const USER_QUICKACTION_MOCK = 
[
"addUser","users.list","users.history"
];

export const USER_QUICKVIEW_MOCK = [
  {
    "tab": "users",
    path:'users',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "email", "title": "email" },
      { "key": "membershipTier", "title": "membershipTier", "translatable": true, "namespace": "membershipTier" },
      { "key": "totalSpent", "title": "totalSpent" },
      { "key": "lastBooking", "title": "lastBooking" },
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "USR-938471", "fullName": "Aria Rostami", "email": "aria.r@example.com", "membershipTier": "gold", "totalSpent": "$45,200", "lastBooking": "2026-04-02", "accountStatus": "active" },
      { "id": "USR-539454", "fullName": "Sara Ahmadi", "email": "sara.a@example.com", "membershipTier": "gold", "totalSpent": "$12,450", "lastBooking": "2026-03-28", "accountStatus": "active" },
      { "id": "USR-345325", "fullName": "Kamran Tehrani", "email": "k.tehrani@example.com", "membershipTier": "silver", "totalSpent": "$1,850", "lastBooking": "2026-03-15", "accountStatus": "inactive" },
      { "id": "USR-453244", "fullName": "Leila Farahani", "email": "l.farahani@example.com", "membershipTier": "gold", "totalSpent": "$450", "lastBooking": "2025-12-05", "accountStatus": "inactive" }
    ]
  },
  {
    "tab": "admins",
    path:'users',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "email", "title": "email" },
      { "key": "membershipTier", "title": "membershipTier", "translatable": true, "namespace": "membershipTier" },
      { "key": "totalSpent", "title": "totalSpent" },
      { "key": "lastBooking", "title": "lastBooking" },
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "USR-938471", "fullName": "Aria Rostami", "email": "aria.r@example.com", "membershipTier": "gold", "totalSpent": "$45,200", "lastBooking": "2026-04-02", "accountStatus": "active" },
      { "id": "USR-345325", "fullName": "Kamran Tehrani", "email": "k.tehrani@example.com", "membershipTier": "silver", "totalSpent": "$1,850", "lastBooking": "2026-03-15", "accountStatus": "inactive" },
      { "id": "USR-998354", "fullName": "Ali Hosseini", "email": "ali.h@example.com", "membershipTier": "gold", "totalSpent": "$950", "lastBooking": "2026-02-10", "accountStatus": "active" },
    ]
  },
  {
    "tab": "travelers",
    path:'users',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "email", "title": "email" },
      { "key": "membershipTier", "title": "membershipTier", "translatable": true, "namespace": "membershipTier" },
      { "key": "totalSpent", "title": "totalSpent" },
      { "key": "lastBooking", "title": "lastBooking" },
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "USR-539454", "fullName": "Sara Ahmadi", "email": "sara.a@example.com", "membershipTier": "gold", "totalSpent": "$12,450", "lastBooking": "2026-03-28", "accountStatus": "active" },
      { "id": "USR-896324", "fullName": "Mina Shafiei", "email": "mina.s@example.com", "membershipTier": "silver", "totalSpent": "$15,300", "lastBooking": "2026-03-10", "accountStatus": "active" },
      { "id": "USR-453244", "fullName": "Leila Farahani", "email": "l.farahani@example.com", "membershipTier": "gold", "totalSpent": "$450", "lastBooking": "2025-12-05", "accountStatus": "inactive" }
    ]
  },
];

// Vendor Dashboard Mock Data
export const VENDOR_KPICARDS_MOCK = [
{
  id: "KycStatus",
  header: {
    titleKey: "kpi.kycStatus.title",
    tooltipKey: "kpi.kycStatus.tooltip"
  },
  tabs: [
    { id: "new", labelKey: "common.status.new" },
    { id: "pending", labelKey: "common.status.pending" },
    { id: "completed", labelKey: "common.status.completed" }
  ],
  data: {
    new: {
      type: "chart",
      chartType: "pie",
      value: [
        { nameKey: "common.services.carRental", value: 45 },
        { nameKey: "common.services.restaurant", value: 120 },
        { nameKey: "common.services.accommodation", value: 80 },
        { nameKey: "common.services.entertainment", value: 35 }
      ],
      footer: [
        {
          status: "success",
          color: "#3b82f6",
          textKey: "kpi.kycStatus.footer.newTotal",
          textVal: "380"
        }
      ]
    },
    pending: {
      type: "chart",
      chartType: "pie",
      value: [
        { nameKey: "common.services.carRental", "value": 12 },
        { nameKey: "common.services.restaurant", "value": 40 },
        { nameKey: "common.services.accommodation", "value": 60 },
        { nameKey: "common.services.entertainment", "value": 5 }
      ],
      footer: [
        {
          status: "warning",
          color: "#3b82f6",
          textKey: "kpi.kycStatus.footer.pendingTotal",
          textVal: "117"
        }
      ]
    },
    completed: {
      type: "chart",
      chartType: "pie",
      value: [
        { nameKey: "common.status.approved", value: 85 },
        { nameKey: "common.status.rejected", value: 15 }
      ],
      footer: [
        {
          status: "success",
          color: "#3b82f6",
          textKey: "kpi.kycStatus.footer.approvalRate",
          textVal: "85%"
        },
        {
          status: "danger",
          color: "#3b82f6",
          textKey: "kpi.kycStatus.footer.rejectionRate",
          textVal: "15%"
        }
      ]
    }
  }
},
{
  id: "SupplierCapacityStatus",
  header: {
    titleKey: "kpi.supplierCapacity.title",
    tooltipKey: "kpi.supplierCapacity.tooltip"
  },
  tabs: [
    { id: "activity", labelKey: "kpi.supplierCapacity.tabs.activity" },
    { id: "capacity", labelKey: "kpi.supplierCapacity.tabs.capacity" }
  ],
  data: {
    activity: {
      type: "chart",
      chartType: "pie",
      value: [
        { nameKey: "common.status.active", value: 42, color: "#10b981" },
        { nameKey: "common.status.inactive", value: 18, color: "#ef4444" }
      ],
      footer: [
        {
          status: "info",
          color: "#3b82f6",
          textKey: "kpi.supplierCapacity.footer.activeSummary",
          textVal: "42"
        }
      ]
    },
    capacity: {
      type: "chart",
      chartType: "pie",
      value: [
        { nameKey: "common.services.accommodation", value: 120, color: "#3b82f6" },
        { nameKey: "common.services.carRental", value: 35, color: "#f59e0b" },
        { nameKey: "common.services.restaurant", value: 58, color: "#8b5cf6" },
        { nameKey: "common.services.entertainment", value: 74, color: "#ec4899" }
      ],
      footer: [
        {
          status: "success",
          color: "#3b82f6",
          textKey: "kpi.supplierCapacity.footer.totalFreeCapacity",
          textVal: "287"
        }
      ]
    }
  }
},
{
  id: "TravelerSatisfaction",
  header: {
    titleKey: "kpi.satisfaction.title",
    tooltipKey: "kpi.satisfaction.tooltip"
  },
  tabs: [
    { id: "overview", labelKey: "common.status.overview" }
  ],
  data: {
    overview: {
      type: "chart",
      chartType: "bar",
      value: [
        { nameKey: "common.services.accommodation", value: 4.2, color: "#3b82f6" },
        { nameKey: "common.services.carRental", value: 3.6, color: "#f59e0b" },
        { nameKey: "common.services.restaurant", value: 4.0, color: "#8b5cf6" },
        { nameKey: "common.services.entertainment", value: 4.5, color: "#10b981" }
      ],
      footer: [
        {
          status: "info",
          color: "#3b82f6",
          textKey: "common.services.accommodation",
        },
        {
          status: "info",
          color: "#f59e0b",
          textKey: "common.services.carRental",
        },
        {
          status: "info",
          color: "#8b5cf6",
          textKey: "common.services.restaurant",
        },
        {
          status: "info",
          color: "#10b981",
          textKey: "common.services.entertainment",
        }
      ]
    }
  }
},
{
  id: "SupplierRevenue",
  header: {
    titleKey: "kpi.revenue.title",
    tooltipKey: "kpi.revenue.tooltip"
  },
  tabs: [
    { id: "monthly", labelKey: "common.time.monthly" },
    { id: "quarterly", labelKey: "common.time.quarterly" },
    { id: "yearly", labelKey: "common.time.yearly" }
  ],
  data: {
    monthly: {
      type: "chart",
      chartType: "pie",
      value: [
        { nameKey: "common.services.accommodation", value: 128, color: "#3b82f6" },
        { nameKey: "common.services.carRental", value: 74, color: "#f59e0b" },
        { nameKey: "common.services.restaurant", value: 56, color: "#8b5cf6" },
        { nameKey: "common.services.entertainment", value: 91, color: "#10b981" }
      ],
      footer: [
        { color: "#3b82f6", textKey: "kpi.revenue.footer.amount", textVal: "128", typeKey: "common.services.accommodation" },
        { color: "#f59e0b", textKey: "kpi.revenue.footer.amount", textVal: "74", typeKey: "common.services.carRental" },
        { color: "#8b5cf6", textKey: "kpi.revenue.footer.amount", textVal: "56", typeKey: "common.services.restaurant" },
        { color: "#10b981", textKey: "kpi.revenue.footer.amount", textVal: "91", typeKey: "common.services.entertainment" }
      ]
    },

    quarterly: {
      type: "chart",
      chartType: "pie",
      value: [
        { nameKey: "common.services.accommodation", value: 389, color: "#3b82f6" },
        { nameKey: "common.services.carRental", value: 201, color: "#f59e0b" },
        { nameKey: "common.services.restaurant", value: 173, color: "#8b5cf6" },
        { nameKey: "common.services.entertainment", value: 278, color: "#10b981" }
      ],
      footer: [
        { color: "#3b82f6", textKey: "kpi.revenue.footer.amount", textVal: "389", typeKey: "common.services.accommodation" },
        { color: "#f59e0b", textKey: "kpi.revenue.footer.amount", textVal: "201", typeKey: "common.services.carRental" },
        { color: "#8b5cf6", textKey: "kpi.revenue.footer.amount", textVal: "173", typeKey: "common.services.restaurant" },
        { color: "#10b981", textKey: "kpi.revenue.footer.amount", textVal: "278", typeKey: "common.services.entertainment" }
      ]
    },

    yearly: {
      type: "chart",
      chartType: "pie",
      value: [
        { nameKey: "common.services.accommodation", value: 1540, color: "#3b82f6" },
        { nameKey: "common.services.carRental", value: 834, color: "#f59e0b" },
        { nameKey: "common.services.restaurant", value: 690, color: "#8b5cf6" },
        { nameKey: "common.services.entertainment", value: 1120, color: "#10b981" }
      ],
      footer: [
        { color: "#3b82f6", textKey: "kpi.revenue.footer.amount", textVal: "1,540", typeKey: "common.services.accommodation" },
        { color: "#f59e0b", textKey: "kpi.revenue.footer.amount", textVal: "834", typeKey: "common.services.carRental" },
        { color: "#8b5cf6", textKey: "kpi.revenue.footer.amount", textVal: "690", typeKey: "common.services.restaurant" },
        { color: "#10b981", textKey: "kpi.revenue.footer.amount", textVal: "1,120", typeKey: "common.services.entertainment" }
      ]
    }
  }
}
];

export const VENDOR_QUICKACTION_MOCK = 
[
  "addVendor","vendors.docs","vendors.list"
];

export const VENDOR_QUICKVIEW_MOCK =[
  {
    "tab": "accommodation",
    path:'vendors',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "companyName", "title": "companyName" },
      { "key": "serviceCategory", "title": "serviceCategory", "translatable": true, "namespace": "common.services" },
      { "key": "manager", "title": "manager" },
      { "key": "commissionRate", "title": "commissionRate" },
      { "key": "rating", "title": "rating" },
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "VND-1001", "companyName": "Kish Marina Hotel", "serviceCategory": "accommodation", "manager": "Hassan Jafari", "commissionRate": "15%", "rating": "4.8", "contractStatus": "active" },
      { "id": "VND-1002", "companyName": "Darvishi Hotel", "serviceCategory": "accommodation", "manager": "Mehran Safa", "commissionRate": "12%", "rating": "4.5", "contractStatus": "active" },
      { "id": "VND-1003", "companyName": "Espinas Palace", "serviceCategory": "accommodation", "manager": "Shiva Soltani", "commissionRate": "15%", "rating": "4.9", "contractStatus": "active" },
      { "id": "VND-1004", "companyName": "Parsian Azadi Hotel", "serviceCategory": "accommodation", "manager": "Reza Moghaddam", "commissionRate": "14%", "rating": "4.7", "contractStatus": "active" },
      { "id": "VND-1005", "companyName": "Persepolis International Hotel", "serviceCategory": "accommodation", "manager": "Niloofar Karimi", "commissionRate": "16%", "rating": "4.6", "contractStatus": "pendingRenewal" },
    ]
  },
  {
    "tab": "carRental",
    path:'vendors',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "companyName", "title": "companyName" },
      { "key": "serviceCategory", "title": "serviceCategory", "translatable": true, "namespace": "common.services" },
      { "key": "manager", "title": "manager" },
      { "key": "commissionRate", "title": "commissionRate" },
      { "key": "rating", "title": "rating" },
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "VND-2001", "companyName": "Gulf Helicopters", "serviceCategory": "carRental", "manager": "Saeed Rad", "commissionRate": "10%", "rating": "4.9", "contractStatus": "active" },
      { "id": "VND-2002", "companyName": "Mahan Air", "serviceCategory": "carRental", "manager": "Azadeh Movahed", "commissionRate": "8%", "rating": "4.2", "contractStatus": "active" },
      { "id": "VND-2003", "companyName": "VIP Fleet Services", "serviceCategory": "carRental", "manager": "Omid Ramezani", "commissionRate": "18%", "rating": "4.6", "contractStatus": "active" },
      { "id": "VND-2004", "companyName": "TAP Persia Rent", "serviceCategory": "carRental", "manager": "Amir Hosseini", "commissionRate": "12%", "rating": "4.4", "contractStatus": "active" },
      { "id": "VND-2005", "companyName": "Luxury Wheels", "serviceCategory": "carRental", "manager": "Maryam Sadeghi", "commissionRate": "20%", "rating": "4.8", "contractStatus": "suspended" },
    ]
  },
  {
    "tab": "restaurant",
    path:'vendors',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "companyName", "title": "companyName" },
      { "key": "serviceCategory", "title": "serviceCategory", "translatable": true, "namespace": "common.services" },
      { "key": "manager", "title": "manager" },
      { "key": "commissionRate", "title": "commissionRate" },
      { "key": "rating", "title": "rating" },
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "VND-3001", "companyName": "Caspian Jet", "serviceCategory": "restaurant", "manager": "Samira Zare", "commissionRate": "10%", "rating": "5.0", "contractStatus": "active" },
      { "id": "VND-3002", "companyName": "Dizi House", "serviceCategory": "restaurant", "manager": "Mohsen Nouri", "commissionRate": "8%", "rating": "4.3", "contractStatus": "active" },
      { "id": "VND-3003", "companyName": "Gilaneh Traditional Restaurant", "serviceCategory": "restaurant", "manager": "Nasim Alavi", "commissionRate": "9%", "rating": "4.7", "contractStatus": "active" },
      { "id": "VND-3004", "companyName": "Sky Lounge", "serviceCategory": "restaurant", "manager": "Farhad Niknam", "commissionRate": "12%", "rating": "4.5", "contractStatus": "pendingRenewal" },
      { "id": "VND-3005", "companyName": "Seafood Market", "serviceCategory": "restaurant", "manager": "Shahab Moradi", "commissionRate": "11%", "rating": "4.4", "contractStatus": "active" },
    ]
  },
  {
    "tab": "entertainment",
    path:'vendors',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "companyName", "title": "companyName" },
      { "key": "serviceCategory", "title": "serviceCategory", "translatable": true, "namespace": "common.services" },
      { "key": "manager", "title": "manager" },
      { "key": "commissionRate", "title": "commissionRate" },
      { "key": "rating", "title": "rating" },
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "VND-4001", "companyName": "Luxe Yacht Charters", "serviceCategory": "entertainment", "manager": "Farzad Kian", "commissionRate": "20%", "rating": "4.7", "contractStatus": "pendingRenewal" },
      { "id": "VND-4002", "companyName": "Desert Safari Pro", "serviceCategory": "entertainment", "manager": "Kaveh Radmanesh", "commissionRate": "25%", "rating": "4.3", "contractStatus": "suspended" },
      { "id": "VND-4003", "companyName": "Qeshm Air", "serviceCategory": "entertainment", "manager": "Pouya Naderi", "commissionRate": "7%", "rating": "4.0", "contractStatus": "active" },
      { "id": "VND-4004", "companyName": "Tehran Paintball Club", "serviceCategory": "entertainment", "manager": "Behnam Tajik", "commissionRate": "15%", "rating": "4.6", "contractStatus": "active" },
      { "id": "VND-4005", "companyName": "Night Sky Observatory", "serviceCategory": "entertainment", "manager": "Roxana Miri", "commissionRate": "13%", "rating": "4.9", "contractStatus": "active" }
    ]
  },
];
// Employee Dashboard Mock Data
export const EMPLOYEE_KPICARDS_MOCK = [
{
  "id": "UnauthorizedAccessAttempts",
  "header": {
    "titleKey": "kpi.unauth.title",
    "tooltipKey": "kpi.unauth.tooltip"
  },

  "tabs": [
    { "id": "high", "labelKey": "kpi.unauth.level.high" },
    { "id": "sensitive", "labelKey": "kpi.unauth.level.sensitive" },
    { "id": "low", "labelKey": "kpi.unauth.level.low" }
  ],

  "data": {
    "high": {
      "type": "number",
      "value": 12,
      "unitKey": "kpi.unauth.unit",
      "footer": [
        {
          "color": "#ef4444",
          "textKey": "kpi.unauth.footer.topSource",
          "textVal": "Financial module access",
          "icon": "alert-triangle"
        }
      ]
    },

    "sensitive": {
      "type": "number",
      "value": 37,
      "unitKey": "kpi.unauth.unit",
      "footer": [
        {
          "color": "#f59e0b",
          "textKey": "kpi.unauth.footer.topSource",
          "textVal": "Unauthorized report download",
          "icon": "shield-warning"
        }
      ]
    },

    "low": {
      "type": "number",
      "value": 148,
      "unitKey": "kpi.unauth.unit",
      "footer": [
        {
          "color": "#3b82f6",
          "textKey": "kpi.unauth.footer.topSource",
          "textVal": "Invalid login attempts",
          "icon": "info"
        }
      ]
    }
  }
},
{
  "id": "EmployeeDepartmentDistribution",

  "header": {
    "titleKey": "kpi.employeeDeptDist.title",
    "tooltipKey": "kpi.employeeDeptDist.tooltip"
  },

  "tabs": [
    { "id": "all", "labelKey": "kpi.employeeDeptDist.tab.all" }
  ],

  "data": {
    "all": {
      "type": "chart",
      "chartType": "pie",
      "value": [
        { "nameKey": "kpi.employeeDeptDist.department.management", "value": 32 },
        { "nameKey": "kpi.employeeDeptDist.department.support", "value": 54 },
        { "nameKey": "kpi.employeeDeptDist.department.marketing", "value": 21 },
        { "nameKey": "kpi.employeeDeptDist.department.finance", "value": 15 },
        { "nameKey": "kpi.employeeDeptDist.department.technical", "value": 73 }
      ],

      "footer": [
        {
          "status": "info",
          "color": "#3b82f6",
          "textKey": "kpi.employeeDeptDist.footer.management",
          "textVal": "24 active"
        },
        {
          "status": "info",
          "color": "#10b981",
          "textKey": "kpi.employeeDeptDist.footer.support",
          "textVal": "48 active"
        },
        {
          "status": "info",
          "color": "#f59e0b",
          "textKey": "kpi.employeeDeptDist.footer.marketing",
          "textVal": "19 active"
        },
        {
          "status": "info",
          "color": "#ef4444",
          "textKey": "kpi.employeeDeptDist.footer.finance",
          "textVal": "5 active"
        },
        {
          "status": "info",
          "color": "#8b5cf6",
          "textKey": "kpi.employeeDeptDist.footer.technical",
          "textVal": "58 active"
        }
      ]
    }
  }
},
{
  "id": "CurrentOfficialRequests",
  "header": {
    "titleKey": "kpi.requests.title",
    "tooltipKey": "kpi.requests.tooltip"
  },

  "tabs": [
    { "id": "pending", "labelKey": "kpi.requests.tab.pending" },
    { "id": "inReview", "labelKey": "kpi.requests.tab.inReview" },
    { "id": "completed", "labelKey": "kpi.requests.tab.completed" }
  ],

  "data": {
    "pending": {
      "type": "number",
      "value": 42,
      "unitKey": "kpi.requests.unit",

      "footer": [
        {
          "icon": "folder",
          "color": "#3b82f6",
          "textKey": "kpi.requests.footer.topTopic",
          "textVal": "Time-off requests"
        },
        {
          "icon": "user-check",
          "color": "#6366f1",
          "textKey": "kpi.requests.footer.topRecipient",
          "textVal": "HR Manager"
        }
      ]
    },

    "inReview": {
      "type": "number",
      "value": 18,
      "unitKey": "kpi.requests.unit",

      "footer": [
        {
          "icon": "folder",
          "color": "#f59e0b",
          "textKey": "kpi.requests.footer.topTopic",
          "textVal": "Project assignment changes"
        },
        {
          "icon": "user-check",
          "color": "#f97316",
          "textKey": "kpi.requests.footer.topRecipient",
          "textVal": "PMO Lead"
        }
      ]
    },

    "completed": {
      "type": "number",
      "value": 87,
      "unitKey": "kpi.requests.unit",

      "footer": [
        {
          "icon": "folder",
          "color": "#10b981",
          "textKey": "kpi.requests.footer.topTopic",
          "textVal": "Training approval"
        },
        {
          "icon": "user-check",
          "color": "#34d399",
          "textKey": "kpi.requests.footer.topRecipient",
          "textVal": "Training Department"
        }
      ]
    }
  }
},
];

export const EMPLOYEE_QUICKACTION_MOCK = 
[
  "employee.history",
]

export const EMPLOYEE_QUICKVIEW_MOCK =[
  {
    "tab": "management",
    path:'employees',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "department", "title": "department", "translatable": true, "namespace": "department" },
      { "key": "location", "title": "location" },
      { "key": "accessRole", "title": "accessRole", "translatable": true, "namespace": "roles" },
      { "key": "joinDate", "title": "joinDate" },
      { "key": "status", "title": "status", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "EMP-4567", "fullName": "Ehsan Mohammadi", "department": "management", "location": "Kish HQ", "accessRole": "superAdmin", "joinDate": "2024-05-10", "status": "active" },
      { "id": "EMP-7890", "fullName": "Narges Karimi", "department": "management", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2023-11-01", "status": "active" },
      { "id": "EMP-1234", "fullName": "Behnam Ahmadi", "department": "management", "location": "Dubai Office", "accessRole": "superAdmin", "joinDate": "2024-09-15", "status": "active" },
      { "id": "EMP-5678", "fullName": "Laleh Forouhar", "department": "management", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2025-01-10", "status": "active" },
      { "id": "EMP-9012", "fullName": "Hamid Rezaei", "department": "management", "location": "Remote", "accessRole": "operationManager", "joinDate": "2024-07-20", "status": "active" },
    ]
  },
  {
    "tab": "support",
    path:'employees',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "department", "title": "department", "translatable": true, "namespace": "department" },
      { "key": "location", "title": "location" },
      { "key": "accessRole", "title": "accessRole", "translatable": true, "namespace": "roles" },
      { "key": "joinDate", "title": "joinDate" },
      { "key": "status", "title": "status", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "EMP-5656", "fullName": "Navid Shirazi", "department": "support", "location": "Dubai Office", "accessRole": "admin", "joinDate": "2025-03-10", "status": "active" },
      { "id": "EMP-6655", "fullName": "Parisa Vahidi", "department": "support", "location": "Kish HQ", "accessRole": "admin", "joinDate": "2025-11-05", "status": "inactive" },
      { "id": "EMP-7777", "fullName": "Mehdi Tajik", "department": "support", "location": "Tehran Branch", "accessRole": "support", "joinDate": "2025-06-15", "status": "active" },
      { "id": "EMP-8888", "fullName": "Sara Mohseni", "department": "support", "location": "Remote", "accessRole": "support", "joinDate": "2026-01-25", "status": "active" },
      { "id": "EMP-9999", "fullName": "Ali Rahimi", "department": "support", "location": "Kish HQ", "accessRole": "admin", "joinDate": "2025-09-12", "status": "active" },
    ]
  },
  {
    "tab": "marketing",
    path:'employees',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "department", "title": "department", "translatable": true, "namespace": "department" },
      { "key": "location", "title": "location" },
      { "key": "accessRole", "title": "accessRole", "translatable": true, "namespace": "roles" },
      { "key": "joinDate", "title": "joinDate" },
      { "key": "status", "title": "status", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "EMP-4545", "fullName": "Shadi Rezaei", "department": "marketing", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2025-01-15", "status": "active" },
      { "id": "EMP-6556", "fullName": "Samaneh Rad", "department": "marketing", "location": "Tehran Branch", "accessRole": "contentManager", "joinDate": "2026-01-20", "status": "active" },
      { "id": "EMP-1111", "fullName": "Kaveh Moradi", "department": "marketing", "location": "Kish HQ", "accessRole": "contentManager", "joinDate": "2025-04-01", "status": "active" },
      { "id": "EMP-2222", "fullName": "Nadia Hosseini", "department": "marketing", "location": "Remote", "accessRole": "operationManager", "joinDate": "2025-08-18", "status": "active" },
      { "id": "EMP-3333", "fullName": "Omid Jafari", "department": "marketing", "location": "Dubai Office", "accessRole": "technicalAdmin", "joinDate": "2025-11-30", "status": "active" },
      ]
  },
  {
    "tab": "finance",
    path:'employees',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "department", "title": "department", "translatable": true, "namespace": "department" },
      { "key": "location", "title": "location" },
      { "key": "accessRole", "title": "accessRole", "translatable": true, "namespace": "roles" },
      { "key": "joinDate", "title": "joinDate" },
      { "key": "status", "title": "status", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "EMP-5454", "fullName": "Mohsen Alavi", "department": "finance", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2024-08-01", "status": "active" },
      { "id": "EMP-6565", "fullName": "Zahra Ebrahimi", "department": "finance", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2024-06-20", "status": "active" },
      { "id": "EMP-4444", "fullName": "Reza Noori", "department": "finance", "location": "Tehran Branch", "accessRole": "financialManager", "joinDate": "2025-02-14", "status": "active" },
      { "id": "EMP-5555", "fullName": "Mona Ghaffari", "department": "finance", "location": "Remote", "accessRole": "admin", "joinDate": "2025-05-22", "status": "active" },
      { "id": "EMP-6666", "fullName": "Sina Khodadadi", "department": "finance", "location": "Kish HQ", "accessRole": "technicalAdmin", "joinDate": "2024-12-10", "status": "inactive" },
    ]
  },
  {
    "tab": "technical",
    path:'employees',
    "columns": [
      { "key": "id", "title": "id" },
      { "key": "fullName", "title": "fullName" },
      { "key": "department", "title": "department", "translatable": true, "namespace": "department" },
      { "key": "location", "title": "location" },
      { "key": "accessRole", "title": "accessRole", "translatable": true, "namespace": "roles" },
      { "key": "joinDate", "title": "joinDate" },
      { "key": "status", "title": "status", "translatable": true, "namespace": "common.status" }
    ],
    "data": [
      { "id": "EMP-5566", "fullName": "Milad Ghasemi", "department": "technical", "location": "Remote", "accessRole": "vendors", "joinDate": "2024-12-01", "status": "active" },
      { "id": "EMP-5665", "fullName": "Farhad Majidi", "department": "technical", "location": "Kish HQ", "accessRole": "contentManager", "joinDate": "2025-05-18", "status": "active" },
      { "id": "EMP-7770", "fullName": "Pegah Azimi", "department": "technical", "location": "Tehran Branch", "accessRole": "admin", "joinDate": "2025-07-07", "status": "active" },
      { "id": "EMP-8881", "fullName": "Arash Bahrami", "department": "technical", "location": "Dubai Office", "accessRole": "vendors", "joinDate": "2025-10-19", "status": "active" },
      { "id": "EMP-9992", "fullName": "Elham Rasti", "department": "technical", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2026-02-01", "status": "active" }
    ]
  },
]