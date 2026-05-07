// src/pages/Users/steps/AdminSpecificStep.jsx
export default function AdminSpecificStep({ data, onChange, errors }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="step-form">
      <div className="step-form-section-title">اطلاعات سازمانی</div>

      <div className="step-form-row">
        <div className="step-form-field">
          <label>سمت / عنوان شغلی</label>
          <input
            type="text"
            value={data?.jobTitle || ''}
            onChange={(e) => handleChange('jobTitle', e.target.value)}
            placeholder="مثال: مدیر فروش"
            className={errors?.jobTitle ? 'has-error' : ''}
          />
          {errors?.jobTitle && <span className="field-error">{errors.jobTitle}</span>}
        </div>

        <div className="step-form-field">
          <label>دپارتمان</label>
          <select
            value={data?.department || ''}
            onChange={(e) => handleChange('department', e.target.value)}
            className={errors?.department ? 'has-error' : ''}
          >
            <option value="">انتخاب کنید</option>
            <option value="operations">عملیات</option>
            <option value="support">پشتیبانی</option>
            <option value="finance">مالی</option>
            <option value="tech">فنی</option>
            <option value="hr">منابع انسانی</option>
          </select>
          {errors?.department && <span className="field-error">{errors.department}</span>}
        </div>
      </div>

      <div className="step-form-row">
        <div className="step-form-field step-form-field--full">
          <label>توضیحات</label>
          <textarea
            value={data?.notes || ''}
            onChange={(e) => handleChange('notes', e.target.value)}
            placeholder="توضیحات اضافی..."
            rows={3}
            className={errors?.notes ? 'has-error' : ''}
          />
          {errors?.notes && <span className="field-error">{errors.notes}</span>}
        </div>
      </div>
    </div>
  );
}