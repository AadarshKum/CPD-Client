import React, { useState, useEffect } from "react";
import axios from "axios";
// import AdminCard from "./AdminCard/AdminCard";
import "./AdminCard/AdminCard.css";

function AdminApproval() {
	const [users, setUsers] = useState([]);
	const [approvedUser, setApprovedUser] = useState([]);
	// console.log(users[0].userId);

	useEffect(() => {
		axios
			.get("http://localhost:3000/pending")
			.then((res) => setUsers(res.data))
			.catch((err) => console.log(err));
	}, []);
	useEffect(() => {
		axios
			.get("http://localhost:3000/approved")
			.then((res) => setApprovedUser(res.data))
			.catch((err) => console.log(err));
	}, []);

	function approveUser(user) {
		// console.log(user.userId);
		const userId = user.userId;
		axios
			.put(`http://localhost:3000/users/approve/${userId}`)
			.then((res) => {
				const updatedUsers = users.filter((u) => u._id !== user._id);
				setUsers(updatedUsers);
			})
			.catch((err) => console.log(err));
	}

	function rejectUser(user) {
		const userId = user.userId;
		axios
			.delete(`http://localhost:3000/users/${userId}`)
			.then((res) => {
				const updatedUsers = users.filter((u) => u._id !== user._id);
				setUsers(updatedUsers);
			})
			.catch((err) => console.log(err));
	}

	return (
		<>
			<div className="main_container">
				<div className="container_loign">
					<div className="brand-title">Pending User Requests</div>
					<table className="boxes">
						<thead>
							<tr>
								<th>
									<h3 className="h3_id">Id</h3>
								</th>
								<th>
									<h3 className="h3">Name</h3>
								</th>
								<th>
									<h3 className="h3">Email</h3>
								</th>
								<th>
									<h3 className="h3"> Phone</h3>
								</th>
								<th>
									<h3 className="h3">Action</h3>
								</th>
							</tr>
						</thead>
					</table>
					<tbody>
						{users.map((user) => (
							<div className="user_box">
								<td key={user.userId}>
									<td>
										<p className="p_id">{user.userId}</p>
									</td>
									<td>
										<p className="p">{user.name}</p>
									</td>
									<td>
										<p className="p">{user.email}</p>
									</td>
									<td>
										<p className="p">{user.phone}</p>
									</td>
									<td>
										<button
											className="approve_btn"
											onClick={() => approveUser(user)}>
											✔
										</button>
										<button
											className="reject_btn"
											onClick={() => rejectUser(user)}>
											X
										</button>
									</td>
								</td>
							</div>
						))}
					</tbody>
				</div>
			</div>
			{/* <div>
				<h1>Approved User Requests</h1>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{approvedUser.map((user) => (
							<tr key={user.userId}>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div> */}
		</>
	);
}

export default AdminApproval;
