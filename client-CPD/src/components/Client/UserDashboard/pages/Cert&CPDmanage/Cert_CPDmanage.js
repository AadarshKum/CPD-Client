import React from "react";
import "./Cert_CPDmanage.css";
import { Link } from "react-router-dom";
import cisa_img from "../../../../../assets/cisa.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Cert_CPDmanage = () => {
	const percentage = 66;

	return (
		<>
			<div className="main_container">
				<div className="container_CPD">
					<div className="section1">
						<h2>Certification & CPE Management</h2>
						<p>
							Enter Certification requires an annual renewal to remain activeand
							in good standing. Renewal includes:
						</p>
						<li>Earning and reporting a minimun of 20 CPE hours annuals</li>
						<li>
							Earning and reporting a minimun of 120 CPE hours for your three
							year reporting CPE
						</li>
						<li>
							Payment of the annual maintentance fee (US$45 for members/US$85
							for non-members)
						</li>
						<h5>
							ISACA recommends earning 40 CPE hourse to help meet the three-year
							cycle requirement. To learn more, review the applicable CPE
							policy. All policiesare found
							<Link className="link_here" to="#">
								here
							</Link>
						</h5>
					</div>
				</div>
			</div>
			<div className="main_container2">
				<div className="main_container2_section_left">
					<div className="section2_left">
						<div className="img_and_status">
							<div className="img_cisa">
								<img src={cisa_img} alt="cisa_img" />
							</div>
							<div className="certified_sec">
								<h3>You are CISA certified</h3>
								<p>STATUS: ACTIVE </p>
								<p>NUMBER: CISA-13110960 </p>
								<p>CERTIFICATE DATE: 1 DEC 2022 </p>
								<p>CERTIFIED THROUGH: 2025 </p>
								<p>3-YEAR-REPORTING-CYCLE: 2022-2025 </p>
							</div>
						</div>
						<div className="section2_btns">
							<button className="section2_btn">PAY MAINTENECE FEE</button>
							<button className="section2_btn">REPORT & MANAGE CPD </button>
						</div>
						<div className="section2_certificate_btns">
							<button>View/Accept Badges</button>
							<button>Print Certificate</button>
							<button>View Invoice</button>
						</div>
						<div className="desc">
							Need CPD? Learn about <span>CPD Opportunities from ISACA</span>
						</div>
					</div>
				</div>
				<div className="main_container2_section_left">
					<div
						className="section2_right"
						style={{
							width: "300px",
							height: "300px",
							textAlign: "center",
							marginBottom: "20px",
						}}>
						CPD PROGRESS
						<CircularProgressbar value={percentage} text={`${percentage}%`} />
						<div className="earned_hours_main">
							<h4>Earned Hours</h4>
							<div className="earned_hours">
								<div className="earned_hours_curr">
									<h5>Current year Cycle</h5>
									<table>
										<tr>
											<td>You Earned</td>
											<td>Total</td>
										</tr>
										<tr>
											<td>1 Hrs</td>
											<td>120 Hrs</td>
										</tr>
									</table>
								</div>
								<div className="earned_hours_threeyear">
									<h5>3 Year Cycle</h5>
									<table>
										<tr>
											<td>You Earned</td>
											<td>Total</td>
										</tr>
										<tr>
											<td>1 Hrs</td>
											<td>120 Hrs</td>
										</tr>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cert_CPDmanage;
