import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LangProvider }       from '../utils/LangHandler.jsx';
import { PermissionProvider } from '../utils/PermissionHandler.jsx';
import { ThemeProvider }      from '../utils/ThemeHandler.jsx';
import Layout                 from '../components/layout/Layout.jsx';
import ProtectedRoute         from '../components/common/ProtectedRoute.jsx';

import LoginPage              from '../pages/Login/Login.jsx';
import NotFoundPage           from '../pages/NotFound/NotFound.jsx';

import DashboardPage         from '../pages/Dahboard/Dashboard.jsx';
import ProfileRenderer       from '../components/profile/profileRendere.jsx';
import UsersPage             from '../pages/Users/UsersPage.jsx';
  import UsersListPage       from '../pages/Users/List/UsersListPage.jsx'
  import UsersHistoryPage    from '../pages/Users/History/UsersHistoryPage.jsx'
import VendorsPage           from '../pages/Vendors/Vendors.jsx';
  import VendorsListPage     from '../pages/Vendors/List/VendorsListPage.jsx';
  import VendorsDocsPage     from '../pages/Vendors/Docs/VendorsDocsPage.jsx';
  import GlobalInventoryPage from '../pages/Vendors/GlobalInventory/GlobalInventoyPage.jsx';
import EmployeePage          from '../pages/Employee/EmployeePage.jsx';
  import EmployeeListPage    from '../pages/Employee/List/EmployeeListPage.jsx';
  import EmployeeHistoryPage from '../pages/Employee/History/EmployeeHistoryPage.jsx';
  import EmployeeDocsPage    from '../pages/Employee/Docs/EmployeeDocsPage.jsx'
import BookingPage           from '../pages/Booking/Booking.jsx';
import FinancialPage         from '../pages/Financial/Financial.jsx';
import ContentPage           from '../pages/Content/Content.jsx';
import ReportsPage           from '../pages/Reports/Reports.jsx';
import MarketingPage         from '../pages/Marketing/Marketing.jsx';
import PushNotificationPage  from '../pages/PushNotification/PushNotification.jsx';
import SupportPage           from '../pages/Support/Support.jsx';
import SystemSettingPage     from '../pages/SystemSetting/SystemSetting.jsx';
import LogSecurityPage       from '../pages/LogSecurity/LogSecurity.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <PermissionProvider>
          <ThemeProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />

              <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<ProtectedRoute page="dashboard"><DashboardPage /></ProtectedRoute>} />
                <Route path="/users">
                  <Route index element={<ProtectedRoute page="users"><UsersPage /></ProtectedRoute>} />
                    <Route path=":id" element={<ProtectedRoute page="users.profile"><ProfileRenderer type="users" /></ProtectedRoute>} />
                    <Route path="list" element={<ProtectedRoute page="users.list"><UsersListPage /></ProtectedRoute>} />
                    <Route path="history" element={<ProtectedRoute page="users.history"><UsersHistoryPage /></ProtectedRoute>} />
                  </Route>
                <Route path="/vendors">
                  <Route index element={<ProtectedRoute page="vendors"><VendorsPage /></ProtectedRoute>} />
                    <Route path=":id" element={<ProtectedRoute page="vendors.profile"><ProfileRenderer type="vendors" /></ProtectedRoute>} />
                    <Route path="list" element={<ProtectedRoute page="vendors.list"><VendorsListPage /></ProtectedRoute>} />
                    <Route path="global-inventory" element={<ProtectedRoute page="vendors.globalInventory"><GlobalInventoryPage /></ProtectedRoute>} />
                    <Route path="docs" element={<ProtectedRoute page="vendors.docs"><VendorsDocsPage /></ProtectedRoute>} />
                  </Route> 
                <Route path="/employees">
                  <Route index element={<ProtectedRoute page="employees"><EmployeePage /></ProtectedRoute>} />
                    <Route path=":id" element={<ProtectedRoute page="employees.profile"><ProfileRenderer type="employees" /></ProtectedRoute>} />
                    <Route path="list" element={<ProtectedRoute page="employees.list"><EmployeeListPage /></ProtectedRoute>} />
                    <Route path="history" element={<ProtectedRoute page="employees.history"><EmployeeHistoryPage /></ProtectedRoute>} />
                    <Route path="docs" element={<ProtectedRoute page="employees.docs"><EmployeeDocsPage /></ProtectedRoute>} />
                  </Route> 
                <Route path="/booking" element={<ProtectedRoute page="booking"><BookingPage /></ProtectedRoute>} />
                <Route path="/financial" element={<ProtectedRoute page="financial"><FinancialPage /></ProtectedRoute>} />
                <Route path="/content" element={<ProtectedRoute page="content"><ContentPage /></ProtectedRoute>} />
                <Route path="/reports" element={<ProtectedRoute page="reports"><ReportsPage /></ProtectedRoute>} />
                <Route path="/marketing" element={<ProtectedRoute page="marketing"><MarketingPage /></ProtectedRoute>} />
                <Route path="/push-notification" element={<ProtectedRoute page="pushNotification"><PushNotificationPage /></ProtectedRoute>} />
                <Route path="/support" element={<ProtectedRoute page="support"><SupportPage /></ProtectedRoute>} />
                <Route path="/system-setting" element={<ProtectedRoute page="systemSetting"><SystemSettingPage /></ProtectedRoute>} />
                <Route path="/log-security" element={<ProtectedRoute page="logSecurity"><LogSecurityPage /></ProtectedRoute>} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ThemeProvider>
        </PermissionProvider>
      </LangProvider>
    </BrowserRouter>
  );
}
  