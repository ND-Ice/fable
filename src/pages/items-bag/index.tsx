import { useState } from 'react';

import BagItemCard from '@/components/bag-item-card';
import FormInput from '@/components/form-elements/form-input';
import FormRadioButton from '@/components/form-elements/form-radio-button';
import MainLayout from '@/layouts/main-layout';
import FormTextArea from '@/components/form-elements/form-text-area';
import FormCheckBox from '@/components/form-elements/form-checkbox';
import BillInformation from '@/components/bill-information';

function ItemsBag() {
	const [deliveryMethod, setDeliveryMethod] = useState<string>('');
	const [paymentMethod, setPaymentMethod] = useState<string>('');

	return (
		<MainLayout>
			<main className='p-5 md:px-14 mb-20'>
				<header className='mb-5'>
					<div className='flex gap-5 items-center'>
						<h1 className='text-caption-2 font-bold'>Shopping Bag</h1>
						<div className='h-[2px] w-5 bg-secondary' />
						<h1 className='text-caption-2 font-bold'>Order</h1>
					</div>
				</header>
				<div className='flex flex-col gap-14 lg:flex-row'>
					<div className='flex-1 space-y-8'>
						<div className='w-max'>
							<h1 className='text-sub-title'>City</h1>
							<FormInput name='city' placeholder='Enter City' />
						</div>
						<div>
							<h1 className='text-sub-title mb-2'>Delivery Method</h1>
							<FormRadioButton
								selectedOption={deliveryMethod}
								onSelect={(value) => setDeliveryMethod(value)}
								options={[
									{ label: 'In-store pick up', value: 'store-pickup' },
									{ label: 'To the door', value: 'to-the-door' },
								]}
							/>
						</div>
						<div>
							<h1 className='text-sub-title'>Address</h1>
							<FormInput name='address' placeholder='Enter Address' />
						</div>

						<div className='space-y-4'>
							<h1 className='text-sub-title text-secondary'>
								Recipients Details
							</h1>
							<FormInput
								name='fullname'
								label='Full Name'
								placeholder='Enter Full Name'
							/>
							<FormInput name='phone' label='Phone' placeholder='Enter Phone' />
							<FormInput name='email' label='Email' placeholder='Enter Email' />
						</div>
						<div>
							<h1 className='text-sub-title mb-2'>Payment Method</h1>
							<FormRadioButton
								selectedOption={paymentMethod}
								onSelect={(value) => setPaymentMethod(value)}
								options={[
									{ label: 'Payment Card', value: 'payment-card' },
									{ label: 'Cash on Delivery', value: 'cash-on-delivery' },
								]}
							/>
						</div>
						<div>
							<h1 className='text-sub-title mb-2'>Order Comment</h1>
							<FormTextArea
								rows={3}
								name='orderComment'
								placeholder='Order Comment'
							/>
						</div>
						<FormCheckBox
							name='I agree'
							label='I agree to the terms of the offer and the loyalty policy'
						/>
						<button className='bg-light-gray text-sub-title text-white p-3'>
							Place an Order
						</button>
					</div>
					<div className='flex-1 grid grid-flow-row h-max gap-5'>
						<BagItemCard selectedId='1' />
						<BagItemCard selectedId='1' />
						<BagItemCard selectedId='1' />
						<div className='w-full mt-5'>
							<BillInformation />
						</div>
					</div>
				</div>
			</main>
		</MainLayout>
	);
}

export default ItemsBag;
