import Image from 'next/image';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import signInBanner from '@/assets/images/sign-in-banner.png';
import FormInput from '@/components/form-elements/form-input';
import MainLayout from '@/layouts/main-layout';

type FormValueType = {
	email: string;
	password: string;
	confirmPassword: string;
};

const schema = Yup.object().shape({
	email: Yup.string().email().required().label('Email'),
	password: Yup.string().required().label('Password'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords does not match')
		.required()
		.label('Confirm Password'),
});

function SignUp() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValueType>({ resolver: yupResolver(schema) });

	const onSignInClicked = () => router.push('/sign-in');

	const handleFormSubmit = (values: FormValueType) =>
		alert(JSON.stringify(values, null, 2));

	return (
		<MainLayout>
			<main className='p-5 md:px-14 mb-20'>
				<header className='mb-5'>
					<div className='flex gap-5 items-center'>
						<h1 className='text-caption-2 font-bold'>Home</h1>
						<div className='h-[2px] w-5 bg-secondary' />
						<h1 className='text-caption-2 font-bold'>Sign In</h1>
					</div>
				</header>
				<div className='flex gap-x-20'>
					<form className='flex-1' onSubmit={handleSubmit(handleFormSubmit)}>
						<h1 className='text-sub-title my-10'>Sign in Account</h1>
						<div className='space-y-4'>
							<FormInput
								register={register}
								errors={errors}
								name='email'
								label='Email Address'
								placeholder='Email Address'
							/>
							<FormInput
								register={register}
								errors={errors}
								name='password'
								type='password'
								label='Password'
								placeholder='Password'
							/>
							<FormInput
								register={register}
								errors={errors}
								name='confirmPassword'
								type='password'
								label='Confirm Password'
								placeholder='Confirm Password'
							/>
						</div>
						<div className='flex gap-5 mt-5'>
							<button type='submit' className='bg-light-green text-white'>
								Sign Up
							</button>
							<button
								type='button'
								onClick={onSignInClicked}
								className='bg-gray text-white'
							>
								Sign In
							</button>
						</div>
					</form>
					<Image
						src={signInBanner}
						alt='Sign in Banner'
						className='flex-1 hidden xl:block'
					/>
				</div>
			</main>
		</MainLayout>
	);
}

export default SignUp;
