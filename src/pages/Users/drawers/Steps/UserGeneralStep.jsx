// src/pages/Users/steps/UserGeneralStep.jsx
import './steps.css';

export default function UserGeneralStep({ data, onChange, errors }) {
  
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  return (
    <div className="general-step-container">
      <div className="general-step-row">
        <div className="general-step-field">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={data?.firstName || ''}
            onChange={(e) => handleChange('firstName', e.target.value)}
            placeholder="Enter first name"
            className={errors?.firstName ? 'input-error' : ''}
          />
          {errors?.firstName && (
            <span className="field-error-message">{errors.firstName}</span>
          )}
        </div>

        <div className="general-step-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={data?.lastName || ''}
            onChange={(e) => handleChange('lastName', e.target.value)}
            placeholder="Enter last name"
            className={errors?.lastName ? 'input-error' : ''}
          />
          {errors?.lastName && (
            <span className="field-error-message">{errors.lastName}</span>
          )}
        </div>
      </div>

      <div className="general-step-row">
        <div className="general-step-field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={data?.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="user@example.com"
            className={errors?.email ? 'input-error' : ''}
            dir="ltr"
          />
          {errors?.email && (
            <span className="field-error-message">{errors.email}</span>
          )}
        </div>

        <div className="general-step-field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={data?.phone || ''}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+98 912 000 0000"
            className={errors?.phone ? 'input-error' : ''}
            dir="ltr"
          />
          {errors?.phone && (
            <span className="field-error-message">{errors.phone}</span>
          )}
        </div>
      </div>
    </div>
  );
}