import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
	return (
		<div className="main_container">
			<div className="container_login">
				<h1>Welcome to Admin Page</h1>
				<h3>Go for User Approval page</h3>
				<Link to="/adminapproval">
					<button className="login-form-btn">Go</button>
				</Link>
			</div>
		</div>
	);
};

export default Admin;
