import React from "react";

const CartItem = (props) => {
	return (
		<div>
			<img src={props.item.image} alt={props.item.title} />
			<h3>{props.item.title}</h3>
			<p>${props.item.price}</p>
			<button>-</button>
			<p>{props.item.quantity}</p>
			<button>+</button>
		</div>
	);
};

export default CartItem;
