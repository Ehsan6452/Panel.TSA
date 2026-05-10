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
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "USR-938471", "fullName": "Aria Rostami", "email": "aria.r@example.com", "membershipTier": "gold", "totalSpent": "$45,200", "lastBooking": "2026-04-02", "accountStatus": "Active" },
      { "id": "USR-539454", "fullName": "Sara Ahmadi", "email": "sara.a@example.com", "membershipTier": "gold", "totalSpent": "$12,450", "lastBooking": "2026-03-28", "accountStatus": "Active" },
      { "id": "USR-345325", "fullName": "Kamran Tehrani", "email": "k.tehrani@example.com", "membershipTier": "silver", "totalSpent": "$1,850", "lastBooking": "2026-03-15", "accountStatus": "Inactive" },
      { "id": "USR-893452", "fullName": "Neda Moradi", "email": "neda.m@example.com", "membershipTier": "bronze", "totalSpent": "$8,900", "lastBooking": "2026-04-05", "accountStatus": "Active" },
      { "id": "USR-998354", "fullName": "Ali Hosseini", "email": "ali.h@example.com", "membershipTier": "gold", "totalSpent": "$950", "lastBooking": "2026-02-10", "accountStatus": "Active" },
      { "id": "USR-234143", "fullName": "Yasaman Nouri", "email": "yasi.n@example.com", "membershipTier": "gold", "totalSpent": "$62,000", "lastBooking": "2026-04-01", "accountStatus": "Active" },
      { "id": "USR-238742", "fullName": "Reza Karimi", "email": "r.karimi@example.com", "membershipTier": "gold", "totalSpent": "$2,100", "lastBooking": "2026-01-22", "accountStatus": "Suspended" },
      { "id": "USR-896324", "fullName": "Mina Shafiei", "email": "mina.s@example.com", "membershipTier": "silver", "totalSpent": "$15,300", "lastBooking": "2026-03-10", "accountStatus": "Active" },
      { "id": "USR-896435", "fullName": "Babak Zand", "email": "babak.z@example.com", "membershipTier": "silver", "totalSpent": "$88,500", "lastBooking": "2026-04-06", "accountStatus": "Active" },
      { "id": "USR-453244", "fullName": "Leila Farahani", "email": "l.farahani@example.com", "membershipTier": "gold", "totalSpent": "$450", "lastBooking": "2025-12-05", "accountStatus": "Inactive" }
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
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "USR-938471", "fullName": "Aria Rostami", "email": "aria.r@example.com", "membershipTier": "gold", "totalSpent": "$45,200", "lastBooking": "2026-04-02", "accountStatus": "Active" },
      { "id": "USR-345325", "fullName": "Kamran Tehrani", "email": "k.tehrani@example.com", "membershipTier": "silver", "totalSpent": "$1,850", "lastBooking": "2026-03-15", "accountStatus": "Inactive" },
      { "id": "USR-998354", "fullName": "Ali Hosseini", "email": "ali.h@example.com", "membershipTier": "gold", "totalSpent": "$950", "lastBooking": "2026-02-10", "accountStatus": "Active" },
      { "id": "USR-238742", "fullName": "Reza Karimi", "email": "r.karimi@example.com", "membershipTier": "gold", "totalSpent": "$2,100", "lastBooking": "2026-01-22", "accountStatus": "Suspended" },
      { "id": "USR-896435", "fullName": "Babak Zand", "email": "babak.z@example.com", "membershipTier": "silver", "totalSpent": "$88,500", "lastBooking": "2026-04-06", "accountStatus": "Active" },
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
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "USR-539454", "fullName": "Sara Ahmadi", "email": "sara.a@example.com", "membershipTier": "gold", "totalSpent": "$12,450", "lastBooking": "2026-03-28", "accountStatus": "Active" },
      { "id": "USR-893452", "fullName": "Neda Moradi", "email": "neda.m@example.com", "membershipTier": "bronze", "totalSpent": "$8,900", "lastBooking": "2026-04-05", "accountStatus": "Active" },
      { "id": "USR-234143", "fullName": "Yasaman Nouri", "email": "yasi.n@example.com", "membershipTier": "gold", "totalSpent": "$62,000", "lastBooking": "2026-04-01", "accountStatus": "Active" },
      { "id": "USR-896324", "fullName": "Mina Shafiei", "email": "mina.s@example.com", "membershipTier": "silver", "totalSpent": "$15,300", "lastBooking": "2026-03-10", "accountStatus": "Active" },
      { "id": "USR-453244", "fullName": "Leila Farahani", "email": "l.farahani@example.com", "membershipTier": "gold", "totalSpent": "$450", "lastBooking": "2025-12-05", "accountStatus": "Inactive" }
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
      { key: "severity", title: "severity", translatable: true, namespace: "severity" },
      { key: "ip", title: "ip" },
      { key: "desc", title: "desc" },
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
      { key: "severity", title: "severity", translatable: true, namespace: "severity" },
      { key: "ip", title: "ip" },
      { key: "desc", title: "desc" },
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
      { key: "severity", title: "severity", translatable: true, namespace: "severity" },
      { key: "ip", title: "ip" },
      { key: "desc", title: "desc" },
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
      { key: "severity", title: "severity", translatable: true, namespace: "severity" },
      { key: "ip", title: "ip" },
      { key: "desc", title: "desc" },
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
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "VND-1001", "companyName": "Kish Marina Hotel", "serviceCategory": "accommodation", "manager": "Hassan Jafari", "commissionRate": "15%", "rating": "4.8", "contractStatus": "Active" },
      { "id": "VND-1002", "companyName": "Darvishi Hotel", "serviceCategory": "accommodation", "manager": "Mehran Safa", "commissionRate": "12%", "rating": "4.5", "contractStatus": "Active" },
      { "id": "VND-1003", "companyName": "Espinas Palace", "serviceCategory": "accommodation", "manager": "Shiva Soltani", "commissionRate": "15%", "rating": "4.9", "contractStatus": "Active" },
      { "id": "VND-1004", "companyName": "Parsian Azadi Hotel", "serviceCategory": "accommodation", "manager": "Reza Moghaddam", "commissionRate": "14%", "rating": "4.7", "contractStatus": "Active" },
      { "id": "VND-1005", "companyName": "Persepolis International Hotel", "serviceCategory": "accommodation", "manager": "Niloofar Karimi", "commissionRate": "16%", "rating": "4.6", "contractStatus": "Pending Renewal" },

      { "id": "VND-2001", "companyName": "Gulf Helicopters", "serviceCategory": "carRental", "manager": "Saeed Rad", "commissionRate": "10%", "rating": "4.9", "contractStatus": "Active" },
      { "id": "VND-2002", "companyName": "Mahan Air", "serviceCategory": "carRental", "manager": "Azadeh Movahed", "commissionRate": "8%", "rating": "4.2", "contractStatus": "Active" },
      { "id": "VND-2003", "companyName": "VIP Fleet Services", "serviceCategory": "carRental", "manager": "Omid Ramezani", "commissionRate": "18%", "rating": "4.6", "contractStatus": "Active" },
      { "id": "VND-2004", "companyName": "TAP Persia Rent", "serviceCategory": "carRental", "manager": "Amir Hosseini", "commissionRate": "12%", "rating": "4.4", "contractStatus": "Active" },
      { "id": "VND-2005", "companyName": "Luxury Wheels", "serviceCategory": "carRental", "manager": "Maryam Sadeghi", "commissionRate": "20%", "rating": "4.8", "contractStatus": "Suspended" },

      { "id": "VND-3001", "companyName": "Caspian Jet", "serviceCategory": "restaurant", "manager": "Samira Zare", "commissionRate": "10%", "rating": "5.0", "contractStatus": "Active" },
      { "id": "VND-3002", "companyName": "Dizi House", "serviceCategory": "restaurant", "manager": "Mohsen Nouri", "commissionRate": "8%", "rating": "4.3", "contractStatus": "Active" },
      { "id": "VND-3003", "companyName": "Gilaneh Traditional Restaurant", "serviceCategory": "restaurant", "manager": "Nasim Alavi", "commissionRate": "9%", "rating": "4.7", "contractStatus": "Active" },
      { "id": "VND-3004", "companyName": "Sky Lounge", "serviceCategory": "restaurant", "manager": "Farhad Niknam", "commissionRate": "12%", "rating": "4.5", "contractStatus": "Pending Renewal" },
      { "id": "VND-3005", "companyName": "Seafood Market", "serviceCategory": "restaurant", "manager": "Shahab Moradi", "commissionRate": "11%", "rating": "4.4", "contractStatus": "Active" },

      { "id": "VND-4001", "companyName": "Luxe Yacht Charters", "serviceCategory": "entertainment", "manager": "Farzad Kian", "commissionRate": "20%", "rating": "4.7", "contractStatus": "Pending Renewal" },
      { "id": "VND-4002", "companyName": "Desert Safari Pro", "serviceCategory": "entertainment", "manager": "Kaveh Radmanesh", "commissionRate": "25%", "rating": "4.3", "contractStatus": "Suspended" },
      { "id": "VND-4003", "companyName": "Qeshm Air", "serviceCategory": "entertainment", "manager": "Pouya Naderi", "commissionRate": "7%", "rating": "4.0", "contractStatus": "Active" },
      { "id": "VND-4004", "companyName": "Tehran Paintball Club", "serviceCategory": "entertainment", "manager": "Behnam Tajik", "commissionRate": "15%", "rating": "4.6", "contractStatus": "Active" },
      { "id": "VND-4005", "companyName": "Night Sky Observatory", "serviceCategory": "entertainment", "manager": "Roxana Miri", "commissionRate": "13%", "rating": "4.9", "contractStatus": "Active" }
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
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "VND-1001", "companyName": "Kish Marina Hotel", "serviceCategory": "accommodation", "manager": "Hassan Jafari", "commissionRate": "15%", "rating": "4.8", "contractStatus": "Active" },
      { "id": "VND-1002", "companyName": "Darvishi Hotel", "serviceCategory": "accommodation", "manager": "Mehran Safa", "commissionRate": "12%", "rating": "4.5", "contractStatus": "Active" },
      { "id": "VND-1003", "companyName": "Espinas Palace", "serviceCategory": "accommodation", "manager": "Shiva Soltani", "commissionRate": "15%", "rating": "4.9", "contractStatus": "Active" },
      { "id": "VND-1004", "companyName": "Parsian Azadi Hotel", "serviceCategory": "accommodation", "manager": "Reza Moghaddam", "commissionRate": "14%", "rating": "4.7", "contractStatus": "Active" },
      { "id": "VND-1005", "companyName": "Persepolis International Hotel", "serviceCategory": "accommodation", "manager": "Niloofar Karimi", "commissionRate": "16%", "rating": "4.6", "contractStatus": "Pending Renewal" },
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
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "VND-2001", "companyName": "Gulf Helicopters", "serviceCategory": "carRental", "manager": "Saeed Rad", "commissionRate": "10%", "rating": "4.9", "contractStatus": "Active" },
      { "id": "VND-2002", "companyName": "Mahan Air", "serviceCategory": "carRental", "manager": "Azadeh Movahed", "commissionRate": "8%", "rating": "4.2", "contractStatus": "Active" },
      { "id": "VND-2003", "companyName": "VIP Fleet Services", "serviceCategory": "carRental", "manager": "Omid Ramezani", "commissionRate": "18%", "rating": "4.6", "contractStatus": "Active" },
      { "id": "VND-2004", "companyName": "TAP Persia Rent", "serviceCategory": "carRental", "manager": "Amir Hosseini", "commissionRate": "12%", "rating": "4.4", "contractStatus": "Active" },
      { "id": "VND-2005", "companyName": "Luxury Wheels", "serviceCategory": "carRental", "manager": "Maryam Sadeghi", "commissionRate": "20%", "rating": "4.8", "contractStatus": "Suspended" },
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
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "VND-3001", "companyName": "Caspian Jet", "serviceCategory": "restaurant", "manager": "Samira Zare", "commissionRate": "10%", "rating": "5.0", "contractStatus": "Active" },
      { "id": "VND-3002", "companyName": "Dizi House", "serviceCategory": "restaurant", "manager": "Mohsen Nouri", "commissionRate": "8%", "rating": "4.3", "contractStatus": "Active" },
      { "id": "VND-3003", "companyName": "Gilaneh Traditional Restaurant", "serviceCategory": "restaurant", "manager": "Nasim Alavi", "commissionRate": "9%", "rating": "4.7", "contractStatus": "Active" },
      { "id": "VND-3004", "companyName": "Sky Lounge", "serviceCategory": "restaurant", "manager": "Farhad Niknam", "commissionRate": "12%", "rating": "4.5", "contractStatus": "Pending Renewal" },
      { "id": "VND-3005", "companyName": "Seafood Market", "serviceCategory": "restaurant", "manager": "Shahab Moradi", "commissionRate": "11%", "rating": "4.4", "contractStatus": "Active" },
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
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "VND-4001", "companyName": "Luxe Yacht Charters", "serviceCategory": "entertainment", "manager": "Farzad Kian", "commissionRate": "20%", "rating": "4.7", "contractStatus": "Pending Renewal" },
      { "id": "VND-4002", "companyName": "Desert Safari Pro", "serviceCategory": "entertainment", "manager": "Kaveh Radmanesh", "commissionRate": "25%", "rating": "4.3", "contractStatus": "Suspended" },
      { "id": "VND-4003", "companyName": "Qeshm Air", "serviceCategory": "entertainment", "manager": "Pouya Naderi", "commissionRate": "7%", "rating": "4.0", "contractStatus": "Active" },
      { "id": "VND-4004", "companyName": "Tehran Paintball Club", "serviceCategory": "entertainment", "manager": "Behnam Tajik", "commissionRate": "15%", "rating": "4.6", "contractStatus": "Active" },
      { "id": "VND-4005", "companyName": "Night Sky Observatory", "serviceCategory": "entertainment", "manager": "Roxana Miri", "commissionRate": "13%", "rating": "4.9", "contractStatus": "Active" }
    ]
  },
]

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
      { "key": "status", "title": "status", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "EMP-4567", "fullName": "Ehsan Mohammadi", "department": "management", "location": "Kish HQ", "accessRole": "superAdmin", "joinDate": "2024-05-10", "status": "Active" },
      { "id": "EMP-7890", "fullName": "Narges Karimi", "department": "management", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2023-11-01", "status": "Active" },
      { "id": "EMP-1234", "fullName": "Behnam Ahmadi", "department": "management", "location": "Dubai Office", "accessRole": "superAdmin", "joinDate": "2024-09-15", "status": "Active" },
      { "id": "EMP-5678", "fullName": "Laleh Forouhar", "department": "management", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2025-01-10", "status": "Active" },
      { "id": "EMP-9012", "fullName": "Hamid Rezaei", "department": "management", "location": "Remote", "accessRole": "operationManager", "joinDate": "2024-07-20", "status": "Active" },

      { "id": "EMP-5656", "fullName": "Navid Shirazi", "department": "support", "location": "Dubai Office", "accessRole": "admin", "joinDate": "2025-03-10", "status": "Active" },
      { "id": "EMP-6655", "fullName": "Parisa Vahidi", "department": "support", "location": "Kish HQ", "accessRole": "admin", "joinDate": "2025-11-05", "status": "Inactive" },
      { "id": "EMP-7777", "fullName": "Mehdi Tajik", "department": "support", "location": "Tehran Branch", "accessRole": "support", "joinDate": "2025-06-15", "status": "Active" },
      { "id": "EMP-8888", "fullName": "Sara Mohseni", "department": "support", "location": "Remote", "accessRole": "support", "joinDate": "2026-01-25", "status": "Active" },
      { "id": "EMP-9999", "fullName": "Ali Rahimi", "department": "support", "location": "Kish HQ", "accessRole": "admin", "joinDate": "2025-09-12", "status": "Active" },

      { "id": "EMP-4545", "fullName": "Shadi Rezaei", "department": "marketing", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2025-01-15", "status": "Active" },
      { "id": "EMP-6556", "fullName": "Samaneh Rad", "department": "marketing", "location": "Tehran Branch", "accessRole": "contentManager", "joinDate": "2026-01-20", "status": "Active" },
      { "id": "EMP-1111", "fullName": "Kaveh Moradi", "department": "marketing", "location": "Kish HQ", "accessRole": "contentManager", "joinDate": "2025-04-01", "status": "Active" },
      { "id": "EMP-2222", "fullName": "Nadia Hosseini", "department": "marketing", "location": "Remote", "accessRole": "operationManager", "joinDate": "2025-08-18", "status": "Active" },
      { "id": "EMP-3333", "fullName": "Omid Jafari", "department": "marketing", "location": "Dubai Office", "accessRole": "technicalAdmin", "joinDate": "2025-11-30", "status": "Active" },

      { "id": "EMP-5454", "fullName": "Mohsen Alavi", "department": "finance", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2024-08-01", "status": "Active" },
      { "id": "EMP-6565", "fullName": "Zahra Ebrahimi", "department": "finance", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2024-06-20", "status": "Active" },
      { "id": "EMP-4444", "fullName": "Reza Noori", "department": "finance", "location": "Tehran Branch", "accessRole": "financialManager", "joinDate": "2025-02-14", "status": "Active" },
      { "id": "EMP-5555", "fullName": "Mona Ghaffari", "department": "finance", "location": "Remote", "accessRole": "admin", "joinDate": "2025-05-22", "status": "Active" },
      { "id": "EMP-6666", "fullName": "Sina Khodadadi", "department": "finance", "location": "Kish HQ", "accessRole": "technicalAdmin", "joinDate": "2024-12-10", "status": "Inactive" },

      { "id": "EMP-5566", "fullName": "Milad Ghasemi", "department": "technical", "location": "Remote", "accessRole": "vendors", "joinDate": "2024-12-01", "status": "Active" },
      { "id": "EMP-5665", "fullName": "Farhad Majidi", "department": "technical", "location": "Kish HQ", "accessRole": "contentManager", "joinDate": "2025-05-18", "status": "Active" },
      { "id": "EMP-7770", "fullName": "Pegah Azimi", "department": "technical", "location": "Tehran Branch", "accessRole": "admin", "joinDate": "2025-07-07", "status": "Active" },
      { "id": "EMP-8881", "fullName": "Arash Bahrami", "department": "technical", "location": "Dubai Office", "accessRole": "vendors", "joinDate": "2025-10-19", "status": "Active" },
      { "id": "EMP-9992", "fullName": "Elham Rasti", "department": "technical", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2026-02-01", "status": "Active" }
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
      { "key": "status", "title": "status", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "EMP-4567", "fullName": "Ehsan Mohammadi", "department": "management", "location": "Kish HQ", "accessRole": "superAdmin", "joinDate": "2024-05-10", "status": "Active" },
      { "id": "EMP-7890", "fullName": "Narges Karimi", "department": "management", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2023-11-01", "status": "Active" },
      { "id": "EMP-1234", "fullName": "Behnam Ahmadi", "department": "management", "location": "Dubai Office", "accessRole": "superAdmin", "joinDate": "2024-09-15", "status": "Active" },
      { "id": "EMP-5678", "fullName": "Laleh Forouhar", "department": "management", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2025-01-10", "status": "Active" },
      { "id": "EMP-9012", "fullName": "Hamid Rezaei", "department": "management", "location": "Remote", "accessRole": "operationManager", "joinDate": "2024-07-20", "status": "Active" },
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
      { "key": "status", "title": "status", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "EMP-5656", "fullName": "Navid Shirazi", "department": "support", "location": "Dubai Office", "accessRole": "admin", "joinDate": "2025-03-10", "status": "Active" },
      { "id": "EMP-6655", "fullName": "Parisa Vahidi", "department": "support", "location": "Kish HQ", "accessRole": "admin", "joinDate": "2025-11-05", "status": "Inactive" },
      { "id": "EMP-7777", "fullName": "Mehdi Tajik", "department": "support", "location": "Tehran Branch", "accessRole": "support", "joinDate": "2025-06-15", "status": "Active" },
      { "id": "EMP-8888", "fullName": "Sara Mohseni", "department": "support", "location": "Remote", "accessRole": "support", "joinDate": "2026-01-25", "status": "Active" },
      { "id": "EMP-9999", "fullName": "Ali Rahimi", "department": "support", "location": "Kish HQ", "accessRole": "admin", "joinDate": "2025-09-12", "status": "Active" },
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
      { "key": "status", "title": "status", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "EMP-4545", "fullName": "Shadi Rezaei", "department": "marketing", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2025-01-15", "status": "Active" },
      { "id": "EMP-6556", "fullName": "Samaneh Rad", "department": "marketing", "location": "Tehran Branch", "accessRole": "contentManager", "joinDate": "2026-01-20", "status": "Active" },
      { "id": "EMP-1111", "fullName": "Kaveh Moradi", "department": "marketing", "location": "Kish HQ", "accessRole": "contentManager", "joinDate": "2025-04-01", "status": "Active" },
      { "id": "EMP-2222", "fullName": "Nadia Hosseini", "department": "marketing", "location": "Remote", "accessRole": "operationManager", "joinDate": "2025-08-18", "status": "Active" },
      { "id": "EMP-3333", "fullName": "Omid Jafari", "department": "marketing", "location": "Dubai Office", "accessRole": "technicalAdmin", "joinDate": "2025-11-30", "status": "Active" },
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
      { "key": "status", "title": "status", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "EMP-5454", "fullName": "Mohsen Alavi", "department": "finance", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2024-08-01", "status": "Active" },
      { "id": "EMP-6565", "fullName": "Zahra Ebrahimi", "department": "finance", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2024-06-20", "status": "Active" },
      { "id": "EMP-4444", "fullName": "Reza Noori", "department": "finance", "location": "Tehran Branch", "accessRole": "financialManager", "joinDate": "2025-02-14", "status": "Active" },
      { "id": "EMP-5555", "fullName": "Mona Ghaffari", "department": "finance", "location": "Remote", "accessRole": "admin", "joinDate": "2025-05-22", "status": "Active" },
      { "id": "EMP-6666", "fullName": "Sina Khodadadi", "department": "finance", "location": "Kish HQ", "accessRole": "technicalAdmin", "joinDate": "2024-12-10", "status": "Inactive" },
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
      { "key": "status", "title": "status", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "EMP-5566", "fullName": "Milad Ghasemi", "department": "technical", "location": "Remote", "accessRole": "vendors", "joinDate": "2024-12-01", "status": "Active" },
      { "id": "EMP-5665", "fullName": "Farhad Majidi", "department": "technical", "location": "Kish HQ", "accessRole": "contentManager", "joinDate": "2025-05-18", "status": "Active" },
      { "id": "EMP-7770", "fullName": "Pegah Azimi", "department": "technical", "location": "Tehran Branch", "accessRole": "admin", "joinDate": "2025-07-07", "status": "Active" },
      { "id": "EMP-8881", "fullName": "Arash Bahrami", "department": "technical", "location": "Dubai Office", "accessRole": "vendors", "joinDate": "2025-10-19", "status": "Active" },
      { "id": "EMP-9992", "fullName": "Elham Rasti", "department": "technical", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2026-02-01", "status": "Active" }
    ]
  },
]

//User Profile MOCK
export const USER_PROFILE_MOCK = [
  {
    "id": "USR-938471",
    "personalInfo": {
      "firstName": "Aria",
      "lastName": "Rostami",
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
      "firstName": "Sara",
      "lastName": "Ahmadi",
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
      "firstName": "Kamran",
      "lastName": "Tehrani",
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
      "firstName": "Neda",
      "lastName": "Moradi",
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
      "firstName": "Ali",
      "lastName": "Hosseini",
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
      "firstName": "Yasaman",
      "lastName": "Nouri",
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
      "firstName": "Reza",
      "lastName": "Karimi",
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
      "firstName": "Mina",
      "lastName": "Shafiei",
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
      "firstName": "Babak",
      "lastName": "Zand",
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
      "firstName": "Leila",
      "lastName": "Farahani",
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
      "firstName": "Kish",
      "lastName": "MarinaHotel",
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
      "firstName": "Gulf",
      "lastName": "Helicopters",
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
      "firstName": "Mahan",
      "lastName": "Air",
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
      "firstName": "Luxe",
      "lastName": "YachtCharters",
      "avatarUrl": null
    },
    "contactInfo": {
      "email": "luxe.yacht@example.com",
      "phone": "09350000004"
    },
    "systemData": {
      "userType": "supplier",
      "subType": "Enteentertainmentrtainment",
      "status": "pending",
      "createdAt": "1402/06/03",
      "lastActivity": "1405/01/02 14:20:00"
    }
  },
  {
    "id": "VND-5454",
    "personalInfo": {
      "firstName": "Darvishi",
      "lastName": "Hotel",
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
      "firstName": "VIP",
      "lastName": "FleetServices",
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
      "firstName": "Desert",
      "lastName": "SafariPro",
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
      "firstName": "Espinas",
      "lastName": "Palace",
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
      "firstName": "Qeshm",
      "lastName": "Air",
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
      "firstName": "Caspian",
      "lastName": "Jet",
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
]
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
]

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
]

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
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "USR-938471", "fullName": "Aria Rostami", "email": "aria.r@example.com", "membershipTier": "gold", "totalSpent": "$45,200", "lastBooking": "2026-04-02", "accountStatus": "Active" },
      { "id": "USR-539454", "fullName": "Sara Ahmadi", "email": "sara.a@example.com", "membershipTier": "gold", "totalSpent": "$12,450", "lastBooking": "2026-03-28", "accountStatus": "Active" },
      { "id": "USR-345325", "fullName": "Kamran Tehrani", "email": "k.tehrani@example.com", "membershipTier": "silver", "totalSpent": "$1,850", "lastBooking": "2026-03-15", "accountStatus": "Inactive" },
      { "id": "USR-893452", "fullName": "Neda Moradi", "email": "neda.m@example.com", "membershipTier": "bronze", "totalSpent": "$8,900", "lastBooking": "2026-04-05", "accountStatus": "Active" },
      { "id": "USR-998354", "fullName": "Ali Hosseini", "email": "ali.h@example.com", "membershipTier": "gold", "totalSpent": "$950", "lastBooking": "2026-02-10", "accountStatus": "Active" },
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
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "VND-2345", "companyName": "Kish Marina Hotel", "serviceCategory": "accommodation", "manager": "Hassan Jafari", "commissionRate": "15%", "rating": "4.8", "contractStatus": "Active" },
      { "id": "VND-5445", "companyName": "Gulf Helicopters", "serviceCategory": "carRental", "manager": "Saeed Rad", "commissionRate": "10%", "rating": "4.9", "contractStatus": "Active" },
      { "id": "VND-4554", "companyName": "Mahan Air", "serviceCategory": "carRental", "manager": "Azadeh Movahed", "commissionRate": "8%", "rating": "4.2", "contractStatus": "Active" },
      { "id": "VND-4545", "companyName": "Luxe Yacht Charters", "serviceCategory": "entertainment", "manager": "Farzad Kian", "commissionRate": "20%", "rating": "4.7", "contractStatus": "Pending Renewal" },
      { "id": "VND-5454", "companyName": "Darvishi Hotel", "serviceCategory": "accommodation", "manager": "Mehran Safa", "commissionRate": "12%", "rating": "4.5", "contractStatus": "Active" },
      { "id": "VND-5544", "companyName": "VIP Fleet Services", "serviceCategory": "carRental", "manager": "Omid Ramezani", "commissionRate": "18%", "rating": "4.6", "contractStatus": "Active" },
      { "id": "VND-4455", "companyName": "Desert Safari Pro", "serviceCategory": "entertainment", "manager": "Kaveh Radmanesh", "commissionRate": "25%", "rating": "4.3", "contractStatus": "Suspended" },
      { "id": "VND-5554", "companyName": "Espinas Palace", "serviceCategory": "accommodation", "manager": "Shiva Soltani", "commissionRate": "15%", "rating": "4.9", "contractStatus": "Active" },
      { "id": "VND-5545", "companyName": "Qeshm Air", "serviceCategory": "entertainment", "manager": "Pouya Naderi", "commissionRate": "7%", "rating": "4.0", "contractStatus": "Active" },
      { "id": "VND-5455", "companyName": "Caspian Jet", "serviceCategory": "restaurant", "manager": "Samira Zare", "commissionRate": "10%", "rating": "5.0", "contractStatus": "Active" }
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
      { "key": "status", "title": "status", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "EMP-4567", "fullName": "Ehsan Mohammadi", "department": "management", "location": "Kish HQ", "accessRole": "superAdmin", "joinDate": "2024-05-10", "status": "Active" },
      { "id": "EMP-4545", "fullName": "Shadi Rezaei", "department": "marketting", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2025-01-15", "status": "Active" },
      { "id": "EMP-5454", "fullName": "Mohsen Alavi", "department": "finance", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2024-08-01", "status": "Active" },
      { "id": "EMP-6565", "fullName": "Zahra Ebrahimi", "department": "finance", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2024-06-20", "status": "Active" },
      { "id": "EMP-5656", "fullName": "Navid Shirazi", "department": "support", "location": "Dubai Office", "accessRole": "admin", "joinDate": "2025-03-10", "status": "Active" },
    ]
  }
]

export const QUICKACTION_MOCK =
[
  "permissions", "reservations", "securityAlerts", "contracts"
]

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
]

export const USER_QUICKACTION_MOCK = 
[
"addUser","usersList","usersHistory"
]

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
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "USR-938471", "fullName": "Aria Rostami", "email": "aria.r@example.com", "membershipTier": "gold", "totalSpent": "$45,200", "lastBooking": "2026-04-02", "accountStatus": "Active" },
      { "id": "USR-539454", "fullName": "Sara Ahmadi", "email": "sara.a@example.com", "membershipTier": "gold", "totalSpent": "$12,450", "lastBooking": "2026-03-28", "accountStatus": "Active" },
      { "id": "USR-345325", "fullName": "Kamran Tehrani", "email": "k.tehrani@example.com", "membershipTier": "silver", "totalSpent": "$1,850", "lastBooking": "2026-03-15", "accountStatus": "Inactive" },
      { "id": "USR-453244", "fullName": "Leila Farahani", "email": "l.farahani@example.com", "membershipTier": "gold", "totalSpent": "$450", "lastBooking": "2025-12-05", "accountStatus": "Inactive" }
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
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "USR-938471", "fullName": "Aria Rostami", "email": "aria.r@example.com", "membershipTier": "gold", "totalSpent": "$45,200", "lastBooking": "2026-04-02", "accountStatus": "Active" },
      { "id": "USR-345325", "fullName": "Kamran Tehrani", "email": "k.tehrani@example.com", "membershipTier": "silver", "totalSpent": "$1,850", "lastBooking": "2026-03-15", "accountStatus": "Inactive" },
      { "id": "USR-998354", "fullName": "Ali Hosseini", "email": "ali.h@example.com", "membershipTier": "gold", "totalSpent": "$950", "lastBooking": "2026-02-10", "accountStatus": "Active" },
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
      { "key": "accountStatus", "title": "accountStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "USR-539454", "fullName": "Sara Ahmadi", "email": "sara.a@example.com", "membershipTier": "gold", "totalSpent": "$12,450", "lastBooking": "2026-03-28", "accountStatus": "Active" },
      { "id": "USR-896324", "fullName": "Mina Shafiei", "email": "mina.s@example.com", "membershipTier": "silver", "totalSpent": "$15,300", "lastBooking": "2026-03-10", "accountStatus": "Active" },
      { "id": "USR-453244", "fullName": "Leila Farahani", "email": "l.farahani@example.com", "membershipTier": "gold", "totalSpent": "$450", "lastBooking": "2025-12-05", "accountStatus": "Inactive" }
    ]
  },
]

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
]

export const VENDOR_QUICKACTION_MOCK = 
[
  "addVendor","verifyVendorDocs","vendorsList"
]

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
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "VND-1001", "companyName": "Kish Marina Hotel", "serviceCategory": "accommodation", "manager": "Hassan Jafari", "commissionRate": "15%", "rating": "4.8", "contractStatus": "Active" },
      { "id": "VND-1002", "companyName": "Darvishi Hotel", "serviceCategory": "accommodation", "manager": "Mehran Safa", "commissionRate": "12%", "rating": "4.5", "contractStatus": "Active" },
      { "id": "VND-1003", "companyName": "Espinas Palace", "serviceCategory": "accommodation", "manager": "Shiva Soltani", "commissionRate": "15%", "rating": "4.9", "contractStatus": "Active" },
      { "id": "VND-1004", "companyName": "Parsian Azadi Hotel", "serviceCategory": "accommodation", "manager": "Reza Moghaddam", "commissionRate": "14%", "rating": "4.7", "contractStatus": "Active" },
      { "id": "VND-1005", "companyName": "Persepolis International Hotel", "serviceCategory": "accommodation", "manager": "Niloofar Karimi", "commissionRate": "16%", "rating": "4.6", "contractStatus": "Pending Renewal" },
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
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "VND-2001", "companyName": "Gulf Helicopters", "serviceCategory": "carRental", "manager": "Saeed Rad", "commissionRate": "10%", "rating": "4.9", "contractStatus": "Active" },
      { "id": "VND-2002", "companyName": "Mahan Air", "serviceCategory": "carRental", "manager": "Azadeh Movahed", "commissionRate": "8%", "rating": "4.2", "contractStatus": "Active" },
      { "id": "VND-2003", "companyName": "VIP Fleet Services", "serviceCategory": "carRental", "manager": "Omid Ramezani", "commissionRate": "18%", "rating": "4.6", "contractStatus": "Active" },
      { "id": "VND-2004", "companyName": "TAP Persia Rent", "serviceCategory": "carRental", "manager": "Amir Hosseini", "commissionRate": "12%", "rating": "4.4", "contractStatus": "Active" },
      { "id": "VND-2005", "companyName": "Luxury Wheels", "serviceCategory": "carRental", "manager": "Maryam Sadeghi", "commissionRate": "20%", "rating": "4.8", "contractStatus": "Suspended" },
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
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "VND-3001", "companyName": "Caspian Jet", "serviceCategory": "restaurant", "manager": "Samira Zare", "commissionRate": "10%", "rating": "5.0", "contractStatus": "Active" },
      { "id": "VND-3002", "companyName": "Dizi House", "serviceCategory": "restaurant", "manager": "Mohsen Nouri", "commissionRate": "8%", "rating": "4.3", "contractStatus": "Active" },
      { "id": "VND-3003", "companyName": "Gilaneh Traditional Restaurant", "serviceCategory": "restaurant", "manager": "Nasim Alavi", "commissionRate": "9%", "rating": "4.7", "contractStatus": "Active" },
      { "id": "VND-3004", "companyName": "Sky Lounge", "serviceCategory": "restaurant", "manager": "Farhad Niknam", "commissionRate": "12%", "rating": "4.5", "contractStatus": "Pending Renewal" },
      { "id": "VND-3005", "companyName": "Seafood Market", "serviceCategory": "restaurant", "manager": "Shahab Moradi", "commissionRate": "11%", "rating": "4.4", "contractStatus": "Active" },
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
      { "key": "contractStatus", "title": "contractStatus", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "VND-4001", "companyName": "Luxe Yacht Charters", "serviceCategory": "entertainment", "manager": "Farzad Kian", "commissionRate": "20%", "rating": "4.7", "contractStatus": "Pending Renewal" },
      { "id": "VND-4002", "companyName": "Desert Safari Pro", "serviceCategory": "entertainment", "manager": "Kaveh Radmanesh", "commissionRate": "25%", "rating": "4.3", "contractStatus": "Suspended" },
      { "id": "VND-4003", "companyName": "Qeshm Air", "serviceCategory": "entertainment", "manager": "Pouya Naderi", "commissionRate": "7%", "rating": "4.0", "contractStatus": "Active" },
      { "id": "VND-4004", "companyName": "Tehran Paintball Club", "serviceCategory": "entertainment", "manager": "Behnam Tajik", "commissionRate": "15%", "rating": "4.6", "contractStatus": "Active" },
      { "id": "VND-4005", "companyName": "Night Sky Observatory", "serviceCategory": "entertainment", "manager": "Roxana Miri", "commissionRate": "13%", "rating": "4.9", "contractStatus": "Active" }
    ]
  },
]
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
]

export const EMPLOYEE_QUICKACTION_MOCK = 
[
  "employeeHistory","employeeRequests","employeeMessenger","employeeDepartments"
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
      { "key": "status", "title": "status", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "EMP-4567", "fullName": "Ehsan Mohammadi", "department": "management", "location": "Kish HQ", "accessRole": "superAdmin", "joinDate": "2024-05-10", "status": "Active" },
      { "id": "EMP-7890", "fullName": "Narges Karimi", "department": "management", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2023-11-01", "status": "Active" },
      { "id": "EMP-1234", "fullName": "Behnam Ahmadi", "department": "management", "location": "Dubai Office", "accessRole": "superAdmin", "joinDate": "2024-09-15", "status": "Active" },
      { "id": "EMP-5678", "fullName": "Laleh Forouhar", "department": "management", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2025-01-10", "status": "Active" },
      { "id": "EMP-9012", "fullName": "Hamid Rezaei", "department": "management", "location": "Remote", "accessRole": "operationManager", "joinDate": "2024-07-20", "status": "Active" },
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
      { "key": "status", "title": "status", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "EMP-5656", "fullName": "Navid Shirazi", "department": "support", "location": "Dubai Office", "accessRole": "admin", "joinDate": "2025-03-10", "status": "Active" },
      { "id": "EMP-6655", "fullName": "Parisa Vahidi", "department": "support", "location": "Kish HQ", "accessRole": "admin", "joinDate": "2025-11-05", "status": "Inactive" },
      { "id": "EMP-7777", "fullName": "Mehdi Tajik", "department": "support", "location": "Tehran Branch", "accessRole": "support", "joinDate": "2025-06-15", "status": "Active" },
      { "id": "EMP-8888", "fullName": "Sara Mohseni", "department": "support", "location": "Remote", "accessRole": "support", "joinDate": "2026-01-25", "status": "Active" },
      { "id": "EMP-9999", "fullName": "Ali Rahimi", "department": "support", "location": "Kish HQ", "accessRole": "admin", "joinDate": "2025-09-12", "status": "Active" },
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
      { "key": "status", "title": "status", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "EMP-4545", "fullName": "Shadi Rezaei", "department": "marketing", "location": "Tehran Branch", "accessRole": "operationManager", "joinDate": "2025-01-15", "status": "Active" },
      { "id": "EMP-6556", "fullName": "Samaneh Rad", "department": "marketing", "location": "Tehran Branch", "accessRole": "contentManager", "joinDate": "2026-01-20", "status": "Active" },
      { "id": "EMP-1111", "fullName": "Kaveh Moradi", "department": "marketing", "location": "Kish HQ", "accessRole": "contentManager", "joinDate": "2025-04-01", "status": "Active" },
      { "id": "EMP-2222", "fullName": "Nadia Hosseini", "department": "marketing", "location": "Remote", "accessRole": "operationManager", "joinDate": "2025-08-18", "status": "Active" },
      { "id": "EMP-3333", "fullName": "Omid Jafari", "department": "marketing", "location": "Dubai Office", "accessRole": "technicalAdmin", "joinDate": "2025-11-30", "status": "Active" },
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
      { "key": "status", "title": "status", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "EMP-5454", "fullName": "Mohsen Alavi", "department": "finance", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2024-08-01", "status": "Active" },
      { "id": "EMP-6565", "fullName": "Zahra Ebrahimi", "department": "finance", "location": "Kish HQ", "accessRole": "financialManager", "joinDate": "2024-06-20", "status": "Active" },
      { "id": "EMP-4444", "fullName": "Reza Noori", "department": "finance", "location": "Tehran Branch", "accessRole": "financialManager", "joinDate": "2025-02-14", "status": "Active" },
      { "id": "EMP-5555", "fullName": "Mona Ghaffari", "department": "finance", "location": "Remote", "accessRole": "admin", "joinDate": "2025-05-22", "status": "Active" },
      { "id": "EMP-6666", "fullName": "Sina Khodadadi", "department": "finance", "location": "Kish HQ", "accessRole": "technicalAdmin", "joinDate": "2024-12-10", "status": "Inactive" },
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
      { "key": "status", "title": "status", "translatable": true, "namespace": "accountStatus" }
    ],
    "data": [
      { "id": "EMP-5566", "fullName": "Milad Ghasemi", "department": "technical", "location": "Remote", "accessRole": "vendors", "joinDate": "2024-12-01", "status": "Active" },
      { "id": "EMP-5665", "fullName": "Farhad Majidi", "department": "technical", "location": "Kish HQ", "accessRole": "contentManager", "joinDate": "2025-05-18", "status": "Active" },
      { "id": "EMP-7770", "fullName": "Pegah Azimi", "department": "technical", "location": "Tehran Branch", "accessRole": "admin", "joinDate": "2025-07-07", "status": "Active" },
      { "id": "EMP-8881", "fullName": "Arash Bahrami", "department": "technical", "location": "Dubai Office", "accessRole": "vendors", "joinDate": "2025-10-19", "status": "Active" },
      { "id": "EMP-9992", "fullName": "Elham Rasti", "department": "technical", "location": "Remote", "accessRole": "technicalAdmin", "joinDate": "2026-02-01", "status": "Active" }
    ]
  },
]