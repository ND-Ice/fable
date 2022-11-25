import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import SizeType from '@/types/size-type';
import products from '@/data/products';
import MainLayout from '@/layouts/main-layout';
import formatToCurrency from '@/utils/currency-formatter';
import Carousel from '@/components/carousel';
import ColorSelections from '@/components/color-selections';
import SizeSelections from '@/components/size-selections';

const sizes: SizeType[] = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
const colors = [
	'blue',
	'red',
	'green',
	'darkBlue',
	'indigo',
	'tomato',
	'cyan',
	'lime',
];

function ViewProduct() {
	const { query } = useRouter();
	const [selectedColor, setSelectedColor] = useState<string>('');
	const [selectedSize, setSelectedSize] = useState<SizeType | string>('');
	const selectedProductId = parseInt(query?.id as string);

	const product = useMemo(
		() => products?.find((product) => product?.id === selectedProductId),
		[selectedProductId]
	);

	const handleSelectColor = (color: string) => {
		setSelectedColor(color);
	};
	const handleSelectSize = (size: SizeType) => setSelectedSize(size);

	if (!product) return null;

	return (
		<MainLayout>
			<section className='p-5 md:p-10 md:px-14 lg:flex lg:gap-10'>
				<div className='flex-shrink-0 flex-1'>
					<Carousel
						images={[
							product?.image,
							product?.image,
							product?.image,
							product?.image,
							product?.image,
							product?.image,
							product?.image,
							product?.image,
						]}
					/>
				</div>
				<div className='mt-5 text-center lg:mt-0 lg:text-left flex-[2]'>
					<header className='mb-5 uppercase'>
						<h1 className='text-body-1 lg:text-title-lg-2'>{product?.name}</h1>
						<h2 className='text-sub-foot-note-1 lg:text-title-lg-2'>
							{formatToCurrency(product?.price as number)}
						</h2>
					</header>

					<div className='space-y-8'>
						<ColorSelections
							label='Colors'
							selectedColor={selectedColor}
							colors={colors}
							onSelectColor={handleSelectColor}
						/>
						<SizeSelections
							label='Sizes'
							selectedSize={selectedSize}
							onSelectSize={handleSelectSize}
							sizes={sizes}
						/>
						<button className='bg-gray text-white w-max px-10'>
							Add To Cart
						</button>
						<div className='space-y-2'>
							<h3 className='text-sub-title-1'>Product Description</h3>
							<p className='leading-relaxed'>{product?.description}</p>
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
}

export default ViewProduct;
