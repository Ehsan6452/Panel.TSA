// src/components/FormDrawer/StepNavigation.jsx
import './StepNavigation.css';

export default function StepNavigation({
  currentStep,
  totalSteps,
  loading,
  onBack,
  onNext,
  onSubmit,
  onCancel,
}) {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="step-navigation">
      <button
        type="button"
        className="step-nav-btn step-nav-cancel"
        onClick={onCancel}
        disabled={loading}
      >
        انصراف
      </button>

      <div className="step-nav-actions">
        {!isFirstStep && (
          <button
            type="button"
            className="step-nav-btn step-nav-back"
            onClick={onBack}
            disabled={loading}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            قبلی
          </button>
        )}

        {isLastStep ? (
          <button
            type="button"
            className="step-nav-btn step-nav-submit"
            onClick={onSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="step-nav-spinner" />
                در حال ثبت...
              </>
            ) : (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3334 4L6.00002 11.3333L2.66669 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                ثبت نهایی
              </>
            )}
          </button>
        ) : (
          <button
            type="button"
            className="step-nav-btn step-nav-next"
            onClick={onNext}
            disabled={loading}
          >
            بعدی
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}