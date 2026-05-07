import React from "react";
import "./Avatar.css";

export default function Avatar({ src, firstName, lastName }) {
  const getInitials = (fName, lName) => {
    return `${fName?.charAt(0) || ""}${lName?.charAt(0) || ""}`.toUpperCase();
  };

  return (
    <div className="avatar-container">
      {src ? (
        <img src={src} alt="Avatar" className="avatar-img" />
      ) : (
        <div className="avatar-initials">
          {getInitials(firstName, lastName)}
        </div>
      )}
    </div>
  );
}
