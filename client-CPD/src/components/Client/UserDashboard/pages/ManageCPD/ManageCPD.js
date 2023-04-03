import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ManageCPD.css";
import edit_icon from "../../../../../assets/icons8-edit-row-16.png";
import delete_icon from "../../../../../assets/trash.png";

const ManageCPD = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const getUser = localStorage.getItem("user");
	const userId = JSON.parse(getUser)._id;

	useEffect(() => {
		async function fetchUser() {
			try {
				const res = await axios.get(`http://localhost:3000/users/${userId}`);
				setUser(res.data);
				setIsLoading(false);
			} catch (err) {
				console.log(err);
				setIsLoading(false);
			}
		}
		fetchUser();
	}, [userId]);

	const columns = [
		{
			name: "END DATE",
			selector: "registrationId",
			sortable: true,
		},
		{
			name: "CERTIFICATION",
			selector: "name",
			sortable: true,
		},
		{
			name: "TITLE",
			selector: "email",
			sortable: true,
		},
		{
			name: "HOURS",
			selector: "email",
			sortable: true,
		},
		{
			name: "SOURCE",
			selector: "email",
			sortable: true,
		},
		{
			name: "Actions",
			cell: (row) => (
				<>
					<button
						className="approve_btn_manage"
						onClick={() => handleEdit(row)}>
						<img src={edit_icon} alt="edit_icon" />
					</button>
					<button
						className="reject_btn_manage"
						onClick={() => handleDelete(row)}>
						<img
							style={{ marginTop: "5px" }}
							width={20}
							height={20}
							src={delete_icon}
							alt="delete_icon"
						/>
					</button>
				</>
			),
			ignoreRowClick: true,
			allowOverflow: true,
			button: true,
		},
	];

	const handleEdit = (row) => {
		console.log(`Editing row with ID ${row.id}`);
	};

	const handleDelete = (row) => {
		console.log(`Deleting row with ID ${row.id}`);
	};

	return (
		<>
			<div className="add_profile_btn_div">
				<h1>Manage CPD</h1>
				<p>
					Remember to maintain your ISACA certificaton, you must earn and report
					a minimum of 120 CPD hours every 3- year reporting cycle and at least
					20 hours annually. CPD reporting is due by the end of each calender
					year and is required to renew through the following year. For example,
					to renew through the end of the current year, the CPD requirements of
					the previous year must be met.
				</p>

				<button className="add_profile_btn">Add New CPD Record</button>
			</div>
			<div className="main_container">
				<div className="container_manageCPD">
					{isLoading ? (
						<p>Loading...</p>
					) : (
						<table style={{ borderCollapse: "collapse", width: "100%" }}>
							<thead style={{ backgroundColor: "#ddd" }}>
								<tr>
									{columns.map((column) => (
										<th key={column.selector}>{column.name}</th>
									))}
								</tr>
							</thead>
							<tbody>
								<tr key={user.registrationId}>
									{columns.map((column) => (
										<td key={`${user.registrationId}-${column.selector}`}>
											{column.cell ? column.cell(user) : user[column.selector]}
										</td>
									))}
								</tr>
							</tbody>
						</table>
					)}
				</div>
			</div>
		</>
	);
};

export default ManageCPD;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { TableControl } from "react-bootstrap-table-control";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ManageCPD = () => {
// 	const [user, setUser] = useState({});
// 	const getUser = localStorage.getItem("user");
// 	const userId = JSON.parse(getUser)._id;
// 	console.log(user);

// 	useEffect(() => {
// 		axios.get(`http://localhost:3000/users/reg/${userId}`).then((response) => {
// 			setUser(response.data);
// 		});
// 	}, []);

// 	const mappedItems = user
// 		? [
// 				{
// 					id: 1,
// 					name: user.name,
// 					description: user.age + " years old, " + user.email,
// 				},
// 		  ]
// 		: [];

// 	console.log("====>", mappedItems);

// 	return (
// 		<div>
// 			{mappedItems && mappedItems.length > 0 ? (
// 				<TableControl
// 					header={[
// 						{ key: "id", name: "#" },
// 						{ key: "name", name: "Name" },
// 						{ key: "description", name: "Description" },
// 					]}
// 					items={mappedItems}
// 				/>
// 			) : (
// 				<p>No items found</p>
// 			)}
// 		</div>
// 	);
// };

// export default ManageCPD;
