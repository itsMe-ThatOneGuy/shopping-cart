import React from "react";
import ShopItem from "../../components/ShopItem/ShopItem";
import { useState, useEffect } from "react";

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

	return (
		<div>
			<div>
				<h1>Shop</h1>
			</div>
			<div>
				{items.map((item) => {
					return <ShopItem key={item.id} item={item} />;
				})}
			</div>
		</div>
	);
};

export default Shop;