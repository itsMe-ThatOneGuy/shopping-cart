import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop/Shop";
import Homepage from "./pages/Homepage/Homepage";
import "./App.css";
import Cart from "./pages/Cart/Cart";

const App = () => {
	const [cart, setCart] = useState([]);

	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/homepage" exact element={<Homepage />} />
					<Route path="/shop" exact element={<Shop />} />
					<Route path="/cart" exact element={<Cart cart={cart} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
export default App;
