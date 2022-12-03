import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { Toaster } from 'react-hot-toast';
import localFont from '@next/font/local';

import '../styles/globals.css';

import CartProvider from '@/context/CartProvider';
import MainLayout from '@/layouts/main-layout';

const myFont = localFont({
	src: [
		{ path: '../assets/fonts/main-font.ttf', weight: '400' },
		{ path: '../assets/fonts/main-font-bold.ttf', weight: '500' },
	],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return getLayout(
		<CartProvider>
			<MainLayout>
				<main className={myFont.className}>
					<Component {...pageProps} />
					<Toaster position='bottom-right' />
				</main>
			</MainLayout>
		</CartProvider>
	);
}
