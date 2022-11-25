import Image from 'next/image';
import React, { useMemo, useState } from 'react';

import jackets from '@/assets/images/jackets.png';
import products from '@/data/products';
import QuantityIncrementor from './quantity-incrementor';

type Props = {
	selectedId: string | number;
};

function BagItemCard({ selectedId }: Props) {
	const [quantity, setQuantity] = useState<number>(1);

	const selectedItem = useMemo(
		() => products.find((product) => product.id === selectedId),
		[selectedId]
	);

	const handleDecrementClick = (value: number) => {
		if (value === 1) return;
		setQuantity(value - 1);
	};
	const handleIncrementClick = (value: number) => {
		setQuantity(value + 1);
	};

	return (
		<div className='flex gap-5 h-max'>
			<Image
				src={jackets}
				alt='Bag Item Image'
				className='w-[80px] h-[100px] md:w-[180px] md:h-[200px] object-cover object-center'
			/>
			<div className='flex-1 flex flex-col p-2 justify-between'>
				<h1 className='uppercase text-sub-foot-note-1'>Jackets KLS</h1>
				<div className='space-y-8'>
					<div className='flex gap-5 items-center justify-between'>
						<div className='space-x-2'>
							<span className='text-body-1'>Size:</span>
							<span className='text-body-2'>M</span>
						</div>
						<div className='space-x-2'>
							<span className='text-body-1'>Color:</span>
							<span className='text-body-2'>Blue</span>
						</div>
						<QuantityIncrementor
							value={quantity}
							onDecrementClick={handleDecrementClick}
							onIncrementClick={handleIncrementClick}
						/>
					</div>
					<div className='flex items-center justify-between gap-5'>
						<span className='text-body-2'>€105</span>
						<span className='text-body-1 text-light-gray'>Delete</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BagItemCard;
