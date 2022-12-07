import ProductReference from './product-reference-type';

type CartItemType = {
	_id?: string;
	product: ProductReference;
	quantity: number;
	size: string;
	color: string;
};

export default CartItemType;
