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

export default function VendorSpecificCarRental() {
  const { id } = useParams();
  const { can } = usePermission();
  const navigate = useNavigate();
  const { lang } = useLang();

  const [data, setData] = useState(null);
  const basePath = "pages.vendors.profile.specific.carRental";
  const commonPath = "pages.vendors.profile.specific.common";

  useEffect(() => {
    if (!can("vendors.profile.specific.view")) navigate("/vendors");
  }, [can, navigate]);

  useEffect(() => {
    const fetchData = async (vendorId) => {
      try {
        const res = await profileApi.getVendorspecificCarRentalById(vendorId);
        setData(res);
      } catch (error) {
        console.log("fetch failed:", error);
      }
    };
    if (id) fetchData(id);
  }, [id]);

  if (!data) return <div style={{ color: "white", padding: "20px" }}>{lang(`${commonPath}.loading`)}</div>;

  const { state, documents, activeReserves } = data;
  const { checkIn, checkOut, cancelPolicy, options, useLimit, delivery, type } = documents;

  const deliveryItems = [];
  if (delivery.hotel) deliveryItems.push("Hotel Delivery");
  if (delivery.airport) deliveryItems.push("Airport Delivery");
  if (delivery.office) deliveryItems.push("Office Pickup");

  const columns = [
    { header: lang(`${commonPath}.table.id`), accessor: "id" },
    { header: lang(`${commonPath}.table.user`), accessor: "user" },
    { header: lang(`${basePath}.table.car`), accessor: "car" },
    { header: lang(`${commonPath}.table.date`), accessor: "date" },
    {
      header: lang(`${commonPath}.table.status`),
      accessor: "status",
      render: (s) => <span className={`vs-shared-status-badge badge-${s === "Confirmed" ? "confirmed" : s === "Checked In" ? "checkedin" : "pending"}`}>{s}</span>,
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
          <TextBox label={lang(`${commonPath}.fields.type`)} value={type} className="vs-shared-textbox" />
          <TextBox label={lang(`${commonPath}.fields.checkIn`)} value={`${checkIn[0]} – ${checkIn[1]}`} className="vs-shared-textbox" />
          <TextBox label={lang(`${commonPath}.fields.checkOut`)} value={`${checkOut[0]} – ${checkOut[1]}`} className="vs-shared-textbox" />
          <TextBox label={lang(`${basePath}.documents.useLimit`)} value={useLimit} className="vs-shared-textbox" />
        </div>

        <div className="vs-shared-options-container">
          <label className="vs-shared-options-label">{lang(`${commonPath}.fields.cancelPolicy.title`)}</label>
          <div className="vs-shared-grid vs-shared-grid-3col">
            <TextBox label={lang(`${commonPath}.fields.cancelPolicy.lessThan24h`)} value={cancelPolicy.lessThan24h} readOnly />
            <TextBox label={lang(`${commonPath}.fields.cancelPolicy.lessThan48h`)} value={cancelPolicy.lessThan48h} readOnly />
            <TextBox label={lang(`${commonPath}.fields.cancelPolicy.lessThan72h`)} value={cancelPolicy.lessThan72h} readOnly />
          </div>
        </div>

        <div className="vs-shared-options-container">
          <label className="vs-shared-options-label">{lang(`${commonPath}.fields.options`)}</label>
          <TagsList items={options} />
        </div>

        <div className="vs-shared-options-container">
          <label className="vs-shared-options-label">{lang(`${basePath}.documents.delivery`)}</label>
          <TagsList items={deliveryItems} emptyText="No delivery options" />
        </div>
      </div>

      <div className="vs-shared-row-table">
        <h3 className="vs-shared-section-title">{lang(`${commonPath}.titles.activeReserves`)}</h3>
        <DataTable columns={columns} data={activeReserves} />
      </div>
    </section>
  );
}