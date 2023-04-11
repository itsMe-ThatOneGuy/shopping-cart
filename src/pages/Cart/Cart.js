import React from "react";
import CartItem from "../../components/CartItem/CartItem";

const Cart = (props) => {
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
							getCartItem={props.getCartItem}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Cart;
