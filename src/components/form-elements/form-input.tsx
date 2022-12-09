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
import FormErrorMessage from './form-error-message';

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
	const hasError = errors && error ? true : false;

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
			<FormErrorMessage visible={hasError} error={error} />
		</div>
	);
}

export default FormInput;
