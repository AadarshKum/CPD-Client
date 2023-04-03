import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserDashboard.css";
import medal from "./../../../assets/bronze-medal.png";
import cisa_logo from "./../../../assets/cisa.png";

const UserDashboard = () => {
	const [user, setUser] = useState([]);

	const getUser = localStorage.getItem("user");
	const userId = JSON.parse(getUser)._id;
	// console.log(userId);

	const timesta = user.timestamp;
	const date = new Date(timesta); // example date fetched from MongoDB
	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();
	const year2 = date.getFullYear() + 1;
	const formattedDate1 = `${day}/${month}/${year}`;
	const formattedDate2 = `${day}/${month}/${year2}`;

	useEffect(() => {
		axios
			.get(`http://localhost:3000/users/reg/${userId}`)
			.then((res) => setUser(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="main_container_dashboard">
			<div className="user-info">
				{/* <div className="user-icon">
					<i className="fa fa-user fa-2x" style={{ color: "red" }}></i>
				</div> */}
				<div className="user-details">
					{/* <h2>{userName}</h2>
					<p>{userEmail}</p> */}
				</div>
			</div>
			<div className="container_dashboard">
				<div className="membership-option">
					<p>Membership</p>
					<span>
						<img height={40} width={40} src={medal} alt="medal" />

						<h3>Professional Membership</h3>
					</span>
					<p className="certificate_date">Membership through 12/04/2022</p>
				</div>
				<div className="certificate">
					<hp>Certificate</hp>
					<span>
						<img height={40} width={40} src={cisa_logo} alt="cisa_logo" />
						<h3>CISA</h3>
					</span>
					<p className="certificate_date">Certified through 12/04/2022</p>
				</div>
			</div>
			{/* <Link to="/profile" className="profile-button">
				Profile
			</Link> */}
		</div>
	);
};

export default UserDashboard;
