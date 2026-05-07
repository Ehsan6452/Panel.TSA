// src/pages/Users/steps/TravelerSpecificStep.jsx
import './steps.css';

const DIET_OPTIONS = ['Vegetarian', 'Vegan', 'Diabetic', 'Halal', 'Gluten-Free'];
const LANGUAGE_OPTIONS = ['Persian', 'English', 'Arabic', 'French', 'Turkish', 'Other'];

export default function TravelerSpecificStep({ data, onChange, errors }) {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  const handleSpecialNeedsToggle = (option) => {
    const currentNeeds = data?.specialNeeds || [];
    const newNeeds = currentNeeds.includes(option)
      ? currentNeeds.filter((item) => item !== option)
      : [...currentNeeds, option];
    
    handleChange('specialNeeds', newNeeds);
  };

  return (
    <div className="traveler-step-container">
      <div className="traveler-step-section-title">Identity Information</div>
      
      <div className="traveler-step-row">
        <div className="traveler-step-field">
          <label htmlFor="nationalId">National ID</label>
          <input
            id="nationalId"
            type="text"
            value={data?.nationalId || ''}
            onChange={(e) => handleChange('nationalId', e.target.value)}
            placeholder="Enter national ID"
            className={errors?.nationalId ? 'input-error' : ''}
            dir="ltr"
          />
          {errors?.nationalId && (
            <span className="field-error-message">{errors.nationalId}</span>
          )}
        </div>

        <div className="traveler-step-field">
          <label htmlFor="passportNumber">Passport Number</label>
          <input
            id="passportNumber"
            type="text"
            value={data?.passportNumber || ''}
            onChange={(e) => handleChange('passportNumber', e.target.value)}
            placeholder="Enter passport number"
            className={errors?.passportNumber ? 'input-error' : ''}
            dir="ltr"
          />
          {errors?.passportNumber && (
            <span className="field-error-message">{errors.passportNumber}</span>
          )}
        </div>
      </div>

      <div className="traveler-step-row">
        <div className="traveler-step-field">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            id="dateOfBirth"
            type="date"
            value={data?.dateOfBirth || ''}
            onChange={(e) => handleChange('dateOfBirth', e.target.value)}
            className={errors?.dateOfBirth ? 'input-error' : ''}
          />
          {errors?.dateOfBirth && (
            <span className="field-error-message">{errors.dateOfBirth}</span>
          )}
        </div>

        <div className="traveler-step-field">
          <label htmlFor="nationality">Nationality</label>
          <input
            id="nationality"
            type="text"
            value={data?.nationality || ''}
            onChange={(e) => handleChange('nationality', e.target.value)}
            placeholder="e.g. Iranian, British..."
            className={errors?.nationality ? 'input-error' : ''}
          />
          {errors?.nationality && (
            <span className="field-error-message">{errors.nationality}</span>
          )}
        </div>
      </div>

      <div className="traveler-step-section-title mt-4">Preferences & Needs</div>

      <div className="traveler-step-row">
        <div className="traveler-step-field">
          <label htmlFor="primaryLanguage">Primary Language</label>
          <select
            id="primaryLanguage"
            value={data?.primaryLanguage || ''}
            onChange={(e) => handleChange('primaryLanguage', e.target.value)}
            className={errors?.primaryLanguage ? 'input-error' : ''}
          >
            <option value="" disabled>Select language...</option>
            {LANGUAGE_OPTIONS.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
          {errors?.primaryLanguage && (
            <span className="field-error-message">{errors.primaryLanguage}</span>
          )}
        </div>
      </div>

      <div className="traveler-step-field">
        <label>Special Needs / Diet</label>
        <div className="checkbox-group">
          {DIET_OPTIONS.map((option) => (
            <label key={option} className="checkbox-label">
              <input
                type="checkbox"
                checked={(data?.specialNeeds || []).includes(option)}
                onChange={() => handleSpecialNeedsToggle(option)}
              />
              <span className="checkbox-text">{option}</span>
            </label>
          ))}
        </div>
        {errors?.specialNeeds && (
          <span className="field-error-message">{errors.specialNeeds}</span>
        )}
      </div>
    </div>
  );
}