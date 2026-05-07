// تمام دسترسی‌های سیستم (حالت پیش‌فرض همه false هستند)
export const ALL_PERMISSIONS_TEMPLATE = [
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
];

// نقش‌های از پیش تعریف شده
export const PREDEFINED_ROLES = {
  custom: { label: "Custom (شخصی‌سازی شده)", keys: [] }, // کلیدهای این مهم نیست، چون دستی تنظیم می‌شود
  super_admin: {
    label: "Super Admin",
    keys: ["fin_view", "fin_create", "fin_delete", "usr_view", "usr_edit", "usr_ban", "inv_read", "inv_write", "inv_delete"]
  },
  financial_manager: {
    label: "Financial Manager",
    keys: ["fin_view", "fin_create", "fin_delete", "usr_view"] // فقط مالی و دیدن کاربران
  },
  inventory_staff: {
    label: "Inventory Staff",
    keys: ["inv_read", "inv_write"] // فقط خواندن و نوشتن انبار (بدون حذف)
  }
};
