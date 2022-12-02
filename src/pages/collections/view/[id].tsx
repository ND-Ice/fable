import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';

import useShoppingCart from '@/hooks/use-shopping-cart';
import sizes from '@/data/sizes';
import colors from '@/data/colors';
import SizeType from '@/types/size-type';
import products from '@/data/products';
import MainLayout from '@/layouts/main-layout';
import formatToCurrency from '@/utils/currency-formatter';
import Carousel from '@/components/carousel';
import ColorSelections from '@/components/color-selections';
import SizeSelections from '@/components/size-selections';
import addToCartSchema from './schema';

type FormValueType = {
	size: SizeType;
	color: string;
};

function ViewProduct() {
	const { query } = useRouter();
	const selectedProductId = query?.id;
	const { addToCart } = useShoppingCart();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValueType>({
		resolver: yupResolver(addToCartSchema),
	});

	const product = useMemo(
		() => products?.find((product) => product?.id === selectedProductId),
		[selectedProductId]
	);

	const handleFormSubmit = (values: FormValueType) => {
		if (!addToCart) return;
		addToCart({
			cartId: uuidv4(),
			productId: product?.id!,
			qty: 1,
			...values,
		});
	};

	if (!product) return null;

	return (
		<MainLayout>
			<section className='p-5 md:p-10 md:px-14 lg:flex lg:gap-10'>
				<div className='flex-1 flex-shrink-0'>
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
				<div className='mt-5 flex-[2] text-center lg:mt-0 lg:text-left'>
					<header className='mb-5 uppercase'>
						<h1 className='text-body-1 lg:text-title-lg-2'>{product?.name}</h1>
						<h2 className='text-sub-foot-note-1 lg:text-title-lg-2'>
							{formatToCurrency(product?.price as number)}
						</h2>
					</header>

					<form onSubmit={handleSubmit(handleFormSubmit)} className='space-y-8'>
						<ColorSelections
							name='color'
							label='Colors'
							control={control}
							errors={errors}
							colors={colors}
						/>
						<SizeSelections
							name='size'
							label='Sizes'
							control={control}
							errors={errors}
							sizes={sizes}
						/>
						<button type='submit' className='w-max bg-gray px-10 text-white'>
							Add To Cart
						</button>
						<div className='space-y-2'>
							<h3 className='text-sub-title-1'>Product Description</h3>
							<p className='leading-relaxed'>{product?.description}</p>
						</div>
					</form>
				</div>
			</section>
		</MainLayout>
	);
}

export default ViewProduct;
