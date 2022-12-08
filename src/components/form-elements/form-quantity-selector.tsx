import {
	Path,
	useController,
	Control,
	FieldValues,
	DeepMap,
	FieldError,
	RegisterOptions,
} from 'react-hook-form';

type FormQuantitySelectorProps<FormValueType> = {
	name: Path<FormValueType & FieldValues>;
	rules?: RegisterOptions;
	control: Control<FieldValues & FormValueType>;
	errors: Partial<DeepMap<FormValueType, FieldError>>;
};

function FormQuantitySelector<FormValueType>({
	name,
	control,
	errors,
	rules,
}: FormQuantitySelectorProps<FormValueType>) {
	const { field } = useController({ name, control, rules });

	const handleIncrementClicked = () => {
		field.onChange(field.value + 1);
	};
	const handleDecrementClicked = () => {
		field.onChange(field.value - 1);
	};

	return (
		<div className='flex items-center'>
			<button
				type='button'
				className='w-12 cursor-pointer border border-secondary'
				onClick={handleDecrementClicked}
			>
				-
			</button>
			<span className='inline-block w-16 cursor-default border-t border-b border-secondary py-2 text-center'>
				{field.value}
			</span>
			<button
				type='button'
				className='w-12 cursor-pointer border border-secondary'
				onClick={handleIncrementClicked}
			>
				+
			</button>
		</div>
	);
}

export default FormQuantitySelector;
