import React, { useEffect, useState, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { profileApi } from "../../../../../services/api"
import { useLang } from "../../../../../utils/LangHandler"
import { usePermission } from "../../../../../utils/PermissionHandler"

import AdvancedTable from "../../../../../elements/AdvanceTable/AdvancedTable"

export default function VendorPayments() {
    const { id } = useParams();
    const { can } = usePermission();
    const navigate = useNavigate();
    const { lang } = useLang();

    const basePath = "pages.vendors.profile.payments";

    const [paymentsData, setPaymentsData] = useState([]);
    const [activeTab, setActiveTab] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!can("vendors.profile.payments.view")) navigate("/vendors");
    }, [can, navigate]);

    useEffect(() => {
        const fetchPaymentsDataById = async (vendorId) => {
            setLoading(true);
            try {
                const res = await profileApi.getVendorProfilePaymentsById(vendorId);
                console.log("API Response:", res);
                
                const payments = res?.payments || [];
                setPaymentsData(payments);
                
                if (payments.length > 0) {
                    setActiveTab(payments[0].tab);
                }
            } catch (error) {
                console.log("fetching data from vendor payments failed : " + error);
                setPaymentsData([]);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchPaymentsDataById(id);
    }, [id]);


    const paymentFilters = useMemo(() => {
        // اگر تب فعلی customer_payments است
        if (activeTab === 'customer_payments') {
            return [
                {
                    key: 'status',
                    options: ['pending', 'processing', 'completed', 'failed', 'refunded', 'partially_refunded']
                },
                {
                    key: 'paymentMethod',
                    options: ['credit_card', 'online_banking', 'wallet']
                }
            ];
        }

        if (activeTab === 'vendor_settlements') {
            return [
                {
                    key: 'status',
                    options: ['pending', 'processing', 'paid', 'failed', 'cancelled']
                },
                {
                    key: 'paymentMethod',
                    options: ['bank_transfer', 'card_to_card']
                }
            ];
        }
        return [];
    }, [activeTab]);

  
    const searchPlaceholder = useMemo(() => {
        if (activeTab === 'customer_payments') {
            return "Search by customer name, service name, reservation ID...";
        }
        if (activeTab === 'vendor_settlements') {
            return "Search by settlement ID, period...";
        }
        return "common.search";
    }, [activeTab]);

    if (loading) {
        return <div style={{ color: 'white', padding: '20px' }}>{lang(`${basePath}.loading`)}</div>;
    }

    if (!paymentsData || paymentsData.length === 0) {
        return <div style={{ color: 'white', padding: '20px' }}>{lang(`${basePath}.noData`)}</div>;
    }

    const paymentsTabs = paymentsData.map((p) => ({ id: p.tab }));
    const activeSection = paymentsData.find((p) => p.tab === activeTab);

    return (
        <AdvancedTable 
            tabs={paymentsTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            columns={activeSection?.columns || []}
            data={activeSection?.data || []}
            onRowClick={(rowId) => navigate(`/payments/${rowId}`)}
            enableSearch={true}
            enableExport={true}
            enablePagination={true}
            filters={paymentFilters}
            searchPlaceholder={searchPlaceholder}
        />
    );
}