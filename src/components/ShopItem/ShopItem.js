import React from "react";

const ShopItem = (props) => {
	const item = {
		id: props.item.id,
		image: props.item.image,
		title: props.item.title,
		price: props.item.price,
		quantity: 1,
	};

	return (
		<div className="shop-item" data-shopitem-id={props.item.id}>
			<div className="shop-item-img">
				<img src={props.item.image} alt={props.item.title} />
			</div>
			<div className="shop-item-details">
				<h3>{props.item.title}</h3>
				<p>${props.item.price}</p>
			</div>
			<div className="shop-item-controls">
				<button>-</button>
				<button
					onClick={() => {
						props.addToCart(item);
					}}>
					Add to cart
				</button>
				<button>+</button>
			</div>
		</div>
	);
};

export default ShopItem;
