import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdvancedTable from "../../elements/AdvanceTable/AdvancedTable";
import "./style.css";

function QuickView({ tableData = [] }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (tableData.length > 0 && !activeTab) {
      setActiveTab(tableData[0].tab);
    }
  }, [tableData]);

  const activeSection = tableData.find((s) => s.tab === activeTab);
  const tabs = tableData.map((s) => ({ id: s.tab }));

  const handleRowClick = (id) => navigate(`/${activeSection.path}/${id}`);

  if (!activeSection) {
    return (
      <div className="quick-view rounded-xl flex-1 p-4 flex items-center justify-center text-gray-400">
        Loading...
      </div>
    );
  }

  return (
    <div className="quick-view rounded-xl flex-1">
      <AdvancedTable
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        columns={activeSection.columns}
        data={activeSection.data}
        onRowClick={handleRowClick}
      />
    </div>
  );
}

export default QuickView;
