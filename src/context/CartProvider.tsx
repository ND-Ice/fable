import _ from 'lodash';
import React, { createContext, Dispatch, useReducer } from 'react';

import CartItemType from '@/types/cart-item-type';

type CartContextType = {
	state: CartStateType;
	dispatch: Dispatch<CartActionType>;
};

type CartProviderProps = {
	children: React.ReactNode;
};

type CartStateType = {
	cartItems: CartItemType[];
};

type CartActionType = {
	type: string;
	payload: any;
};

function cartReducer(state: CartStateType, action: CartActionType) {
	switch (action.type) {
		case 'CART_ITEM_ADDED':
			return { cartItems: [...state.cartItems, action.payload] };

		case 'CART_ITEM_REMOVED':
			const filtered = state.cartItems.filter(
				(cartItem) => cartItem._id !== action.payload.id
			);
			return { cartItems: filtered };

		case 'CART_ITEM_INCREMENTED':
			const quantity = action.payload.quantity ?? 1;
			const incremented = state.cartItems.map((cartItem) =>
				cartItem._id === action.payload.id
					? {
							...cartItem,
							quantity: cartItem.quantity + quantity,
					  }
					: cartItem
			);
			return { cartItems: incremented };

		case 'CART_ITEM_DECREMENTED':
			const decremented = state.cartItems.map((cartItem) =>
				cartItem._id === action.payload.id
					? { ...cartItem, quantity: cartItem.quantity - 1 }
					: cartItem
			);
			return { cartItems: decremented };

		case 'CART_ITEMS_RECEIVED':
			return { cartItems: action.payload };

		default:
			throw new Error();
	}
}

export const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({ children }: CartProviderProps) {
	const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
}
