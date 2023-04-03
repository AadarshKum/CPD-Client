import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "./App.scss";
import AdminApproval from "./components/Admin/AdminApproval";
import Admin from "./components/Admin/Admin_main/Admin";
import Login from "./components/Client/Auth/Login/Login";
import SignUp from "./components/Client/Auth/SignUp/SignUp";
import Home from "./components/Client/Home/Home";
import ApprovStatus from "./components/Client/ApprovStatus/ApprovStatus";
import UserDashboard from "./components/Client/UserDashboard/UserDashboard";
import UserRegistration from "./components/Client/UserRegistration/UserRegistration";
import MainNavbar from "./components/MainNav/MainNav";
import PrivateRoute from "./components/PrivateRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute/AdminProtectedRoute";
import AppLayout from "./components/Client/UserDashboard/layout/AppLayout";
import Blank from "./components/Client/UserDashboard/pages/Blank";
import PersonalInformation from "./components/Client/UserProfile/PersonalInformation";
import AddCPD from "./components/Client/UserDashboard/pages/AddCPD/AddCPD";
import ManageCPD from "./components/Client/UserDashboard/pages/ManageCPD/ManageCPD";
import Cert_CPDmanage from "./components/Client/UserDashboard/pages/Cert&CPDmanage/Cert_CPDmanage";

function App() {
	return (
		<BrowserRouter>
			<MainNavbar />
			<Routes>
				{/* Private routes */}

				<Route element={<AdminProtectedRoute roleRequired="admin" />}>
					<Route path="/admin" element={<Admin />} />
					<Route path="/adminapproval" element={<AdminApproval />} />
				</Route>
				<Route element={<PrivateRoute />}>
					<Route path="/dashboard1" element={<AppLayout />}>
						<Route index element={<Blank />} />

						{/* <Route path="dashboard" element={<UserDashboard />} /> */}
						<Route path="order" element={<Blank />} />
					</Route>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard" element={<AppLayout />} />
					<Route path="/approvstatus" element={<ApprovStatus />} />
					<Route path="/personalinfo" element={<PersonalInformation />} />
					<Route path="/registration" element={<UserRegistration />} />
					<Route path="/addcpd" element={<AddCPD />} />
					<Route path="/managecpd" element={<ManageCPD />} />
					<Route path="/certandmanagement" element={<Cert_CPDmanage />} />
				</Route>

				{/* Public routes */}
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
