import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<div className="homepage">
			<Link to={"/shop"}>
				<button>Start Consuming!</button>
			</Link>
		</div>
	);
};

export default Homepage;
