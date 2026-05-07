// src/components/DrawerModal/DrawerModal.jsx
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './DrawerModal.css';

export default function DrawerModal({ 
  isOpen, 
  onClose, 
  children, 
  title,
  size = 'large'
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="drawer-modal-overlay open" onClick={onClose}>
      <div 
        className={`drawer-modal drawer-modal-${size} open`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="drawer-modal-header">
            <h2>{title}</h2>
            <button 
              className="drawer-modal-close"
              onClick={onClose}
              aria-label="بستن"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        )}
        
        <div className="drawer-modal-content">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}