import { useMemo } from 'react';
import _, { sumBy } from 'lodash';

import useShoppingCart from '@/hooks/use-shopping-cart';
import BillInfoItem from './bill-info-item';
import products from '@/data/products';

const DELIVERY_FEE = 2;
const POINTS = 10;
const PROMO = 20;

const getPrice = (id: string) => {
	return products.find((product) => product.id === id);
};

function BillInformation() {
	const { cartItems } = useShoppingCart();

	const SUMMARY_BILL = useMemo(() => {
		return sumBy(
			cartItems,
			(cartItem) => cartItem.qty * getPrice(cartItem.productId)?.price!
		);
	}, [cartItems]);

	const TOTAL = SUMMARY_BILL - POINTS - PROMO + DELIVERY_FEE;

	return (
		<div className='grid gap-4'>
			<BillInfoItem text='Summary' value={`€${SUMMARY_BILL}`} />
			<BillInfoItem text='Delivery' value={`€${DELIVERY_FEE}`} />
			<BillInfoItem text='Promo Code' value={`€${PROMO}`} />
			<BillInfoItem text='Points' value={`€${POINTS}`} />
			<div className='flex items-center justify-between gap-5 text-sub-title font-bold'>
				<span>Total</span>
				<span>€{TOTAL}</span>
			</div>
		</div>
	);
}

export default BillInformation;
