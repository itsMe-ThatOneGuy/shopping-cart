import React from "react";

const ShopItem = (props) => {
	return (
		<div>
			<img src={props.items.image} alt={props.items.title} />
			<h3>{props.items.title}</h3>
			<p>${props.items.price}</p>
			<button>Add to cart</button>
		</div>
	);
};

export default ShopItem;
