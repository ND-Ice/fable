import _ from 'lodash';
import {
	UseFormRegister,
	FieldValues,
	Path,
	RegisterOptions,
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

function FormCheckBox<FormValueType>({
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
			<div className='flex flex-row-reverse items-center gap-5 accent-secondary'>
				<label className='block flex-1 text-sub-foot-note' htmlFor={name}>
					{label}
				</label>
				<input
					className='h-5 w-5'
					type='checkbox'
					name={name}
					id={name}
					{...(register && register(name, rules))}
					{...otherProps}
				/>
			</div>
			<FormErrorMessage visible={hasError} error={error} />
		</div>
	);
}

export default FormCheckBox;
