import _ from 'lodash';
import classNames from 'classnames';
import {
	Control,
	DeepMap,
	ErrorOption,
	FieldError,
	FieldValues,
	Path,
	RegisterOptions,
	useController,
} from 'react-hook-form';

import SizeType from '../types/size-type';
import FormErrorMessage from './form-elements/form-error-message';

type Props<FormValueType> = {
	name: Path<FormValueType>;
	label: string;
	sizes: SizeType[];
	control?: Control<FieldValues & FormValueType>;
	rules?: RegisterOptions;
	errors?: Partial<DeepMap<FormValueType, FieldError>>;
};

function SizeSelections<FormValueType>({
	label,
	sizes,
	name,
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
		<div className='space-y-2'>
			<h1 className='mb-5 text-sub-foot-note-1 lg:hidden'>{label}</h1>
			<div className='flex flex-wrap justify-center gap-4 lg:justify-start'>
				{sizes.map((size) => (
					<div
						key={size}
						className={classNames(
							'grid h-[50px] w-[50px] flex-shrink-0 cursor-pointer place-items-center border-2 border-gray-2 text-sub-title-1 ring-4 ring-transparent ring-offset-2 transition-all duration-300 ease-in-out',
							{ 'ring-sky-300': value === size }
						)}
						onClick={() => onChange(size)}
					>
						{size}
					</div>
				))}
			</div>
			<FormErrorMessage visible={hasError} error={error} />
		</div>
	);
}

export default SizeSelections;
