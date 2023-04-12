import React from "react";
import ShopItem from "../../components/ShopItem/ShopItem";
import { useState, useEffect } from "react";
import "./Shop.css";

const Shop = (props) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		const data = await fetch("https://fakestoreapi.com/products");
		const items = await data.json();
		setItems(items);
	};

	const test = () => {
		console.log(props.cart);
	};

	return (
		<div>
			<div>
				<h1>Shop</h1>
			</div>
			<button onClick={test}>Test</button>
			<div className="shop-container">
				{items.map((item) => {
					return (
						<ShopItem
							key={item.id}
							item={item}
							addToCart={props.addToCart}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Shop;
