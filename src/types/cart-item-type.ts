import SizeType from './size-type';

type CartItemType = {
	cartId: string;
	productId: string;
	qty: number;
	size: SizeType;
	color: string;
};

export default CartItemType;
