import React from "react";

const ShopItem = (props) => {
	return (
		<div className="shop-item" id={`item-${props.item.id}`}>
			<div className="shop-item-img">
				<img src={props.item.image} alt={props.item.title} />
			</div>
			<div className="shop-item-details">
				<h3>{props.item.title}</h3>
				<p>${props.item.price}</p>
			</div>
			<div className="shop-item-controls">
				<button>-</button>
				<button>Add to cart</button>
				<button>+</button>
			</div>
		</div>
	);
};

export default ShopItem;
