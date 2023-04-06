import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { NavLink, useNavigate } from "react-router-dom";
import RegPopUp from "./RegPopup/RegPopup";
import signup_logo from "../../../../assets/logo_icon.png";

const SignUp = () => {
	const [user, setUser] = useState([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [registrationId, setRegistrationId] = useState("");

	console.log(user);

	const navigate = useNavigate();

	useEffect(() => {
		const auth = localStorage.getItem("user");
		if (auth) {
			navigate("/");
		}
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = { name, email, password, phone };
// 		const baseUrl = "https://server-cpd-git-main-aadarshkum.vercel.app/signup";
		
		{
        return fetch('https://server-cpd-git-main-aadarshkum.vercel.app//signup',
        {   method:'POST',
            mode: 'cors',
            headers:{
                'Access-Control-Allow-Origin':'*'
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.ALLORDERSRX);
            this.setState({
                isLoading: false,
                dataSource: responseJson.ALLORDERSRX,
            }, function(){

            });
        })
        .catch((error) =>{
            console.error(error);
        });

    }

		try {
			await axios.post(baseUrl, data);
			// console.log(result.data);
			// setName("");
			// setEmail("");
			// setPassword("");
			// setPhone("");
		} catch (error) {
			console.error(error);
		}
	};

	const handleSignup = () => {
		axios
			.get(`http://localhost:3000/users/${email}`)
			.then((res) => setUser(res.data))
			.catch((err) => console.log(err));

		// code to sign up the user and get their registration ID
		setRegistrationId(user.userId); // set the registration ID received from the server
	};

	return (
		<>
			<div className="main_container">
				<div className="container2">
					<div className="brand-logo">
						<img width={80} height={80} src={signup_logo} alt="signup_logo" />
					</div>
					<div className="brand-title">SIGN UP</div>
					<div className="inputss">
						<form onSubmit={handleSubmit}>
							<label className="labelss">Name</label>
							<input
								className="login-form-input"
								type="text"
								// placeholder="Name"
								value={name}
								required
								onChange={(event) => setName(event.target.value)}
							/>
							<label className="labelss">Email</label>

							<input
								className="login-form-input"
								type="email"
								name="your-email"
								// placeholder="Email Address"
								required
								onChange={(event) => setEmail(event.target.value)}
							/>
							<label className="labelss">Password</label>

							<input
								className="login-form-input"
								type="password"
								name="your-password"
								// placeholder="Password"
								required
								onChange={(event) => setPassword(event.target.value)}
							/>
							<label className="labelss">Phone</label>
							<input
								className="login-form-input"
								type="text"
								// placeholder="Phone"
								required
								onChange={(event) => setPhone(event.target.value)}
							/>
							<button
								className="login-form-btn"
								type="submit"
								onClick={handleSignup}>
								SignUp
							</button>
							<p className="text">
								<p className="text">Already have an account ?</p>
								<NavLink className="navlink_signup" to="/login">
									<p className="text_login">Log In</p>
								</NavLink>
							</p>
						</form>
					</div>
					{registrationId && <RegPopUp registrationId={registrationId} />}
				</div>
			</div>
		</>
	);
};

export default SignUp;
