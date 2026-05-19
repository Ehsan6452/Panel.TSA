// ====== USERS =======================================================
import UserGeneral from "./user/general/userGeneral";
import UserSpecificTravelers from "./user/specific/travelers/userSpecificTravelers";
import UserSpecificAdmin from "./user/specific/admins/userSpecificAdmin";
import UserPermissions from "./user/permissions/userPermissions";
import TravelerReservation from "./user/reservations/travelerReservations";
import UserHistory from "./user/history/userHistory";

// ====== VENDORS =====================================================
import VendorGeneral from "./vendor/general/VendorGeneral";
import VendorSpecificAccommodations from "./vendor/specific/accommodations/VendorSpecificAccommodations";
import VendorSpecificCarRental from "./vendor/specific/carRental/VendorSpecificCarRental";
import VendorSpecificEntertainment from "./vendor/specific/entertainment/VendorSpecificEntertainment";
import VendorSpecificResturant from "./vendor/specific/resturant/VendorSpecificResturant";
import VendorAdmins from "./vendor/admins/Vendoradmins";
import VendorInventory from "./vendor/inventory/VendorInventory";
import VendorReservation from "./vendor/reservation/VendorResservation";
import VendorHistory from "./vendor/history/VendorHistory";
import VendorPayments from "./vendor/payments/VendorPayments";
import VendorDocs from "./vendor/docs/VendorDocs";

// ====== EMPLOYEES ===================================================
import EmployeeGeneral from "./employee/general/EmployeeGeneral";
import EmployeeSpecificFinance from "./employee/specific/finance/EmployeeSpecificFinance";
import EmployeeSpecificManagement from "./employee/specific/management/EmployeeSpecificManagement";
import EmployeeSpecificMarketting from "./employee/specific/marketting/EmployeeSpecificMarketting";
import EmployeeSpecificSupport from "./employee/specific/support/EmployeeSpecificSupport";
import EmployeeSpecificTechnical from "./employee/specific/technical/EmployeeSpecificTechnical";
import EmployeeHistory from "./employee/history/EmployeeHistory";
import EmployeePermissions from "./employee/permissions/EmployeePermissions";
import EmployeeDocs from "./employee/docs/EmployeeDocs";

// ====================================================================
// ROUTING TABLE
// ====================================================================

export const profileContentRoutes = {
  // ---------------- USERS ----------------
  users: {
    general: UserGeneral,
    specific: {
      traveler: UserSpecificTravelers,  // subType = "users"
      admin: UserSpecificAdmin      // subType = "admins"
    },
    permissions: UserPermissions,
    reservations: TravelerReservation,
    history: UserHistory
  },

  // ---------------- SUPPLIER ----------------
  supplier: {
    general: VendorGeneral,
    specific: {
      accommodation: VendorSpecificAccommodations,
      carRental: VendorSpecificCarRental,
      entertainment: VendorSpecificEntertainment,
      restaurant: VendorSpecificResturant,
    },
    admins: VendorAdmins,
    inventory: VendorInventory,
    reservations: VendorReservation,
    history: VendorHistory,
    payments: VendorPayments,
    docs: VendorDocs
  },

  // ---------------- EMPLOYEE ----------------
  employee: {
    general: EmployeeGeneral,
    specific: {
      finance: EmployeeSpecificFinance,
      management: EmployeeSpecificManagement,
      marketting: EmployeeSpecificMarketting,
      support: EmployeeSpecificSupport,
      technical: EmployeeSpecificTechnical
    },
    permissions: EmployeePermissions,
    history: EmployeeHistory,
    docs: EmployeeDocs
  }
};
