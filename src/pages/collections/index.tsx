import React, { useState } from 'react';

import ProductType from '@/types/product-type';
import urlForImage from '@/utils/url-for-image';
import productService from '@/services/product-service';
import CatalogCard from '@/components/catalog-card';
import Sorter from '@/components/sorter';

const options = [
	{ label: 'Newest', value: 'newest' },
	{ label: 'Oldest', value: 'oldest' },
	{ label: 'Popular', value: 'popular' },
];

type CollectionProps = {
	products: ProductType[];
};

export const getServerSideProps = async () => {
	try {
		const products = await productService.fetchProducts();
		return { props: { products } };
	} catch (error) {
		return { notFound: true };
	}
};

function Collections({ products }: CollectionProps) {
	const [selectedOption, setSelectedOption] = useState<string>('newest');

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
		setSelectedOption(e.target.value);

	return (
		<main className='mb-20 p-5 md:px-14'>
			<header className='mb-5 flex justify-between gap-5'>
				<h1 className='text-title uppercase'>Collections</h1>
				<Sorter
					options={options}
					selectedOption={selectedOption}
					onSelect={handleSelect}
				/>
			</header>
			<div className='grid grid-cols-mobile-catalog-list gap-5 lg:grid-cols-desktop-catalog-list'>
				{products?.map((product) => (
					<CatalogCard
						key={product?._id}
						id={product?._id}
						name={product?.name}
						price={product?.price}
						image={urlForImage(product?.images[0])}
					/>
				))}
			</div>
		</main>
	);
}

export default Collections;
