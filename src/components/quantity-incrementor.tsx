type Props = {
	value: number;
	onIncrementClick: () => void;
	onDecrementClick: () => void;
};

export default function QuantityIncrementor({
	value,
	onIncrementClick,
	onDecrementClick,
}: Props) {
	return (
		<div className='flex gap-2'>
			<span
				className='cursor-pointer select-none text-body-1'
				onClick={onDecrementClick}
			>
				-
			</span>
			<span className='text-body-2'>{value}</span>
			<span
				className='cursor-pointer select-none text-body-1'
				onClick={onIncrementClick}
			>
				+
			</span>
		</div>
	);
}
