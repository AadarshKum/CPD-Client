import React from "react";
import { Breadcrumbs, Link, Box } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";

const NavLink = () => {
	return (
		<Box sx={{ background: "#fff", height: 150 }} position="fixted">
			<Breadcrumbs sx={{ color: "#8B0000" }}>
				<Link
					underline="hover"
					sx={{ display: "flex", alignItems: "center", marginLeft: "350px" }}
					color="inherit"
					href="/">
					{/* <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
					Home
				</Link>
				<Link
					underline="hover"
					sx={{ display: "flex", alignItems: "center" }}
					color="inherit"
					href="/">
					MyCPD
				</Link>
				<Link
					underline="hover"
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					color="inherit"
					href="/">
					Certification
				</Link>
			</Breadcrumbs>
			<Box m={3} display="flex" justifyContent="center" alignItems="center">
				<img src="logo.webp" alt="" width="15%" height="15%" />
			</Box>
		</Box>
	);
};

export default NavLink;
