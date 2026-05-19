import {  mockUsers,USER_LIST_MOCK, USER_PROFILE_MOCK, VENDOR_PROFILE_MOCK, EMPLOYEE_PROFILE_MOCK,
          USER_GENERAL_MOCK,USER_SPECIFIC_TRAVELER_MOCK,USER_SPECIFIC_ADMIN_MOCK,USER_PERMISSIONS_MOCK,USER_HISTORY_MOCK,
          USER_RESERVATIONS_MOCK,USER_ALL_HISTORY_MOCK,
          VENDOR_LIST_MOCK, VENDOR_GENERAL_MOCK,VENDOR_SPECEFIC_ACCOMMODATION_MOCK,
          EMPLOYEE_LIST_MOCK,
          KPICARDS_MOCK, QUICKACTION_MOCK,QUICKVIEW_MOCK,
          USER_KPICARDS_MOCK, USER_QUICKACTION_MOCK,USER_QUICKVIEW_MOCK,
          VENDOR_KPICARDS_MOCK,VENDOR_QUICKACTION_MOCK, VENDOR_QUICKVIEW_MOCK,
          EMPLOYEE_KPICARDS_MOCK,EMPLOYEE_QUICKACTION_MOCK,
          EMPLOYEE_QUICKVIEW_MOCK, } from './MockData';

// شبیه‌سازی تاخیر شبکه
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const authApi = {
  // احراز هویت
  async login(username, password) {
    await delay();
    
    const user = mockUsers.find(
      u => u.username === username && u.password === password
    );
    
    if (!user) {
      throw new Error('نام کاربری یا رمز عبور اشتباه است');
    }
    
    const { password: _, ...userWithoutPassword } = user;
    return {
      success: true,
      data: userWithoutPassword,
      token: `mock_token_${user.id}`
    };
  },

  // خروج از حساب
  async logout() {
    await delay(200);
    return { success: true };
  },

  // دریافت اطلاعات کاربر فعلی
  async getCurrentUser(token) {
    await delay();
    
    const userId = parseInt(token.split('_')[2]);
    const user = mockUsers.find(u => u.id === userId);
    
    if (!user) {
      throw new Error('کاربر یافت نشد');
    }
    
    const { password: _, ...userWithoutPassword } = user;
    return {
      success: true,
      data: userWithoutPassword
    };
  }
};

export const userApi = {
  async getCurrentUser(token) {
    await delay();
    
    const userId = parseInt(token.split('_')[2]);
    const user = mockUsers.find(u => u.id === userId);
    
    if (!user) {
      throw new Error('کاربر یافت نشد');
    }
    
    const { password: _, ...userWithoutPassword } = user;
    return {
      success: true,
      data: userWithoutPassword
    };
  },
  async getAllUser(){
    return Promise.resolve(USER_LIST_MOCK);
  },
  async getUserAllHistory(){
    return Promise.resolve(USER_ALL_HISTORY_MOCK);
  }
}

export const vendorApi = {
  async getAllVendor(){
    return Promise.resolve(VENDOR_LIST_MOCK);
  }
}

export const employeeApi = {
  async getAllEmployee(){
    return Promise.resolve(EMPLOYEE_LIST_MOCK);
  }
}

export const profileApi = {
  // user profile
  async getUserProfileById(id) {
    const res = USER_PROFILE_MOCK.find(u => u.id === id);
    return Promise.resolve(res);
  },
  async getUserProfileGeneralInfoById(id){
    const res = USER_GENERAL_MOCK.find(u => u.id === id);
    return Promise.resolve(res);
  },
  async getUserProfileSpecificTravelerInfoById(id){
    const res = USER_SPECIFIC_TRAVELER_MOCK.find(u => u.id === id);
    return Promise.resolve(res);
  },
  async getUserProfileSpecificAdminInfoById(id){
    const res = USER_SPECIFIC_ADMIN_MOCK.find(a => a.Id === id);
    return Promise.resolve(res);
  },
  async getUserProfilePermissionsById(id){
    const res = USER_PERMISSIONS_MOCK.find(a => a.id === id);
    return Promise.resolve(res);
  },
  async getUserHistoryById(id){
    const res = USER_HISTORY_MOCK.find(a => a.id === id);
    return Promise.resolve(res.history);
  },
  async getUserReservationsById(id){
    const res = USER_RESERVATIONS_MOCK.find(a => a.id === id);
    return Promise.resolve(res.reservations);
  },
  // vendor profile
  async getVendorProfileById(id) {
    const res = VENDOR_PROFILE_MOCK.find(u => u.id === id);
    return Promise.resolve(res);
  },
  async getVendorProfileGeneralInfoById(id) {
    const res = VENDOR_GENERAL_MOCK.find(v => v.id === id);
    return Promise.resolve(res);
  },
  async getVendorSpecificAccommodationById(id) {
    const res = VENDOR_SPECEFIC_ACCOMMODATION_MOCK.find(a=>a.id === id);
    return Promise.resolve(res);
  },
  // employee profile
  async getEmployeeProfileById(id) {
    const res = EMPLOYEE_PROFILE_MOCK.find(u => u.id === id);
    return Promise.resolve(res);
  },
}

export const kpiCardsApi = {

  getKpiCards: async (role, page) => {

    let KpiData = [];

    switch (page) {

      case 'dashboard':
        KpiData = KPICARDS_MOCK;
        break;

      case 'user.dashboard':
        KpiData = USER_KPICARDS_MOCK;
        break;

      case 'vendor.dashboard':
        KpiData = VENDOR_KPICARDS_MOCK;
        break;

      case 'employee.dashboard':
        KpiData = EMPLOYEE_KPICARDS_MOCK;
        break;

      default:
        console.warn("unknown page:", page);
        break;
    }
    return Promise.resolve(KpiData);
  }
}

export const quickViewApi ={
  getQuickViewData: async (page) => {
    let quickViewData ;
    switch (page) {
      case 'Dashboard':
        quickViewData = QUICKVIEW_MOCK;
        break;
      case 'user':
        quickViewData = USER_QUICKVIEW_MOCK;
        break;
      case 'vendor':
        quickViewData = VENDOR_QUICKVIEW_MOCK;
        break;
      case 'employee' : 
        quickViewData = EMPLOYEE_QUICKVIEW_MOCK;
        break;
      default:
        break;
    }
    return Promise.resolve(quickViewData);
  }
}

export const quickActionApi = {
  getQuickActions: async (role , page) =>{

    let QuickActionData = [];

    switch (page) {

      case 'dashboard':
        QuickActionData = QUICKACTION_MOCK;
        break;

      case 'user.dashboard':
        QuickActionData = USER_QUICKACTION_MOCK;
        break;

      case 'vendor.dashboard':
        QuickActionData = VENDOR_QUICKACTION_MOCK;
        break;

      case 'employee.dashboard':
        QuickActionData = EMPLOYEE_QUICKACTION_MOCK;
        break;
        
      default:
        console.warn("unknown page:", page);
        break;
    }

    return Promise.resolve(QuickActionData);
  },
}
