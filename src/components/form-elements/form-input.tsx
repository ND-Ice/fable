interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
}

function FormInput({ name, label, ...otherProps }: IProps) {
	return (
		<div className='space-y-2'>
			<label className='text-sub-foot-note text-secondary' htmlFor={name}>
				{label}
			</label>
			<input type='text' id={name} {...otherProps} />
		</div>
	);
}

export default FormInput;
