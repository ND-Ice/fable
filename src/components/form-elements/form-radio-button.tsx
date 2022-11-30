import _ from 'lodash';
import classNames from 'classnames';
import {
	DeepMap,
	FieldError,
	FieldValues,
	Path,
	useController,
	RegisterOptions,
	Control,
	ErrorOption,
} from 'react-hook-form';

import OptionType from '@/types/option-type';
import FormErrorMessage from './form-error-message';

type Props<FormValueType> = {
	options: OptionType[];
	name: Path<FormValueType & FieldValues>;
	errors?: Partial<DeepMap<FormValueType, FieldError>>;
	control?: Control<FormValueType & FieldValues>;
	rules?: RegisterOptions;
};

function FormRadioButton<FormValueType>({
	name,
	options,
	control,
	rules,
	errors,
}: Props<FormValueType>) {
	const {
		field: { value, onChange },
	} = useController({ name, control, rules });
	const error = _.get(errors, name) as ErrorOption;
	const hasError = errors && error ? true : false;

	return (
		<>
			<div className='mb-2 flex gap-5'>
				{options?.map((option) => (
					<button
						type='button'
						key={option.value}
						onClick={() => onChange(option?.value)}
						className={classNames(
							'border border-secondary transition-all duration-100 ease-in-out',
							{
								'bg-secondary text-white': value === option?.value,
								'border-red': hasError,
							}
						)}
					>
						{option.label}
					</button>
				))}
			</div>
			<FormErrorMessage visible={hasError} error={error} />
		</>
	);
}

export default FormRadioButton;
