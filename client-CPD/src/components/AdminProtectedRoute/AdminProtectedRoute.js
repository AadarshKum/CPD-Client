import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = (props) => {
	// console.log(props);

	const auth = localStorage.getItem("user");
	const user = JSON.parse(auth);
	let userRole = user.role;

	if (props.roleRequired) {
		return auth ? (
			props.roleRequired === userRole ? (
				<Outlet />
			) : (
				<Navigate to="/" />
			)
		) : (
			<Navigate to="/" />
		);
	} else {
		return auth ? <Outlet /> : <Navigate to="/signin" />;
	}
	// if (props.roleRequired === userRole) {
	// 	return
	// }
};

export default AdminProtectedRoute;
