// src/pages/Users/drawers/userDrawerConfig.jsx

import UserGeneralStep from './Steps/UserGeneralStep';
import TravelerSpecificStep from './Steps/TravelerSpecificStep';
import AdminSpecificStep from './Steps/AdminSpecificStep';
import UserAccessStep from './Steps/UserAccessStep';
import { rules } from '../../../utils/Validator';

// Map subType to specific step component
const SPECIFIC_STEP_MAP = {
  traveler: TravelerSpecificStep,
  admin: AdminSpecificStep,
};

const DynamicSpecificStepWrapper = (props) => {
  const { data } = props;
  const SpecificComponent = SPECIFIC_STEP_MAP[data.subType];
  
  if (!SpecificComponent) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>لطفاً در مرحله قبل، نوع کاربر را انتخاب کنید.</div>;
  }
  return <SpecificComponent {...props} />;
};

// Fetch user data for edit mode
const fetchUserData = async (userId) => {
  // TODO: Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        firstName: 'علی',
        lastName: 'احمدی',
        phone: '09123456789',
        email: 'ali@example.com',
        nationalId: '1234567890',
        gender: 'male',
        subType: 'traveler',
        originCity: 'تهران',
        destinationCity: 'مشهد',
        passportNumber: 'A12345678',
        passportExpiry: '1410/01/01',
        permissions: ['users.view', 'trips.view']
      });
    }, 1000);
  });
};

// Normalize fetched data to form format
const normalizeUserData = (data) => {
  return {
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    phone: data.phone || '',
    email: data.email || '',
    nationalId: data.nationalId || '',
    gender: data.gender || '',
    subType: data.subType || '',
    // Traveler specific
    originCity: data.originCity || '',
    destinationCity: data.destinationCity || '',
    passportNumber: data.passportNumber || '',
    passportExpiry: data.passportExpiry || '',
    // Admin specific
    jobTitle: data.jobTitle || '',
    department: data.department || '',
    notes: data.notes || '',
    // Permissions
    permissions: data.permissions || []
  };
};

// Submit user data
const submitUserData = async (data, mode, userId) => {
  // TODO: Replace with actual API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Submitting:', { data, mode, userId });
      
      // Simulate validation error
      if (!data.firstName) {
        reject(new Error('نام الزامی است'));
        return;
      }
      
      resolve({ success: true });
    }, 1500);
  });
};

// Base config for all user types
const createUserDrawerConfig = (subType = null) => {
  const steps = [
    {
      id: 'general',
      label: 'اطلاعات عمومی',
      key: 'general',
      component: UserGeneralStep
    },
    {
      id: 'specific',
      label: 'اطلاعات اختصاصی',
      key: 'specific',
      // اصلاح مهم: اگر کانفیگ فیکس است کامپوننت را بده، اگر داینامیک است کامپوننت واسط را بده
      component: subType ? SPECIFIC_STEP_MAP[subType] : DynamicSpecificStepWrapper,
      condition: (data) => {
        // اگر نوع فرم از ابتدا مشخص است (مثل مسافر) همیشه این مرحله را نشان بده
        if (subType) return true;
        // اگر داینامیک است، فقط در صورتی نشان بده که کاربر یک نوع (subType) انتخاب کرده باشد
        return !!data.subType && !!SPECIFIC_STEP_MAP[data.subType];
      }
    },
    {
      id: 'access',
      label: 'دسترسی‌ها',
      key: 'access',
      component: UserAccessStep,
      condition: (data) => {
        // اصلاح مهم: قبلا اینجا فقط برای ادمین true میشد
        // با قرار دادن return true این مرحله برای تمام انواع کاربران (مسافر و ادمین) نمایش داده می‌شود
        return true; 
      }
    }
  ];

  return {
    // تغییر داینامیک تایتل بر اساس نوع
    title: subType === 'traveler' ? 'افزودن مسافر' : subType === 'admin' ? 'افزودن ادمین' : 'افزودن کاربر',
    subtitle: 'اطلاعات کاربر جدید را وارد کنید',
    type: 'کاربر',
    subType: subType, // Fixed subType or null for dynamic
    subTypeOptions: !subType ? [
      { value: 'traveler', label: 'مسافر' },
      // گزینه راننده (driver) حذف شد
      { value: 'admin', label: 'ادمین' }
    ] : null,
    steps,
    fetchData: fetchUserData,
    normalizeData: normalizeUserData,
    submitData: submitUserData
  };
};

// Export configs for different user types
export const travelerDrawerConfig = createUserDrawerConfig('traveler');
export const adminDrawerConfig = createUserDrawerConfig('admin');
export const dynamicUserDrawerConfig = createUserDrawerConfig(null);
