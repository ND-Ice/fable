import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';

const myFont = localFont({
	src: [
		{ path: '../assets/fonts/main-font.ttf', weight: '400' },
		{ path: '../assets/fonts/main-font-bold.ttf', weight: '500' },
	],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={myFont.className}>
			<Component {...pageProps} />
		</main>
	);
}
