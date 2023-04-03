import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./MainNav.css";
import logo from "../../assets/logo.webp";

const MainNav = () => {
	const auth = localStorage.getItem("user");
	const userName = JSON.parse(auth);

	const navigate = useNavigate();

	const logout = () => {
		localStorage.clear();
		navigate("/signup");
	};

	return (
		<div>
			<nav className="navbar">
				{auth ? (
					<>
						<img src={logo} alt="logo" />

						<NavLink className="navlink" onClick={logout}>
							Logout [{userName.name}]
						</NavLink>
					</>
				) : (
					<>
						<img src={logo} alt="logo" />

						<div>
							<NavLink to="/login" className="navlink">
								Login
							</NavLink>

							<NavLink className="navlink" to="/signup">
								Register
							</NavLink>
						</div>
					</>
				)}
			</nav>
		</div>
	);
};

export default MainNav;
