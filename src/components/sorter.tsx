import OptionType from '@/types/option-type';

type SelectedOptionType = 'newest' | 'oldest' | 'popular';

type Props = {
	options: OptionType[];
	selectedOption: SelectedOptionType | string;
	onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Sorter({ selectedOption, options, onSelect }: Props) {
	return (
		<div className='flex items-center gap-2'>
			<label htmlFor='sorter' className='w-max text-title'>
				Sort By
			</label>
			<select
				id='sorter'
				value={selectedOption}
				onChange={onSelect}
				className='w-max text-title text-light-gray focus:outline-none'
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}

export default Sorter;
