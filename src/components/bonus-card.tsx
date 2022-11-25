import Image, { StaticImageData } from 'next/image';

type Props = {
	points: number;
	cashback: string;
	cardImage: StaticImageData | string;
};

function BonusCard({ cardImage, points, cashback }: Props) {
	return (
		<div className='py-5 bg-gray-2 w-full lg:w-max'>
			<Image src={cardImage} alt='Card Image' className='w-full object-cover' />
			<div className='px-5 space-y-4 mt-5'>
				<div className='flex gap-5 justify-between'>
					<span>Bonus Card</span>
					<span>{points} points</span>
				</div>
				<div className='flex gap-5 justify-between'>
					<span>Cashback</span>
					<span>{cashback}%</span>
				</div>
			</div>
		</div>
	);
}

export default BonusCard;
