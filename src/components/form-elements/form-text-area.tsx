interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;
	label?: string;
}

function FormTextArea({ name, label, ...otherProps }: IProps) {
	return (
		<div className='space-y-2 w-full'>
			<label className='text-sub-foot-note block text-secondary' htmlFor={name}>
				{label}
			</label>
			<textarea id={name} name={name} {...otherProps} />
		</div>
	);
}

export default FormTextArea;
