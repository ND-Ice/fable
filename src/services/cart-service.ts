import client from '@/config/sanity-config';
import CartItemType from '@/types/cart-item-type';

const fetchCartItems = () => client.fetch(`*[_type == 'cart']`);

const addToCart = (product: CartItemType) =>
	client.create({ _type: 'cart', ...product });

const removeToCart = (id: string) => client.delete(id);

const incrementCartItem = (id: string) =>
	client.patch(id).inc({ quantity: 1 }).commit();

const decrementCartItem = (id: string) =>
	client.patch(id).dec({ quantity: 1 }).commit();

const cartService = {
	fetchCartItems,
	addToCart,
	removeToCart,
	incrementCartItem,
	decrementCartItem,
};

export default cartService;
