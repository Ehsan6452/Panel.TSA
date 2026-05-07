import React from "react";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import "./TextBox.css";

export default function TextBox({ label, value, type = "text", readOnly = true, isVerified, customStyle }) {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <div className="input-icon-wrapper">
        <input type={type} value={value} readOnly={readOnly} style={customStyle} />
        {isVerified === true && (
          <FiCheckCircle className="verify-icon verified" title="Verified" />
        )}
        {isVerified === false && (
          <FiAlertCircle className="verify-icon unverified" title="Not Verified" />
        )}
      </div>
    </div>
  );
}
