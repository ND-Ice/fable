import classNames from 'classnames';
import SizeType from '../types/size-type';

type Props = {
	label: string;
	selectedSize: SizeType | string;
	sizes: SizeType[];
	onSelectSize: (size: SizeType) => void;
};

function SizeSelections({ label, selectedSize, sizes, onSelectSize }: Props) {
	return (
		<div>
			<h1 className='text-sub-foot-note-1 mb-5 lg:hidden'>{label}</h1>
			<div className='flex flex-wrap gap-4 justify-center lg:justify-start'>
				{sizes.map((size) => (
					<div
						key={size}
						onClick={() => onSelectSize(size)}
						className={classNames(
							'grid place-items-center text-sub-title-1 flex-shrink-0 cursor-pointer w-[50px] h-[50px] transition-all duration-300 ease-in-out border-2 border-gray-2 ring-4 ring-transparent ring-offset-2',
							{ 'ring-sky-300': selectedSize === size }
						)}
					>
						{size}
					</div>
				))}
			</div>
		</div>
	);
}

export default SizeSelections;
