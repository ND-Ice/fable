type Props = {
	text: string;
	value: string;
};

function BillInfoItem({ text, value }: Props) {
	return (
		<div className='flex gap-5 items-center justify-between border-b border-light-gray'>
			<span className='text-caption text-secondary'>{text}</span>
			<span className='text-caption text-secondary'>{value}</span>
		</div>
	);
}

export default BillInfoItem;
