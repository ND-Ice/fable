import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import FormInput from '@/components/form-elements/form-input';
import FormRadioButton from '@/components/form-elements/form-radio-button';
import FormTextArea from '@/components/form-elements/form-text-area';
import FormCheckBox from '@/components/form-elements/form-checkbox';
import { yupResolver } from '@hookform/resolvers/yup';

const deliveryFormSchema = Yup.object().shape({
	city: Yup.string().required().label('City'),
	deliveryMethod: Yup.string().required().label('Delivery Method'),
	address: Yup.string().required().label('Address'),
	fullName: Yup.string().required().label('Full Name'),
	phone: Yup.string().required().label('Phone'),
	email: Yup.string().email().required().label('Email'),
	paymentMethod: Yup.string().required().label('Payment Method'),
	orderComment: Yup.string().label('Order Comment'),
	agreedToTerms: Yup.boolean().oneOf(
		[true],
		'Terms and Conditions is Required'
	),
});

type DeliveryFormFieldsType = {
	city: string;
	deliveryMethod: 'pickup' | 'deliver';
	address: string;
	fullName: string;
	phone: string;
	email: string;
	paymentMethod: 'card' | 'cod';
	orderComment: string;
};

function DeliveryForm() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<DeliveryFormFieldsType>({
		resolver: yupResolver(deliveryFormSchema),
	});

	const handleFormSubmit = (values: DeliveryFormFieldsType) => {
		alert(JSON.stringify(values, null, 2));
	};
	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className='flex-1 space-y-8'
		>
			<div className='w-max'>
				<h1 className='text-sub-title'>City</h1>
				<FormInput
					register={register}
					errors={errors}
					name='city'
					placeholder='Enter City'
				/>
			</div>
			<div>
				<h1 className='mb-2 text-sub-title'>Delivery Method</h1>
				<FormRadioButton
					name='deliveryMethod'
					control={control}
					errors={errors}
					options={[
						{ label: 'In-store pick up', value: 'pickup' },
						{ label: 'To the door', value: 'deliver' },
					]}
				/>
			</div>
			<div>
				<h1 className='text-sub-title'>Address</h1>
				<FormInput
					register={register}
					errors={errors}
					name='address'
					placeholder='Enter Address'
				/>
			</div>

			<div className='space-y-4'>
				<h1 className='text-sub-title text-secondary'>Recipients Details</h1>
				<FormInput
					register={register}
					errors={errors}
					name='fullName'
					label='Full Name'
					placeholder='Enter Full Name'
				/>
				<FormInput
					register={register}
					errors={errors}
					name='phone'
					label='Phone'
					placeholder='Enter Phone'
				/>
				<FormInput
					register={register}
					errors={errors}
					name='email'
					label='Email'
					placeholder='Enter Email'
				/>
			</div>
			<div>
				<h1 className='mb-2 text-sub-title'>Payment Method</h1>
				<FormRadioButton
					control={control}
					name='paymentMethod'
					errors={errors}
					options={[
						{ label: 'Payment Card', value: 'card' },
						{ label: 'Cash on Delivery', value: 'cod' },
					]}
				/>
			</div>
			<div>
				<h1 className='mb-2 text-sub-title'>Order Comment</h1>
				<FormTextArea
					rows={3}
					name='orderComment'
					placeholder='Order Comment'
					register={register}
					errors={errors}
				/>
			</div>
			<FormCheckBox
				name='agreedToTerms'
				label='I agree to the terms of the offer and the loyalty policy'
				register={register}
				errors={errors}
			/>
			<button className='bg-light-gray p-3 text-sub-title text-white transition-all hover:bg-light-gray/80'>
				Place an Order
			</button>
		</form>
	);
}

export default DeliveryForm;
