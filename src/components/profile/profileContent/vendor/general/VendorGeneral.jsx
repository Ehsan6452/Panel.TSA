import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLang } from "../../../../../utils/LangHandler";
import { profileApi } from "../../../../../services/api";
import { usePermission } from "../../../../../utils/PermissionHandler";

// Import Components
import Avatar from "../../../../../elements/Avatar/Avatar";
import TextBox from "../../../../../elements/TextBox/TextBox";
import DataTable from "../../../../../elements/DataTable/DataTable";

import "./VendorGeneral.css";

export default function VendorGeneral() {
  const { id } = useParams();
  const { lang } = useLang();
  const { can } = usePermission();
  const navigate = useNavigate();

  const [vendorData, setVendorData] = useState(null);

  useEffect(() => {
    if (!can("vendors.profile.general.view")) {
      navigate("/vendors");
    }
  }, [can, navigate]);

  useEffect(() => {
    const fetchVendorData = async (vendorId) => {
      try {
        const res = await profileApi.getVendorProfileGeneralInfoById(vendorId);
        setVendorData(res);
      } catch (error) {
        console.log("fetch vendor profile data failed : ", error);
      }
    };
    if (id) fetchVendorData(id);
  }, [id]);

  if (!vendorData) {
    return (
      <div style={{ color: "white", padding: "20px" }}>
        {lang("pages.vendors.profile.general.loadingInfo")}
      </div>
    );
  }

  const ticketColumns = [
    { header: lang("pages.vendors.profile.general.table.id"), accessor: "id" },
    {
      header: lang("pages.vendors.profile.general.table.subject"),
      accessor: "title",
    },
    {
      header: lang("pages.vendors.profile.general.table.status"),
      accessor: "status",
      render: (status) => {
        const badgeClass =
          status === "Open"
            ? "badge-open"
            : status === "Closed"
            ? "badge-closed"
            : "badge-pending";
        return <span className={`table-badge ${badgeClass}`}>{status}</span>;
      },
    },
    {
      header: lang("pages.vendors.profile.general.table.date"),
      accessor: "date",
    },
  ];

  return (
    <div className="vg-wrapper">
      {/* Top Row: Main Info & Actions */}
      <div className="vg-top-row">
        {/* Column 1: Avatar */}
        <div className="vg-col-avatar">
          <Avatar
            src={vendorData.personalInfo.avatarUrl}
            name={vendorData.personalInfo.name}
            email={vendorData.contactInfo.email}
          />
        </div>

        {/* Column 2: Details (Personal & Contact) */}
        <div className="vg-col-details">
          <div className="vg-form-row">
            <TextBox
              label={lang("pages.vendors.profile.general.fields.brandName")}
              value={vendorData.personalInfo.name}
            />
            <TextBox
              label={lang("pages.vendors.profile.general.fields.formalName")}
              value={vendorData.personalInfo.formalName}
            />
          </div>
          <div className="vg-form-row">
            <TextBox
              label={lang("pages.vendors.profile.general.fields.idCode")}
              value={vendorData.personalInfo.idCode}
            />
            <TextBox
            label={lang("pages.vendors.profile.general.fields.email")}
            type="email"
            value={vendorData.contactInfo.email}
            isVerified={vendorData.contactInfo.emailVerified}
          />
          </div>
          <div className="vg-form-row">
            <TextBox
            label={lang("pages.vendors.profile.general.fields.phoneNumber")}
            value={vendorData.contactInfo.phone}
            isVerified={vendorData.contactInfo.phoneVerified}
            />
            <TextBox
            label={lang("pages.vendors.profile.general.fields.emergencyPhone")}
            value={vendorData.contactInfo.emergencyPhone}
            />
          </div>
        </div>

        {/* Column 3: System Info & Actions */}
        <div className="vg-col-actions">
          <div className="vg-form-row">
            <TextBox
              label={lang("pages.vendors.profile.general.fields.userType")}
              value={vendorData.systemData.userType}
              customStyle={{ textTransform: "capitalize" }}
            />
            <TextBox
              label={lang("pages.vendors.profile.general.fields.subType")}
              value={vendorData.systemData.subType}
              customStyle={{ textTransform: "capitalize" }}
            />
          </div>
          <div className="vg-form-row">
            <div className="vg-info-box">
              <span className="vg-info-label">
                {lang("pages.vendors.profile.general.info.joinDate")}
              </span>
              <span className="vg-info-value">
                {vendorData.systemData.createdAt}
              </span>
            </div>
            <div className="vg-info-box">
              <span className="vg-info-label">
                {lang("pages.vendors.profile.general.info.lastActivity")}
              </span>
              <span className="vg-info-value" style={{ fontSize: "0.85rem" }}>
                {vendorData.systemData.lastActivity}
              </span>
            </div>
          </div>

          <div className="vg-action-buttons mb-3">
            <button className="vg-btn vg-btn-danger">
              {lang("pages.vendors.profile.general.actions.forceLogout")}
            </button>
            <button className="vg-btn vg-btn-warning">
              {lang("pages.vendors.profile.general.actions.reVerify")}
            </button>
            <button className="vg-btn vg-btn-primary">
              {lang("pages.vendors.profile.general.actions.sendTempPass")}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row: Recent Tickets */}
      <div className="vg-bottom-row">
        <h3 className="vg-section-title">
          {lang("pages.vendors.profile.general.sections.recentTickets")}
        </h3>
        <DataTable columns={ticketColumns} data={vendorData.recentTickets} />
      </div>
    </div>
  );
}