import React, { useState } from "react";
import "./AddCPD.css";
import cisa_logo from "../../../../../assets/cisa.png";

const activityOptions = [
	"None",
	" CPD-01: CNS Trainings, Certifications, Seminars and Events",
	"CPD-02: Non-CNS Professional Certifications",
	"CPD-03: Trainings, Seminars, and Events",
	" CPD-04: Presentations, Lecture and Speaker",
	" CPD-05: Self-study, Articles, and Book Authoring",
];
const deliveryOptions = ["None", "Online", "Offline", "Hybrid", "Virtual"];

const AddCPD = () => {
	const [title, setTitle] = useState("");
	const [sponsor, setSponsor] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [qualifyingActivity, setQualifyingActivity] = useState("");
	const [methodOfDelivery, setMethodOfDelivery] = useState("");

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSponsorChange = (event) => {
		setSponsor(event.target.value);
	};

	const handleStartDateChange = (event) => {
		setStartDate(event.target.value);
	};

	const handleEndDateChange = (event) => {
		setEndDate(event.target.value);
	};

	const handleActivityChange = (event) => {
		setQualifyingActivity(event.target.value);
	};

	const handleDeliveryChange = (event) => {
		setMethodOfDelivery(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Add your save logic here
	};

	return (
		<div className="main_container">
			<div className="container_addCPD">
				<div className="brand-title">ADD CPD</div>
				<p>CPD Details</p>
				<div className="inputss">
					<p className="required_p">*All fields Required</p>
					<form onSubmit={handleSubmit}>
						<label className="labelss">Title</label>
						<input
							className="login-form-input"
							type="text"
							id="title"
							value={title}
							onChange={handleTitleChange}
						/>

						<label className="labelss">Sponsor Organization</label>
						<input
							className="login-form-input"
							type="text"
							id="sponsor"
							value={sponsor}
							onChange={handleSponsorChange}
						/>

						<label className="labelss">Start Date:</label>
						<input
							className="login-form-input"
							type="date"
							id="startDate"
							value={startDate}
							onChange={handleStartDateChange}
						/>

						<label className="labelss">End Date:</label>
						<input
							className="login-form-input"
							type="date"
							id="endDate"
							value={endDate}
							onChange={handleEndDateChange}
						/>

						<label className="labelss">Qualifying Activity:</label>
						<select
							className="login-form-input"
							id="qualifyingActivity"
							// value={qualifyingActivity}
							onChange={handleActivityChange}>
							{activityOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>

						<label className="labelss">Method of Delivery:</label>
						<select
							className="login-form-input"
							id="methodOfDelivery"
							value={methodOfDelivery}
							onChange={handleDeliveryChange}>
							{deliveryOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>

						<div className="addCPD_about">
							<h3>Certification Receiving Hours</h3>
							<p>
								Enter the number of qualifying ADD CPD hours for the
								certification of your choosing from the list below
							</p>
							<div className="img_and_hour">
								<img src={cisa_logo} alt="cisa_logo" />
								<p>
									Reminder: Your annual minimun requirement is 20 ADD CPD hours.
									A total of 120 ADD CPD hourse are Required for your 3-year
									cycle. Please refer to the ADD CPD Policy for full
									requirements.
								</p>

								<div>
									Hours
									<div className="border">&nbsp;&nbsp; 0</div>
								</div>
							</div>
						</div>

						<div className="addCPD_btn">
							<button className="login-form-btn" type="submit">
								Save & Close
							</button>
							<button className="login-form-btn" type="button">
								Next
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddCPD;
