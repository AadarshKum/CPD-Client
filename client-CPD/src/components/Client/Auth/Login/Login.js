import React, { useState } from "react";
import axios from "axios";
import signup_logo from "../../../../assets/logo_icon.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(email, password);
		const data = { email, password };
		const baseUrl = "https://server-cpd-git-main-aadarshkum.vercel.app/login";

		try {
			const result = await axios.post(baseUrl, data);
			console.log(result.data);
			if (result.data.name) {
				localStorage.setItem("user", JSON.stringify(result.data));
				if (result.data.role === "admin") {
					navigate("/admin");
				} else if (result.data.role === "user") {
					navigate("/dashboard1");
				}
			} else {
				alert("Please type correct details");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="main_container">
			<div className="container_login">
				<div className="brand-logo">
					<img width={80} height={80} src={signup_logo} alt="signup_logo" />
				</div>
				<div className="brand-title">LOG IN</div>
				<div className="inputss">
					<form onSubmit={handleSubmit}>
						<label className="labelss">Email</label>
						<input
							className="login-form-input"
							type="email"
							value={email}
							placeholder="Email Address"
							onChange={(event) => setEmail(event.target.value)}
							required
						/>
						<label className="labelss">Password</label>
						<input
							className="login-form-input"
							type="password"
							value={password}
							placeholder="Password"
							onChange={(event) => setPassword(event.target.value)}
							required
						/>
						<button className="login-form-btn" type="submit">
							Login
						</button>
						<p className="text">
							<a href="#">Forgot password?</a> or <a href="#">Sign up</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
