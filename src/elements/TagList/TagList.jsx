import React from "react";
import './TagList.css'
export default function TagsList({ items, emptyText = "None" }) {
  if (!items || items.length === 0) {
    return <span className="option-tag">{emptyText}</span>;
  }

  return (
    <div className="options-tags">
      {items.map((item, idx) => (
        <span key={idx} className="option-tag">
          {item}
        </span>
      ))}
    </div>
  );
}