import Image from 'next/image';
import { useRouter } from 'next/router';

import signInBanner from '@/assets/images/sign-in-banner.png';
import FormInput from '@/components/form-elements/form-input';
import MainLayout from '@/layouts/main-layout';

function SignUp() {
	const router = useRouter();

	const onSignInClicked = () => router.push('/sign-in');

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
					<div className='flex-1'>
						<h1 className='text-sub-title my-10'>Sign in Account</h1>
						<div className='space-y-4'>
							<FormInput
								name='Email'
								label='Email Address'
								placeholder='Email Address'
							/>
							<FormInput
								name='Password'
								type='password'
								label='Password'
								placeholder='Password'
							/>
							<FormInput
								name='confirmPassword'
								type='password'
								label='Confirm Password'
								placeholder='Confirm Password'
							/>
						</div>
						<div className='flex gap-5 mt-5'>
							<button className='bg-light-green text-white'>Sign Up</button>
							<button onClick={onSignInClicked} className='bg-gray text-white'>
								Sign In
							</button>
						</div>
					</div>
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
