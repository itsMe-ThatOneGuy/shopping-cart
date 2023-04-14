import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

const Cart = (props) => {
	const cost = props.cart
		.reduce((total, item) => {
			return total + item.price * item.quantity;
		}, 0)
		.toFixed(2);

	return (
		<div>
			<div>
				<h1>Cart</h1>
			</div>
			<div className="cart-container">
				<div className="cart-list">
					{props.cart.map((item) => {
						return (
							<CartItem
								key={`cart-${item.id}`}
								item={item}
								incrementQuantity={props.incrementQuantity}
								decrementQuantity={props.decrementQuantity}
								getCartItem={props.getCartItem}
								cartInputQuantity={props.cartInputQuantity}
							/>
						);
					})}
				</div>
				<div className="cart-total">
					Total
					<h3>${cost}</h3>
					<button onClick={() => props.clearCart()}>Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
