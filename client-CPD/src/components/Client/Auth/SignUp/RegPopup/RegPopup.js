import React, { useState } from "react";
import "./RegPopup.css";

function RegPopup({ registrationId }) {
	const [showPopup, setShowPopup] = useState(true);

	const handleClose = () => {
		setShowPopup(false);
	};

	return (
		showPopup && (
			<div className="popup">
				<div className="popup-content">
					<span className="close" onClick={handleClose}>
						&times;
					</span>
					<p>This is your registration ID:</p>
					<h2>{registrationId}</h2>
					<p>Please note it down.</p>
				</div>
			</div>
		)
	);
}

export default RegPopup;
