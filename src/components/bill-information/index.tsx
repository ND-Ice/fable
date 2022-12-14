import _ from 'lodash';
import { useMemo } from 'react';

import { useFetchCartItems } from '@/hooks/use-shopping-cart';
import formatToCurrency from '@/utils/currency-formatter';
import BillInfoItem from './bill-info-item';

const DELIVERY_FEE = 2;
const POINTS = 10;
const PROMO = 20;

function BillInformation() {
	const { cartItems } = useFetchCartItems();

	const SUMMARY_BILL = useMemo(() => {
		return _.sumBy(cartItems, (cartItem) => cartItem.quantity * 300);
	}, [cartItems]);

	const TOTAL = SUMMARY_BILL - POINTS - PROMO + DELIVERY_FEE;

	return (
		<div className='grid gap-4'>
			<BillInfoItem text='Summary' value={formatToCurrency(SUMMARY_BILL)} />
			<BillInfoItem text='Delivery' value={formatToCurrency(DELIVERY_FEE)} />
			<BillInfoItem text='Promo Code' value={formatToCurrency(PROMO)} />
			<BillInfoItem text='Points' value={formatToCurrency(POINTS)} />
			<div className='flex items-center justify-between gap-5 text-sub-title font-bold'>
				<span>Total</span>
				<span>{formatToCurrency(TOTAL)}</span>
			</div>
		</div>
	);
}

export default BillInformation;
