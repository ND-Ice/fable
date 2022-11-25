import React, { useState } from 'react';

import CatalogCard from '@/components/catalog-card';
import Sorter from '@/components/sorter';
import products from '@/data/products';
import MainLayout from '@/layouts/main-layout';

const options = [
	{ label: 'Newest', value: 'newest' },
	{ label: 'Oldest', value: 'oldest' },
	{ label: 'Popular', value: 'popular' },
];

function Collections() {
	const [selectedOption, setSelectedOption] = useState<string>('newest');

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
		setSelectedOption(e.target.value);

	console.log(selectedOption);

	return (
		<MainLayout>
			<main className='p-5 md:px-14 mb-20'>
				<header className='flex mb-5 gap-5 justify-between'>
					<h1 className='uppercase text-title'>Collections</h1>
					<Sorter
						options={options}
						selectedOption={selectedOption}
						onSelect={handleSelect}
					/>
				</header>
				<div className='grid gap-5 grid-cols-mobile-catalog-list lg:grid-cols-desktop-catalog-list'>
					{products.map((product) => (
						<CatalogCard key={product.id} {...product} />
					))}
				</div>
			</main>
		</MainLayout>
	);
}

export default Collections;
