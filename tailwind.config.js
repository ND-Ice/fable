/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {
			gridTemplateColumns: {
				'mobile-catalog-list': 'repeat(auto-fill, minmax(157px,1fr))',
				'desktop-catalog-list': 'repeat(auto-fill, minmax(400px, 1fr))',
			},
			colors: {
				primary: '#000000',
				secondary: '#080B13',
				gray: '#3C3737',
				beige: '#F4E1CC',
				border: '#262626',
				indigo: '#9FAED9',
				bolotny: '#56AA91',
				'light-gray': '#707070',
				brown: '#743821',
				ochre: '#C89607',
				'dark-green': '#214133',
				white: '#FFFFFF',
				red: '#FF4B41',
				'light-green': '#00AB26',
				'gray-2': '#F1F1EF',
			},
			fontSize: {
				'title-lg': ['46px', { fontWeight: 500 }],
				'title-lg-1': ['32px', { fontWeight: 500 }],
				'title-lg-2': ['28px', { fontWeight: 500 }],
				'title-lg-3': ['24px', { fontWeight: 500 }],
				'title-lg-4': ['24px', { fontWeight: 400 }],
				title: ['24px', { fontWeight: 500 }],
				'sub-title': ['20px', { fontWeight: 500 }],
				'sub-title-1': ['20px', { fontWeight: 400 }],
				'foot-note': ['18px', { fontWeight: 500 }],
				'foot-note-1': ['18px', { fontWeight: 400 }],
				'sub-foot-note': ['16px', { fontWeight: 400 }],
				'sub-foot-note-1': ['16px', { fontWeight: 500 }],
				headline: ['15px', { fontWeight: 500 }],
				body: ['15px', { fontWeight: 300 }],
				'body-1': ['14px', { fontWeight: 300 }],
				'body-2': ['14px', { fontWeight: 500 }],
				caption: '13px',
				'caption-1': ['13px', { fontWeight: 500 }],
				'caption-2': ['12px', { fontWeight: 400 }],
				'caption-3': ['10px', { fontWeight: 400 }],
			},
		},
	},
	plugins: [],
};
