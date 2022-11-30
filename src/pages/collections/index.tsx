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

	return (
		<MainLayout>
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
					{products.map((product) => (
						<CatalogCard key={product.id} {...product} />
					))}
				</div>
			</main>
		</MainLayout>
	);
}

export default Collections;
