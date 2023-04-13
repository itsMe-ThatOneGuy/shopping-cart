import React from "react";

const CartItem = (props) => {
	const buttonText = props.item.quantity === 1 ? "Remove From Cart" : "-";

	return (
		<div data-cart-id={props.item.id}>
			<img src={props.item.image} alt={props.item.title} />
			<h3>{props.item.title}</h3>
			<p>${props.item.price}</p>
			<button
				onClick={(e) => {
					const itemId = e.currentTarget.parentNode.dataset.cartId;
					props.decrementQuantity(props.getCartItem(itemId));
				}}>
				{buttonText}
			</button>
			<p>{props.item.quantity}</p>
			<button
				onClick={(e) => {
					const itemId = e.currentTarget.parentNode.dataset.cartId;
					props.incrementQuantity(props.getCartItem(itemId));
				}}>
				+
			</button>
		</div>
	);
};

export default CartItem;
