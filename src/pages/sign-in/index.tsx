import * as Yup from 'yup';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import signInBanner from '@/assets/images/sign-in-banner.png';
import FormInput from '@/components/form-elements/form-input';
import { useSignIn } from '@/hooks/use-auth';

type SignInFormFieldsType = {
	email: string;
	password: string;
};

export const signInSchema = Yup.object({
	email: Yup.string().email().required().label('Email'),
	password: Yup.string().required().label('Password'),
});

function SignIn() {
	const router = useRouter();
	const { signIn } = useSignIn();

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<SignInFormFieldsType>({ resolver: yupResolver(signInSchema) });

	const onSignUpClicked = () => router.push('/sign-up');

	const handleFormSubmit = (values: SignInFormFieldsType) => signIn(values);

	return (
		<main className='mb-20 p-5 md:px-14'>
			<header className='mb-5'>
				<div className='flex items-center gap-5'>
					<h1 className='text-caption-2 font-bold'>Home</h1>
					<div className='h-[2px] w-5 bg-secondary' />
					<h1 className='text-caption-2 font-bold'>Sign In</h1>
				</div>
			</header>
			<div className='flex gap-x-20'>
				<form className='flex-1' onSubmit={handleSubmit(handleFormSubmit)}>
					<h1 className='my-10 text-sub-title'>Sign in Account</h1>
					<div className='space-y-4'>
						<FormInput
							register={register}
							name='email'
							label='Email Address'
							placeholder='Email Address'
							errors={errors}
						/>
						<FormInput
							register={register}
							name='password'
							type='password'
							label='Password'
							placeholder='Password'
							errors={errors}
						/>
					</div>
					<div className='mt-5 flex gap-5'>
						<button type='submit' className='bg-light-green text-white'>
							Sign In
						</button>
						<button
							type='button'
							onClick={onSignUpClicked}
							className='bg-gray text-white'
						>
							Sign Up
						</button>
					</div>
				</form>
				<Image
					src={signInBanner}
					alt='Sign in Banner'
					className='hidden flex-1 xl:block'
				/>
			</div>
		</main>
	);
}

export default SignIn;
