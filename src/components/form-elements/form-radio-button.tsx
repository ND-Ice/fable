import classNames from 'classnames';

import OptionType from '@/types/option-type';

type Props = {
	selectedOption: string;
	options: OptionType[];
	onSelect: (value: string) => void;
};

function FormRadioButton({ selectedOption, options, onSelect }: Props) {
	return (
		<div className='flex gap-5'>
			{options.map((option) => (
				<button
					key={option.value}
					onClick={() => onSelect(option.value)}
					className={classNames(
						'border border-secondary transition-all duration-100 ease-in-out',
						{
							'bg-secondary text-white': selectedOption === option.value,
						}
					)}
				>
					{option.label}
				</button>
			))}
		</div>
	);
}

export default FormRadioButton;
