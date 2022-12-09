import * as Yup from 'yup';
import { GetServerSideProps } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAddToCart } from '@/hooks/use-shopping-cart';
import urlForImage from '@/utils/url-for-image';
import productService from '@/services/product-service';
import ProductType from '@/types/product-type';
import formatToCurrency from '@/utils/currency-formatter';
import Carousel from '@/components/carousel';
import ColorSelections from '@/components/color-selections';
import SizeSelections from '@/components/size-selections';
import FormQuantitySelector from '@/components/form-elements/form-quantity-selector';

type FormValueType = {
	size: string;
	color: string;
	quantity: number;
};

type ViewProductProps = {
	product: ProductType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const id = context?.params?.id;
	try {
		const product = await productService.fetchProductById(id as string);
		return { props: { product } };
	} catch (error) {
		return { notFound: true };
	}
};

const addToCartSchema = Yup.object().shape({
	size: Yup.string().required().label('Size'),
	color: Yup.string().required().label('Color'),
});

function ViewProduct({ product }: ViewProductProps) {
	const { addToCart } = useAddToCart();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValueType>({
		resolver: yupResolver(addToCartSchema),
		defaultValues: { quantity: 1 },
	});

	const handleFormSubmit = (values: FormValueType) => {
		addToCart({
			product: { _ref: product._id, _type: 'reference' },
			...values,
		});
	};

	if (!product) return null;

	return (
		<section className='p-5 md:p-10 md:px-14 lg:flex lg:gap-10'>
			<div className='flex-1 flex-shrink-0'>
				<Carousel
					images={product?.images?.map((image) => urlForImage(image))}
				/>
			</div>
			<div className='mt-5 flex-[2] text-center lg:mt-0 lg:text-left'>
				<header className='mb-5 max-w-2xl uppercase'>
					<h1 className='text-body-1 lg:text-title-lg-2'>{product.name}</h1>
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
						colors={product?.colors}
					/>
					<SizeSelections
						name='size'
						label='Sizes'
						control={control}
						errors={errors}
						sizes={product?.sizes}
					/>
					<FormQuantitySelector
						name='quantity'
						control={control}
						errors={errors}
					/>
					<button type='submit' className='w-max bg-gray px-10 text-white'>
						Add To Cart
					</button>
					<div className='max-w-2xl space-y-2'>
						<h3 className='text-sub-title-1'>Product Description</h3>
						<p className='leading-relaxed'>{product?.description}</p>
					</div>
				</form>
			</div>
		</section>
	);
}

export default ViewProduct;
