// src/utils/Validator.js
export const rules = {
  required: (message = 'این فیلد الزامی است') => (value) => {
    if (value === undefined || value === null || value === '') return message;
    if (Array.isArray(value) && value.length === 0) return message;
    return null;
  },
  email: (message = 'فرمت ایمیل نامعتبر است') => (value) => {
    if (!value) return null; 
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value) ? null : message;
  },
  phone: (message = 'شماره تماس معتبر نیست') => (value) => {
    if (!value) return null;
    const regex = /^\+?[\d\s-]{10,}$/;
    return regex.test(value) ? null : message;
  },
  nationalId: (message = 'کد ملی باید ۱۰ رقم باشد') => (value) => {
    if (!value) return null;
    const regex = /^\d{10}$/;
    return regex.test(value) ? null : message;
  },
  notEmptyArray: (message = 'انتخاب حداقل یک مورد الزامی است') => (value) => {
    return (Array.isArray(value) && value.length > 0) ? null : message;
  }
};

export const validateData = (data, schema) => {
  const errors = {};
  for (const [field, fieldRules] of Object.entries(schema)) {
    for (const rule of fieldRules) {
      const error = rule(data[field]);
      if (error) {
        errors[field] = error;
        break;
      }
    }
  }
  return errors;
};