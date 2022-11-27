import * as _ from 'lodash';
import classNames from 'classnames';
import {
	Path,
	FieldValues,
	RegisterOptions,
	UseFormRegister,
	DeepMap,
	FieldError,
	ErrorOption,
} from 'react-hook-form';

interface IProps<FormValueType>
	extends React.InputHTMLAttributes<HTMLInputElement> {
	name: Path<FormValueType & FieldValues>;
	label?: string;
	register?: UseFormRegister<FormValueType & FieldValues>;
	rules?: RegisterOptions;
	errors?: Partial<DeepMap<FormValueType, FieldError>>;
}

function FormInput<FormValueType>({
	name,
	label,
	register,
	rules,
	errors,
	...otherProps
}: IProps<FormValueType>) {
	const error = _.get(errors, name) as ErrorOption;
	const hasError = errors && error;

	return (
		<div className='space-y-2'>
			<label className='text-sub-foot-note text-secondary' htmlFor={name}>
				{label}
			</label>
			<input
				id={name}
				className={classNames({ 'border-red': hasError })}
				{...(register && register(name, rules))}
				{...otherProps}
			/>
			{hasError && <p className='text-red'>{error?.message}</p>}
		</div>
	);
}

export default FormInput;
