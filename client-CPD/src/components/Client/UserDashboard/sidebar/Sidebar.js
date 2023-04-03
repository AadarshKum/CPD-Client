import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.scss";
import avatar from "../../../../assets/icons8-customer-48.png";
import axios from "axios";

const sidebarNavItems = [
	{
		display: "Dashboard",
		icon: <i className="bx bx-home"></i>,
		to: "/dashboard",
		section: "",
	},
	// {
	// 	display: "Registration",
	// 	icon: <i className="bx bx-star"></i>,
	// 	to: "/registration",
	// 	section: "started",
	// },
	// {
	// 	display: "Approval Status",
	// 	icon: <i className="bx bx-star"></i>,
	// 	to: "/approvstatus",
	// 	section: "started",
	// },
	{
		display: "Profile",
		icon: <i className="bx bx-star"></i>,
		to: "/personalinfo",
		section: "started",
	},
	{
		display: "Certificate & CPD Management",
		icon: <i className="bx bx-calendar"></i>,
		to: "/certandmanagement",
		section: "calendar",
	},
	{
		display: "Add CPD",
		icon: <i className="bx bx-user"></i>,
		to: "/addcpd",
		section: "user",
	},
	{
		display: "Manage CPD",
		icon: <i className="bx bx-receipt"></i>,
		to: "/managecpd",
		section: "order",
	},
	{
		display: "Logout",
		icon: <i className="bx bx-receipt"></i>,
		to: "/login",
		section: "order",
	},
];

const Sidebar = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [stepHeight, setStepHeight] = useState(0);
	const sidebarRef = useRef();
	const indicatorRef = useRef();
	const location = useLocation();

	const [fileUrl, setFileUrl] = useState("");
	console.log(fileUrl);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("http://localhost:3000/uploading/1");
				setFileUrl(response.data.url); // Assuming that the URL of the saved file object is stored as 'url' property
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);

	const getUser = localStorage.getItem("user");
	const userEmail = JSON.parse(getUser).email;
	const userName = JSON.parse(getUser).name;

	useEffect(() => {
		setTimeout(() => {
			const sidebarItem = sidebarRef.current.querySelector(
				".sidebar__menu__item"
			);
			indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
			setStepHeight(sidebarItem.clientHeight);
		}, 50);
	}, []);

	// change active index
	useEffect(() => {
		const curPath = window.location.pathname.split("/")[1];
		const activeItem = sidebarNavItems.findIndex(
			(item) => item.section === curPath
		);
		setActiveIndex(curPath.length === 0 ? 0 : activeItem);
	}, [location]);

	return (
		<div className="sidebar">
			<div className="sidebar__logo">
				{" "}
				{fileUrl && (
					<img className="avatar_img" src={fileUrl} alt="Uploaded file" />
				)}
				<p>{userName}</p>
			</div>
			<div ref={sidebarRef} className="sidebar__menu">
				<div
					ref={indicatorRef}
					className="sidebar__menu__indicator"
					style={{
						transform: `translateX(-50%) translateY(${
							activeIndex * stepHeight
						}px)`,
					}}></div>
				{sidebarNavItems.map((item, index) => (
					<Link to={item.to} key={index}>
						<div
							className={`sidebar__menu__item ${
								activeIndex === index ? "active" : ""
							}`}>
							<div className="sidebar__menu__item__icon">{item.icon}</div>
							<div className="sidebar__menu__item__text">{item.display}</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
