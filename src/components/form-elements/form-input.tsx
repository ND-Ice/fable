import _ from 'lodash';
import classNames from 'classnames';
import {
	Path,
	DeepMap,
	FieldError,
	FieldValues,
	RegisterOptions,
	UseFormRegister,
} from 'react-hook-form';

interface IProps<FormValueType>
	extends React.InputHTMLAttributes<HTMLInputElement> {
	name: Path<FormValueType>;
	label?: string;
	register?: UseFormRegister<FormValueType & FieldValues>;
	rules?: RegisterOptions;
	errors?: DeepMap<FormValueType, FieldError>;
}

function FormInput<FormValueType>({
	name,
	label,
	register,
	rules,
	errors,
	...otherProps
}: IProps<FormValueType>) {
	const errorMessage = _.get(errors, name);
	const hasError = errors && errorMessage;

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
			{hasError && <p className='text-red'>{errorMessage?.message}</p>}
		</div>
	);
}

export default FormInput;
