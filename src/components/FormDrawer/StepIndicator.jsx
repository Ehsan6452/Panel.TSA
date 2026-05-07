// src/components/FormDrawer/StepIndicator.jsx
import './StepIndicator.css';

export default function StepIndicator({ steps, currentStep }) {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div
            key={step.id}
            className={`step-indicator-item ${isActive ? 'active' : ''} ${
              isCompleted ? 'completed' : ''
            }`}
          >
            <div className="step-indicator-circle">
              {isCompleted ? (
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
              ) : (
                <span>{stepNumber}</span>
              )}
            </div>
            <div className="step-indicator-label">{step.label}</div>
            {index < steps.length - 1 && (
              <div className="step-indicator-line" />
            )}
          </div>
        );
      })}
    </div>
  );
}