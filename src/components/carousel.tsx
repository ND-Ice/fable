import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type CarouselProps = {
	images: string[];
};

function Carousel({ images }: CarouselProps) {
	const [currIdx, setCurrIdx] = useState<number>(0);
	const lastItemIdx = images?.length - 1;
	const indicators = Array.from(Array(images?.length).keys());

	const handleRightClick = () => {
		if (currIdx === lastItemIdx) return setCurrIdx(0);
		return setCurrIdx((prev) => prev + 1);
	};

	const handleLeftClick = () => {
		if (currIdx === 0) return;
		setCurrIdx((prev) => prev - 1);
	};

	if (!images?.length) return null;

	return (
		<div className='relative h-full w-full'>
			<div className='absolute top-4 left-1/2 z-40 flex w-[90%] -translate-x-1/2 gap-2'>
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
				className='absolute left-2 top-1/2 z-40 grid h-8 w-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white'
				onClick={handleLeftClick}
			>
				<ChevronLeftIcon className='h-4 w-4 text-secondary' />
			</span>
			<span
				className='absolute right-2 top-1/2 z-40 grid h-8 w-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white'
				onClick={handleRightClick}
			>
				<ChevronRightIcon className='h-4 w-4 text-secondary' />
			</span>

			<div className='relative h-full w-full'>
				<Image
					src={images[currIdx]}
					className='select-none object-cover'
					alt='Carousel Image'
					fill
				/>
			</div>
		</div>
	);
}

export default Carousel;
