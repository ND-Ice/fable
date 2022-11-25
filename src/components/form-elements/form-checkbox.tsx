import React from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
}

function FormCheckBox({ name, label, ...otherProps }: IProps) {
	return (
		<div className='flex flex-row-reverse gap-5 items-center'>
			<label className='block flex-1 text-sub-foot-note' htmlFor={name}>
				{label}
			</label>
			<input
				className='h-5 w-5'
				type='checkbox'
				name={name}
				id={name}
				{...otherProps}
			/>
		</div>
	);
}

export default FormCheckBox;
