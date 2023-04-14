import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop/Shop";
import Homepage from "./pages/Homepage/Homepage";
import "./App.css";
import Cart from "./pages/Cart/Cart";

const App = () => {
	const [cart, setCart] = useState([]);
	const [cartAmount, setCartAmount] = useState();

	const addToCart = (item) => {
		const index = getCartItem(item.id);
		if (index === -1) {
			setCart([...cart, item]);
		} else {
			incrementQuantity(index);
		}
	};

	useEffect(() => {
		updateCartAmount();
	}, [cart]);

	const updateCart = (newCart) => {
		setCart(newCart);
	};

	const clearCart = () => {
		setCart([]);
	};

	const updateCartAmount = () => {
		const cartQuantity = cart.reduce(
			(total, item) => total + item.quantity,
			0
		);
		setCartAmount(cartQuantity);
	};

	const getCartItem = (key) => {
		const index = cart.findIndex((obj) => obj.id === parseInt(key));
		return index;
	};

	const cartInputQuantity = (value, item) => {
		const currentCart = [...cart];
		currentCart[item].quantity = value;
		validateCart(currentCart);
	};

	const decrementQuantity = (item) => {
		const currentCart = [...cart];
		const thisItem = currentCart[item];
		if (thisItem.quantity !== 0) {
			thisItem.quantity -= 1;
		}
		validateCart(currentCart);
	};

	const incrementQuantity = (item) => {
		const currentCart = [...cart];
		currentCart[item].quantity += 1;
		validateCart(currentCart);
	};

	const validateCart = (newCart) => {
		const updatedCart = newCart.filter((item) => item.quantity !== 0);
		setCart(updatedCart);
	};

	return (
		<HashRouter>
			<div className="App">
				<Navbar cartAmount={cartAmount} />
				<Routes>
					<Route path="/homepage" exact element={<Homepage />} />
					<Route
						path="/shop"
						exact
						element={<Shop addToCart={addToCart} cart={cart} />}
					/>
					<Route
						path="/cart"
						exact
						element={
							<Cart
								cart={cart}
								incrementQuantity={incrementQuantity}
								decrementQuantity={decrementQuantity}
								getCartItem={getCartItem}
								clearCart={clearCart}
								cartInputQuantity={cartInputQuantity}
							/>
						}
					/>
				</Routes>
			</div>
		</HashRouter>
	);
};
export default App;
