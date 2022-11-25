import React from 'react';
import NavBottomLink from './nav-bottom-link';

function NavBottom() {
	return (
		<nav className='grid grid-cols-3 gap-x-5'>
			<div className='p-2 space-y-2 md:p-0'>
				<NavBottomLink text='Brand' path='/' />
				<NavBottomLink text='Campaign' path='/' />
				<NavBottomLink text='Clothing Care' path='/' />
			</div>
			<div className='p-2 space-y-2 md:p-0'>
				<NavBottomLink text='Guarantee' path='/' />
				<NavBottomLink text='Store' path='/' />
				<NavBottomLink text='Deliver & Returns' path='/' />
			</div>
			<div className='p-2 space-y-2 justify-self-end md:p-0'>
				<NavBottomLink text='Telegram' path='/' />
				<NavBottomLink text='Instagram' path='/' />
			</div>
		</nav>
	);
}

export default NavBottom;
