import React, { useState, useEffect } from "react";
import "./PersonalInformation.css";
import axios from "axios";
import UserRegistration from "../UserRegistration/UserRegistration";

function PersonalInformation() {
	const [show, setShow] = useState(false);

	// const [user, setUser] = useState([]);
	const User = localStorage.getItem("user");
	const userName = JSON.parse(User).name;
	const userEmail = JSON.parse(User).email;
	const userPhone = JSON.parse(User).phone;
	console.log(userName, userEmail, userPhone);

	// useEffect(() => {
	// 	axios
	// 		.get(`http://localhost:3000/users/reg/${userId}`)
	// 		.then((res) => setUser(res.data))
	// 		.catch((err) => console.log(err));
	// }, []);

	const handleShow = () => {
		setShow(true);
	};

	return (
		<>
			<div className="main_container">
				<div className="container_profile">
					<div className="brand-title">Your Profile</div>

					<div className="personal-info-row">
						<div className="personal-info-label">CISA ID:</div>
						<div className="personal-info-value">CS00011</div>
					</div>
					<div className="personal-info-row">
						<div className="personal-info-label">Name:</div>
						<div className="personal-info-value">{userName}</div>
					</div>
					<div className="personal-info-row">
						<div className="personal-info-label">Email:</div>
						<div className="personal-info-value">{userEmail}</div>
					</div>
					<div className="personal-info-row">
						<div className="personal-info-label">Phone:</div>
						<div className="personal-info-value">{userPhone}</div>
					</div>
					{/* <div className="personal-info-row">
						<div className="personal-info-label">Address:</div>
						<div className="personal-info-value">{user.address}</div>
					</div> */}
				</div>
			</div>
			<div>
				<button className="showBtn" onClick={handleShow}>
					Edit Profile
				</button>
			</div>
			{show && <UserRegistration />}
		</>
	);
}

export default PersonalInformation;
