import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type Props = {
	images: string[] | any[];
};

function Carousel({ images }: Props) {
	const [currIdx, setCurrIdx] = useState<number>(0);
	const lastItemIdx = images.length - 1;
	const indicators = Array.from(Array(images?.length).keys());

	const handleRightClick = () => {
		if (currIdx === lastItemIdx) return setCurrIdx(0);
		return setCurrIdx((prev) => prev + 1);
	};

	const handleLeftClick = () => {
		if (currIdx === 0) return;
		setCurrIdx((prev) => prev - 1);
	};

	if (!images.length) return null;

	return (
		<div className='relative w-full h-full'>
			<div className='w-[90%] flex gap-2 absolute top-4 left-1/2 -translate-x-1/2'>
				{indicators.map((indicator) => (
					<div
						key={indicator}
						className={`h-1 w-full bg-secondary transition-all duration-300 ease-in-out ${
							indicator === currIdx ? 'opacity-100' : 'opacity-10'
						}`}
					/>
				))}
			</div>
			<span
				className='grid place-items-center absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white cursor-pointer'
				onClick={handleLeftClick}
			>
				<ChevronLeftIcon className='h-4 w-4 text-secondary' />
			</span>
			<span
				className='grid place-items-center absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white cursor-pointer'
				onClick={handleRightClick}
			>
				<ChevronRightIcon className='h-4 w-4 text-secondary' />
			</span>
			<Image
				src={images[currIdx]}
				className='w-full h-full object-cover select-none'
				alt='Carousel Image'
			/>
		</div>
	);
}

export default Carousel;
