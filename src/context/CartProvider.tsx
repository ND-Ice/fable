import _ from 'lodash';
import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';

import CartItemType from '@/types/cart-item-type';

type CartContextType = {
	cartItems: CartItemType[];
	addToCart: (cartItem: CartItemType) => void;
	removeToCart: (id: string) => void;
	deleteToCart: (id: string) => void;
	incrementCartItem: (id: string) => void;
};

type Props = {
	children: React.ReactNode;
};

export const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({ children }: Props) {
	const [cartItems, setCartItems] = useState<CartItemType[]>([]);

	const addToCart = (product: CartItemType) => {
		const alreadyInCart = _.find(cartItems, {
			productId: product.productId,
			color: product.color,
			size: product.size,
		});

		if (alreadyInCart) {
			setCartItems((prevItems) =>
				_.map(prevItems, (cartItem) =>
					cartItem.productId === product.productId &&
					cartItem.color === product.color &&
					cartItem.size === product.size
						? { ...cartItem, qty: cartItem.qty + product.qty }
						: cartItem
				)
			);
			toast.success('Item Incremented by 1');
		} else {
			setCartItems((prevItems) => [...prevItems, product]);
			toast.success('Added to cart');
		}
	};

	const incrementCartItem = (id: string) => {
		setCartItems((prevItems) =>
			prevItems.map((prevItem) =>
				prevItem.cartId === id
					? { ...prevItem, qty: prevItem.qty + 1 }
					: prevItem
			)
		);
		toast.success('Item Incremented by 1');
	};

	const removeToCart = (id: string) => {
		if (_.find(cartItems, { cartId: id })?.qty === 1) {
			setCartItems((prevItems) =>
				_.filter(prevItems, (item) => item.cartId !== id)
			);
			toast.success('Removed from the cart');
		} else {
			setCartItems((prevItems) =>
				prevItems.map((prevItem) =>
					prevItem.cartId === id
						? { ...prevItem, qty: prevItem.qty - 1 }
						: prevItem
				)
			);
			toast.success('Item decreased by 1');
		}
	};

	const deleteToCart = (id: string) => {
		setCartItems((prevItems) =>
			_.filter(prevItems, (cartItem) => cartItem.cartId !== id)
		);
		toast.success('Removed from the cart');
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeToCart,
				deleteToCart,
				incrementCartItem,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
