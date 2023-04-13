import React from "react";
import CartItem from "../../components/CartItem/CartItem";

const Cart = (props) => {
	const cost = props.cart
		.reduce((total, item) => {
			return total + item.price * item.quantity;
		}, 0)
		.toFixed(2);

	return (
		<div>
			<div>
				<h1>cart</h1>
			</div>
			<div>
				{props.cart.map((item) => {
					return (
						<CartItem
							key={`cart-${item.id}`}
							item={item}
							incrementQuantity={props.incrementQuantity}
							decrementQuantity={props.decrementQuantity}
							getCartItem={props.getCartItem}
						/>
					);
				})}
			</div>
			<div>
				<h3>${cost}</h3>
				<button onClick={() => props.clearCart()}>Checkout</button>
			</div>
		</div>
	);
};

export default Cart;
