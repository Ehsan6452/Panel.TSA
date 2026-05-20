import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { profileApi } from "../../../../../../services/api";
import { useLang } from "../../../../../../utils/LangHandler";
import { usePermission } from "../../../../../../utils/PermissionHandler";
import TextBox from "../../../../../../elements/TextBox/TextBox";
import DataTable from "../../../../../../elements/DataTable/DataTable";
import StatCard from "../../../../../../elements/StatCard/StatCard";
import TagsList from "../../../../../../elements/TagList/TagList";
import "../VendorSpecificShared.css";

export default function VendorSpecificResturant() {
  const { id } = useParams();
  const { can } = usePermission();
  const navigate = useNavigate();
  const { lang } = useLang();

  const [data, setData] = useState(null);
  const basePath = "pages.vendors.profile.specific.restaurant";
  const commonPath = "pages.vendors.profile.specific.common";

  useEffect(() => {
    if (!can("vendors.profile.specific.view")) navigate("/vendors");
  }, [can, navigate]);

  useEffect(() => {
    const fetchData = async (vendorId) => {
      try {
        const res = await profileApi.getVendorspecificResturantById(vendorId);
        setData(res);
      } catch (error) {
        console.log("fetch failed:", error);
      }
    };
    if (id) fetchData(id);
  }, [id]);

  if (!data) return <div style={{ color: "white", padding: "20px" }}>{lang(`${commonPath}.loading`)}</div>;

  const { state, documents, activeReserves } = data;
  const { openTime, onlineServices, takeAway, type, foodType } = documents;

  const onlineItems = [];
  if (onlineServices.reserveTable) onlineItems.push("Reserve Table");
  if (onlineServices.reserveFood) onlineItems.push("Reserve Food");

  const columns = [
    { header: lang(`${commonPath}.table.id`), accessor: "id" },
    { header: lang(`${commonPath}.table.user`), accessor: "user" },
    { header: lang(`${basePath}.table.table`), accessor: "table" },
    { header: lang(`${commonPath}.table.date`), accessor: "date" },
    {
      header: lang(`${commonPath}.table.status`),
      accessor: "status",
      render: (s) => <span className={`vs-shared-status-badge badge-${s === "Confirmed" ? "confirmed" : s === "Checked In" ? "checkedin" : s === "Completed" ? "completed" : "pending"}`}>{s}</span>,
    },
    { header: lang(`${commonPath}.table.price`), accessor: "price" },
    { header: lang(`${commonPath}.table.commission`), accessor: "commission" },
  ];

  return (
    <section className="vs-shared-wrapper">
      <div className="vs-shared-row-stats">
        <StatCard label={lang(`${basePath}.stats.allInventory`)} value={state.allInventory} />
        <StatCard label={lang(`${commonPath}.stats.rate`)} value={state.rate} valueClassName="vs-shared-text-warning" />
        <StatCard label={lang(`${commonPath}.stats.commission`)} value={state.commission} valueClassName="vs-shared-text-success" />
        <StatCard label={lang(`${commonPath}.stats.allReserve`)} value={state.allReserve} />
      </div>

      <div className="vs-shared-row-details">
        <div className="vs-shared-grid vs-shared-grid-4col">
          <div className="vs-shared-options-container">
            <label className="vs-shared-options-label">{lang(`${basePath}.documents.type`)}</label>
            <TagsList items={type} />
          </div>
          <div className="vs-shared-options-container">
            <label className="vs-shared-options-label">{lang(`${basePath}.documents.foodType`)}</label>
            <TagsList items={foodType} />
          </div>
          <div className="vs-shared-options-container">
            <label className="vs-shared-options-label">{lang(`${basePath}.documents.onlineServices`)}</label>
            <TagsList items={onlineItems} emptyText="None" />
          </div>
          <div className="vs-shared-options-container">
            <label className="vs-shared-options-label">{lang(`${basePath}.documents.takeAway`)}</label>
            <TagsList items={takeAway ? ["Available"] : []} emptyText="Not Available" />
          </div>
        </div>

        <div className="vs-shared-grid vs-shared-grid-2col">
          <TextBox label={lang(`${basePath}.documents.openHour`)} value={`${openTime.openHour} – ${openTime.closeHour}`} className="vs-shared-textbox" />
        </div>
      </div>

      {activeReserves?.length > 0 && (
        <div className="vs-shared-row-table">
          <h3 className="vs-shared-section-title">{lang(`${commonPath}.titles.activeReserves`)}</h3>
          <DataTable columns={columns} data={activeReserves} />
        </div>
      )}
    </section>
  );
}