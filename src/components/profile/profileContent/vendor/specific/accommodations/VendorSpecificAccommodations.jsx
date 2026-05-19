import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { profileApi } from "../../../../../../services/api";
import { useLang } from "../../../../../../utils/LangHandler";
import { usePermission } from "../../../../../../utils/PermissionHandler";

import TextBox from "../../../../../../elements/TextBox/TextBox";
import DataTable from "../../../../../../elements/DataTable/DataTable";
import StatCard from "../../../../../../elements/StatCard/StatCard";

import "./VendorSpecificAccommodations.css";

export default function VendorSpecificAccommodations() {
  const { id } = useParams();
  const { can } = usePermission();
  const navigate = useNavigate();
  const { lang } = useLang();

  const [accommodationData, setAccommodationData] = useState(null);
  const basePath = "pages.vendors.profile.vendorSpecificAccommodations";

  useEffect(() => {
    if (!can("vendors.profile.specific.view")) {
      navigate("/vendors");
    }
  }, [can, navigate]);

  useEffect(() => {
    const fetchAccommodationData = async (vendorId) => {
      try {
        const res = await profileApi.getVendorSpecificAccommodationById(vendorId);
        setAccommodationData(res);
      } catch (error) {
        console.log("fetch vendor profile data failed : ", error);
      }
    };
    if (id) fetchAccommodationData(id);
  }, [id]);

  if (!accommodationData) {
    return (
      <div style={{ color: "white", padding: "20px" }}>
        {lang(`${basePath}.loading`)}
      </div>
    );
  }

  const activeReserveColumns = [
    { header: lang(`${basePath}.table.id`), accessor: "id" },
    { header: lang(`${basePath}.table.user`), accessor: "user" },
    { header: lang(`${basePath}.table.room`), accessor: "room" },
    { header: lang(`${basePath}.table.date`), accessor: "date" },
    {
      header: lang(`${basePath}.table.status`),
      accessor: "status",
      render: (status) => {
        const badgeClass =
          status === "Confirmed"
            ? "badge-confirmed"
            : status === "Checked In"
            ? "badge-checkedin"
            : "badge-pending";
        return <span className={`vsa-status-badge ${badgeClass}`}>{status}</span>;
      },
    },
    { header: lang(`${basePath}.table.price`), accessor: "price" },
    { header: lang(`${basePath}.table.commission`), accessor: "commission" },
  ];

  const { checkIn, checkOut, cancelPolicy } = accommodationData.documents;

  return (
    <section className="vsa-wrapper">
      {/* Row 1: Stats Cards */}
      <div className="vsa-row-stats">
        <StatCard
          label={lang(`${basePath}.stats.allInventory`)}
          value={accommodationData.state.allInventory}
        />
        <StatCard
          label={lang(`${basePath}.stats.rate`)}
          value={accommodationData.state.rate}
          valueClassName="vsa-text-warning"
        />
        <StatCard
          label={lang(`${basePath}.stats.commission`)}
          value={accommodationData.state.commission}
          valueClassName="vsa-text-success"
        />
        <StatCard
          label={lang(`${basePath}.stats.allReserve`)}
          value={accommodationData.state.allReserve}
        />
      </div>

      {/* Row 2: Documents & Policies */}
      <div className="vsa-row-details">
        
        <div className="vsa-form-subrow vsa-col-4">
            <TextBox
                label={lang(`${basePath}.documents.type`)}
                value={accommodationData.documents.type}
            />
            <TextBox
                label={lang(`${basePath}.documents.rate`)}
                value={accommodationData.documents.Rate}
            />
            <TextBox
                label={lang(`${basePath}.documents.checkIn`)}
                value={`${checkIn[0]} - ${checkIn[1]}`}
            />
            <TextBox
                label={lang(`${basePath}.documents.checkOut`)}
                value={`${checkOut[0]} - ${checkOut[1]}`}
            />
        </div>

        {/* Cancellation Policy (3 sub-fields) */}
        <div className="vsa-cancel-policy">
          <div className="vsa-policy-label">
            {lang(`${basePath}.documents.cancelPolicy.title`)}
          </div>
          <div className="vsa-policy-items">
            <TextBox
              label={lang(`${basePath}.documents.cancelPolicy.lessThan24h`)}
              value={cancelPolicy.lessThan24h}
              readOnly
            />
            <TextBox
              label={lang(`${basePath}.documents.cancelPolicy.lessThan48h`)}
              value={cancelPolicy.lessThan48h}
              readOnly
            />
            <TextBox
              label={lang(`${basePath}.documents.cancelPolicy.lessThan72h`)}
              value={cancelPolicy.lessThan72h}
              readOnly
            />
          </div>
        </div>

        {/* Amenities / Options as tags */}
        <div className="vsa-options-container">
          <label className="vsa-options-label">
            {lang(`${basePath}.documents.options`)}
          </label>
          <div className="vsa-options-tags">
            {accommodationData.documents.options.map((option, idx) => (
              <span key={idx} className="vsa-option-tag">
                {option}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3: Active Reservations Table */}
      <div className="vsa-row-table">
        <h3 className="vsa-section-title">
          {lang(`${basePath}.titles.activeReserves`)}
        </h3>
        <DataTable
          columns={activeReserveColumns}
          data={accommodationData.activeReserves}
        />
      </div>
    </section>
  );
}