import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	const navStyle = {
		color: "white",
	};
	return (
		<nav>
			<h3>Logo</h3>
			<ul className="nav-links">
				<Link style={navStyle} to={"/homepage"}>
					<li>Home</li>
				</Link>
				<Link style={navStyle} to={"/shop"}>
					<li>Shop</li>
				</Link>
				<Link style={navStyle} to={"/cart"}>
					<li>Cart</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
