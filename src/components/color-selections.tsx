import classNames from 'classnames';

type Props = {
	label: string;
	selectedColor: string;
	colors: string[];
	onSelectColor: (color: string) => void;
};

function ColorSelections({
	label,
	selectedColor,
	colors,
	onSelectColor,
}: Props) {
	return (
		<div>
			<h1 className='text-sub-foot-note-1 mb-5 lg:hidden'>{label}</h1>
			<div className='flex flex-wrap gap-5 justify-center lg:justify-start'>
				{colors.map((color) => (
					<div
						key={color}
						className={classNames(
							'h-[22px] w-[22px] lg:w-[40px] lg:h-[40px] flex-shrink-0 ring-4 ring-offset-4 ring-transparent cursor-pointer transition-all duration-300 ease-in-out',
							{
								'ring-sky-300': selectedColor === color,
							}
						)}
						style={{ background: color }}
						onClick={() => onSelectColor(color)}
					/>
				))}
			</div>
		</div>
	);
}

export default ColorSelections;
