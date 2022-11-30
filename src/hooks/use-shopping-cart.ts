import { useContext } from 'react';
import { CartContext } from '@/context/CartProvider';

const useShoppingCart = () => {
	const cartContext = useContext(CartContext);

	return { ...cartContext };
};

export default useShoppingCart;
