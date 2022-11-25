import AppLogo from '@/components/app-logo';
import Link from 'next/link';
import React from 'react';
import NavLink from './nav-link';

function Header() {
	return (
		<header className='sticky top-0 bg-white z-50'>
			<nav className='flex justify-between gap-5 p-5 md:px-14'>
				<AppLogo />
				<div className='hidden md:block space-x-5'>
					<NavLink text='Collections' path='/collections' />
					<NavLink text='Sale' path='/sale' />
				</div>
				<div className='space-x-5'>
					<NavLink text='Items' path='/items-bag' />
					<NavLink text='Profile' path='/profile' />
				</div>
			</nav>
		</header>
	);
}

export default Header;
