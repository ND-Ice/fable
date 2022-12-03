import Link from 'next/link';
import Image from 'next/image';

import formatToCurrency from '@/utils/currency-formatter';

interface CatalogCardProps {
	id: string;
	image: string;
	name: string;
	price: number;
}

function CatalogCard({ id, image, name, price }: CatalogCardProps) {
	const formattedPrice = formatToCurrency(price);
	const route = `/collections/view/${id}`;

	return (
		<Link href={route}>
			<div className='relative h-[157px] w-full lg:h-[400px]'>
				<Image
					src={image}
					alt='Product Catalog'
					fill
					className='object-cover object-center'
				/>
			</div>
			<div className='mt-3 text-center'>
				<h1 className='text-foot-note opacity-40'>{name}</h1>
				<h2 className='text-title-lg-3 text-secondary'>{formattedPrice}</h2>
			</div>
		</Link>
	);
}

export default CatalogCard;
