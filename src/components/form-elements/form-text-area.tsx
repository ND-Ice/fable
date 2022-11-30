import _ from 'lodash';
import {
	UseFormRegister,
	FieldValues,
	Path,
	DeepMap,
	FieldError,
	RegisterOptions,
	ErrorOption,
} from 'react-hook-form';
import FormErrorMessage from './form-error-message';

interface IProps<FormValueType>
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: Path<FormValueType>;
	label?: string;
	register?: UseFormRegister<FormValueType & FieldValues>;
	rules?: RegisterOptions;
	errors?: Partial<DeepMap<FormValueType, FieldError>>;
}

function FormTextArea<FormValueType>({
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
		<div className='w-full space-y-2'>
			<label className='block text-sub-foot-note text-secondary' htmlFor={name}>
				{label}
			</label>
			<textarea
				id={name}
				{...(register && register(name, rules))}
				{...otherProps}
			/>
			<FormErrorMessage visible={hasError} error={error} />
		</div>
	);
}

export default FormTextArea;
