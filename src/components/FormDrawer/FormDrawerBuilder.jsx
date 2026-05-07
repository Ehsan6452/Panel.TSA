// src/components/FormDrawer/FormDrawerBuilder.jsx
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import DrawerModal from '../DrawerModal/DrawerModal';
import StepIndicator from './StepIndicator';
import StepNavigation from './StepNavigation';
import { validateData } from '../../utils/Validator';
import './FormDrawerBuilder.css';

export default function FormDrawerBuilder({
  isOpen,
  onClose,
  drawerConfig,
  mode = 'add',
  entityId = null,
  onSuccess
}) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const abortControllerRef = useRef(null);

  const {
    title,
    subtitle,
    type,
    subType: configSubType,
    subTypeOptions,
    steps,
    fetchData,
    normalizeData,
    submitData
  } = drawerConfig;

  const availableSteps = useMemo(() => {
    return steps.filter(step => {
      if (!step.condition) return true;
      return step.condition(formData);
    });
  }, [steps, formData]);

  const currentStep = availableSteps[currentStepIndex];

  const resetForm = useCallback(() => {
    setCurrentStepIndex(0);
    setFormData({});
    setErrors({});
  }, []);

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  useEffect(() => {
    if (mode === 'edit' && entityId && isOpen && fetchData) {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      
      const controller = new AbortController();
      abortControllerRef.current = controller;
      
      setFetchLoading(true);
      fetchData(entityId, { signal: controller.signal })
        .then(data => {
          if (!controller.signal.aborted) {
            const normalized = normalizeData ? normalizeData(data) : data;
            setFormData(normalized);
          }
        })
        .catch(err => {
          if (err.name !== 'AbortError') {
            console.error('Failed to fetch data:', err);
            setErrors({ _global: 'خطا در بارگذاری اطلاعات' });
          }
        })
        .finally(() => {
          if (!controller.signal.aborted) {
            setFetchLoading(false);
          }
        });
    }
    
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
    };
  }, [mode, entityId, isOpen, fetchData, normalizeData]);

  const cleanSpecificFields = useCallback((prevData, newSubType) => {
    if (!prevData.subType || prevData.subType === newSubType) {
      return prevData;
    }

    const fieldsToClean = {
      traveler: ['originCity', 'destinationCity', 'passportNumber', 'passportExpiry', 'dateOfBirth', 'nationality', 'primaryLanguage', 'specialNeeds'],
      admin: ['jobTitle', 'department', 'notes']
    };

    const cleanedData = { ...prevData };
    if (fieldsToClean[prevData.subType]) {
      fieldsToClean[prevData.subType].forEach(field => {
        delete cleanedData[field];
      });
    }

    return cleanedData;
  }, []);

  const validateCurrentStep = useCallback((stepData, stepIndex) => {
    const stepConfig = availableSteps[stepIndex];
    if (!stepConfig?.validationSchema) return {};

    const schema = typeof stepConfig.validationSchema === 'function'
      ? stepConfig.validationSchema({ ...formData, ...stepData })
      : stepConfig.validationSchema;

    return validateData({ ...formData, ...stepData }, schema);
  }, [availableSteps, formData]);

  const handleStepChange = useCallback((stepData) => {
    setFormData(prev => {
      let newData = { ...prev, ...stepData };
      
      if (stepData.subType && stepData.subType !== prev.subType) {
        newData = cleanSpecificFields(newData, stepData.subType);
      }
      
      return newData;
    });

    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };
      Object.keys(stepData).forEach(key => delete newErrors[key]);
      return newErrors;
    });
  }, [cleanSpecificFields]);

  const handleNext = useCallback(() => {
    const stepErrors = validateCurrentStep({}, currentStepIndex);
    
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    if (currentStepIndex < availableSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      setErrors({});
    }
  }, [currentStepIndex, availableSteps.length, validateCurrentStep]);

  const handlePrevious = useCallback(() => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      setErrors({});
    }
  }, [currentStepIndex]);

  const handleSubmit = async () => {
    const stepErrors = validateCurrentStep({}, currentStepIndex);
    
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      await submitData(formData, mode, entityId);
      onSuccess?.();
      onClose();
    } catch (err) {
      console.error('Submit error:', err);
      setErrors({ _global: err.message || 'خطا در ثبت اطلاعات' });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const isLastStep = currentStepIndex === availableSteps.length - 1;
  const StepComponent = currentStep?.component;

  return (
    <DrawerModal
      isOpen={isOpen}
      onClose={onClose}
      size="medium"
    >
      <div className="form-drawer">
        <div className="form-drawer-header">
          <div>
            <h2 className="form-drawer-title">
              {mode === 'add' ? title : `ویرایش ${type}`}
            </h2>
            {subtitle && <p className="form-drawer-subtitle">{subtitle}</p>}
          </div>
        </div>

        {availableSteps.length > 1 && (
          <StepIndicator
            steps={availableSteps}
            currentStep={currentStepIndex}
          />
        )}

        <div className="form-drawer-content">
          {fetchLoading ? (
            <div className="form-drawer-loading">در حال بارگذاری...</div>
          ) : errors._global ? (
            <div className="form-drawer-error">{errors._global}</div>
          ) : (
            <>
              {!configSubType && subTypeOptions && currentStepIndex === 0 && (
                <div className="step-form">
                  <div className="step-form-row">
                    <div className="step-form-field step-form-field--full">
                      <label>نوع {type}</label>
                      <select
                        value={formData.subType || ''}
                        onChange={(e) => handleStepChange({ subType: e.target.value })}
                        className={errors.subType ? 'has-error' : ''}
                      >
                        <option value="">انتخاب کنید</option>
                        {subTypeOptions.map(opt => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.subType && <span className="field-error">{errors.subType}</span>}
                    </div>
                  </div>
                </div>
              )}

              {StepComponent && (
                <StepComponent
                  data={formData}
                  onChange={handleStepChange}
                  errors={errors}
                />
              )}
            </>
          )}
        </div>

        {!fetchLoading && !errors._global && (
          <StepNavigation
            currentStep={currentStepIndex}
            totalSteps={availableSteps.length}
            onBack={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            loading={loading}
          />
        )}
      </div>
    </DrawerModal>
  );
}