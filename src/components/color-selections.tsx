import _ from 'lodash';
import classNames from 'classnames';
import {
	useController,
	FieldValues,
	Path,
	RegisterOptions,
	Control,
	DeepMap,
	FieldError,
	ErrorOption,
} from 'react-hook-form';
import FormErrorMessage from './form-elements/form-error-message';

import ColorType from '@/types/color-type';

type Props<FormValueType> = {
	name: Path<FormValueType & FieldValues>;
	label: string;
	colors: ColorType[];
	rules?: RegisterOptions;
	control?: Control<FieldValues & FormValueType>;
	errors: Partial<DeepMap<FormValueType, FieldError>>;
};

function ColorSelections<FormValueType>({
	name,
	control,
	rules,
	label,
	colors,
	errors,
}: Props<FormValueType>) {
	const {
		field: { value, onChange },
	} = useController({ name, control, rules });
	const error = _.get(errors, name) as ErrorOption;
	const hasError = errors && error ? true : false;

	return (
		<div className='space-y-2'>
			<h1 className='mb-5 text-sub-foot-note-1 lg:hidden'>{label}</h1>
			<div className='flex flex-wrap justify-center gap-5 lg:justify-start'>
				{colors?.map((color) => (
					<div
						key={color?._key}
						className={classNames(
							'h-[22px] w-[22px] flex-shrink-0 cursor-pointer ring-4 ring-transparent ring-offset-4 transition-all duration-300 ease-in-out lg:h-[40px] lg:w-[40px]',
							{
								'ring-sky-300': value === color.text,
							}
						)}
						style={{ background: color.value }}
						onClick={() => onChange(color.text)}
					/>
				))}
			</div>
			<FormErrorMessage visible={hasError} error={error} />
		</div>
	);
}

export default ColorSelections;
