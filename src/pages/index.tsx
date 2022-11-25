import Head from 'next/head';

import MainLayout from '@/layouts/main-layout';
import landingHeroImage from '@/assets/images/landing-hero-image.png';
import AppLogo from '@/components/app-logo';
import Image from 'next/image';

export default function Home() {
	return (
		<MainLayout>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='p-5 md:px-14 mb-20'>
				<header className='grid place-items-center text-center space-y-5 my-5'>
					<AppLogo isLarge />
					<h1 className='text-title-lg-4'>
						Moscow clothing brand that doesn&apos;t limit itself to the
						framework of any concepts
					</h1>
				</header>
				<div>
					<Image
						className='w-full h-full object-cover aspect-square lg:aspect-auto'
						src={landingHeroImage}
						alt='Landing Hero Banner'
					/>
				</div>
			</main>
		</MainLayout>
	);
}
