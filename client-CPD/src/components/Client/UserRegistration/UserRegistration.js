import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserRegistration.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const UserRegistration = () => {
	// const [registrationId, setRegistrationId] = useState("");
	const [picture, setPicture] = useState("");

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [age, setAge] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [qualification, setQaulification] = useState("");

	const navigate = useNavigate();

	const user = localStorage.getItem("user");
	const userParse = JSON.parse(user);
	const userId = userParse._id;
	// console.log(userId);

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(name, email, age, phone, address, qualification);
		const data = {
			name,
			email,
			age,
			phone,
			address,
			qualification,
			picture,
		};
		const baseUrl = "http://localhost:3000/users/approve";

		try {
			const result = await axios.put(baseUrl, data);
			console.log(result.data);
			// localStorage.setItem("userRegistration", JSON.stringify(result.data));
			// navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	function converttoBase64(event) {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			setPicture(reader.result);
		};
	}

	return (
		<div className="main_container">
			<div class="container_registration">
				<div className="brand-title">Edit Profile</div>

				<div className="inputss">
					<form onSubmit={handleSubmit}>
						<label className="labelss">Registration Id</label>
						<input
							className="login-form-input"
							type="number"
							name="id"
							value={userId}
							required
							placeholder={userId}
							// onChange={(event) => setRegistrationId(event.target.value)}
						/>

						<label className="labelss">Name </label>
						<input
							className="login-form-input"
							type="text"
							name="name"
							value={userParse.name}
							required
							onChange={(event) => setName(event.target.value)}
						/>

						<label className="labelss">Email</label>
						<input
							className="login-form-input"
							type="email"
							name="email"
							value={userParse.email}
							required
							onChange={(event) => setEmail(event.target.value)}
						/>

						<label className="labelss">Phone</label>
						<input
							className="login-form-input"
							type="tel"
							name="phone"
							value={userParse.phone}
							required
							onChange={(event) => setPhone(event.target.value)}
						/>

						<label className="labelss">Age </label>
						<input
							className="login-form-input"
							type="text"
							name="age"
							value={age}
							required
							onChange={(event) => setAge(event.target.value)}
						/>

						<label className="labelss">Address</label>
						<input
							className="login-form-input"
							name="text"
							value={address}
							required
							onChange={(event) => setAddress(event.target.value)}></input>

						<label className="labelss">Qualification</label>
						<input
							className="login-form-input"
							type="text"
							name="qualification"
							value={qualification}
							required
							onChange={(event) => setQaulification(event.target.value)}
						/>

						<label>
							Profile Picture
							<input
								type="file"
								name="profilePicture"
								accept="image/*"
								onChange={converttoBase64}
							/>
						</label>
						{picture == "" || picture == null ? (
							""
						) : (
							<img width={100} height={100} src={Image} />
						)}
						<Link>
							<button className="login-form-btn" type="submit">
								Register
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserRegistration;
