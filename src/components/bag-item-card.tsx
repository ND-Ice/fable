import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import ProductType from '@/types/product-type';
import ProductReference from '@/types/product-reference-type';
import QuantityIncrementor from './quantity-incrementor';
import productService from '@/services/product-service';
import urlForImage from '@/utils/url-for-image';

type BagItemCardProps = {
	cartId: string;
	productRef: ProductReference;
	size: string;
	color: string;
	quantity: number;
	onDeleteClick: (id: string) => void;
	onIncrementClick: (id: string) => void;
	onDecrementClick: (id: string) => void;
	onPreviewClick: (id: string) => void;
};

function BagItemCard({
	cartId,
	productRef,
	size,
	color,
	quantity,
	onIncrementClick,
	onDecrementClick,
	onDeleteClick,
	onPreviewClick,
}: BagItemCardProps) {
	const [product, setProduct] = useState<ProductType | null>(null);

	useEffect(() => {
		const fetchProductsById = async () => {
			const data = await productService.fetchProductById(productRef?._ref);
			setProduct(data);
		};

		fetchProductsById();
	}, [productRef]);

	return (
		<div className='flex h-max gap-5'>
			<div className='relative h-[100px] w-[80px] md:h-[200px] md:w-[180px]'>
				<Image
					fill
					src={urlForImage(product?.images[0] as string)}
					alt='Bag Item Image'
					className='cursor-pointer object-cover object-center'
					onClick={() => onPreviewClick(product?._id as string)}
				/>
			</div>
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
							value={quantity}
							onDecrementClick={() => onDecrementClick(cartId)}
							onIncrementClick={() => onIncrementClick(cartId)}
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
