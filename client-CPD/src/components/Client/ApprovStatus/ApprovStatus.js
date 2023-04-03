import React from "react";
import "./ApprovStatus.css";

const ApprovStatus = () => {
	const userData = localStorage.getItem("user");
	const user = JSON.parse(userData);
	return (
		<div className="appr_status">
			<h1>Welcome to CPD</h1>
			<h2>Name : {user.name}</h2>
			<h3>Approvel status: {user.status}</h3>
		</div>
	);
};

export default ApprovStatus;
