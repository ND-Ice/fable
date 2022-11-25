import Link from 'next/link';
import Image from 'next/image';

import formatToCurrency from '@/utils/currency-formatter';
import CatalogType from '@/types/catalog-type';

interface Props extends CatalogType {}

function CatalogCard({ id, image, name, price }: Props) {
	const formattedPrice = formatToCurrency(price);
	const route = `/collections/view/${id}`;

	return (
		<Link href={route}>
			<Image
				src={image}
				alt='Product Catalog'
				className='w-full h-[157px] lg:h-[400px] object-cover object-center'
			/>
			<div className='mt-3 text-center'>
				<h1 className='text-foot-note opacity-40'>{name}</h1>
				<h2 className='text-title-lg-3 text-secondary'>{formattedPrice}</h2>
			</div>
		</Link>
	);
}

export default CatalogCard;
