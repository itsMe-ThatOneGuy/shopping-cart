import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
	const buttonText = props.item.quantity === 1 ? "Remove From Cart" : "-";

	const handleOnChange = (e) => {
		props.cartInputQuantity(
			parseInt(e.target.value),
			props.getCartItem(e.currentTarget.parentNode.dataset.cartId)
		);
	};

	return (
		<div className="cart-item">
			<div className="cart-item-img">
				<img src={props.item.image} alt={props.item.title} />
			</div>
			<div className="cart-item-right">
				<div className="cart-item-details">
					<h3>{props.item.title}</h3>
					<p>${props.item.price}</p>
				</div>
				<div data-cart-id={props.item.id}>
					<input
						onChange={handleOnChange}
						value={props.item.quantity}
						type="number"></input>
					<div
						data-cart-id={props.item.id}
						className="cart-item-control">
						<button
							onClick={(e) => {
								const itemId =
									e.currentTarget.parentNode.dataset.cartId;
								props.decrementQuantity(
									props.getCartItem(itemId)
								);
							}}>
							{buttonText}
						</button>
						<button
							onClick={(e) => {
								const itemId =
									e.currentTarget.parentNode.dataset.cartId;
								props.incrementQuantity(
									props.getCartItem(itemId)
								);
							}}>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
