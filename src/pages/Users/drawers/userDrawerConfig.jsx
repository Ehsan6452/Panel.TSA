// src/pages/Users/drawers/userDrawerConfig.jsx
import UserGeneralStep from './Steps/UserGeneralStep';
import TravelerSpecificStep from './Steps/TravelerSpecificStep';
import AdminSpecificStep from './Steps/AdminSpecificStep';
import UserAccessStep from './Steps/UserAccessStep';
import { rules } from '../../../utils/Validator';
import { profileApi } from '../../../services/api';

const SPECIFIC_STEP_MAP = {
  traveler: TravelerSpecificStep,
  admin: AdminSpecificStep,
};

const getSpecificValidationSchema = (subType) => {
  if (!subType) return {};
  
  const schemas = {
    traveler: {
      nationalId: [rules.required('کد ملی الزامی است'), rules.nationalId()],
      passportNumber: [rules.required('شماره پاسپورت الزامی است')],
      dateOfBirth: [rules.required('تاریخ تولد الزامی است')],
      nationality: [rules.required('ملیت الزامی است')],
      primaryLanguage: [rules.required('زبان اصلی الزامی است')],
    },
    admin: {
      jobTitle: [rules.required('عنوان شغلی الزامی است')],
      department: [rules.required('دپارتمان الزامی است')],
    }
  };
  
  return schemas[subType] || {};
};

const DynamicSpecificStepWrapper = (props) => {
  const { data } = props;
  const SpecificComponent = SPECIFIC_STEP_MAP[data.subType];
  
  if (!SpecificComponent) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>لطفاً در مرحله قبل، نوع کاربر را انتخاب کنید.</div>;
  }
  return <SpecificComponent {...props} />;
};

const fetchUserData = async (userId, { signal } = {}) => {
  try {
    const userProfile = await profileApi.getUserProfileById(userId);
    const generalInfo = await profileApi.getUserProfileGeneralInfoById(userId);
    const permissions = await profileApi.getUserProfilePermissionsById(userId);
    
    let specificInfo = {};
    if (userProfile.subType === 'traveler') {
      specificInfo = await profileApi.getUserProfileSpecificTravelerInfoById(userId);
    } else if (userProfile.subType === 'admin') {
      specificInfo = await profileApi.getUserProfileSpecificAdminInfoById(userId);
    }
    
    return {
      ...userProfile,
      ...generalInfo,
      ...specificInfo,
      ...permissions
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

const normalizeUserData = (data) => {
  return {
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    phone: data.phone || '',
    email: data.email || '',
    nationalId: data.nationalId || '',
    gender: data.gender || '',
    subType: data.subType || '',
    originCity: data.originCity || '',
    destinationCity: data.destinationCity || '',
    passportNumber: data.passportNumber || '',
    passportExpiry: data.passportExpiry || '',
    dateOfBirth: data.dateOfBirth || '',
    nationality: data.nationality || '',
    primaryLanguage: data.primaryLanguage || '',
    specialNeeds: data.specialNeeds || [],
    jobTitle: data.jobTitle || '',
    department: data.department || '',
    notes: data.notes || '',
    permissions: data.permissions || [],
    role: data.role || 'custom'
  };
};

const submitUserData = async (data, mode, userId) => {
  try {
    console.log('Submit data:', { data, mode, userId });
    
    // TODO: Replace with actual API call when backend is ready
    // if (mode === 'add') {
    //   return await profileApi.createUser(data);
    // } else {
    //   return await profileApi.updateUser(userId, data);
    // }
    // Now Data structure is not mach so this is not working ... 
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data });
      }, 1500);
    });
  } catch (error) {
    console.error('Error submitting user data:', error);
    throw error;
  }
};

const createUserDrawerConfig = (subType = null) => {
  const steps = [
    {
      id: 'general',
      label: 'اطلاعات عمومی',
      key: 'general',
      component: UserGeneralStep,
      validationSchema: {
        firstName: [rules.required('وارد کردن نام الزامی است')],
        lastName: [rules.required('وارد کردن نام خانوادگی الزامی است')],
        email: [rules.required('ایمیل الزامی است'), rules.email('فرمت ایمیل نامعتبر است')],
        phone: [rules.required('شماره تماس الزامی است'), rules.phone('شماره تماس معتبر نیست')],
        ...(!subType ? { subType: [rules.required('انتخاب نوع کاربر الزامی است')] } : {})
      }
    },
    {
      id: 'specific',
      label: 'اطلاعات اختصاصی',
      key: 'specific',
      component: subType ? SPECIFIC_STEP_MAP[subType] : DynamicSpecificStepWrapper,
      condition: (data) => {
        if (subType) return true;
        return !!data.subType && !!SPECIFIC_STEP_MAP[data.subType];
      },
      validationSchema: (data) => {
        const currentSubType = subType || data?.subType;
        return getSpecificValidationSchema(currentSubType);
      }
    },
    {
      id: 'access',
      label: 'دسترسی‌ها',
      key: 'access',
      component: UserAccessStep,
      condition: () => true,
      validationSchema: {
        permissions: [
          rules.required('انتخاب دسترسی الزامی است'),
          rules.notEmptyArray('حداقل یک دسترسی باید برای این کاربر تعیین شود')
        ],
      }
    }
  ];

  return {
    title: subType === 'traveler' ? 'افزودن مسافر' : subType === 'admin' ? 'افزودن ادمین' : 'افزودن کاربر',
    subtitle: 'اطلاعات کاربر جدید را وارد کنید',
    type: 'کاربر',
    subType: subType,
    subTypeOptions: !subType ? [
      { value: 'traveler', label: 'مسافر' },
      { value: 'admin', label: 'ادمین' }
    ] : null,
    steps,
    fetchData: fetchUserData,
    normalizeData: normalizeUserData,
    submitData: submitUserData
  };
};

export const travelerDrawerConfig = createUserDrawerConfig('traveler');
export const adminDrawerConfig = createUserDrawerConfig('admin');
export const dynamicUserDrawerConfig = createUserDrawerConfig(null);