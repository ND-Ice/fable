import Image from 'next/image';
import React, { useMemo, useState } from 'react';

import products from '@/data/products';
import QuantityIncrementor from './quantity-incrementor';
import SizeType from '@/types/size-type';

type Props = {
	cartId: string;
	productId: string | number;
	size: SizeType;
	color: string;
	qty: number;
	onDeleteClick: (id: string) => void;
};

function BagItemCard({
	cartId,
	productId,
	size,
	color,
	qty,
	onDeleteClick,
}: Props) {
	const [quantity, setQuantity] = useState<number>(qty);

	const product = useMemo(
		() => products.find((product) => product.id === productId),
		[productId]
	);

	const handleDecrementClick = (value: number) => {
		if (value === 1) return;
		setQuantity(value - 1);
	};
	const handleIncrementClick = (value: number) => {
		setQuantity(value + 1);
	};

	return (
		<div className='flex h-max gap-5'>
			<Image
				src={product?.image!}
				alt='Bag Item Image'
				className='h-[100px] w-[80px] object-cover object-center md:h-[200px] md:w-[180px]'
			/>
			<div className='flex flex-1 flex-col justify-between p-2'>
				<h1 className='text-sub-foot-note-1 uppercase'>{product?.name}</h1>
				<div className='space-y-8'>
					<div className='flex items-center justify-between gap-5'>
						<div className='space-x-2'>
							<span className='text-body-1'>Size:</span>
							<span className='text-body-2'>{size}</span>
						</div>
						<div className='space-x-2'>
							<span className='text-body-1'>Color:</span>
							<span className='text-body-2 capitalize'>{color}</span>
						</div>
						<QuantityIncrementor
							value={qty}
							onDecrementClick={handleDecrementClick}
							onIncrementClick={handleIncrementClick}
						/>
					</div>
					<div className='flex items-center justify-between gap-5'>
						<span className='text-body-2'>€{product?.price}</span>
						<span
							className='cursor-pointer text-body-1 text-light-gray'
							onClick={() => onDeleteClick(cartId as string)}
						>
							Delete
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BagItemCard;
