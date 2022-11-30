import _ from 'lodash';
import React, { createContext, useState } from 'react';

import SizeType from '@/types/size-type';

type CartContextType = {
	cartItems: CartItemType[];
	addToCart: (cartItem: CartItemType) => void;
	removeToCart: (id: string) => void;
	deleteToCart: (id: string) => void;
};

type CartItemType = {
	cartId: string;
	productId: string;
	qty: number;
	size: SizeType;
	color: string;
};

type Props = {
	children: React.ReactNode;
};

export const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({ children }: Props) {
	const [cartItems, setCartItems] = useState<CartItemType[]>([]);

	const addToCart = (product: CartItemType) => {
		if (
			_.find(cartItems, {
				productId: product.productId,
				color: product.color,
				size: product.size,
			})
		)
			return setCartItems((prevItems) =>
				_.map(prevItems, (cartItem) =>
					cartItem.productId === product.productId &&
					cartItem.color === product.color &&
					cartItem.size === product.size
						? { ...cartItem, qty: cartItem.qty + product.qty }
						: cartItem
				)
			);
		return setCartItems((prevItems) => [...prevItems, product]);
	};

	const removeToCart = (id: string) => {
		if (_.find(cartItems, { productId: id })?.qty === 1) {
			return setCartItems((prevItems) =>
				_.filter(prevItems, (item) => item.cartId !== id)
			);
		}

		return setCartItems((prevItems) =>
			prevItems.map((prevItem) =>
				prevItem.cartId === id
					? { ...prevItem, qty: prevItem.qty - 1 }
					: prevItem
			)
		);
	};

	const deleteToCart = (id: string) =>
		setCartItems((prevItems) =>
			_.filter(prevItems, (cartItem) => cartItem.cartId !== id)
		);

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, removeToCart, deleteToCart }}
		>
			{children}
		</CartContext.Provider>
	);
}
