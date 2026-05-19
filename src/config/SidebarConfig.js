// src/config/sidebarConfig.js

const sidebarConfig = [
  {
    key: 'dashboard',
    label: 'sidebar.dashboard',
    path: '/dashboard',
    dividerAfter: false,
    children: []
  },
  {
    key: 'users',
    label: 'sidebar.users',
    path: '/users',
    dividerAfter: false,
    children: [
      {
        key: 'users.list',
        label: 'pages.users.list.title',
        path: '/users/list'
      },
      {
        key: 'users.history',
        label: 'pages.users.history.title',
        path: '/users/history'
      }
    ]
  },
  {
    key: 'vendors',
    label: 'sidebar.vendors',
    path: '/vendors',
    dividerAfter: false,
    children: [
      {
        key: 'vendors.list',
        label: 'pages.vendors.list.title',
        path: '/vendors/list'
      },
      {
        key: 'vendors.globalInventory',
        label: 'pages.vendors.inventory.title',
        path: '/vendors/global-inventory'
      },
      {
        key: 'vendors.docs',
        label: 'pages.vendors.docs.title',
        path: '/vendors/docs'
      }
    ]
  },
  {
    key: 'employees',
    label: 'sidebar.employees',
    path: '/employees',
    dividerAfter: false,
    children: [
      {
        key: 'employees.list',
        label: 'pages.employee.list.title',
        path: '/employees/list'
      },
      {
        key: 'employees.history',
        label: 'pages.employee.history.title',
        path: '/employees/history'
      },
      {
        key: 'employees.docs',
        label: 'pages.employee.docs.title',
        path: '/employees/docs'
      }
    ]
  },
  {
    key: 'booking',
    label: 'sidebar.booking',
    path: '/booking',
    dividerAfter: false,
    children: []
  },
  {
    key: 'financial',
    label: 'sidebar.financial',
    path: '/financial',
    dividerAfter: false,
    children: []
  },
  // {
  //   key: 'content',
  //   label: 'sidebar.content',
  //   path: '/content',
  //   dividerAfter: false,
  //   children: []
  // },
  {
    key: 'reports',
    label: 'sidebar.reports',
    path: '/reports',
    dividerAfter: false,
    children: []
  },
  // {
  //   key: 'marketing',
  //   label: 'sidebar.marketing',
  //   path: '/marketing',
  //   dividerAfter: false,
  //   children: []
  // },
  // {
  //   key: 'pushNotification',
  //   label: 'sidebar.pushNotification',
  //   path: '/push-notification',
  //   dividerAfter: false,
  //   children: []
  // },
  {
    key: 'support',
    label: 'sidebar.support',
    path: '/support',
    dividerAfter: false,
    children: []
  },
  {
    key: 'systemSetting',
    label: 'sidebar.systemSetting',
    path: '/system-setting',
    dividerAfter: false,
    children: []
  },
  {
    key: 'logSecurity',
    label: 'sidebar.logSecurity',
    path: '/log-security',
    dividerAfter: false,
    children: []
  }
];

export default sidebarConfig;
