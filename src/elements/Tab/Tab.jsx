import React, { useState } from "react";
import { useLang } from "../../utils/LangHandler";
import "./Tab.css";

function Tabs({ tabs = [], onTabChange }) {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (typeof onTabChange === "function") onTabChange(index);
  };

  return (
    <div className="tabs-container">
      <ul className="tabs-list">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;

          return (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
              className={`tab-item ${isActive ? "active" : ""}`}
            >
              {lang(`common.users.${tab}`)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tabs;
