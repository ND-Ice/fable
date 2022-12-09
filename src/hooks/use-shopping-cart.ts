import _ from 'lodash';
import { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

import { CartContext } from '@/context/CartProvider';
import cartService from '@/services/cart-service';
import CartItemType from '@/types/cart-item-type';
import axios from 'axios';

export const useFetchCartItems = () => {
	const cartContext = useContext(CartContext);

	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const cartItems = await cartService.fetchCartItems();
				cartContext?.dispatch({
					type: 'CART_ITEMS_RECEIVED',
					payload: [...cartItems],
				});
			} catch (error) {
				if (error instanceof Error) toast.error(error.message);
			}
		};
		fetchCartItems();
		// eslint-disable-next-line
	}, []);

	return { ...cartContext?.state };
};

export const useAddToCart = () => {
	const cartContext = useContext(CartContext);
	const cartItems = cartContext?.state?.cartItems;

	const addToCart = async (cartItem: CartItemType) => {
		try {
			const { data } = await axios.post('/api/add-to-cart', { ...cartItem });
			const isExist = _.find(cartItems, { _id: data?._id });

			if (isExist) {
				cartContext?.dispatch({
					type: 'CART_ITEM_INCREMENTED',
					payload: { id: data?._id, quantity: cartItem.quantity },
				});
				return toast.success('Cart Item Incremented');
			}

			toast.success('Added To Cart');
			return cartContext?.dispatch({
				type: 'CART_ITEM_ADDED',
				payload: { ...data },
			});
		} catch (error) {
			if (error instanceof Error) toast.error(error.message);
		}
	};

	return { ...cartContext?.state, addToCart };
};

export const useRemoveToCart = () => {
	const cartContext = useContext(CartContext);

	const removeToCart = async (id: string) => {
		try {
			await cartService.removeToCart(id);
			cartContext?.dispatch({
				type: 'CART_ITEM_REMOVED',
				payload: { id },
			});
			toast.success('Removed to Cart');
		} catch (error) {
			if (error instanceof Error) toast.error(error.message);
		}
	};
	return { removeToCart };
};

export const useIncrementCart = () => {
	const cartContext = useContext(CartContext);

	const inCrementCartItem = async (id: string) => {
		try {
			await cartService.incrementCartItem(id);
			cartContext?.dispatch({ type: 'CART_ITEM_INCREMENTED', payload: { id } });
			toast.success('Item Incremented');
		} catch (error) {
			if (error instanceof Error) toast.error(error.message);
		}
	};
	return { ...cartContext?.state, inCrementCartItem };
};

export const useDecrementCart = () => {
	const cartContext = useContext(CartContext);

	const decrementCartItem = async (id: string) => {
		try {
			await cartService.decrementCartItem(id);
			cartContext?.dispatch({ type: 'CART_ITEM_DECREMENTED', payload: { id } });
			toast.success('Item Decremented');
		} catch (error) {
			if (error instanceof Error) toast.error(error.message);
		}
	};
	return { ...cartContext?.state, decrementCartItem };
};
