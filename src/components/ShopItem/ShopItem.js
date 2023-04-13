import React from "react";
import "./ShopItem.css";

const ShopItem = (props) => {
	const item = {
		id: props.item.id,
		image: props.item.image,
		title: props.item.title,
		price: props.item.price.toFixed(2),
		quantity: 1,
	};

	return (
		<div className="shop-item" data-shopitem-id={item.id}>
			<div className="shop-item-img">
				<img src={item.image} alt={item.title} />
			</div>
			<div className="shop-item-details">
				<h6>{item.title}</h6>
				<p>${item.price}</p>
				<button
					onClick={() => {
						props.addToCart(item);
					}}>
					Add to cart
				</button>
			</div>
			<div className="shop-item-controls"></div>
		</div>
	);
};

export default ShopItem;
