import React from "react";
import "./Avatar.css";

export default function Avatar({ src, name , email }) {
  const getInitials = (fName, lName) => {
    if (name && name.trim()) {
      const parts = name.trim().split(/\s+/); 
      if (parts.length >= 2) {
        
        return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
      } else if (parts.length === 1) {
      
        const single = parts[0];
        return single.substring(0, 2).toUpperCase();
      }
    }

    if (email) return email.substring(0, 2).toUpperCase();
    return 'U';
  };

  return (
    <div className="avatar-container">
      {src ? (
        <img src={src} alt="Avatar" className="avatar-img" />
      ) : (
        <div className="avatar-initials">
          {getInitials(name, email)}
        </div>
      )}
    </div>
  );
}
